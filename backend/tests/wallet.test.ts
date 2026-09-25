import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { MemoryStore } from "../src/stores/memory.store.js";

describe("wallet API", () => {
  it("requires authentication", async () => {
    const response = await request(createApp(new MemoryStore())).get("/api/v1/wallets/me");
    expect(response.status).toBe(401);
  });

  it("returns the signed-in user's wallet", async () => {
    const agent = request.agent(createApp(new MemoryStore()));
    await agent.post("/api/v1/auth/register").send({
      name: "Wallet",
      surname: "User",
      email: "wallet@example.com",
      phoneNumber: "0812345678",
      walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
    });

    const response = await agent.get("/api/v1/wallets/me");
    expect(response.status).toBe(200);
    expect(response.body.wallet.stablecoin).toBe("USDC");
    expect(response.body.wallet.chain).toBe("EVM");
  });
});
