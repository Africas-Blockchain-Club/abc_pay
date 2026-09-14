export interface KycClient {
  createVerification(input: { userId: string; name: string; email: string }): Promise<{ providerRef: string }>;
  getStatus(providerRef: string): Promise<"PENDING" | "VERIFIED" | "REJECTED">;
}
