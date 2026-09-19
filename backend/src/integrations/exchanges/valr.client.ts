import type { ConversionQuote, ExchangeProvider } from "./exchange.types.js";

export class ValrClient implements ExchangeProvider {
  async getQuote(_input: { fromAsset: string; toAsset: string; amount: string }): Promise<ConversionQuote> {
    throw new Error("VALR integration not configured yet");
  }

  async convert(_input: { fromAsset: string; toAsset: string; amount: string }): Promise<{providerReference: string}> {
    throw new Error("VALR integration not configured yet");
  }
}
