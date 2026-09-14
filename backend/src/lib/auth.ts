import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../config/env.js";

export type AuthToken = { sub: string; email: string; role: string };

export function signAuthToken(payload: AuthToken) {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: env.jwtExpiresIn as SignOptions["expiresIn"] });
}

export function verifyAuthToken(token: string) {
  return jwt.verify(token, env.jwtSecret) as AuthToken & jwt.JwtPayload;
}
