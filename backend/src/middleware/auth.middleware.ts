import type { NextFunction, Request, Response } from "express";
import { verifyAuthToken } from "../lib/auth.js";

export type AuthenticatedRequest = Request & { auth?: { userId: string; email: string; role: string } };

export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const bearer = req.headers.authorization?.startsWith("Bearer ") ? req.headers.authorization.slice(7) : undefined;
  const token = req.cookies?.abc_pay_session ?? bearer;

  if (!token) return res.status(401).json({ message: "Authentication required" });

  try {
    const decoded = verifyAuthToken(token);
    req.auth = { userId: decoded.sub, email: decoded.email, role: decoded.role };
    next();
  } catch {
    return res.status(401).json({ message: "Session expired or invalid" });
  }
}
