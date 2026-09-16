import { Router } from "express";
import { requireAuth } from "../../shared/authMiddleware.js";
import { startKycSession, getKycStatus } from "./kyc.controller.js";

export function createKycRouter(): Router {
  const router = Router();

  router.post("/start", requireAuth, startKycSession);
  router.get("/status", requireAuth, getKycStatus);

  return router;
}

export const kycRouter = createKycRouter();

