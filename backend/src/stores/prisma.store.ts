import { prisma } from "../lib/prisma.js";
import type {
  AppStore,
  BankAccountRecord,
  CreateBankAccountInput,
  CreateRampOrderInput,
  CreateUserInput,
  RampOrderRecord,
  RampStatus,
  RampType,
  UpdateRampOrderInput,
  UserRecord,
  WalletRecord,
} from "../types/store.js";
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

function userToWallet(user: { id: string; walletAddress: string }): WalletRecord {
  return {
    id: user.id,
    userId: user.id,
    publicAddress: user.walletAddress,
    chain: "EVM",
    stablecoin: "USDC",
    balanceCached: "0",
    createdAt: new Date(),
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
    const walletAddress = input.walletAddress;
    const phoneNumber = input.phoneNumber;

    const user = await prisma.user.create({
      data: {
        name: input.name,
        surname: input.surname,
        email: input.email.toLowerCase(),
        phoneNumber: phoneNumber,
        walletAddress: walletAddress,
        role: "USER",
        createdAt: new Date(),
        kycStatus: "NOT_STARTED",
      },
    });

    return { user: mapUser(user), wallet: userToWallet(user) };
  }

  async getWalletByUserId(userId: string) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    return user ? userToWallet(user) : null;
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
        network: input.network ?? "SOL",
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
}
