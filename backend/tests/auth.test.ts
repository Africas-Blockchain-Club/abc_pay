import request from "supertest";
import { beforeEach, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { MemoryStore } from "../src/stores/memory.store.js";

const validUser = {
  name: "Test User",
  email: "test@example.com",
  password: "Password123!",
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
    expect(response.body.user.passwordHash).toBeUndefined();
    expect(response.body.wallet.userId).toBe(response.body.user.id);
    expect(response.body.wallet.stablecoin).toBe("USDC");
    expect(response.headers["set-cookie"]).toBeDefined();
  });

  it("rejects invalid registration data", async () => {
    const response = await agent.post("/api/v1/auth/register").send({
      name: "T",
      email: "not-an-email",
      password: "short",
    });
    expect(response.status).toBe(400);
  });

  it("rejects duplicate email registration", async () => {
    await agent.post("/api/v1/auth/register").send(validUser);
    const response = await agent.post("/api/v1/auth/register").send(validUser);
    expect(response.status).toBe(409);
  });

  it("logs in with valid credentials", async () => {
    await agent.post("/api/v1/auth/register").send(validUser);
    await agent.post("/api/v1/auth/logout");

    const response = await agent.post("/api/v1/auth/login").send({
      email: validUser.email,
      password: validUser.password,
    });

    expect(response.status).toBe(200);
    expect(response.body.user.email).toBe(validUser.email);
    expect(response.headers["set-cookie"]).toBeDefined();
  });

  it("rejects an incorrect password", async () => {
    await agent.post("/api/v1/auth/register").send(validUser);
    const response = await agent.post("/api/v1/auth/login").send({
      email: validUser.email,
      password: "WrongPassword123!",
    });
    expect(response.status).toBe(401);
  });

  it("returns the current authenticated user", async () => {
    await agent.post("/api/v1/auth/register").send(validUser);
    const response = await agent.get("/api/v1/auth/me");
    expect(response.status).toBe(200);
    expect(response.body.user.email).toBe(validUser.email);
  });
});
