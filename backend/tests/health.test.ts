import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";
import { MemoryStore } from "../src/stores/memory.store.js";

describe("GET /api/v1/health", () => {
  it("reports that the API is available", async () => {
    const response = await request(createApp(new MemoryStore())).get("/api/v1/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok", service: "abc-pay-api" });
  });
});
