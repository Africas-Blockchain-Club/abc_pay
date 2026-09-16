import { env } from "../../config/env.js";

export interface DiditSessionResponse {
  session_id: string;
  session_number?: number;
  session_token: string;
  url: string;
  status: string;
  workflow_id: string;
  workflow_version?: number;
  vendor_data?: string;
  callback?: string;
}

export interface DiditDecisionResponse {
  session_id: string;
  status: string;
  id_verifications?: Array<{
    node_id: string;
    status: string;
    document_type?: string;
    warnings?: unknown[];
  }>;
  liveness_checks?: Array<{
    node_id: string;
    status: string;
    method?: string;
    score?: number;
    warnings?: unknown[];
  }>;
  face_matches?: Array<{
    node_id: string;
    status: string;
    score?: number;
    warnings?: unknown[];
  }>;
  reviews?: unknown[];
  [key: string]: unknown;
}

export class DiditService {
  private readonly apiKey: string;
  private readonly workflowId: string;
  private readonly baseUrl: string;
  private readonly frontendUrl: string;

  constructor(options?: {
    apiKey?: string;
    workflowId?: string;
    baseUrl?: string;
    frontendUrl?: string;
  }) {
    this.apiKey = options?.apiKey ?? env.diditApiKey;
    this.workflowId = options?.workflowId ?? env.diditWorkflowId;
    this.baseUrl = options?.baseUrl ?? "https://verification.didit.me/v3";
    this.frontendUrl = options?.frontendUrl ?? env.frontendUrl;
  }

  async createSession(userId: string, customCallback?: string): Promise<DiditSessionResponse> {
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

    return (await response.json()) as DiditSessionResponse;
  }

  async getSessionDecision(sessionId: string): Promise<DiditDecisionResponse> {
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

    return (await response.json()) as DiditDecisionResponse;
  }
}

export const diditService = new DiditService();

