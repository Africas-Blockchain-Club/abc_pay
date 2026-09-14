import { Router } from "express";
import { requireAuth, type AuthenticatedRequest } from "../middleware/auth.middleware.js";
import type { AppStore } from "../types/store.js";

export function createWalletRouter(store: AppStore) {
  const router = Router();

  router.get("/me", requireAuth, async (req: AuthenticatedRequest, res) => {
    const wallet = await store.getWalletByUserId(req.auth!.userId);
    if (!wallet) return res.status(404).json({ message: "Wallet not found" });
    return res.json({ wallet });
  });

  return router;
}
