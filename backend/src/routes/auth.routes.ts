import { Router, type Response } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import type { AppStore, UserRecord } from "../types/store.js";
import { signAuthToken } from "../lib/auth.js";
import { env } from "../config/env.js";
import { requireAuth, type AuthenticatedRequest } from "../middleware/auth.middleware.js";

const registerSchema = z.object({
  name: z.string().trim().min(2).max(80),
  surname: z.string().trim().min(2).max(80),
  email: z.string().email().toLowerCase(),
  phoneNumber: z.string().trim().min(10).max(10),
  walletAddress: z.string().trim()
});


function publicUser(user: UserRecord) {
  return {
    id: user.id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    phoneNumber: user.phoneNumber,
    walletAddress: user.walletAddress,
    kycStatus: user.kycStatus,
    role: user.role,
    createdAt: user.createdAt
  };
}

function setSession(res: Response, token: string) {
  res.cookie("abc_pay_session", token, {
    httpOnly: true,
    secure: env.isProduction,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
}

export function createAuthRouter(store: AppStore) {
  const router = Router();

  router.post("/register", async (req, res, next) => {
    try {
      const parsed = registerSchema.safeParse(req.body);
      if (!parsed.success) return res.status(400).json({ message: "Invalid registration details", issues: parsed.error.issues });

      const existingEmail = await store.findUserByEmail(parsed.data.email);
      if (existingEmail) return res.status(409).json({ message: "An account with this email already exists" });

      if (store.findUserByPhoneNumber) {
        const existingPhone = await store.findUserByPhoneNumber(parsed.data.phoneNumber);
        if (existingPhone) return res.status(409).json({ message: "An account with this phone number already exists" });
      }

      if (store.findUserByWalletAddress) {
        const existingWallet = await store.findUserByWalletAddress(parsed.data.walletAddress);
        if (existingWallet) return res.status(409).json({ message: "An account with this wallet address already exists" });
      }

      const { user, wallet } = await store.createUserWithWallet({
        name: parsed.data.name,
        surname: parsed.data.surname,
        email: parsed.data.email,
        phoneNumber: parsed.data.phoneNumber,
        walletAddress: parsed.data.walletAddress
      });

      const token = signAuthToken({ sub: user.id, email: user.email, role: user.role });
      setSession(res, token);
      return res.status(201).json({ user: publicUser(user), wallet });
    } catch (error: any) {
      if (error?.code === "P2002") {
        const target = Array.isArray(error?.meta?.target) ? error.meta.target : [error?.meta?.target];
        if (target.includes("phoneNumber")) {
          return res.status(409).json({ message: "An account with this phone number already exists" });
        }
        if (target.includes("walletAddress")) {
          return res.status(409).json({ message: "An account with this wallet address already exists" });
        }
        if (target.includes("email")) {
          return res.status(409).json({ message: "An account with this email already exists" });
        }
        return res.status(409).json({ message: "An account with these details already exists" });
      }
      next(error);
    }
  });

  router.post("/login", async (req, res, next) => {
    try {
      const parsed = z.object({ walletAddress: z.string().trim().min(1) }).safeParse(req.body);
      if (!parsed.success) return res.status(400).json({ message: "Wallet address required" });

      const user = store.findUserByWalletAddress
        ? await store.findUserByWalletAddress(parsed.data.walletAddress)
        : null;
      if (!user) return res.status(404).json({ message: "No account found for this wallet. Please register first." });

      const token = signAuthToken({ sub: user.id, email: user.email, role: user.role });
      setSession(res, token);
      return res.json({ user: publicUser(user) });
    } catch (error) {
      next(error);
    }
  });

  router.post("/logout", (_req, res) => {
    res.clearCookie("abc_pay_session");
    return res.status(204).send();
  });

  router.get("/me", requireAuth, async (req: AuthenticatedRequest, res) => {
    const user = await store.findUserById(req.auth!.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json({ user: publicUser(user) });
  });

  return router;
}
