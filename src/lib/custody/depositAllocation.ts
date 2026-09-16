/**
 * src/lib/custody/depositAllocation.ts
 *
 * Ties together:
 *   - CustodyCounter (DB-level atomic index counter)
 *   - wallet.ts (pure HD derivation)
 *   - DepositAddress (persisted invoice -> address mapping)
 *
 * This is the ONLY code path that should ever create a DepositAddress.
 * Do not call deriveAddressAtIndex / allocateDepositAddress directly from
 * an API route — always go through allocateNewDepositAddress here, so the
 * "never reuse an index" guarantee is enforced in exactly one place.
 */

import { Prisma, PrismaClient, ChainNetwork } from "@prisma/client";
import { allocateDepositAddress, verifyStoredAddress } from "./wallet";

export class DepositAllocationError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(message);
    this.name = "DepositAllocationError";
  }
}

export interface AllocatedDeposit {
  id: string;
  invoiceId: string;
  address: string;
  derivationIndex: number;
  derivationPath: string;
  network: ChainNetwork;
  createdAt: Date;
}

/**
 * Atomically reserves the next derivation index and persists the
 * resulting deposit address for an invoice, in a single serializable
 * transaction.
 *
 * Concurrency approach:
 *   We use Postgres row-level locking via `SELECT ... FOR UPDATE`
 *   (Prisma raw query) on the single CustodyCounter row, inside a
 *   transaction. This serializes concurrent allocation requests at the
 *   DB level — two requests racing for "the next index" will queue on
 *   the row lock rather than both reading the same value.
 *
 *   We do NOT rely on optimistic retry-on-conflict here, because a
 *   custody address collision is a security incident, not a UX bug to
 *   paper over with a retry loop. Pessimistic locking is deliberately
 *   the more conservative, boring choice.
 *
 * Idempotency:
 *   invoiceId has a unique constraint on DepositAddress. If this
 *   function is called twice for the same invoice (e.g. a retried
 *   request), the second call detects the existing row and returns it
 *   rather than allocating a second address for the same invoice.
 */
export async function allocateNewDepositAddress(
  prisma: PrismaClient,
  invoiceId: string,
  network: ChainNetwork,
): Promise<AllocatedDeposit> {
  if (!invoiceId || typeof invoiceId !== "string") {
    throw new DepositAllocationError(
      `invoiceId must be a non-empty string, got: ${JSON.stringify(invoiceId)}`,
    );
  }

  // Idempotency check OUTSIDE the transaction first — cheap fast path,
  // avoids taking the counter lock at all for the common "already
  // allocated" case (e.g. a customer refreshing the payment page).
  const existing = await prisma.depositAddress.findUnique({
    where: { invoiceId },
  });
  if (existing) {
    return existing;
  }

  try {
    return await prisma.$transaction(
      async (tx) => {
        // Lock the single counter row for the duration of this
        // transaction. Any concurrent call to this function blocks here
        // until this transaction commits or rolls back.
        const rows = await tx.$queryRaw<{ nextIndex: number }[]>(
          Prisma.sql`SELECT "nextIndex" FROM "CustodyCounter" WHERE id = 1 FOR UPDATE`,
        );

        if (rows.length === 0) {
          throw new DepositAllocationError(
            "CustodyCounter row (id=1) does not exist. Seed it once with " +
              "nextIndex=0 before allocating any deposit addresses.",
          );
        }

        const indexToUse = rows[0].nextIndex;

        // Derive the address BEFORE incrementing the counter or writing
        // the row, so a derivation failure (bad master key config, etc.)
        // never advances the counter and never partially persists.
        const derived = allocateDepositAddress(indexToUse, invoiceId);

        // Sanity check: re-derive and compare before trusting our own
        // output. Cheap, and catches a whole class of subtle bugs
        // (e.g. wallet.ts changing derivation logic) before they reach
        // the DB.
        const selfCheck = verifyStoredAddress(derived.address, indexToUse);
        if (!selfCheck) {
          throw new DepositAllocationError(
            `Internal consistency check failed: derived address ${derived.address} ` +
              `did not re-verify at index ${indexToUse}. Refusing to persist.`,
          );
        }

        await tx.custodyCounter.update({
          where: { id: 1 },
          data: { nextIndex: indexToUse + 1 },
        });

        const created = await tx.depositAddress.create({
          data: {
            invoiceId,
            address: derived.address,
            derivationIndex: derived.derivationIndex,
            derivationPath: derived.derivationPath,
            network,
          },
        });

        return created;
      },
      {
        // Serializable isolation as defense-in-depth on top of the row
        // lock — belt and braces for the piece of the system where a
        // mistake means money going to an address nobody can recover.
        isolation: Prisma.TransactionIsolationLevel.Serializable,
      },
    );
  } catch (err) {
    // Unique constraint race: two requests both passed the pre-check
    // above before either committed. Treat as idempotent success rather
    // than surfacing a 500 to the caller.
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002" &&
      err.meta?.target &&
      String(err.meta.target).includes("invoiceId")
    ) {
      const winner = await prisma.depositAddress.findUnique({
        where: { invoiceId },
      });
      if (winner) return winner;
    }

    if (err instanceof DepositAllocationError) throw err;

    throw new DepositAllocationError(
      `Failed to allocate deposit address for invoice ${invoiceId}`,
      err,
    );
  }
}

/**
 * One-time setup helper — run this once (e.g. in a seed script) before
 * the first allocation, to create the CustodyCounter row. Safe to call
 * multiple times; no-ops if the row already exists.
 */
export async function ensureCustodyCounterSeeded(
  prisma: PrismaClient,
): Promise<void> {
  await prisma.custodyCounter.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, nextIndex: 0 },
  });
}