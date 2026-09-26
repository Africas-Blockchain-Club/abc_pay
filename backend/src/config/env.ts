import "dotenv/config";

export const env = {
  port: Number(process.env.PORT ?? 4000),
  frontendUrls: (process.env.FRONTEND_URL ?? "http://localhost:3000").split(",").map((s) => s.trim()),
  jwtSecret: process.env.JWT_SECRET ?? "dev-only-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  isProduction: process.env.NODE_ENV === "production",
  valr: {
    apiKey: process.env.VALR_API_KEY ?? "",
    apiSecret: process.env.VALR_API_SECRET ?? "",
    baseUrl: process.env.VALR_BASE_URL ?? "https://api.valr.com",
    subaccountId: process.env.VALR_SUBACCOUNT_ID,
    webhookSecret: process.env.VALR_WEBHOOK_SECRET,
    solanaDepositAddress: process.env.VALR_SOLANA_DEPOSIT_ADDRESS,
  },
};
