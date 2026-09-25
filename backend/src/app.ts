import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import type { AppStore } from "./types/store.js";
import { env } from "./config/env.js";
import { createAuthRouter } from "./routes/auth.routes.js";
import { createWalletRouter } from "./routes/wallet.routes.js";
import { createRampRouter } from "./routes/ramp.routes.js";
import { RampService } from "./services/ramp.service.js";
import { generateOpenApiSpec } from "./docs/openapi.js";

export function createApp(store: AppStore, rampService?: RampService) {
  const app = express();

  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );

  app.use(cors({ origin: env.frontendUrl, credentials: true }));
  app.use(express.json({ limit: "1mb" }));
  app.use(cookieParser());

  const openApiSpec = generateOpenApiSpec();
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));

  app.get("/api/v1/health", (_req, res) => {
    res.json({ status: "ok", service: "abc-pay-api" });
  });

  const activeRampService = rampService || new RampService(store);

  app.use("/api/v1/auth", createAuthRouter(store));
  app.use("/api/v1/wallets", createWalletRouter(store));
  app.use("/api/v1/ramp", createRampRouter(activeRampService));

  app.use((_req, res) => res.status(404).json({ message: "Route not found" }));

  app.use(
    (
      error: unknown,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction
    ) => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  );

  return app;
}