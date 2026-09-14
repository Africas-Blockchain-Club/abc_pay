import { randomUUID } from "node:crypto";
import type { AppStore, CreateUserInput, UserRecord, WalletRecord } from "../types/store.js";

export class MemoryStore implements AppStore {
  private users = new Map<string, UserRecord>();
  private wallets = new Map<string, WalletRecord>();

  async findUserByEmail(email: string) {
    return [...this.users.values()].find((user) => user.email === email.toLowerCase()) ?? null;
  }

  async findUserById(id: string) {
    return this.users.get(id) ?? null;
  }

  async createUserWithWallet(input: CreateUserInput) {
    const now = new Date();
    const user: UserRecord = {
      id: randomUUID(),
      name: input.name,
      email: input.email.toLowerCase(),
      passwordHash: input.passwordHash,
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
}
