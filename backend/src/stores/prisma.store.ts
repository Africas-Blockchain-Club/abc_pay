import { prisma } from "../lib/prisma.js";
import { getUsdcBalance } from "../services/usdc.service.js";
import type {
  AppStore,
  BankAccountRecord,
  ConfirmPaymentInput,
  CreateBankAccountInput,
  CreatePaymentRequestInput,
  CreateRampOrderInput,
  CreateUserInput,
  PaymentRequestRecord,
  RampOrderRecord,
  RampStatus,
  RampType,
  UpdateRampOrderInput,
  UserRecord,
  WalletRecord,
} from "../types/store.js";
import { randomUUID } from "node:crypto";

import { Prisma } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

type DbUser = {
  id: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  walletAddress: string;
  role?: string;
  kycStatus: string;
  createdAt?: Date;
};

function mapUser(user: DbUser): UserRecord {
  return {
    id: user.id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    phoneNumber: user.phoneNumber,
    walletAddress: user.walletAddress,
    kycStatus: (user.kycStatus as UserRecord["kycStatus"]) || "NOT_STARTED",
    role: (user.role as UserRecord["role"]) || "USER",
    createdAt: user.createdAt ?? new Date(),
  };
}

function userToWallet(
  wallet: {
    id: string;
    userId: string;
    publicAddress: string | null;
    chain: string;
    stablecoin: string;
    balanceCached: Decimal;
    createdAt: Date;
  },
  balance?: string,
): WalletRecord {
  return {
    id: wallet.id,
    userId: wallet.userId,
    publicAddress: wallet.publicAddress,
    chain: wallet.chain,
    stablecoin: wallet.stablecoin,
    balanceCached: balance ?? wallet.balanceCached.toString(),
    createdAt: wallet.createdAt,
  };
}

function mapRampOrder(order: any): RampOrderRecord {
  return {
    id: order.id,
    userId: order.userId,
    type: order.type as RampType,
    status: order.status as RampStatus,
    fiatCurrency: order.fiatCurrency,
    fiatAmount: order.fiatAmount.toString(),
    cryptoAsset: order.cryptoAsset,
    cryptoAmount: order.cryptoAmount.toString(),
    exchangeRate: order.exchangeRate.toString(),
    platformFeeRate: order.platformFeeRate.toString(),
    platformFeeZar: order.platformFeeZar.toString(),
    network: order.network,
    destinationWalletAddress: order.destinationWalletAddress,
    sourceWalletAddress: order.sourceWalletAddress,
    cryptoDepositAddress: order.cryptoDepositAddress,
    txHash: order.txHash,
    bankName: order.bankName,
    accountNumber: order.accountNumber,
    branchCode: order.branchCode,
    accountHolderName: order.accountHolderName,
    fiatReference: order.fiatReference,
    valrOrderId: order.valrOrderId,
    valrWithdrawalId: order.valrWithdrawalId,
    errorMessage: order.errorMessage,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
  };
}

function mapBankAccount(account: any): BankAccountRecord {
  return {
    id: account.id,
    userId: account.userId,
    bankName: account.bankName,
    accountNumber: account.accountNumber,
    branchCode: account.branchCode,
    accountType: account.accountType,
    accountHolderName: account.accountHolderName,
    createdAt: account.createdAt,
    updatedAt: account.updatedAt,
  };
}

export class PrismaStore implements AppStore {
  async findUserByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    return user ? mapUser(user) : null;
  }

  async findUserById(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user ? mapUser(user) : null;
  }

  async findUserByPhoneNumber(phoneNumber: string) {
    const user = await prisma.user.findUnique({ where: { phoneNumber } });
    return user ? mapUser(user) : null;
  }

  async findUserByWalletAddress(walletAddress: string) {
    const user = await prisma.user.findFirst({ where: { walletAddress } });
    return user ? mapUser(user) : null;
  }

  async createUserWithWallet(input: CreateUserInput) {
  const { walletAddress, phoneNumber, name, surname, email } = input;

  const user = await prisma.user.create({
    data: {
      name: name,
      surname: surname,
      email: email.toLowerCase(),
      phoneNumber: phoneNumber,
      walletAddress: walletAddress, // Stores address in the User table
      role: "USER",
      kycStatus: "NOT_STARTED",
      // This nested 'create' inserts the row into the Wallet table
      wallet: {
        create: {
          publicAddress: walletAddress, // Matches 'publicAddress' in your schema
          chain: "EVM",                // Matches your default or override here
          stablecoin: "USDC",
          balanceCached: 0,
        },
      },
    },
    include: {
      wallet: true, // This ensures the wallet data is returned in the 'user' object
    },
  });

  // Since we used 'include', user.wallet now contains the stored address record
  if (!user.wallet) {
    throw new Error("Wallet was not created in database");
  }

  return {
    user: mapUser(user),
    wallet: userToWallet(user.wallet),
  };
}

  async getWalletByUserId(userId: string) {
  const wallet = await prisma.wallet.findUnique({
    where: { userId },
  });

  if (!wallet) {
    return null;
  }

  if (!wallet.publicAddress) {
    return userToWallet(wallet);
  }

  const liveBalance = await getUsdcBalance(wallet.publicAddress);

  await prisma.wallet.update({
    where: { id: wallet.id },
    data: {
      balanceCached: new Decimal(liveBalance),
    },
  });

  return userToWallet(wallet, liveBalance);
}

  async createRampOrder(input: CreateRampOrderInput): Promise<RampOrderRecord> {
    const order = await prisma.rampOrder.create({
      data: {
        userId: input.userId,
        type: input.type,
        status: input.status ?? "PENDING_DEPOSIT",
        fiatCurrency: input.fiatCurrency ?? "ZAR",
        fiatAmount: new Decimal(input.fiatAmount),
        cryptoAsset: input.cryptoAsset ?? "USDC",
        cryptoAmount: new Decimal(input.cryptoAmount),
        exchangeRate: new Decimal(input.exchangeRate),
        platformFeeRate: input.platformFeeRate ? new Decimal(input.platformFeeRate) : new Decimal(0.02),
        platformFeeZar: new Decimal(input.platformFeeZar),
        network: input.network ?? "SEPOLIA",
        destinationWalletAddress: input.destinationWalletAddress,
        sourceWalletAddress: input.sourceWalletAddress,
        cryptoDepositAddress: input.cryptoDepositAddress,
        bankName: input.bankName,
        accountNumber: input.accountNumber,
        branchCode: input.branchCode,
        accountHolderName: input.accountHolderName,
        fiatReference: input.fiatReference,
      },
    });
    return mapRampOrder(order);
  }

  async getRampOrderById(id: string): Promise<RampOrderRecord | null> {
    const order = await prisma.rampOrder.findUnique({ where: { id } });
    return order ? mapRampOrder(order) : null;
  }

  async findRampOrderByReference(reference: string): Promise<RampOrderRecord | null> {
    const order = await prisma.rampOrder.findUnique({ where: { fiatReference: reference } });
    return order ? mapRampOrder(order) : null;
  }

  async updateRampOrder(id: string, updates: UpdateRampOrderInput): Promise<RampOrderRecord> {
    const data: Prisma.RampOrderUpdateInput = {};
    if (updates.status !== undefined) data.status = updates.status;
    if (updates.cryptoDepositAddress !== undefined) data.cryptoDepositAddress = updates.cryptoDepositAddress;
    if (updates.txHash !== undefined) data.txHash = updates.txHash;
    if (updates.valrOrderId !== undefined) data.valrOrderId = updates.valrOrderId;
    if (updates.valrWithdrawalId !== undefined) data.valrWithdrawalId = updates.valrWithdrawalId;
    if (updates.errorMessage !== undefined) data.errorMessage = updates.errorMessage;

    const order = await prisma.rampOrder.update({
      where: { id },
      data,
    });
    return mapRampOrder(order);
  }

  async listRampOrders(userId?: string): Promise<RampOrderRecord[]> {
    const where: Prisma.RampOrderWhereInput = {};
    if (userId) where.userId = userId;
    const orders = await prisma.rampOrder.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
    return orders.map(mapRampOrder);
  }

  async createBankAccount(input: CreateBankAccountInput): Promise<BankAccountRecord> {
    const account = await prisma.bankAccount.create({
      data: {
        userId: input.userId,
        bankName: input.bankName,
        accountNumber: input.accountNumber,
        branchCode: input.branchCode,
        accountType: input.accountType ?? "CURRENT",
        accountHolderName: input.accountHolderName,
      },
    });
    return mapBankAccount(account);
  }

  async findBankAccountByUserId(userId: string): Promise<BankAccountRecord | null> {
    const account = await prisma.bankAccount.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
    return account ? mapBankAccount(account) : null;
  }

  private paymentRequests = new Map<string, PaymentRequestRecord>();

  async createPaymentRequest(input: CreatePaymentRequestInput): Promise<PaymentRequestRecord> {
    const now = new Date();
    const request: PaymentRequestRecord = {
      id: `abc_pay_req_${randomUUID().slice(0, 8)}`,
      userId: input.userId,
      userName: input.userName,
      recipientAddress: input.recipientAddress,
      amountUsdc: input.amountUsdc,
      amountZar: input.amountZar ?? null,
      network: input.network ?? "SEPOLIA",
      token: input.token ?? "USDC",
      tokenAddress: input.tokenAddress ?? "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
      description: input.description ?? null,
      status: "PENDING",
      txHash: null,
      payerAddress: null,
      createdAt: now,
      updatedAt: now,
    };
    this.paymentRequests.set(request.id, request);
    return request;
  }

  async getPaymentRequestById(id: string): Promise<PaymentRequestRecord | null> {
    return this.paymentRequests.get(id) ?? null;
  }

  async confirmPaymentRequest(id: string, updates: ConfirmPaymentInput): Promise<PaymentRequestRecord> {
    const req = this.paymentRequests.get(id);
    if (!req) {
      throw new Error(`Payment request ${id} not found`);
    }

    const updated: PaymentRequestRecord = {
      ...req,
      status: "CONFIRMED",
      txHash: updates.txHash,
      payerAddress: updates.payerAddress,
      amountUsdc: updates.amountUsdc ?? req.amountUsdc,
      updatedAt: new Date(),
    };
    this.paymentRequests.set(id, updated);

    // Persist to Prisma Transaction table so it's recorded permanently in PostgreSQL
    try {
      await prisma.transaction.create({
        data: {
          userId: req.userId,
          direction: "RECEIVE",
          status: "CONFIRMED",
          fiatAmount: new Decimal(req.amountZar || 0),
          fiatCurrency: "ZAR",
          cryptoAmount: new Decimal(updates.amountUsdc || req.amountUsdc),
          cryptoAsset: "USDC",
          chain: req.network,
          valrMarketRate: new Decimal(18.5),
          markupBps: 200,
          finalRate: new Decimal(18.5),
          depositTxHash: updates.txHash,
          payoutRef: updates.payerAddress,
        },
      });
    } catch (err) {
      console.warn("Could not insert transaction row in PostgreSQL:", (err as Error).message);
    }

    // Refresh wallet balance from blockchain
    try {
      const wallet = await prisma.wallet.findUnique({ where: { userId: req.userId } });
      if (wallet && wallet.publicAddress) {
        const liveBalance = await getUsdcBalance(wallet.publicAddress);
        await prisma.wallet.update({
          where: { id: wallet.id },
          data: { balanceCached: new Decimal(liveBalance) },
        });
      }
    } catch (err) {
      console.warn("Could not refresh wallet balance cache:", (err as Error).message);
    }

    return updated;
  }

  async listPaymentRequests(userId: string): Promise<PaymentRequestRecord[]> {
    return [...this.paymentRequests.values()]
      .filter((r) => r.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}

