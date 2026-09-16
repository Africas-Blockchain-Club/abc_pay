import { describe, expect, it, vi, beforeEach } from "vitest";
import request from "supertest";
import { createApp } from "../src/app.js";
import { MemoryStore } from "../src/stores/memory.store.js";
import { DiditService, diditService } from "../src/modules/kyc/didit.service.js";
import { signAuthToken } from "../src/lib/auth.js";
import { prisma } from "../src/lib/prisma.js";
describe("DiditService & KYC API Endpoints", () => {
    let app;
    beforeEach(() => {
        vi.restoreAllMocks();
        app = createApp(new MemoryStore());
    });
    describe("DiditService Client", () => {
        it("calls Didit session creation endpoint with expected payload and headers", async () => {
            const mockSessionResponse = {
                session_id: "didit_sess_abc",
                session_token: "tok_xyz_123",
                url: "https://verify.didit.me/session/tok_xyz_123",
                status: "Not Started",
                workflow_id: "test-wf-id",
            };
            const fetchMock = vi.fn().mockResolvedValue({
                ok: true,
                json: async () => mockSessionResponse,
            });
            vi.stubGlobal("fetch", fetchMock);
            const client = new DiditService({
                apiKey: "test_key",
                workflowId: "test_wf",
                frontendUrl: "http://localhost:3000",
            });
            const res = await client.createSession("user_123");
            expect(fetchMock).toHaveBeenCalledWith("https://verification.didit.me/v3/session/", expect.objectContaining({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "test_key",
                },
                body: JSON.stringify({
                    workflow_id: "test_wf",
                    callback: "http://localhost:3000/kyc/complete",
                    vendor_data: "user_123",
                }),
            }));
            expect(res.session_id).toBe("didit_sess_abc");
            expect(res.url).toBe("https://verify.didit.me/session/tok_xyz_123");
            expect(res.session_token).toBe("tok_xyz_123");
        });
    });
    describe("POST /api/kyc/start & GET /api/kyc/status routes", () => {
        const testUserId = "usr_authenticated_456";
        const testToken = signAuthToken({ sub: testUserId, email: "kyc@example.com", role: "USER" });
        it("rejects unauthenticated requests with 401", async () => {
            const resStart = await request(app).post("/api/kyc/start").send({});
            expect(resStart.status).toBe(401);
            const resStatus = await request(app).get("/api/kyc/status");
            expect(resStatus.status).toBe(401);
        });
        it("creates a Didit session and returns verificationUrl and sessionToken", async () => {
            vi.spyOn(diditService, "createSession").mockResolvedValue({
                session_id: "sess_created_999",
                session_token: "token_999",
                url: "https://verify.didit.me/session/token_999",
                status: "Not Started",
                workflow_id: "wf_999",
            });
            const upsertSpy = vi.spyOn(prisma.kycVerification, "upsert").mockResolvedValue({});
            const response = await request(app)
                .post("/api/kyc/start")
                .set("Authorization", `Bearer ${testToken}`)
                .send({});
            expect(response.status).toBe(200);
            expect(response.body.verificationUrl).toBe("https://verify.didit.me/session/token_999");
            expect(response.body.sessionToken).toBe("token_999");
            expect(upsertSpy).toHaveBeenCalledWith(expect.objectContaining({
                where: { sessionId: "sess_created_999" },
                create: expect.objectContaining({
                    userId: testUserId,
                    sessionId: "sess_created_999",
                }),
            }));
        });
        it("returns current KYC status for the authenticated user", async () => {
            vi.spyOn(prisma.user, "findUnique").mockResolvedValue({
                kycVerified: true,
                kycVerifiedAt: new Date("2026-09-10T12:00:00Z"),
            });
            vi.spyOn(prisma.kycVerification, "findFirst").mockResolvedValue({
                sessionId: "sess_approved_123",
                status: "Approved",
                createdAt: new Date("2026-09-10T12:00:00Z"),
            });
            const response = await request(app)
                .get("/api/kyc/status")
                .set("Authorization", `Bearer ${testToken}`);
            expect(response.status).toBe(200);
            expect(response.body.kycVerified).toBe(true);
            expect(response.body.status).toBe("Approved");
            expect(response.body.sessionId).toBe("sess_approved_123");
        });
    });
});
