import { env } from "../../config/env.js";
export class DiditService {
    apiKey;
    workflowId;
    baseUrl;
    frontendUrl;
    constructor(options) {
        this.apiKey = options?.apiKey ?? env.diditApiKey;
        this.workflowId = options?.workflowId ?? env.diditWorkflowId;
        this.baseUrl = options?.baseUrl ?? "https://verification.didit.me/v3";
        this.frontendUrl = options?.frontendUrl ?? env.frontendUrl;
    }
    async createSession(userId, customCallback) {
        const callbackUrl = customCallback ?? `${this.frontendUrl}/kyc/complete`;
        const response = await fetch(`${this.baseUrl}/session/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            },
            body: JSON.stringify({
                workflow_id: this.workflowId,
                callback: callbackUrl,
                vendor_data: userId,
            }),
        });
        if (!response.ok) {
            const errorText = await response.text().catch(() => "Unknown error");
            throw new Error(`Failed to create Didit session (${response.status}): ${errorText}`);
        }
        return (await response.json());
    }
    async getSessionDecision(sessionId) {
        const response = await fetch(`${this.baseUrl}/session/${sessionId}/decision/`, {
            method: "GET",
            headers: {
                "x-api-key": this.apiKey,
            },
        });
        if (!response.ok) {
            const errorText = await response.text().catch(() => "Unknown error");
            throw new Error(`Failed to retrieve Didit decision (${response.status}): ${errorText}`);
        }
        return (await response.json());
    }
}
export const diditService = new DiditService();
