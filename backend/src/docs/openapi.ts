import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
  extendZodWithOpenApi,
} from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();

export const RegisterInputSchema = registry.register(
  "RegisterInput",
  z.object({
    name: z.string().trim().min(2).max(80).openapi({ example: "John" }),
    surname: z.string().trim().min(2).max(80).openapi({ example: "Doe" }),
    email: z.string().email().openapi({ example: "johndoe@example.com" }),
    phoneNumber: z.string().trim().min(10).max(10).openapi({ example: "0812345678" }),
    walletAddress: z.string().trim().openapi({ example: "0x71C...3a9" }),
  })
);
registry.registerPath({
  method: "post",
  path: "/api/v1/auth/register",
  summary: "Register a new user and wallet",
  description: "Creates an account",
  request: {
    body: {
      content: {
        "application/json": {
          schema: RegisterInputSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "User successfully created",
      content: {
        "application/json": {
          schema: z.object({
            user: z.object({
              id: z.string(),
              name: z.string(),
              surname: z.string(),
              email: z.string(),
              phoneNumber: z.string(),
              walletAddress: z.string(),
              kycStatus: z.string(),
              role: z.string(),
              createdAt: z.date(),
            }),
            wallet: z.record(z.any(), z.any()),
          }),
        },
      },
    },
    400: { description: "Invalid registration details" },
    409: { description: "Email already exists" },
  },
});

export function generateOpenApiSpec() {
  const generator = new OpenApiGeneratorV3(registry.definitions);
  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "ABC Pay API",
      version: "1.0.0",
      description: "Interactive documentation powered by OpenAPI & Swagger UI"
    },
    servers: [{ url: "/" }],
  });
}