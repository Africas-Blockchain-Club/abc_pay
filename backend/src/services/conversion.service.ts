export type ConversionQuoteInput = {
  cryptoAmount: string;
  exchangeRate: string;
  feeRate: string;
};

export type ConversionQuote = {
  cryptoAmount: string;
  cryptoCurrency: "USDC";
  fiatCurrency: "ZAR";
  exchangeRate: string;
  grossFiatAmount: string;
  feeRate: string;
  feeAmount: string;
  netFiatAmount: string;
};

export function calculateConversionQuote(
  input: ConversionQuoteInput,
): ConversionQuote {
  const cryptoAmount = Number(input.cryptoAmount);
  const exchangeRate = Number(input.exchangeRate);
  const feeRate = Number(input.feeRate);

  if (cryptoAmount <= 0) {
    throw new Error("Crypto amount must be greater than 0");
  }

  if (exchangeRate <= 0) {
    throw new Error("Exchange rate must be greater than 0");
  }

  if (feeRate < 0) {
    throw new Error("Fee rate cannot be negative");
  }

  const grossFiatAmount = cryptoAmount * exchangeRate;
  const feeAmount = grossFiatAmount * feeRate;
  const netFiatAmount = grossFiatAmount - feeAmount;

  return {
    cryptoAmount: cryptoAmount.toFixed(6),
    cryptoCurrency: "USDC",
    fiatCurrency: "ZAR",
    exchangeRate: exchangeRate.toFixed(2),
    grossFiatAmount: grossFiatAmount.toFixed(2),
    feeRate: feeRate.toFixed(4),
    feeAmount: feeAmount.toFixed(2),
    netFiatAmount: netFiatAmount.toFixed(2),
  };
}