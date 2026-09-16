import crypto from "crypto";
import { prisma } from "../../lib/prisma.js";
import { env } from "../../config/env.js";
// Match Didit's float normalization: whole-valued floats serialize as ints.
export function shortenFloats(data) {
    if (Array.isArray(data)) {
        return data.map(shortenFloats);
    }
    if (data !== null && typeof data === "object") {
        return Object.fromEntries(Object.entries(data).map(([key, value]) => [
            key,
            shortenFloats(value),
        ]));
    }
    if (typeof data === "number" && Number.isInteger(data)) {
        return Math.trunc(data);
    }
    return data;
}
// Sort object keys recursively before re-stringifying.
export function sortKeys(obj) {
    if (Array.isArray(obj)) {
        return obj.map(sortKeys);
    }
    if (obj !== null && typeof obj === "object") {
        return Object.keys(obj)
            .sort()
            .reduce((acc, key) => {
            acc[key] = sortKeys(obj[key]);
            return acc;
        }, {});
    }
    return obj;
}
export function canonicalizeJson(payload) {
    return JSON.stringify(sortKeys(shortenFloats(payload)));
}
export function computeSignatureV2(payload, secret) {
    const canonical = canonicalizeJson(payload);
    return crypto.createHmac("sha256", secret).update(canonical, "utf8").digest("hex");
}
export function verifyDiditWebhookSignature(rawBody, signatureV2, timestamp, secret) {
    if (!signatureV2 || !timestamp || !secret)
        return false;
    // 1. Reject anything older than 300s (5 minutes)
    const parsedTimestamp = parseInt(timestamp, 10);
    if (Number.isNaN(parsedTimestamp))
        return false;
    const now = Math.floor(Date.now() / 1000);
    if (Math.abs(now - parsedTimestamp) > 300)
        return false;
    // 2. Recompute HMAC-SHA256 against canonical JSON
    try {
        let parsed;
        if (Buffer.isBuffer(rawBody)) {
            parsed = JSON.parse(rawBody.toString("utf8"));
        }
        else if (typeof rawBody === "string") {
            parsed = JSON.parse(rawBody);
        }
        else if (typeof rawBody === "object" && rawBody !== null) {
            parsed = rawBody;
        }
        else {
            return false;
        }
        const expected = computeSignatureV2(parsed, secret);
        // 3. Constant-time compare
        const a = Buffer.from(expected, "utf8");
        const b = Buffer.from(signatureV2, "utf8");
        return a.length === b.length && crypto.timingSafeEqual(a, b);
    }
    catch {
        return false;
    }
}
// Stub with a clear interface for compliance/support queue
export async function notifyCompliance(userId, status, details) {
    // TODO: Dispatch to compliance queue (e.g. BullMQ, SQS, Slack, or email)
    console.log(`[Compliance Queue] User ${userId} KYC status: ${status}`, details ?? "");
}
export async function handleDiditWebhook(req, res) {
    const signature = req.get("X-Signature-V2") ?? req.headers["x-signature-v2"];
    const timestamp = req.get("X-Timestamp") ?? req.headers["x-timestamp"];
    const secret = process.env.DIDIT_WEBHOOK_SECRET || env.diditWebhookSecret;
    const rawBody = req.body;
    if (!rawBody) {
        return res.status(401).json({ error: "Missing raw request body" });
    }
    const isValid = verifyDiditWebhookSignature(rawBody, signature, timestamp, secret);
    if (!isValid) {
        return res.status(401).json({ error: "Invalid signature or expired timestamp" });
    }
    let payload;
    try {
        if (Buffer.isBuffer(rawBody)) {
            payload = JSON.parse(rawBody.toString("utf8"));
        }
        else if (typeof rawBody === "string") {
            payload = JSON.parse(rawBody);
        }
        else if (typeof rawBody === "object" && rawBody !== null) {
            payload = rawBody;
        }
        else {
            return res.status(400).json({ error: "Malformed request body" });
        }
    }
    catch {
        return res.status(400).json({ error: "Malformed JSON payload" });
    }
    // Deduplicate on payload.event_id via ProcessedWebhookEvent table
    if (payload.event_id) {
        const existing = await prisma.processedWebhookEvent.findUnique({
            where: { eventId: payload.event_id },
        });
        if (existing) {
            return res.status(200).json({ received: true, deduplicated: true });
        }
        await prisma.processedWebhookEvent.create({
            data: { eventId: payload.event_id },
        });
    }
    const { session_id, status, vendor_data, decision } = payload;
    if (session_id) {
        await prisma.kycVerification.upsert({
            where: { sessionId: session_id },
            create: {
                userId: vendor_data ?? "",
                sessionId: session_id,
                status: status ?? "UNKNOWN",
                vendorData: vendor_data ?? null,
                decisionPayload: decision ? decision : undefined,
            },
            update: {
                status: status ?? "UNKNOWN",
                decisionPayload: decision ? decision : undefined,
            },
        });
    }
    if (status === "Approved" && vendor_data) {
        await prisma.user
            .update({
            where: { id: vendor_data },
            data: {
                kycVerified: true,
                kycVerifiedAt: new Date(),
            },
        })
            .catch((err) => {
            console.error(`Failed to update user kycVerified for ${vendor_data}:`, err);
        });
    }
    else if ((status === "Declined" || status === "In Review") && vendor_data) {
        notifyCompliance(vendor_data, status, decision).catch((err) => {
            console.error(`Failed to dispatch compliance notification for ${vendor_data}:`, err);
        });
    }
    return res.status(200).json({ received: true });
}
