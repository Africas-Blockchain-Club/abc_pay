import { Router } from "express";
import { z } from "zod";
import { isValidEvmAddress, RampService } from "../services/ramp.service.js";
// Verification endpoint
import { verifyUsdcTransfer } from "../services/usdc.service.js";

const quoteSchema = z.object({
  fromAsset: z.enum(["ZAR", "USDC"]),
  toAsset: z.enum(["ZAR", "USDC"]),
  amount: z.union([z.string(), z.number()]).refine((val) => {
    const num = typeof val === "string" ? parseFloat(val) : val;
    return !isNaN(num) && num > 0;
  }, "Amount must be a valid positive number"),
});

const onrampSchema = z.object({
  amountZar: z.union([z.string(), z.number()]).refine((val) => {
    const num = typeof val === "string" ? parseFloat(val) : val;
    return !isNaN(num) && num >= 50;
  }, "Minimum on-ramp amount is R50.00"),
  destinationWalletAddress: z
    .string()
    .trim()
    .refine(isValidEvmAddress, "Must be a valid Base58 Solana wallet address"),
  userId: z.string().optional(),
});

const offrampSchema = z.object({
  amountUsdc: z.union([z.string(), z.number()]).refine((val) => {
    const num = typeof val === "string" ? parseFloat(val) : val;
    return !isNaN(num) && num >= 5;
  }, "Minimum off-ramp amount is 5.00 USDC"),
  sourceWalletAddress: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || isValidEvmAddress(val), "Invalid source Solana wallet address"),
  bankDetails: z.object({
    bankName: z.string().trim().min(2, "Bank name required"),
    accountNumber: z.string().trim().min(5, "Valid account number required"),
    branchCode: z.string().trim().min(3, "Valid branch code required"),
    accountHolderName: z.string().trim().min(2, "Account holder name required"),
    accountType: z.string().trim().default("CURRENT"),
  }),
  userId: z.string().optional(),
});

export function createRampRouter(rampService: RampService): Router {
  const router = Router();

  /**
   * POST /api/v1/ramp/quote
   * Fetches real-time market quote with 2% ABC Pay platform markup.
   */
  router.post("/quote", async (req, res, next) => {
    try {
      const parsed = quoteSchema.parse(req.body);
      const quote = await rampService.getQuote({
        fromAsset: parsed.fromAsset,
        toAsset: parsed.toAsset,
        amount: parsed.amount,
      });
      res.json(quote);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.issues[0]?.message ?? "Invalid quote request", errors: error.issues });
        return;
      }
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        return;
      }
      next(error);
    }
  });

  /**
   * POST /api/v1/ramp/onramp
   * Initiates ZAR -> USDC on Solana on-ramp order.
   */
  router.post("/onramp", async (req, res, next) => {
    try {
      const parsed = onrampSchema.parse(req.body);
      const order = await rampService.createOnrampOrder({
        amountZar: parsed.amountZar,
        destinationWalletAddress: parsed.destinationWalletAddress,
        userId: parsed.userId,
      });
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.issues[0]?.message ?? "Invalid on-ramp request", errors: error.issues });
        return;
      }
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        return;
      }
      next(error);
    }
  });

  /**
   * POST /api/v1/ramp/offramp
   * Initiates USDC on Solana -> ZAR off-ramp order.
   */
  router.post("/offramp", async (req, res, next) => {
    try {
      const parsed = offrampSchema.parse(req.body);
      const order = await rampService.createOfframpOrder({
        amountUsdc: parsed.amountUsdc,
        sourceWalletAddress: parsed.sourceWalletAddress,
        bankDetails: parsed.bankDetails,
        userId: parsed.userId,
      });
      res.status(201).json(order);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: error.issues[0]?.message ?? "Invalid off-ramp request", errors: error.issues });
        return;
      }
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        return;
      }
      next(error);
    }
  });

  /**
   * GET /api/v1/ramp/orders
   * Lists ramp orders.
   */
  router.get("/orders", async (req, res, next) => {
    try {
      const userId = typeof req.query.userId === "string" ? req.query.userId : undefined;
      const orders = await rampService.listOrders(userId);
      res.json({ orders });
    } catch (error) {
      next(error);
    }
  });

  /**
   * GET /api/v1/ramp/orders/:id
   * Fetches real-time status and details of an order.
   */
  router.get("/orders/:id", async (req, res, next) => {
    try {
      const order = await rampService.getOrderById(req.params.id);
      res.json(order);
    } catch (error) {
      if ((error as Error).message.includes("not found")) {
        res.status(404).json({ message: (error as Error).message });
        return;
      }
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
        return;
      }
      next(error);
    }
  });

  /**
 * POST /api/v1/ramp/orders/:id/verify-deposit
 *
 * Verifies a Sepolia USDC transaction against the existing off-ramp order.
 */
  router.post("/orders/:id/verify-deposit", async (req, res, next) => {
    try {
      const txHashSchema = z.object({
        txHash: z
          .string()
          .trim()
          .regex(/^0x[a-fA-F0-9]{64}$/, "Invalid Ethereum transaction hash"),
      });

      const parsed = txHashSchema.parse(req.body);

      const order = await rampService.getOrderById(req.params.id);

      if (order.type !== "OFFRAMP") {
        res.status(400).json({
          message: "Only off-ramp orders can receive USDC deposits",
        });
        return;
      }

      if (order.status !== "PENDING_DEPOSIT") {
        res.status(400).json({
          message: `Order cannot receive a deposit in status ${order.status}`,
        });
        return;
      }

      if (!order.cryptoDepositAddress) {
        res.status(400).json({
          message: "Order does not have a crypto deposit address",
        });
        return;
      }

      const verification = await verifyUsdcTransfer(
        parsed.txHash,
        order.cryptoDepositAddress,
        order.cryptoAmount,
        order.sourceWalletAddress ?? undefined,
      );

      if (!verification.verified) {
        res.status(400).json({
          message: "USDC deposit could not be verified",
          verification,
        });
        return;
      }

      const updatedOrder = await rampService.markDepositReceived(
        order.id,
        parsed.txHash,
      );

      res.json({
        message: "USDC deposit verified successfully",
        verification,
        order: updatedOrder,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          message: "Invalid transaction verification request",
          errors: error.issues,
        });
        return;
      }

      if (error instanceof Error) {
        res.status(400).json({
          message: error.message,
        });
        return;
      }

      next(error);
    }
  });

  /**
   * POST /api/v1/ramp/orders/:id/settle
   * Manually or programmatically triggers order settlement.
   */
  router.post("/orders/:id/settle", async (req, res, next) => {
    try {
      const settledOrder = await rampService.executeSettlement(req.params.id);
      res.json({
        message: "Order settlement executed successfully",
        order: settledOrder,
      });
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  });

  /**
   * POST /api/v1/ramp/webhook/valr
   * Ingests deposit notifications from VALR webhook.
   */
  router.post("/webhook/valr", async (req, res) => {
    try {
      const signature = req.headers["x-valr-signature"] as string | undefined;
      const timestamp = req.headers["x-valr-timestamp"]
        ? parseInt(req.headers["x-valr-timestamp"] as string, 10)
        : undefined;

      const result = await rampService.handleValrWebhook(req.body, signature, timestamp);
      res.json({ success: true, result });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  });

  return router;
}
