export type ConversionQuote = {
  provider: string;
  pair: string;
  rate: string;
  sourceAmount: string;
  destinationAmount: string;
  expiresAt: Date;
};

export interface ExchangeProvider {
  getQuote(input: { fromAsset: string; toAsset: string; amount: string }): Promise<ConversionQuote>;
  convert(input: { fromAsset: string; toAsset: string; amount: string }): Promise<{ providerReference: string }>;
}
