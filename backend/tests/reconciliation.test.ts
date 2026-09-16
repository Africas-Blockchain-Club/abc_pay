import { describe, expect, it, vi, beforeEach } from "vitest";
import { Prisma } from "@prisma/client";
import {
  ReconciliationService,
  alertOnDiscrepancy,
} from "../src/modules/reconciliation/reconciliation.service.js";
import { runReconciliation } from "../src/modules/reconciliation/reconciliation.worker.js";
import { prisma } from "../src/lib/prisma.js";

describe("Reconciliation Module", () => {
  const service = new ReconciliationService(0.01); // 0.01 threshold

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("Record Matching Logic (matchRecords)", () => {
    it("handles matching transactions with zero delta without flagging discrepancies", () => {
      const ledgerEntries = [
        {
          id: "ledger_1",
          amount: new Prisma.Decimal("100.50"),
          reference: "tx_ref_001",
        },
      ];

      const custodyTransfers = [
        {
          id: "custody_1",
          amount: new Prisma.Decimal("100.50"),
          txHash: "tx_ref_001",
          reference: "tx_ref_001",
        },
      ];

      const result = service.matchRecords(ledgerEntries, custodyTransfers);

      expect(result.discrepancies).toHaveLength(0);
      expect(result.ledgerTotal.toString()).toBe("100.5");
      expect(result.onChainTotal.toString()).toBe("100.5");
      expect(result.discrepancyTotal.toNumber()).toBe(0);
    });

    it("flags an amount_mismatch when delta exceeds the 0.01 threshold", () => {
      const ledgerEntries = [
        {
          id: "ledger_2",
          amount: new Prisma.Decimal("50.00"),
          reference: "tx_ref_002",
        },
      ];

      // Margin erosion: actual custody moved only 45.00
      const custodyTransfers = [
        {
          id: "custody_2",
          amount: new Prisma.Decimal("45.00"),
          txHash: "tx_ref_002",
          reference: "tx_ref_002",
        },
      ];

      const result = service.matchRecords(ledgerEntries, custodyTransfers);

      expect(result.discrepancies).toHaveLength(1);
      const disc = result.discrepancies[0];
      expect(disc.type).toBe("amount_mismatch");
      expect(disc.ledgerEntryId).toBe("ledger_2");
      expect(disc.custodyTransferId).toBe("custody_2");
      expect(disc.delta.toString()).toBe("5");
      expect(result.discrepancyTotal.toString()).toBe("5");
    });

    it("ignores small rounding differences within threshold (<= 0.01)", () => {
      const ledgerEntries = [
        {
          id: "ledger_3",
          amount: new Prisma.Decimal("10.005"),
          reference: "tx_ref_003",
        },
      ];

      const custodyTransfers = [
        {
          id: "custody_3",
          amount: new Prisma.Decimal("10.000"),
          txHash: "tx_ref_003",
          reference: "tx_ref_003",
        },
      ];

      const result = service.matchRecords(ledgerEntries, custodyTransfers);
      expect(result.discrepancies).toHaveLength(0);
    });

    it("flags ledger_orphan when an entry has no matching custody transfer", () => {
      const ledgerEntries = [
        {
          id: "ledger_orphan_1",
          amount: new Prisma.Decimal("75.00"),
          reference: "unmatched_ledger_ref",
        },
      ];

      const custodyTransfers: any[] = [];

      const result = service.matchRecords(ledgerEntries, custodyTransfers);

      expect(result.discrepancies).toHaveLength(1);
      expect(result.discrepancies[0].type).toBe("ledger_orphan");
      expect(result.discrepancies[0].ledgerEntryId).toBe("ledger_orphan_1");
      expect(result.discrepancies[0].delta.toString()).toBe("75");
    });

    it("flags onchain_orphan when a custody movement has no matching ledger entry", () => {
      const ledgerEntries: any[] = [];

      const custodyTransfers = [
        {
          id: "custody_orphan_1",
          amount: new Prisma.Decimal("120.00"),
          txHash: "unmatched_tx_hash_999",
          reference: "unmatched_tx_hash_999",
        },
      ];

      const result = service.matchRecords(ledgerEntries, custodyTransfers);

      expect(result.discrepancies).toHaveLength(1);
      expect(result.discrepancies[0].type).toBe("onchain_orphan");
      expect(result.discrepancies[0].custodyTransferId).toBe("custody_orphan_1");
      expect(result.discrepancies[0].delta.toString()).toBe("-120");
    });
  });

  describe("End-to-End runReconciliation with seeded fixture data", () => {
    it("creates ReconciliationRun and ReconciliationDiscrepancy records on fixture set", async () => {
      const windowStart = new Date("2026-09-01T00:00:00Z");
      const windowEnd = new Date("2026-09-01T23:59:59Z");

      // Seeded fixtures: 1 matching, 1 mismatched, 1 ledger orphan, 1 onchain orphan
      const fixtureLedger = [
        { id: "L1", amount: new Prisma.Decimal("100.00"), reference: "REF_MATCH" },
        { id: "L2", amount: new Prisma.Decimal("200.00"), reference: "REF_MISMATCH" },
        { id: "L3", amount: new Prisma.Decimal("50.00"), reference: "REF_ORPHAN_LEDGER" },
      ];

      const fixtureCustody = [
        { id: "C1", amount: new Prisma.Decimal("100.00"), txHash: "REF_MATCH", reference: "REF_MATCH" },
        { id: "C2", amount: new Prisma.Decimal("180.00"), txHash: "REF_MISMATCH", reference: "REF_MISMATCH" },
        { id: "C3", amount: new Prisma.Decimal("30.00"), txHash: "REF_ORPHAN_ONCHAIN", reference: "REF_ORPHAN_ONCHAIN" },
      ];

      vi.spyOn(prisma.ledgerEntry, "findMany").mockResolvedValue(fixtureLedger as any);
      vi.spyOn(prisma.custodyTransfer, "findMany").mockResolvedValue(fixtureCustody as any);

      const createRunSpy = vi.spyOn(prisma.reconciliationRun as any, "create").mockImplementation(async ({ data }: any) => {
        return {
          id: "run_uuid_123",
          ...data,
          discrepancies: data.discrepancies.create,
        };
      });

      const result = await runReconciliation(windowStart, windowEnd);

      expect(result.runId).toBe("run_uuid_123");
      expect(result.status).toBe("discrepancies_found");
      expect(result.discrepancies).toHaveLength(3); // 1 mismatch + 1 ledger orphan + 1 onchain orphan

      const mismatch = result.discrepancies.find((d) => d.type === "amount_mismatch");
      expect(mismatch).toBeDefined();
      expect(mismatch?.ledgerEntryId).toBe("L2");
      expect(mismatch?.custodyTransferId).toBe("C2");
      expect(mismatch?.delta.toString()).toBe("20");

      const ledgerOrphan = result.discrepancies.find((d) => d.type === "ledger_orphan");
      expect(ledgerOrphan).toBeDefined();
      expect(ledgerOrphan?.ledgerEntryId).toBe("L3");

      const onchainOrphan = result.discrepancies.find((d) => d.type === "onchain_orphan");
      expect(onchainOrphan).toBeDefined();
      expect(onchainOrphan?.custodyTransferId).toBe("C3");

      expect(createRunSpy).toHaveBeenCalledTimes(1);
    });
  });
});
