import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import type { AppStore } from "./types/store.js";
import { env } from "./config/env.js";
import { createAuthRouter } from "./routes/auth.routes.js";
import { createWalletRouter } from "./routes/wallet.routes.js";
import { handleDiditWebhook } from "./modules/kyc/kyc.webhook.js";
import { kycRouter } from "./modules/kyc/kyc.routes.js";

export function createApp(store: AppStore) {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: env.frontendUrl, credentials: true }));

  app.post(
    "/api/webhooks/didit",
    express.raw({ type: "application/json" }),
    handleDiditWebhook
  );
  app.post(
    "/api/v1/webhooks/didit",
    express.raw({ type: "application/json" }),
    handleDiditWebhook
  );

  app.use(express.json({ limit: "1mb" }));
  app.use(cookieParser());

  app.get(["/api/health", "/api/v1/health"], (_req, res) => {
    res.json({ status: "ok", service: "abc-pay-api" });
  });

  app.use("/api/v1/auth", createAuthRouter(store));
  app.use("/api/v1/wallets", createWalletRouter(store));

  // KYC module routes
  app.use("/api/kyc", kycRouter);
  app.use("/api/v1/kyc", kycRouter);

  app.use((_req, res) => res.status(404).json({ message: "Route not found" }));

  app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  });

  return app;
}
