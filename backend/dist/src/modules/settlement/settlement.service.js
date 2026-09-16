import { prisma } from "../../lib/prisma.js";
export class SettlementService {
    /**
     * Calculates net merchant payout amounts from approved/completed payments.
     * Strictly reads fee/reserved-amount fields (merchantNetZar) per Dev 2's ledger logic.
     * Does NOT recompute or alter fee calculations.
     */
    calculateMerchantPayouts(payments) {
        const merchantMap = new Map();
        for (const payment of payments) {
            if (!payment.merchantId)
                continue;
            // Read fee-netted amount directly from Dev 2's payment record
            const netAmount = payment.merchantNetZar ?? payment.amountZar.minus(payment.feeZar);
            if (netAmount.isNegative() || netAmount.isZero())
                continue;
            const existing = merchantMap.get(payment.merchantId);
            if (existing) {
                existing.total = existing.total.plus(netAmount);
                existing.paymentIds.push(payment.id);
            }
            else {
                merchantMap.set(payment.merchantId, {
                    total: netAmount,
                    paymentIds: [payment.id],
                });
            }
        }
        return Array.from(merchantMap.entries()).map(([merchantId, data]) => ({
            merchantId,
            totalNetZar: data.total,
            paymentIds: data.paymentIds,
        }));
    }
    /**
     * Fetches completed payments that have not yet been settled and creates pending Settlement records.
     */
    async createPendingSettlements(filter) {
        // Read-only query on Payment
        const completedPayments = await prisma.payment.findMany({
            where: {
                status: "COMPLETED",
                merchantId: filter?.merchantId ? filter.merchantId : { not: null },
                createdAt: filter?.beforeDate ? { lte: filter.beforeDate } : undefined,
            },
            select: {
                id: true,
                merchantId: true,
                amountZar: true,
                feeZar: true,
                merchantNetZar: true,
            },
        });
        const payouts = this.calculateMerchantPayouts(completedPayments);
        const createdSettlements = [];
        for (const payout of payouts) {
            const settlement = await prisma.settlement.create({
                data: {
                    merchantId: payout.merchantId,
                    amount: payout.totalNetZar,
                    currency: "ZAR",
                    status: "pending",
                },
            });
            createdSettlements.push(settlement);
        }
        return createdSettlements;
    }
}
export const settlementService = new SettlementService();
