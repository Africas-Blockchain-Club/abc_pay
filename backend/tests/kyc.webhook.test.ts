import { describe, expect, it, vi, beforeEach } from "vitest";
import request from "supertest";
import crypto from "crypto";
import { createApp } from "../src/app.js";
import { MemoryStore } from "../src/stores/memory.store.js";
import {
  shortenFloats,
  sortKeys,
  canonicalizeJson,
  computeSignatureV2,
  verifyDiditWebhookSignature,
} from "../src/modules/kyc/kyc.webhook.js";
import { prisma } from "../src/lib/prisma.js";

const TEST_SECRET = "test-webhook-secret-key-12345";

describe("Didit Webhook Signature & Canonicalization", () => {
  it("shortens whole floats and keeps non-whole floats", () => {
    const input = {
      score: 95.0,
      accuracy: 95.4,
      nested: { value: 100.0, sub: 0.125 },
      list: [1.0, 2.5, 3.0],
    };
    const shortened = shortenFloats(input) as any;
    expect(shortened.score).toBe(95);
    expect(shortened.accuracy).toBe(95.4);
    expect(shortened.nested.value).toBe(100);
    expect(shortened.nested.sub).toBe(0.125);
    expect(shortened.list).toEqual([1, 2.5, 3]);
  });

  it("sorts object keys recursively", () => {
    const input = {
      z: 1,
      a: {
        d: 4,
        b: 2,
      },
      m: 3,
    };
    const canonical = canonicalizeJson(input);
    expect(canonical).toBe('{"a":{"b":2,"d":4},"m":3,"z":1}');
  });

  it("verifies a valid signature with fresh timestamp", () => {
    const payload = {
      event_id: "evt_123",
      session_id: "sess_456",
      status: "Approved",
      timestamp: Math.floor(Date.now() / 1000),
    };
    const rawBody = JSON.stringify(payload);
    const timestamp = String(Math.floor(Date.now() / 1000));
    const signature = computeSignatureV2(payload, TEST_SECRET);

    const isValid = verifyDiditWebhookSignature(rawBody, signature, timestamp, TEST_SECRET);
    expect(isValid).toBe(true);
  });

  it("rejects a tampered signature", () => {
    const payload = { event_id: "evt_123", status: "Approved" };
    const rawBody = JSON.stringify(payload);
    const timestamp = String(Math.floor(Date.now() / 1000));
    const tamperedSignature = crypto.createHmac("sha256", "wrong-secret").update(rawBody).digest("hex");

    const isValid = verifyDiditWebhookSignature(rawBody, tamperedSignature, timestamp, TEST_SECRET);
    expect(isValid).toBe(false);
  });

  it("rejects a stale timestamp (>300s old)", () => {
    const payload = { event_id: "evt_123", status: "Approved" };
    const rawBody = JSON.stringify(payload);
    const staleTimestamp = String(Math.floor(Date.now() / 1000) - 305);
    const signature = computeSignatureV2(payload, TEST_SECRET);

    const isValid = verifyDiditWebhookSignature(rawBody, signature, staleTimestamp, TEST_SECRET);
    expect(isValid).toBe(false);
  });
});

describe("POST /api/webhooks/didit HTTP endpoint", () => {
  let app: ReturnType<typeof createApp>;

  beforeEach(() => {
    vi.restoreAllMocks();
    process.env.DIDIT_WEBHOOK_SECRET = TEST_SECRET;
    app = createApp(new MemoryStore());
  });

  it("returns 401 on tampered signature", async () => {
    const payload = { event_id: "evt_test_1", status: "Approved" };
    const rawBody = JSON.stringify(payload);
    const timestamp = String(Math.floor(Date.now() / 1000));

    const response = await request(app)
      .post("/api/webhooks/didit")
      .set("Content-Type", "application/json")
      .set("X-Signature-V2", "invalid_signature_hex")
      .set("X-Timestamp", timestamp)
      .send(rawBody);

    expect(response.status).toBe(401);
  });

  it("returns 401 on stale timestamp", async () => {
    const payload = { event_id: "evt_test_2", status: "Approved" };
    const rawBody = JSON.stringify(payload);
    const staleTimestamp = String(Math.floor(Date.now() / 1000) - 350);
    const signature = computeSignatureV2(payload, TEST_SECRET);

    const response = await request(app)
      .post("/api/webhooks/didit")
      .set("Content-Type", "application/json")
      .set("X-Signature-V2", signature)
      .set("X-Timestamp", staleTimestamp)
      .send(rawBody);

    expect(response.status).toBe(401);
  });

  it("accepts validly-signed sandbox payload and deduplicates replay", async () => {
    const payload = {
      event_id: "evt_sandbox_dedupe_1",
      webhook_type: "status.updated",
      timestamp: Math.floor(Date.now() / 1000),
      session_id: "sess_sandbox_1",
      status: "Approved",
      vendor_data: "user_sandbox_123",
      decision: {
        session_id: "sess_sandbox_1",
        status: "Approved",
        id_verifications: [{ node_id: "id_1", status: "Approved" }],
      },
    };
    const rawBody = JSON.stringify(payload);
    const timestamp = String(Math.floor(Date.now() / 1000));
    const signature = computeSignatureV2(payload, TEST_SECRET);

    // Mock Prisma calls to isolate HTTP / dedupe / update handling
    const mockProcessedEvents = new Set<string>();
    vi.spyOn(prisma.processedWebhookEvent as any, "findUnique").mockImplementation(async ({ where }: any) => {
      return mockProcessedEvents.has(where.eventId) ? ({ eventId: where.eventId, processedAt: new Date() } as any) : null;
    });
    vi.spyOn(prisma.processedWebhookEvent as any, "create").mockImplementation(async ({ data }: any) => {
      mockProcessedEvents.add(data.eventId);
      return { eventId: data.eventId, processedAt: new Date() } as any;
    });
    const upsertVerificationMock = vi.spyOn(prisma.kycVerification as any, "upsert").mockResolvedValue({} as any);
    const updateUserMock = vi.spyOn(prisma.user as any, "update").mockResolvedValue({} as any);

    // First request: processes successfully
    const res1 = await request(app)
      .post("/api/webhooks/didit")
      .set("Content-Type", "application/json")
      .set("X-Signature-V2", signature)
      .set("X-Timestamp", timestamp)
      .send(rawBody);

    expect(res1.status).toBe(200);
    expect(res1.body.received).toBe(true);
    expect(upsertVerificationMock).toHaveBeenCalled();
    expect(updateUserMock).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: "user_sandbox_123" },
        data: expect.objectContaining({ kycVerified: true }),
      })
    );

    // Replay request with identical event_id: returns deduplicated without re-updating
    const res2 = await request(app)
      .post("/api/webhooks/didit")
      .set("Content-Type", "application/json")
      .set("X-Signature-V2", signature)
      .set("X-Timestamp", timestamp)
      .send(rawBody);

    expect(res2.status).toBe(200);
    expect(res2.body.deduplicated).toBe(true);
  });
});
