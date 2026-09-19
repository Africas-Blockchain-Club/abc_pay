import { Router, type Response } from "express";
import { z } from "zod";
import type { AppStore } from "../types/store.js";
import { signAuthToken } from "../lib/auth.js";
import { env } from "../config/env.js";
import { requireAuth, type AuthenticatedRequest } from "../middleware/auth.middleware.js";

const registerSchema = z.object({
  name: z.string().trim().min(2).max(80),
  surname: z.string().trim().min(2).max(80), 
  email: z.email().transform((value) => value.toLowerCase()),
  phoneNumber: z.string().trim().min(10).max(10)
});

// Users do not need to login: their wallets will perform auth

function publicUser(user: { id: string; name: string; email: string; role: string; createdAt: Date }) {
  return { id: user.id, name: user.name, email: user.email, role: user.role, createdAt: user.createdAt };
}

function setSession(res: Response, token: string) {
  res.cookie("abc_pay_session", token, {
    httpOnly: true,
    secure: env.isProduction,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export function createAuthRouter(store: AppStore) {
  const router = Router();

  router.post("/register", async (req, res, next) => {
    try {
      const parsed = registerSchema.safeParse(req.body);
      if (!parsed.success) return res.status(400).json({ message: "Invalid registration details", issues: parsed.error.issues });

      const existing = await store.findUserByEmail(parsed.data.email);
      if (existing) return res.status(409).json({ message: "An account with this email already exists" });

      const { user, wallet } = await store.createUserWithWallet({
        name: parsed.data.name,
        surname: parsed.data.surname,
        email: parsed.data.email
      });

      const token = signAuthToken({ sub: user.id, email: user.email, role: user.role });
      setSession(res, token);
      return res.status(201).json({ user: publicUser(user), wallet });
    } catch (error) {
      next(error);
    }
  });

  // We no longer need to login as a user

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
