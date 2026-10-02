import { randomUUID } from "node:crypto";
import type { AppStore, RampOrderRecord, RampStatus } from "../types/store.js";
import { ValrClient } from "../integrations/exchanges/valr.client.js";
import { calculateConversionQuote } from "./conversion.service.js";

// export function isValidSolanaAddress(address: string): boolean {
//   return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
// } We'll revert once we 4id a way to integrate real-world application
export function isValidEvmAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

export type QuoteRequest = {
  fromAsset: "ZAR" | "USDC";
  toAsset: "ZAR" | "USDC";
  amount: string | number;
};

export type QuoteResponse = {
  quoteId: string;
  pair: string;
  side: "BUY" | "SELL";
  network: "SEPOLIA";
  baseRate: string;
  rate: string;
  sourceAmount: string;
  sourceAsset: "ZAR" | "USDC";
  destinationAmount: string;
  destinationAsset: "ZAR" | "USDC";
  platformFeeZar: string;
  platformFeeRate: string;
  expiresAt: string;
};

export type CreateOnrampInput = {
  amountZar: string | number;
  destinationWalletAddress: string;
  userId?: string;
};

export type OnrampResponse = {
  orderId: string;
  type: "ONRAMP";
  status: RampStatus;
  fiatAmount: string;
  fiatCurrency: "ZAR";
  cryptoAsset: "USDC";
  cryptoAmount: string;
  exchangeRate: string;
  platformFeeZar: string;
  network: "SEPOLIA";
  destinationAddress: string;
  fiatReference: string;
  depositInstructions: {
    bankName: string;
    accountNumber: string;
    branchCode: string;
    accountType: string;
    paymentReference: string;
  };
  expiresAt: string;
};

export type BankDetailsInput = {
  bankName: string;
  accountNumber: string;
  branchCode: string;
  accountHolderName: string;
  accountType?: string;
};

export type CreateOfframpInput = {
  amountUsdc: string | number;
  sourceWalletAddress?: string;
  bankDetails: BankDetailsInput;
  userId?: string;
};

export type OfframpResponse = {
  orderId: string;
  type: "OFFRAMP";
  status: RampStatus;
  cryptoAsset: "USDC";
  cryptoAmount: string;
  network: "SEPOLIA";
  fiatCurrency: "ZAR";
  estimatedFiatAmount: string;
  exchangeRate: string;
  platformFeeZar: string;
  cryptoDepositAddress: string | null;
  bankDetails: {
    bankName: string;
    accountNumber: string;
    accountHolderName: string;
  };
  expiresAt: string;
};

const PLATFORM_FEE_RATE = 0.02;

export class RampService {
  public valrClient: ValrClient;

  constructor(private store: AppStore, valrClient?: ValrClient) {
    this.valrClient = valrClient || new ValrClient();
  }

  async getQuote(request: QuoteRequest): Promise<QuoteResponse> {
    if (request.fromAsset === request.toAsset) {
      throw new Error("Source and destination assets must differ");
    }

    const numAmount =
      typeof request.amount === "string"
        ? parseFloat(request.amount)
        : request.amount;

    if (isNaN(numAmount) || numAmount <= 0) {
      throw new Error("Invalid quote amount");
    }

    const quoteId = randomUUID();
    const expiresAt = new Date(Date.now() + 60 * 1000).toISOString();

    // ZAR → USDC
    if (request.fromAsset === "ZAR" && request.toAsset === "USDC") {
      const marketSummary =
        await this.valrClient.getMarketSummary("USDCZAR");

      const askPrice = parseFloat(marketSummary.askPrice);

      const platformFeeZar = numAmount * PLATFORM_FEE_RATE;
      const netZar = numAmount - platformFeeZar;

      const destinationAmount = (netZar / askPrice).toFixed(6);
      const effectiveRate = (
        numAmount / parseFloat(destinationAmount)
      ).toFixed(4);

      return {
        quoteId,
        pair: "USDCZAR",
        side: "BUY",
        network: "SEPOLIA",
        baseRate: askPrice.toFixed(4),
        rate: effectiveRate,
        sourceAmount: numAmount.toFixed(2),
        sourceAsset: "ZAR",
        destinationAmount,
        destinationAsset: "USDC",
        platformFeeZar: platformFeeZar.toFixed(2),
        platformFeeRate: "0.0200",
        expiresAt,
      };
    }

    // USDC → ZAR
    if (request.fromAsset === "USDC" && request.toAsset === "ZAR") {
      const conversion = calculateConversionQuote({
        cryptoAmount: String(numAmount),
        exchangeRate: "18.00",
        feeRate: "0.02",
      });

      return {
        quoteId,
        pair: "USDCZAR",
        side: "SELL",
        network: "SEPOLIA",
        baseRate: conversion.exchangeRate,
        rate: conversion.exchangeRate,
        sourceAmount: conversion.cryptoAmount,
        sourceAsset: "USDC",
        destinationAmount: conversion.netFiatAmount,
        destinationAsset: "ZAR",
        platformFeeZar: conversion.feeAmount,
        platformFeeRate: conversion.feeRate,
        expiresAt,
      };
    }

    throw new Error(
      `Unsupported pair ${request.fromAsset}/${request.toAsset}. Only USDC/ZAR supported.`,
    );
  }

  async createOnrampOrder(
    input: CreateOnrampInput,
  ): Promise<OnrampResponse> {
    if (!isValidEvmAddress(input.destinationWalletAddress)) {
      throw new Error("Invalid destination wallet address");
    }

    const quote = await this.getQuote({
      fromAsset: "ZAR",
      toAsset: "USDC",
      amount: input.amountZar,
    });

    const fiatReference = `ABC-VALR-${Math.floor(
      100000 + Math.random() * 900000,
    )}`;

    const order = await this.store.createRampOrder({
      userId: input.userId,
      type: "ONRAMP",
      status: "PENDING_DEPOSIT",
      fiatCurrency: "ZAR",
      fiatAmount: quote.sourceAmount,
      cryptoAsset: "USDC",
      cryptoAmount: quote.destinationAmount,
      exchangeRate: quote.rate,
      platformFeeRate: quote.platformFeeRate,
      platformFeeZar: quote.platformFeeZar,
      network: "SEPOLIA",
      destinationWalletAddress: input.destinationWalletAddress,
      fiatReference,
    });

    return {
      orderId: order.id,
      type: "ONRAMP",
      status: order.status,
      fiatAmount: order.fiatAmount,
      fiatCurrency: "ZAR",
      cryptoAsset: "USDC",
      cryptoAmount: order.cryptoAmount,
      exchangeRate: order.exchangeRate,
      platformFeeZar: order.platformFeeZar,
      network: "SEPOLIA",
      destinationAddress: input.destinationWalletAddress,
      fiatReference,
      depositInstructions: {
        bankName: "Nedbank",
        accountNumber: "1204051305",
        branchCode: "198765",
        accountType: "Current",
        paymentReference: fiatReference,
      },
      expiresAt: quote.expiresAt,
    };
  }

  async createOfframpOrder(
    input: CreateOfframpInput,
  ): Promise<OfframpResponse> {
    if (
      input.sourceWalletAddress &&
      !isValidEvmAddress(input.sourceWalletAddress)
    ) {
      throw new Error("Invalid source wallet address");
    }

    const quote = await this.getQuote({
      fromAsset: "USDC",
      toAsset: "ZAR",
      amount: input.amountUsdc,
    });

     // Offramp service
    const cryptoDepositAddress = process.env.SEPOLIA_USDC_RECEIVING_ADDRESS;

    if (!cryptoDepositAddress) {
      throw new Error(
        "SEPOLIA_USDC_RECEIVING_ADDRESS is not configured",
      );
    }

    const order = await this.store.createRampOrder({
      userId: input.userId,
      type: "OFFRAMP",
      status: "PENDING_DEPOSIT",
      fiatCurrency: "ZAR",
      fiatAmount: quote.destinationAmount,
      cryptoAsset: "USDC",
      cryptoAmount: quote.sourceAmount,
      exchangeRate: quote.rate,
      platformFeeRate: quote.platformFeeRate,
      platformFeeZar: quote.platformFeeZar,
      network: "SEPOLIA",
      sourceWalletAddress: input.sourceWalletAddress,
      cryptoDepositAddress,
      bankName: input.bankDetails.bankName,
      accountNumber: input.bankDetails.accountNumber,
      branchCode: input.bankDetails.branchCode,
      accountHolderName: input.bankDetails.accountHolderName,
    });

    return {
      orderId: order.id,
      type: "OFFRAMP",
      status: order.status,
      cryptoAsset: "USDC",
      cryptoAmount: order.cryptoAmount,
      network: "SEPOLIA",
      fiatCurrency: "ZAR",
      estimatedFiatAmount: order.fiatAmount,
      exchangeRate: order.exchangeRate,
      platformFeeZar: order.platformFeeZar,
      cryptoDepositAddress,
      bankDetails: {
        bankName: input.bankDetails.bankName,
        accountNumber: `******${input.bankDetails.accountNumber.slice(-4)}`,
        accountHolderName: input.bankDetails.accountHolderName,
      },
      expiresAt: quote.expiresAt,
    };
  }

  async getOrderById(id: string): Promise<RampOrderRecord> {
    const order = await this.store.getRampOrderById(id);

    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    return order;
  }

  // Mark the deposit when recieved
  async markDepositReceived(
    orderId: string,
    txHash: string,
  ): Promise<RampOrderRecord> {
    const order = await this.getOrderById(orderId);

    if (order.type !== "OFFRAMP") {
      throw new Error("Only off-ramp orders can receive crypto deposits");
    }

    if (order.status !== "PENDING_DEPOSIT") {
      throw new Error(
        `Order cannot receive a deposit in status ${order.status}`,
      );
    }

    return await this.store.updateRampOrder(orderId, {
      status: "PAYMENT_RECEIVED",
      txHash,
    });
  }

  async listOrders(userId?: string): Promise<RampOrderRecord[]> {
    return this.store.listRampOrders(userId);
  }

  async executeSettlement(orderId: string): Promise<RampOrderRecord> {
  const order = await this.getOrderById(orderId);

  if (order.status === "COMPLETED") {
    return order;
  }

  try {
    if (order.type === "OFFRAMP" && order.status !== "PAYMENT_RECEIVED") {
      throw new Error(
        `Off-ramp order must have a verified crypto deposit before settlement. Current status: ${order.status}`,
      );
    }

    await this.store.updateRampOrder(orderId, {
      status: "CONVERTING",
    });

    if (order.type === "ONRAMP") {
      let valrOrderId = "VALR-SWAP-ONRAMP-SIM";

      try {
        const swap = await this.valrClient.createSimpleOrder(
          "USDCZAR",
          order.fiatAmount,
          "ZAR",
          "BUY",
        );

        if (swap?.id) {
          valrOrderId = swap.id;
        }
      } catch {
        // Dev mode fallback
      }

      let valrWithdrawalId = "VALR-TX-SEPOLIA-SIM";

      if (order.destinationWalletAddress) {
        try {
          const withdrawal = await this.valrClient.withdrawCrypto(
            "USDC",
            order.cryptoAmount,
            order.destinationWalletAddress,
            "SEPOLIA",
          );

          if (withdrawal?.id) {
            valrWithdrawalId = withdrawal.id;
          }
        } catch {
          // Dev mode fallback
        }
      }

      return await this.store.updateRampOrder(orderId, {
        status: "COMPLETED",
        valrOrderId,
        valrWithdrawalId,
      });
    }

    // OFFRAMP: convert USDC -> ZAR and simulate bank payout
    await this.store.updateRampOrder(orderId, {
      status: "SETTLING",
    });

    const cryptoAmount = Number(order.cryptoAmount);
    const exchangeRate = Number(order.exchangeRate);
    const feeRate = Number(order.platformFeeRate);

    const grossFiatAmount = cryptoAmount * exchangeRate;
    const platformFee = grossFiatAmount * feeRate;
    const netFiatAmount = grossFiatAmount - platformFee;

    console.log("Mock bank payout:", {
      orderId,
      cryptoAmount,
      exchangeRate,
      grossFiatAmount,
      platformFee,
      netFiatAmount,
      bankName: order.bankName,
      accountNumber: order.accountNumber,
      accountHolderName: order.accountHolderName,
    });

    return await this.store.updateRampOrder(orderId, {
      status: "COMPLETED",
      fiatAmount: netFiatAmount.toFixed(2),
      platformFeeZar: platformFee.toFixed(2),
    });
  } catch (error) {
    await this.store.updateRampOrder(orderId, {
      status: "FAILED",
      errorMessage: (error as Error).message,
    });

    throw error;
  }
}

  async handleValrWebhook(
    payload: any,
    signature?: string,
    timestamp?: number,
  ): Promise<{ processed: boolean; orderId?: string }> {
    if (signature && timestamp) {
      const isValid = this.valrClient.verifyWebhookSignature(
        payload,
        signature,
        timestamp,
      );

      if (!isValid) {
        throw new Error("Invalid webhook signature");
      }
    }

    const eventType = payload?.type || payload?.eventType;

    if (eventType === "FIAT_DEPOSIT" || payload?.data?.paymentReference) {
      const ref =
        payload?.data?.paymentReference || payload?.paymentReference;

      if (ref) {
        const order = await this.store.findRampOrderByReference(ref);

        if (order && order.status === "PENDING_DEPOSIT") {
          await this.executeSettlement(order.id);
          return {
            processed: true,
            orderId: order.id,
          };
        }
      }
    }

    return {
      processed: false,
    };
  }
}