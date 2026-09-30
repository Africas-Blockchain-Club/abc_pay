import { Router } from "express";
import { z } from "zod";
import type { AppStore } from "../types/store.js";
import { requireAuth, type AuthenticatedRequest } from "../middleware/auth.middleware.js";
import { USDC_ADDRESS, verifyUsdcTransfer } from "../services/usdc.service.js";

const createPaymentRequestSchema = z.object({
  amountUsdc: z.union([z.string(), z.number()]).refine((val) => {
    const num = typeof val === "string" ? parseFloat(val) : val;
    return !isNaN(num) && num > 0;
  }, "Amount must be a positive number"),
  amountZar: z.union([z.string(), z.number()]).optional(),
  description: z.string().trim().max(140).optional(),
});

const confirmPaymentSchema = z.object({
  txHash: z.string().trim().min(10, "A valid transaction hash is required"),
  payerAddress: z.string().trim().min(10, "A valid payer address is required"),
});

export function createPaymentRouter(store: AppStore): Router {
  const router = Router();

  /**
   * POST /api/v1/payments/request
   * Creates an ERC-20 USDC payment request for the logged-in user.
   */
  router.post("/request", requireAuth, async (req: AuthenticatedRequest, res, next) => {
    try {
      const parsed = createPaymentRequestSchema.parse(req.body);
      const user = await store.findUserById(req.auth!.userId);

      if (!user) {
        res.status(404).json({ message: "User account not found" });
        return;
      }

      if (!user.walletAddress) {
        res.status(400).json({ message: "User account does not have a linked wallet address" });
        return;
      }

      const numAmount = typeof parsed.amountUsdc === "string" ? parseFloat(parsed.amountUsdc) : parsed.amountUsdc;
      const formattedUsdc = numAmount.toFixed(2);
      const formattedZar = parsed.amountZar ? String(parsed.amountZar) : null;

      const paymentRequest = await store.createPaymentRequest({
        userId: user.id,
        userName: `${user.name} ${user.surname}`.trim(),
        recipientAddress: user.walletAddress,
        amountUsdc: formattedUsdc,
        amountZar: formattedZar,
        network: "SEPOLIA",
        token: "USDC",
        tokenAddress: USDC_ADDRESS,
        description: parsed.description,
      });

      // EIP-681 standard URI for ERC-20 transfer:
      const rawUnits = (BigInt(Math.round(numAmount * 1e6))).toString();
      const eip681Url = `ethereum:${USDC_ADDRESS}@11155111/transfer?address=${user.walletAddress}&uint256=${rawUnits}`;

      res.status(201).json({
        ...paymentRequest,
        eip681Url,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.issues[0]?.message ?? "Invalid payment request", errors: error.issues });
        return;
      }
      next(error);
    }
  });

  /**
   * GET /api/v1/payments/request/:id
   * Public endpoint: reads payment request details by ID (for person scanning QR).
   */
  router.get("/request/:id", async (req, res, next) => {
    try {
      const paymentRequest = await store.getPaymentRequestById(req.params.id);

      if (!paymentRequest) {
        res.status(404).json({ message: "Payment request not found" });
        return;
      }

      res.json(paymentRequest);
    } catch (error) {
      next(error);
    }
  });

  /**
   * POST /api/v1/payments/request/:id/confirm
   * Public endpoint: Confirms and cryptographically verifies that the payer
   * executed the ERC-20 USDC transfer on Sepolia.
   */
  router.post("/request/:id/confirm", async (req, res, next) => {
    try {
      const parsed = confirmPaymentSchema.parse(req.body);
      const paymentRequest = await store.getPaymentRequestById(req.params.id);

      if (!paymentRequest) {
        res.status(404).json({ message: "Payment request not found" });
        return;
      }

      if (paymentRequest.status === "CONFIRMED") {
        res.json({
          message: "Payment already confirmed",
          payment: paymentRequest,
        });
        return;
      }

      // Verify on-chain on Sepolia testnet
      const verification = await verifyUsdcTransfer(
        parsed.txHash,
        paymentRequest.recipientAddress,
        paymentRequest.amountUsdc
      );

      if (!verification.verified) {
        res.status(400).json({
          message: "Blockchain transaction verification failed",
          reason: verification.reason,
        });
        return;
      }

      const confirmed = await store.confirmPaymentRequest(paymentRequest.id, {
        txHash: parsed.txHash,
        payerAddress: parsed.payerAddress || verification.from || "Unknown",
        amountUsdc: verification.amount ?? paymentRequest.amountUsdc,
      });

      res.json({
        message: "Payment confirmed successfully",
        payment: confirmed,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.issues[0]?.message ?? "Invalid confirmation input", errors: error.issues });
        return;
      }
      next(error);
    }
  });

  /**
   * GET /api/v1/payments/history
   * Lists payment requests created by the authenticated user.
   */
  router.get("/history", requireAuth, async (req: AuthenticatedRequest, res, next) => {
    try {
      const history = await store.listPaymentRequests(req.auth!.userId);
      res.json({ payments: history });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
