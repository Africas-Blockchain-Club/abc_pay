import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma.js";
import { env } from "../../config/env.js";

export type DiscrepancyType = "amount_mismatch" | "ledger_orphan" | "onchain_orphan";

export interface DiscrepancyItem {
  ledgerEntryId?: string;
  custodyTransferId?: string;
  type: DiscrepancyType;
  delta: Prisma.Decimal;
}

export interface ReconciliationResult {
  runId: string;
  windowStart: Date;
  windowEnd: Date;
  ledgerTotal: Prisma.Decimal;
  onChainTotal: Prisma.Decimal;
  discrepancyTotal: Prisma.Decimal;
  status: "completed" | "discrepancies_found";
  discrepancies: DiscrepancyItem[];
}

export async function alertOnDiscrepancy(
  runId: string,
  discrepancies: DiscrepancyItem[]
): Promise<void> {
  console.warn(
    `[ALERT: Reconciliation Discrepancy] Run ID: ${runId} flagged ${discrepancies.length} discrepancy item(s).`,
    JSON.stringify(discrepancies, null, 2)
  );
}

export class ReconciliationService {
  private readonly threshold: number;

  constructor(threshold?: number) {
    this.threshold = threshold ?? env.reconciliationThreshold ?? 0.01;
  }

  /**
   * Pure matching logic comparing ledger entries and custody transfers.
   * Can be tested in isolation with seed fixtures.
   */
  matchRecords(
    ledgerEntries: Array<{ id: string; amount: Prisma.Decimal; reference: string | null }>,
    custodyTransfers: Array<{ id: string; amount: Prisma.Decimal; txHash: string | null; reference: string | null }>
  ): {
    ledgerTotal: Prisma.Decimal;
    onChainTotal: Prisma.Decimal;
    discrepancyTotal: Prisma.Decimal;
    discrepancies: DiscrepancyItem[];
  } {
    let ledgerTotal = new Prisma.Decimal(0);
    let onChainTotal = new Prisma.Decimal(0);
    let discrepancyTotal = new Prisma.Decimal(0);
    const discrepancies: DiscrepancyItem[] = [];

    // Sum ledger total
    for (const entry of ledgerEntries) {
      ledgerTotal = ledgerTotal.plus(entry.amount);
    }

    // Sum on-chain total
    for (const transfer of custodyTransfers) {
      onChainTotal = onChainTotal.plus(transfer.amount);
    }

    const matchedCustodyIds = new Set<string>();

    for (const entry of ledgerEntries) {
      const ref = entry.reference?.trim();

      // Find match by reference or txHash
      const match = ref
        ? custodyTransfers.find(
            (c) =>
              !matchedCustodyIds.has(c.id) &&
              ((c.reference && c.reference.trim() === ref) ||
                (c.txHash && c.txHash.trim() === ref))
          )
        : undefined;

      if (match) {
        matchedCustodyIds.add(match.id);
        const delta = entry.amount.minus(match.amount);
        const absDelta = delta.abs();

        if (absDelta.greaterThan(this.threshold)) {
          discrepancyTotal = discrepancyTotal.plus(absDelta);
          discrepancies.push({
            ledgerEntryId: entry.id,
            custodyTransferId: match.id,
            type: "amount_mismatch",
            delta,
          });
        }
      } else {
        // Ledger orphan: ledger entry has no corresponding custody movement
        discrepancyTotal = discrepancyTotal.plus(entry.amount.abs());
        discrepancies.push({
          ledgerEntryId: entry.id,
          type: "ledger_orphan",
          delta: entry.amount,
        });
      }
    }

    // Identify on-chain orphans: custody transfers with no matching ledger entry
    for (const transfer of custodyTransfers) {
      if (!matchedCustodyIds.has(transfer.id)) {
        discrepancyTotal = discrepancyTotal.plus(transfer.amount.abs());
        discrepancies.push({
          custodyTransferId: transfer.id,
          type: "onchain_orphan",
          delta: transfer.amount.negated(),
        });
      }
    }

    return {
      ledgerTotal,
      onChainTotal,
      discrepancyTotal,
      discrepancies,
    };
  }

  /**
   * Reconciles a time window against LedgerEntry and CustodyTransfer tables.
   * READ ONLY on ledger and custody tables. Writes only to ReconciliationRun and ReconciliationDiscrepancy.
   */
  async reconcileWindow(windowStart: Date, windowEnd: Date): Promise<ReconciliationResult> {
    const [ledgerEntries, custodyTransfers] = await Promise.all([
      prisma.ledgerEntry.findMany({
        where: {
          createdAt: {
            gte: windowStart,
            lte: windowEnd,
          },
        },
        select: {
          id: true,
          amount: true,
          reference: true,
        },
      }),
      prisma.custodyTransfer.findMany({
        where: {
          createdAt: {
            gte: windowStart,
            lte: windowEnd,
          },
        },
        select: {
          id: true,
          amount: true,
          txHash: true,
          reference: true,
        },
      }),
    ]);

    const { ledgerTotal, onChainTotal, discrepancyTotal, discrepancies } = this.matchRecords(
      ledgerEntries,
      custodyTransfers
    );

    const status = discrepancies.length > 0 ? "discrepancies_found" : "completed";

    // Write results to database
    const run = await prisma.reconciliationRun.create({
      data: {
        windowStart,
        windowEnd,
        ledgerTotal,
        onChainTotal,
        discrepancyTotal,
        status,
        discrepancies: {
          create: discrepancies.map((d) => ({
            ledgerEntryId: d.ledgerEntryId ?? null,
            custodyTransferId: d.custodyTransferId ?? null,
            type: d.type,
            delta: d.delta,
          })),
        },
      },
      include: {
        discrepancies: true,
      },
    });

    if (discrepancies.length > 0) {
      await alertOnDiscrepancy(run.id, discrepancies);
    }

    return {
      runId: run.id,
      windowStart,
      windowEnd,
      ledgerTotal,
      onChainTotal,
      discrepancyTotal,
      status,
      discrepancies,
    };
  }
}

export const reconciliationService = new ReconciliationService();

