import { calculateConversionQuote } from "./services/conversion.service.js"

const quote = calculateConversionQuote({
  cryptoAmount: "100",
  exchangeRate: "18.00",
  feeRate: "0.02",
});

console.log(quote);