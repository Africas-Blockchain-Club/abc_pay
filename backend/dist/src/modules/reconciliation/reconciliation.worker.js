import { reconciliationService } from "./reconciliation.service.js";
/**
 * Scheduled/queued worker executing a reconciliation window run.
 * Callable on schedule (e.g. every N minutes) or triggered per settlement batch.
 */
export async function runReconciliation(windowStart, windowEnd) {
    console.log(`[Reconciliation Worker] Starting run for window ${windowStart.toISOString()} -> ${windowEnd.toISOString()}`);
    const result = await reconciliationService.reconcileWindow(windowStart, windowEnd);
    console.log(`[Reconciliation Worker] Finished run ${result.runId}. Status: ${result.status}, Discrepancies: ${result.discrepancies.length}`);
    return result;
}
