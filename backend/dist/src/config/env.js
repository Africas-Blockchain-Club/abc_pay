import "dotenv/config";
export const env = {
    port: Number(process.env.PORT ?? 4000),
    frontendUrl: process.env.FRONTEND_URL ?? "http://localhost:3000",
    jwtSecret: process.env.JWT_SECRET ?? "dev-only-change-me",
    jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
    isProduction: process.env.NODE_ENV === "production",
};
