import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
export function signAuthToken(payload) {
    return jwt.sign(payload, env.jwtSecret, { expiresIn: env.jwtExpiresIn });
}
export function verifyAuthToken(token) {
    return jwt.verify(token, env.jwtSecret);
}
