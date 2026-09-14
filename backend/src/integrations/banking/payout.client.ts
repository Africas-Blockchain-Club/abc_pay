export interface PayoutClient {
  createPayout(input: { amountZar: string; settlementReference: string }): Promise<{ providerRef: string }>;
  getPayoutStatus(providerRef: string): Promise<string>;
}
