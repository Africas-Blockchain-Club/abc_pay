import { OpenAPIRegistry, OpenApiGeneratorV3, extendZodWithOpenApi, } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";
extendZodWithOpenApi(z);
export const registry = new OpenAPIRegistry();
// --- Auth Schemas ---
export const RegisterInputSchema = registry.register("RegisterInput", z.object({
    name: z.string().trim().min(2).max(80).openapi({ example: "John" }),
    surname: z.string().trim().min(2).max(80).openapi({ example: "Doe" }),
    email: z.string().email().openapi({ example: "johndoe@example.com" }),
    phoneNumber: z.string().trim().min(10).max(10).openapi({ example: "0812345678" }),
    walletAddress: z.string().trim().openapi({ example: "0x71C...3a9" }),
}));
export const UserSchema = registry.register("User", z.object({
    id: z.string().uuid().openapi({ example: "e0671be6-9467-4228-a6d5-45dbe7b1154c" }),
    name: z.string().openapi({ example: "John" }),
    surname: z.string().openapi({ example: "Doe" }),
    email: z.string().openapi({ example: "johndoe@example.com" }),
    phoneNumber: z.string().openapi({ example: "0812345678" }),
    walletAddress: z.string().openapi({ example: "0x71C...3a9" }),
    kycStatus: z.string().openapi({ example: "NOT_STARTED" }),
    role: z.string().openapi({ example: "USER" }),
    createdAt: z.string().datetime().openapi({ example: "2026-09-24T10:00:00.000Z" }),
}));
export const WalletSchema = registry.register("Wallet", z.object({
    id: z.string().uuid(),
    userId: z.string().uuid(),
    publicAddress: z.string().nullable().openapi({ example: "0x71C...3a9" }),
    chain: z.string().openapi({ example: "EVM" }),
    stablecoin: z.string().openapi({ example: "USDC" }),
    balanceCached: z.string().openapi({ example: "0" }),
    createdAt: z.string().datetime(),
}));
// --- Ramp Schemas ---
export const QuoteRequestSchema = registry.register("QuoteRequest", z.object({
    fromAsset: z.enum(["ZAR", "USDC"]).openapi({ example: "ZAR" }),
    toAsset: z.enum(["ZAR", "USDC"]).openapi({ example: "USDC" }),
    amount: z.union([z.string(), z.number()]).openapi({ example: "1000.00" }),
}));
export const QuoteResponseSchema = registry.register("QuoteResponse", z.object({
    quoteId: z.string().uuid(),
    pair: z.string().openapi({ example: "USDCZAR" }),
    side: z.enum(["BUY", "SELL"]).openapi({ example: "BUY" }),
    network: z.string().openapi({ example: "SOL" }),
    baseRate: z.string().openapi({ example: "18.2500" }),
    rate: z.string().openapi({ example: "18.6224" }),
    sourceAmount: z.string().openapi({ example: "1000.00" }),
    sourceAsset: z.enum(["ZAR", "USDC"]).openapi({ example: "ZAR" }),
    destinationAmount: z.string().openapi({ example: "53.698630" }),
    destinationAsset: z.enum(["ZAR", "USDC"]).openapi({ example: "USDC" }),
    platformFeeZar: z.string().openapi({ example: "20.00" }),
    platformFeeRate: z.string().openapi({ example: "0.0200" }),
    expiresAt: z.string().datetime().openapi({ example: "2026-09-24T10:05:00.000Z" }),
}));
export const OnrampRequestSchema = registry.register("OnrampRequest", z.object({
    amountZar: z.union([z.string(), z.number()]).openapi({ example: "1000.00" }),
    destinationSolanaAddress: z
        .string()
        .openapi({ example: "7nxp59B99iV7YpHmC48o5hK41UoFjA3Y9D6M1kP1h9d2" }),
    userId: z.string().uuid().optional(),
}));
export const OnrampResponseSchema = registry.register("OnrampResponse", z.object({
    orderId: z.string().uuid(),
    type: z.literal("ONRAMP"),
    status: z.string().openapi({ example: "PENDING_DEPOSIT" }),
    fiatAmount: z.string().openapi({ example: "1000.00" }),
    fiatCurrency: z.literal("ZAR"),
    cryptoAsset: z.literal("USDC"),
    cryptoAmount: z.string().openapi({ example: "53.698630" }),
    exchangeRate: z.string().openapi({ example: "18.6224" }),
    platformFeeZar: z.string().openapi({ example: "20.00" }),
    network: z.literal("SOL"),
    destinationAddress: z
        .string()
        .openapi({ example: "7nxp59B99iV7YpHmC48o5hK41UoFjA3Y9D6M1kP1h9d2" }),
    fiatReference: z.string().openapi({ example: "ABC-VALR-489210" }),
    depositInstructions: z.object({
        bankName: z.string().openapi({ example: "Standard Bank" }),
        accountNumber: z.string().openapi({ example: "051001234" }),
        branchCode: z.string().openapi({ example: "051001" }),
        accountType: z.string().openapi({ example: "Current" }),
        paymentReference: z.string().openapi({ example: "ABC-VALR-489210" }),
    }),
    expiresAt: z.string().datetime(),
}));
export const BankDetailsSchema = registry.register("BankDetails", z.object({
    bankName: z.string().openapi({ example: "First National Bank" }),
    accountNumber: z.string().openapi({ example: "62012345678" }),
    branchCode: z.string().openapi({ example: "250655" }),
    accountHolderName: z.string().openapi({ example: "John Doe" }),
    accountType: z.string().default("CURRENT").openapi({ example: "CURRENT" }),
}));
export const OfframpRequestSchema = registry.register("OfframpRequest", z.object({
    amountUsdc: z.union([z.string(), z.number()]).openapi({ example: "50.00" }),
    sourceSolanaAddress: z
        .string()
        .optional()
        .openapi({ example: "7nxp59B99iV7YpHmC48o5hK41UoFjA3Y9D6M1kP1h9d2" }),
    bankDetails: BankDetailsSchema,
    userId: z.string().uuid().optional(),
}));
export const OfframpResponseSchema = registry.register("OfframpResponse", z.object({
    orderId: z.string().uuid(),
    type: z.literal("OFFRAMP"),
    status: z.string().openapi({ example: "PENDING_DEPOSIT" }),
    cryptoAsset: z.literal("USDC"),
    cryptoAmount: z.string().openapi({ example: "50.00" }),
    network: z.literal("SOL"),
    fiatCurrency: z.literal("ZAR"),
    estimatedFiatAmount: z.string().openapi({ example: "894.25" }),
    exchangeRate: z.string().openapi({ example: "17.8850" }),
    platformFeeZar: z.string().openapi({ example: "18.25" }),
    cryptoDepositAddress: z
        .string()
        .openapi({ example: "VALRsolanaPlatformDepositAddress11111111111" }),
    bankDetails: z.object({
        bankName: z.string().openapi({ example: "First National Bank" }),
        accountNumber: z.string().openapi({ example: "******5678" }),
        accountHolderName: z.string().openapi({ example: "John Doe" }),
    }),
    expiresAt: z.string().datetime(),
}));
export const RampOrderRecordSchema = registry.register("RampOrderRecord", z.object({
    id: z.string().uuid(),
    userId: z.string().nullable().optional(),
    type: z.enum(["ONRAMP", "OFFRAMP"]),
    status: z.enum([
        "PENDING_DEPOSIT",
        "PAYMENT_RECEIVED",
        "CONVERTING",
        "SETTLING",
        "COMPLETED",
        "FAILED",
        "CANCELLED",
    ]),
    fiatCurrency: z.string().openapi({ example: "ZAR" }),
    fiatAmount: z.string().openapi({ example: "1000.00" }),
    cryptoAsset: z.string().openapi({ example: "USDC" }),
    cryptoAmount: z.string().openapi({ example: "53.698630" }),
    exchangeRate: z.string().openapi({ example: "18.6224" }),
    platformFeeRate: z.string().openapi({ example: "0.02" }),
    platformFeeZar: z.string().openapi({ example: "20.00" }),
    network: z.string().openapi({ example: "SOL" }),
    destinationWalletAddress: z.string().nullable().optional(),
    sourceWalletAddress: z.string().nullable().optional(),
    cryptoDepositAddress: z.string().nullable().optional(),
    txHash: z.string().nullable().optional(),
    bankName: z.string().nullable().optional(),
    accountNumber: z.string().nullable().optional(),
    branchCode: z.string().nullable().optional(),
    accountHolderName: z.string().nullable().optional(),
    fiatReference: z.string().nullable().optional(),
    valrOrderId: z.string().nullable().optional(),
    valrWithdrawalId: z.string().nullable().optional(),
    errorMessage: z.string().nullable().optional(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
}));
// --- Path Registrations ---
// Health
registry.registerPath({
    method: "get",
    path: "/api/v1/health",
    summary: "Health Check",
    description: "Returns health status of the API",
    responses: {
        200: {
            description: "Service is healthy",
            content: {
                "application/json": {
                    schema: z.object({
                        status: z.string().openapi({ example: "ok" }),
                        service: z.string().openapi({ example: "abc-pay-api" }),
                    }),
                },
            },
        },
    },
});
// Auth
registry.registerPath({
    method: "post",
    path: "/api/v1/auth/register",
    summary: "Register user and wallet",
    description: "Creates a user account and initializes default EVM wallet record",
    request: {
        body: {
            content: { "application/json": { schema: RegisterInputSchema } },
        },
    },
    responses: {
        201: {
            description: "User registered successfully",
            content: {
                "application/json": {
                    schema: z.object({
                        user: UserSchema,
                        wallet: WalletSchema,
                    }),
                },
            },
        },
        400: { description: "Invalid registration details" },
        409: { description: "Account already exists" },
    },
});
registry.registerPath({
    method: "post",
    path: "/api/v1/auth/logout",
    summary: "Log out",
    description: "Clears the authentication session cookie",
    responses: {
        204: { description: "Logged out successfully" },
    },
});
registry.registerPath({
    method: "get",
    path: "/api/v1/auth/me",
    summary: "Get current authenticated user",
    description: "Returns details of the currently logged-in user",
    responses: {
        200: {
            description: "Current user profile",
            content: {
                "application/json": {
                    schema: z.object({ user: UserSchema }),
                },
            },
        },
        401: { description: "Unauthorized" },
    },
});
// Wallets
registry.registerPath({
    method: "get",
    path: "/api/v1/wallets/me",
    summary: "Get current user wallet",
    description: "Returns wallet details associated with authenticated user",
    responses: {
        200: {
            description: "User wallet details",
            content: {
                "application/json": {
                    schema: z.object({ wallet: WalletSchema }),
                },
            },
        },
        401: { description: "Unauthorized" },
        404: { description: "Wallet not found" },
    },
});
// Ramp Quote
registry.registerPath({
    method: "post",
    path: "/api/v1/ramp/quote",
    summary: "Get live USDC/ZAR quote on Solana",
    description: "Fetches real-time price from VALR exchange and applies 2% ABC Pay platform fee",
    request: {
        body: {
            content: { "application/json": { schema: QuoteRequestSchema } },
        },
    },
    responses: {
        200: {
            description: "Live conversion quote",
            content: { "application/json": { schema: QuoteResponseSchema } },
        },
        400: { description: "Invalid quote parameters" },
    },
});
// On-Ramp
registry.registerPath({
    method: "post",
    path: "/api/v1/ramp/onramp",
    summary: "Initiate ZAR -> USDC on Solana on-ramp",
    description: "Creates on-ramp order, generates unique payment reference, and provides South African bank deposit instructions",
    request: {
        body: {
            content: { "application/json": { schema: OnrampRequestSchema } },
        },
    },
    responses: {
        201: {
            description: "On-ramp order initiated",
            content: { "application/json": { schema: OnrampResponseSchema } },
        },
        400: { description: "Invalid on-ramp parameters or invalid Solana address" },
    },
});
// Off-Ramp
registry.registerPath({
    method: "post",
    path: "/api/v1/ramp/offramp",
    summary: "Initiate USDC on Solana -> ZAR off-ramp",
    description: "Creates off-ramp order, returns platform Solana deposit address, and records destination bank details",
    request: {
        body: {
            content: { "application/json": { schema: OfframpRequestSchema } },
        },
    },
    responses: {
        201: {
            description: "Off-ramp order initiated",
            content: { "application/json": { schema: OfframpResponseSchema } },
        },
        400: { description: "Invalid off-ramp parameters" },
    },
});
// List Orders
registry.registerPath({
    method: "get",
    path: "/api/v1/ramp/orders",
    summary: "List ramp orders",
    description: "Returns list of on-ramp and off-ramp orders",
    parameters: [
        {
            name: "userId",
            in: "query",
            required: false,
            schema: { type: "string" },
            description: "Filter orders by user ID",
        },
    ],
    responses: {
        200: {
            description: "List of orders",
            content: {
                "application/json": {
                    schema: z.object({ orders: z.array(RampOrderRecordSchema) }),
                },
            },
        },
    },
});
// Get Order By ID
registry.registerPath({
    method: "get",
    path: "/api/v1/ramp/orders/{id}",
    summary: "Get ramp order status",
    description: "Fetches real-time status and details of a specific ramp order",
    parameters: [
        {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "Ramp Order UUID",
        },
    ],
    responses: {
        200: {
            description: "Ramp order details",
            content: { "application/json": { schema: RampOrderRecordSchema } },
        },
        404: { description: "Order not found" },
    },
});
// Settle Order
registry.registerPath({
    method: "post",
    path: "/api/v1/ramp/orders/{id}/settle",
    summary: "Settle order conversion & payout",
    description: "Triggers exchange conversion via VALR Simple Orders and initiates payout (Solana SPL USDC transfer or bank withdrawal)",
    parameters: [
        {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
            description: "Ramp Order UUID",
        },
    ],
    responses: {
        200: {
            description: "Order settled successfully",
            content: {
                "application/json": {
                    schema: z.object({
                        message: z.string(),
                        order: RampOrderRecordSchema,
                    }),
                },
            },
        },
        400: { description: "Settlement failed or invalid order state" },
    },
});
// Webhook
registry.registerPath({
    method: "post",
    path: "/api/v1/ramp/webhook/valr",
    summary: "VALR Webhook ingestion",
    description: "Receives deposit notifications from VALR with HMAC-SHA512 signature verification to trigger automatic settlement",
    responses: {
        200: {
            description: "Webhook processed",
            content: {
                "application/json": {
                    schema: z.object({
                        success: z.boolean(),
                        result: z.object({
                            processed: z.boolean(),
                            orderId: z.string().optional(),
                        }),
                    }),
                },
            },
        },
        400: { description: "Invalid signature or payload" },
    },
});
export function generateOpenApiSpec() {
    const generator = new OpenApiGeneratorV3(registry.definitions);
    return generator.generateDocument({
        openapi: "3.0.0",
        info: {
            title: "ABC Pay API - Solana & VALR Ramp",
            version: "1.0.0",
            description: "Production REST API for USDC <-> ZAR On-Ramp and Off-Ramp on Solana powered by VALR exchange with 2% ABC Pay platform markup.",
        },
        servers: [{ url: "/" }],
    });
}
