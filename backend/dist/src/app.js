import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { env } from "./config/env.js";
import { createAuthRouter } from "./routes/auth.routes.js";
import { createWalletRouter } from "./routes/wallet.routes.js";
export function createApp(store) {
    const app = express();
    app.use(helmet());
    app.use(cors({ origin: env.frontendUrl, credentials: true }));
    app.use(express.json({ limit: "1mb" }));
    app.use(cookieParser());
    app.get("/api/v1/health", (_req, res) => {
        res.json({ status: "ok", service: "abc-pay-api" });
    });
    app.use("/api/v1/auth", createAuthRouter(store));
    app.use("/api/v1/wallets", createWalletRouter(store));
    app.use((_req, res) => res.status(404).json({ message: "Route not found" }));
    app.use((error, _req, res, _next) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    });
    return app;
}
