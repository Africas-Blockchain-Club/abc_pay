import { prisma } from "../../lib/prisma.js";
export class MockBankPayoutProvider {
    async payout(input) {
        // Stub call simulating bank payout provider integration
        const randomHex = Math.random().toString(16).substring(2, 10).toUpperCase();
        return {
            bankReference: `BANK_PAYOUT_${input.settlementId.slice(0, 8)}_${randomHex}`,
            status: "success",
        };
    }
}
export const defaultBankPayoutProvider = new MockBankPayoutProvider();
/**
 * Scheduled/queued job processing pending settlements and executing payouts via BankPayoutProvider.
 * Stub with a clean interface so it can be wired into BullMQ, a cron runner, or manual triggers.
 */
export async function runSettlementBatch(provider = defaultBankPayoutProvider) {
    const pendingSettlements = await prisma.settlement.findMany({
        where: { status: "pending" },
        orderBy: { createdAt: "asc" },
    });
    const result = {
        totalProcessed: pendingSettlements.length,
        settled: 0,
        failed: 0,
        settlementIds: [],
    };
    for (const settlement of pendingSettlements) {
        try {
            const payoutResult = await provider.payout({
                settlementId: settlement.id,
                merchantId: settlement.merchantId,
                amountZar: settlement.amount.toString(),
                currency: settlement.currency,
            });
            if (payoutResult.status === "success") {
                await prisma.settlement.update({
                    where: { id: settlement.id },
                    data: {
                        status: "settled",
                        bankReference: payoutResult.bankReference,
                        settledAt: new Date(),
                    },
                });
                result.settled++;
            }
            else {
                await prisma.settlement.update({
                    where: { id: settlement.id },
                    data: {
                        status: "failed",
                    },
                });
                result.failed++;
            }
            result.settlementIds.push(settlement.id);
        }
        catch (error) {
            console.error(`Failed to settle payout for settlement ${settlement.id}:`, error);
            await prisma.settlement.update({
                where: { id: settlement.id },
                data: { status: "failed" },
            }).catch(() => undefined);
            result.failed++;
        }
    }
    return result;
}
