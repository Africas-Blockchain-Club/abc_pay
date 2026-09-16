# Reconciliation Module (Ledger vs. Actual Asset Movement)

## Responsibility
The Reconciliation module is the core financial control safeguarding against margin erosion.
It verifies that what the internal ledger claims moved actually matches the physical on-chain and exchange custody asset movements.

## Key Features
- **Individual Transaction-Level Matching**: Matches ledger entries to custody transfers by reference / transaction hash (`txHash`), identifying exact leaking transactions rather than aggregate-only differences.
- **Configurable Discrepancy Threshold**: Computes `delta = ledgerAmount - actualAmount`. Flags `|delta| > RECONCILIATION_THRESHOLD` (default: 0.01) as `amount_mismatch`.
- **Orphan Detection**:
  - `ledger_orphan`: An internal ledger entry without matching on-chain asset movement.
  - `onchain_orphan`: An on-chain asset movement with no corresponding ledger entry.
- **Alert Dispatch**: Triggers alerts (`alertOnDiscrepancy`) for on-call notification (Slack/PagerDuty/Email).
- **Scheduled Worker**: `runReconciliation(windowStart, windowEnd)` callable periodically or per-settlement-batch.

## Read/Write Boundaries
- **Database Reads**:
  - `LedgerEntry`: READ-ONLY. Never modifies internal ledger records.
  - `CustodyTransfer`: READ-ONLY. Never alters custody/blockchain transfer records.
- **Database Writes**:
  - `ReconciliationRun`: Creates run history and summary records.
  - `ReconciliationDiscrepancy`: Stores specific discrepancy line items.

