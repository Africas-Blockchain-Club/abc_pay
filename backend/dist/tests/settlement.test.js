import { describe, expect, it, vi, beforeEach } from "vitest";
import { Prisma } from "@prisma/client";
import { SettlementService } from "../src/modules/settlement/settlement.service.js";
import { runSettlementBatch, } from "../src/modules/settlement/settlement.worker.js";
import { prisma } from "../src/lib/prisma.js";
describe("Settlement Module", () => {
    const settlementService = new SettlementService();
    beforeEach(() => {
        vi.restoreAllMocks();
    });
    describe("Fee-netting calculation (settlement.service.ts)", () => {
        it("aggregates merchantNetZar directly from payments without recomputing fees", () => {
            const mockPayments = [
                {
                    id: "p1",
                    merchantId: "merchant_A",
                    amountZar: new Prisma.Decimal(100.0),
                    feeZar: new Prisma.Decimal(3.5),
                    merchantNetZar: new Prisma.Decimal(96.5), // Dev 2's precomputed net
                },
                {
                    id: "p2",
                    merchantId: "merchant_A",
                    amountZar: new Prisma.Decimal(200.0),
                    feeZar: new Prisma.Decimal(7.0),
                    merchantNetZar: new Prisma.Decimal(193.0),
                },
                {
                    id: "p3",
                    merchantId: "merchant_B",
                    amountZar: new Prisma.Decimal(50.0),
                    feeZar: new Prisma.Decimal(2.0),
                    merchantNetZar: new Prisma.Decimal(48.0),
                },
            ];
            const payouts = settlementService.calculateMerchantPayouts(mockPayments);
            expect(payouts).toHaveLength(2);
            const merchantA = payouts.find((p) => p.merchantId === "merchant_A");
            expect(merchantA).toBeDefined();
            expect(merchantA?.totalNetZar.toNumber()).toBe(289.5);
            expect(merchantA?.paymentIds).toEqual(["p1", "p2"]);
            const merchantB = payouts.find((p) => p.merchantId === "merchant_B");
            expect(merchantB).toBeDefined();
            expect(merchantB?.totalNetZar.toNumber()).toBe(48.0);
            expect(merchantB?.paymentIds).toEqual(["p3"]);
        });
        it("falls back cleanly to amountZar - feeZar when merchantNetZar is null", () => {
            const mockPayments = [
                {
                    id: "p4",
                    merchantId: "merchant_C",
                    amountZar: new Prisma.Decimal(150.0),
                    feeZar: new Prisma.Decimal(5.0),
                    merchantNetZar: null,
                },
            ];
            const payouts = settlementService.calculateMerchantPayouts(mockPayments);
            expect(payouts).toHaveLength(1);
            expect(payouts[0].totalNetZar.toNumber()).toBe(145.0);
        });
    });
    describe("Settlement Worker (settlement.worker.ts)", () => {
        it("processes pending settlements through BankPayoutProvider and records bankReference", async () => {
            const pendingSettlements = [
                {
                    id: "settle_1",
                    merchantId: "merchant_A",
                    amount: new Prisma.Decimal(289.5),
                    currency: "ZAR",
                    status: "pending",
                },
                {
                    id: "settle_2",
                    merchantId: "merchant_B",
                    amount: new Prisma.Decimal(48.0),
                    currency: "ZAR",
                    status: "pending",
                },
            ];
            vi.spyOn(prisma.settlement, "findMany").mockResolvedValue(pendingSettlements);
            const updateSpy = vi.spyOn(prisma.settlement, "update").mockResolvedValue({});
            const mockProvider = {
                payout: vi.fn().mockImplementation(async ({ settlementId }) => ({
                    bankReference: `BANK_REF_${settlementId}`,
                    status: "success",
                })),
            };
            const result = await runSettlementBatch(mockProvider);
            expect(result.totalProcessed).toBe(2);
            expect(result.settled).toBe(2);
            expect(result.failed).toBe(0);
            expect(mockProvider.payout).toHaveBeenCalledTimes(2);
            expect(updateSpy).toHaveBeenCalledWith(expect.objectContaining({
                where: { id: "settle_1" },
                data: expect.objectContaining({
                    status: "settled",
                    bankReference: "BANK_REF_settle_1",
                }),
            }));
        });
    });
});
