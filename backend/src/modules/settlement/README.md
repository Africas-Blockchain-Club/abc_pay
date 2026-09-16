# Settlement Module (Merchant Bank Settlement)

## Responsibility
The Settlement module aggregates approved and completed payment transactions for merchants and coordinates payouts through banking rails.

## Components
- `settlement.service.ts`:
  - Scans settled/completed payments from `modules/payments`.
  - Calculates merchant payout totals net of fees by directly reading Dev 2's `merchantNetZar` / fee fields without recomputing fee logic.
  - Creates pending `Settlement` records.
- `settlement.worker.ts`:
  - Provides `runSettlementBatch()`, which can be scheduled via BullMQ, cron, or invoked per batch.
  - Invokes `BankPayoutProvider.payout()` interface to disburse funds.
  - Updates settlement status to `settled` with bank confirmation references.

## Read/Write Boundaries
- **Database Reads**:
  - `Payment`: READ-ONLY. Reads `merchantId`, `status`, `amountZar`, `feeZar`, `merchantNetZar`. Never updates or deletes payment records.
  - `Merchant`: READ-ONLY.
- **Database Writes**:
  - `Settlement`: Full ownership. Creates and updates settlement batches, statuses, and payout references.
- **External Interfaces**:
  - `BankPayoutProvider`: Abstract interface for bank API payout dispatch (e.g. Stitch, BankServ, Absa/Standard Bank).

