import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
export function createWalletRouter(store) {
    const router = Router();
    router.get("/me", requireAuth, async (req, res) => {
        const wallet = await store.getWalletByUserId(req.auth.userId);
        if (!wallet)
            return res.status(404).json({ message: "Wallet not found" });
        return res.json({ wallet });
    });
    return router;
}
