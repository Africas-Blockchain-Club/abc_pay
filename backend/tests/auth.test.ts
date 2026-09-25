import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { MemoryStore } from "../src/stores/memory.store.js";

const validUser = {
  name: "Test",
  surname: "User",
  email: "test@example.com",
  phoneNumber: "0812345678",
  walletAddress: "0x71C8360537ab1E23EC2994eB2670e3Ce79fF5128",
};

describe("authentication API", () => {
  let agent: ReturnType<typeof request.agent>;

  beforeEach(() => {
    agent = request.agent(createApp(new MemoryStore()));
  });

  it("registers a user and creates a wallet", async () => {
    const response = await agent.post("/api/v1/auth/register").send(validUser);

    expect(response.status).toBe(201);
    expect(response.body.user.email).toBe(validUser.email);
    expect(response.body.user.name).toBe(validUser.name);
    expect(response.body.wallet.userId).toBe(response.body.user.id);
    expect(response.body.wallet.stablecoin).toBe("USDC");
    expect(response.headers["set-cookie"]).toBeDefined();
  });

  it("rejects invalid registration data", async () => {
    const response = await agent.post("/api/v1/auth/register").send({
      name: "T",
      email: "not-an-email",
    });
    expect(response.status).toBe(400);
  });

  it("rejects duplicate email registration", async () => {
    await agent.post("/api/v1/auth/register").send(validUser);
    const response = await agent.post("/api/v1/auth/register").send(validUser);
    expect(response.status).toBe(409);
  });

  it("returns the current authenticated user", async () => {
    await agent.post("/api/v1/auth/register").send(validUser);
    const response = await agent.get("/api/v1/auth/me");
    expect(response.status).toBe(200);
    expect(response.body.user.email).toBe(validUser.email);
  });

  it("logs out and clears session", async () => {
    await agent.post("/api/v1/auth/register").send(validUser);
    const logoutRes = await agent.post("/api/v1/auth/logout");
    expect(logoutRes.status).toBe(204);

    const meRes = await agent.get("/api/v1/auth/me");
    expect(meRes.status).toBe(401);
  });
});
