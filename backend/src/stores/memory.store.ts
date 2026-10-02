import { randomUUID } from "node:crypto";
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
  UpdateRampOrderInput,
  UserRecord,
  WalletRecord,
} from "../types/store.js";

export class MemoryStore implements AppStore {
  private users = new Map<string, UserRecord>();
  private wallets = new Map<string, WalletRecord>();
  private rampOrders = new Map<string, RampOrderRecord>();
  private bankAccounts = new Map<string, BankAccountRecord>();
  private paymentRequests = new Map<string, PaymentRequestRecord>();

  async findUserByEmail(email: string) {
    return [...this.users.values()].find((user) => user.email === email.toLowerCase()) ?? null;
  }

  async findUserById(id: string) {
    return this.users.get(id) ?? null;
  }

  async findUserByPhoneNumber(phoneNumber: string) {
    return [...this.users.values()].find((user) => user.phoneNumber === phoneNumber) ?? null;
  }

  async findUserByWalletAddress(walletAddress: string) {
    return (
      [...this.users.values()].find(
        (user) => user.walletAddress?.toLowerCase() === walletAddress.toLowerCase()
      ) ?? null
    );
  }

  async createUserWithWallet(input: CreateUserInput) {
    const now = new Date();
    const user: UserRecord = {
      id: randomUUID(),
      name: input.name,
      surname: input.surname,
      email: input.email.toLowerCase(),
      phoneNumber: input.phoneNumber,
      walletAddress: input.walletAddress,
      kycStatus: "NOT_STARTED",
      role: "USER",
      createdAt: now,
    };
    const wallet: WalletRecord = {
      id: randomUUID(),
      userId: user.id,
      publicAddress: null,
      chain: "EVM",
      stablecoin: "USDC",
      balanceCached: "0",
      createdAt: now,
    };

    this.users.set(user.id, user);
    this.wallets.set(user.id, wallet);
    return { user, wallet };
  }

  async getWalletByUserId(userId: string) {
    return this.wallets.get(userId) ?? null;
  }

  async createRampOrder(input: CreateRampOrderInput): Promise<RampOrderRecord> {
    const now = new Date();
    const order: RampOrderRecord = {
      id: randomUUID(),
      userId: input.userId ?? null,
      type: input.type,
      status: input.status ?? "PENDING_DEPOSIT",
      fiatCurrency: input.fiatCurrency ?? "ZAR",
      fiatAmount: input.fiatAmount,
      cryptoAsset: input.cryptoAsset ?? "USDC",
      cryptoAmount: input.cryptoAmount,
      exchangeRate: input.exchangeRate,
      platformFeeRate: input.platformFeeRate ?? "0.02",
      platformFeeZar: input.platformFeeZar,
      network: input.network ?? "SOL",
      destinationWalletAddress: input.destinationWalletAddress ?? null,
      sourceWalletAddress: input.sourceWalletAddress ?? null,
      cryptoDepositAddress: input.cryptoDepositAddress ?? null,
      txHash: null,
      bankName: input.bankName ?? null,
      accountNumber: input.accountNumber ?? null,
      branchCode: input.branchCode ?? null,
      accountHolderName: input.accountHolderName ?? null,
      fiatReference: input.fiatReference ?? null,
      valrOrderId: null,
      valrWithdrawalId: null,
      errorMessage: null,
      createdAt: now,
      updatedAt: now,
    };
    this.rampOrders.set(order.id, order);
    return order;
  }

  async getRampOrderById(id: string): Promise<RampOrderRecord | null> {
    return this.rampOrders.get(id) ?? null;
  }

  async findRampOrderByReference(reference: string): Promise<RampOrderRecord | null> {
    return (
      [...this.rampOrders.values()].find((order) => order.fiatReference === reference) ?? null
    );
  }

  async updateRampOrder(id: string, updates: UpdateRampOrderInput): Promise<RampOrderRecord> {
    const existing = this.rampOrders.get(id);
    if (!existing) {
      throw new Error(`Ramp order ${id} not found`);
    }
    const updated: RampOrderRecord = {
      ...existing,
      ...updates,
      updatedAt: new Date(),
    };
    this.rampOrders.set(id, updated);
    return updated;
  }

  async listRampOrders(userId?: string): Promise<RampOrderRecord[]> {
    const orders = [...this.rampOrders.values()];
    if (userId) {
      return orders.filter((o) => o.userId === userId).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
    return orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createBankAccount(input: CreateBankAccountInput): Promise<BankAccountRecord> {
    const now = new Date();
    const account: BankAccountRecord = {
      id: randomUUID(),
      userId: input.userId ?? null,
      bankName: input.bankName,
      accountNumber: input.accountNumber,
      branchCode: input.branchCode,
      accountType: input.accountType ?? "CURRENT",
      accountHolderName: input.accountHolderName ?? null,
      createdAt: now,
      updatedAt: now,
    };
    this.bankAccounts.set(account.id, account);
    return account;
  }

  async findBankAccountByUserId(userId: string): Promise<BankAccountRecord | null> {
    return (
      [...this.bankAccounts.values()]
        .filter((a) => a.userId === userId)
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0] ?? null
    );
  }

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
    return updated;
  }

  async listPaymentRequests(userId: string): Promise<PaymentRequestRecord[]> {
    return [...this.paymentRequests.values()]
      .filter((r) => r.userId === userId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
}
