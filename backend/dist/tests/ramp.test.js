import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { MemoryStore } from "../src/stores/memory.store.js";
import { isValidSolanaAddress, RampService } from "../src/services/ramp.service.js";
import { ValrClient } from "../src/integrations/exchanges/valr.client.js";
const VALID_SOLANA_WALLET = "7nxp59B99iV7YpHmC48o5hK41UoFjA3Y9D6M1kP1h9d2";
const INVALID_SOLANA_WALLET = "0x71C8360537ab1E23EC2994eB2670e3Ce79fF5128";
describe("Solana Address Validation", () => {
    it("accepts valid Base58 Solana wallet addresses", () => {
        expect(isValidSolanaAddress(VALID_SOLANA_WALLET)).toBe(true);
        expect(isValidSolanaAddress("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")).toBe(true);
    });
    it("rejects non-Base58 or invalid length addresses", () => {
        expect(isValidSolanaAddress(INVALID_SOLANA_WALLET)).toBe(false);
        expect(isValidSolanaAddress("short")).toBe(false);
        expect(isValidSolanaAddress("00000000000000000000000000000000000000000000000000")).toBe(false);
    });
});
describe("USDC <-> ZAR Ramp API", () => {
    const store = new MemoryStore();
    const valrClient = new ValrClient();
    const rampService = new RampService(store, valrClient);
    const app = createApp(store, rampService);
    const agent = request(app);
    describe("POST /api/v1/ramp/quote", () => {
        it("returns real-time quote for ZAR -> USDC with 2% markup", async () => {
            const response = await agent.post("/api/v1/ramp/quote").send({
                fromAsset: "ZAR",
                toAsset: "USDC",
                amount: "1000.00",
            });
            expect(response.status).toBe(200);
            expect(response.body.pair).toBe("USDCZAR");
            expect(response.body.side).toBe("BUY");
            expect(response.body.network).toBe("SOL");
            expect(response.body.sourceAsset).toBe("ZAR");
            expect(response.body.destinationAsset).toBe("USDC");
            expect(response.body.platformFeeRate).toBe("0.0200");
            expect(response.body.platformFeeZar).toBe("20.00");
            expect(parseFloat(response.body.destinationAmount)).toBeGreaterThan(0);
            expect(response.body.expiresAt).toBeDefined();
        });
        it("returns real-time quote for USDC -> ZAR with 2% markup", async () => {
            const response = await agent.post("/api/v1/ramp/quote").send({
                fromAsset: "USDC",
                toAsset: "ZAR",
                amount: "50.00",
            });
            expect(response.status).toBe(200);
            expect(response.body.pair).toBe("USDCZAR");
            expect(response.body.side).toBe("SELL");
            expect(response.body.network).toBe("SOL");
            expect(response.body.sourceAsset).toBe("USDC");
            expect(response.body.destinationAsset).toBe("ZAR");
            expect(response.body.platformFeeRate).toBe("0.0200");
            expect(parseFloat(response.body.destinationAmount)).toBeGreaterThan(0);
        });
        it("rejects invalid quotes with identical assets", async () => {
            const response = await agent.post("/api/v1/ramp/quote").send({
                fromAsset: "USDC",
                toAsset: "USDC",
                amount: "100.00",
            });
            expect(response.status).toBe(400);
        });
    });
    describe("POST /api/v1/ramp/onramp", () => {
        it("creates an on-ramp order and returns deposit instructions", async () => {
            const response = await agent.post("/api/v1/ramp/onramp").send({
                amountZar: "500.00",
                destinationSolanaAddress: VALID_SOLANA_WALLET,
            });
            expect(response.status).toBe(201);
            expect(response.body.type).toBe("ONRAMP");
            expect(response.body.status).toBe("PENDING_DEPOSIT");
            expect(response.body.fiatCurrency).toBe("ZAR");
            expect(response.body.cryptoAsset).toBe("USDC");
            expect(response.body.network).toBe("SOL");
            expect(response.body.destinationAddress).toBe(VALID_SOLANA_WALLET);
            expect(response.body.fiatReference).toMatch(/^ABC-VALR-\d{6}$/);
            expect(response.body.depositInstructions).toBeDefined();
            expect(response.body.depositInstructions.paymentReference).toBe(response.body.fiatReference);
        });
        it("rejects on-ramp order with invalid Solana address", async () => {
            const response = await agent.post("/api/v1/ramp/onramp").send({
                amountZar: "500.00",
                destinationSolanaAddress: INVALID_SOLANA_WALLET,
            });
            expect(response.status).toBe(400);
            expect(response.body.message).toContain("Solana");
        });
        it("rejects on-ramp order below minimum amount (R50.00)", async () => {
            const response = await agent.post("/api/v1/ramp/onramp").send({
                amountZar: "20.00",
                destinationSolanaAddress: VALID_SOLANA_WALLET,
            });
            expect(response.status).toBe(400);
            expect(response.body.message).toContain("Minimum");
        });
    });
    describe("POST /api/v1/ramp/offramp", () => {
        it("creates an off-ramp order and returns platform deposit address", async () => {
            const response = await agent.post("/api/v1/ramp/offramp").send({
                amountUsdc: "50.00",
                sourceSolanaAddress: VALID_SOLANA_WALLET,
                bankDetails: {
                    bankName: "First National Bank",
                    accountNumber: "62012345678",
                    branchCode: "250655",
                    accountHolderName: "John Doe",
                },
            });
            expect(response.status).toBe(201);
            expect(response.body.type).toBe("OFFRAMP");
            expect(response.body.status).toBe("PENDING_DEPOSIT");
            expect(response.body.cryptoAsset).toBe("USDC");
            expect(response.body.network).toBe("SOL");
            expect(response.body.cryptoDepositAddress).toBeDefined();
            expect(response.body.bankDetails.bankName).toBe("First National Bank");
            expect(response.body.bankDetails.accountNumber).toBe("******5678");
        });
        it("rejects off-ramp below minimum amount (5.00 USDC)", async () => {
            const response = await agent.post("/api/v1/ramp/offramp").send({
                amountUsdc: "2.00",
                bankDetails: {
                    bankName: "Standard Bank",
                    accountNumber: "051001234",
                    branchCode: "051001",
                    accountHolderName: "Jane Doe",
                },
            });
            expect(response.status).toBe(400);
            expect(response.body.message).toContain("Minimum");
        });
    });
    describe("Order Management & Settlement", () => {
        it("fetches order status by ID and lists orders", async () => {
            const createRes = await agent.post("/api/v1/ramp/onramp").send({
                amountZar: "750.00",
                destinationSolanaAddress: VALID_SOLANA_WALLET,
            });
            const orderId = createRes.body.orderId;
            const getRes = await agent.get(`/api/v1/ramp/orders/${orderId}`);
            expect(getRes.status).toBe(200);
            expect(getRes.body.id).toBe(orderId);
            expect(getRes.body.fiatAmount).toBe("750.00");
            const listRes = await agent.get("/api/v1/ramp/orders");
            expect(listRes.status).toBe(200);
            expect(listRes.body.orders.length).toBeGreaterThan(0);
        });
        it("executes settlement on an order", async () => {
            const createRes = await agent.post("/api/v1/ramp/onramp").send({
                amountZar: "1200.00",
                destinationSolanaAddress: VALID_SOLANA_WALLET,
            });
            const orderId = createRes.body.orderId;
            const settleRes = await agent.post(`/api/v1/ramp/orders/${orderId}/settle`);
            expect(settleRes.status).toBe(200);
            expect(settleRes.body.order.status).toBe("COMPLETED");
        });
        it("returns 404 for non-existent order", async () => {
            const res = await agent.get("/api/v1/ramp/orders/non-existent-id");
            expect(res.status).toBe(404);
        });
    });
});
