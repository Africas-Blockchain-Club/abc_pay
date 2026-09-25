export type ConversionQuote = {
  provider: string;
  pair: string;
  rate: string;
  sourceAmount: string;
  destinationAmount: string;
  expiresAt: Date;
};

export type ValrMarketSummary = {
  currencyPair: string;
  askPrice: string;
  bidPrice: string;
  lastTradedPrice: string;
  previousClosePrice: string;
  baseVolume: string;
  highPrice: string;
  lowPrice: string;
  created: string;
  changeFromPrevious: string;
};

export type ValrSimpleQuote = {
  currencyPair: string;
  payAmount: string;
  receiveAmount: string;
  fee: string;
  feeCurrency: string;
  rate: string;
  id: string;
  created: string;
  expiresAt: string;
};

export type ValrSimpleOrderResponse = {
  id: string;
  success: boolean;
};

export type ValrDepositAddressResponse = {
  currency: string;
  address: string;
  paymentReference?: string;
  network?: string;
};

export type ValrWithdrawResponse = {
  id: string;
};

export type ValrFiatWithdrawResponse = {
  id: string;
};

export interface ExchangeProvider {
  getQuote(input: { fromAsset: string; toAsset: string; amount: string }): Promise<ConversionQuote>;
  convert(input: { fromAsset: string; toAsset: string; amount: string }): Promise<{ providerReference: string }>;
}
