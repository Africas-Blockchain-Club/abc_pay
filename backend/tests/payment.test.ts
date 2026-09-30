import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { MemoryStore } from "../src/stores/memory.store.js";

const testMerchant = {
  name: "Merchant",
  surname: "Tester",
  email: "merchant@example.com",
  phoneNumber: "0823456789",
  walletAddress: "0x71C8360537ab1E23EC2994eB2670e3Ce79fF5128",
};

describe("Payments API (Sepolia USDC QR & Transfers)", () => {
  let agent: ReturnType<typeof request.agent>;
  let store: MemoryStore;

  beforeEach(async () => {
    store = new MemoryStore();
    agent = request.agent(createApp(store));
    // Register test merchant
    await agent.post("/api/v1/auth/register").send(testMerchant);
  });

  it("creates a Sepolia payment request with the merchant's wallet as recipient", async () => {
    const res = await agent.post("/api/v1/payments/request").send({
      amountUsdc: "10.00",
      amountZar: "185.00",
      description: "Coffee & muffin",
    });

    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.recipientAddress).toBe(testMerchant.walletAddress);
    expect(res.body.amountUsdc).toBe("10.00");
    expect(res.body.amountZar).toBe("185.00");
    expect(res.body.network).toBe("SEPOLIA");
    expect(res.body.token).toBe("USDC");
    expect(res.body.status).toBe("PENDING");
    expect(res.body.eip681Url).toContain(testMerchant.walletAddress);
  });

  it("retrieves the payment request publicly by ID for the person scanning the QR", async () => {
    const createRes = await agent.post("/api/v1/payments/request").send({
      amountUsdc: "25.50",
    });

    const paymentId = createRes.body.id;

    // Public client request (no auth cookie needed)
    const publicClient = request(createApp(store));
    const getRes = await publicClient.get(`/api/v1/payments/request/${paymentId}`);

    expect(getRes.status).toBe(200);
    expect(getRes.body.id).toBe(paymentId);
    expect(getRes.body.amountUsdc).toBe("25.50");
    expect(getRes.body.recipientAddress).toBe(testMerchant.walletAddress);
    expect(getRes.body.status).toBe("PENDING");
  });

  it("confirms the payment upon transaction completion and verification", async () => {
    const createRes = await agent.post("/api/v1/payments/request").send({
      amountUsdc: "15.00",
    });

    const paymentId = createRes.body.id;
    const publicClient = request(createApp(store));

    const confirmRes = await publicClient
      .post(`/api/v1/payments/request/${paymentId}/confirm`)
      .send({
        txHash: "mock_0xabcdef1234567890abcdef1234567890",
        payerAddress: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
      });

    expect(confirmRes.status).toBe(200);
    expect(confirmRes.body.payment.status).toBe("CONFIRMED");
    expect(confirmRes.body.payment.txHash).toBe("mock_0xabcdef1234567890abcdef1234567890");
    expect(confirmRes.body.payment.payerAddress).toBe("0x8ba1f109551bD432803012645Ac136ddd64DBA72");
  });

  it("lists merchant payment history", async () => {
    await agent.post("/api/v1/payments/request").send({ amountUsdc: "5.00" });
    await agent.post("/api/v1/payments/request").send({ amountUsdc: "12.00" });

    const historyRes = await agent.get("/api/v1/payments/history");
    expect(historyRes.status).toBe(200);
    expect(historyRes.body.payments).toHaveLength(2);
  });
});
