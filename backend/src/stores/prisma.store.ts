import { prisma } from "../lib/prisma.js";
import type { AppStore, CreateUserInput, UserRecord, WalletRecord } from "../types/store.js";

function mapUser(user: { id: string; name: string; surname: string; email: string; role: string; createdAt: Date }): UserRecord {
  return { ...user, role: user.role as UserRecord["role"] };
}

function mapWallet(wallet: { id: string; userId: string; publicAddress: string | null; chain: string; stablecoin: string; balanceCached: { toString(): string }; createdAt: Date }): WalletRecord {
  return { ...wallet, balanceCached: wallet.balanceCached.toString() };
}

export class PrismaStore implements AppStore {
  async findUserByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    return user ? mapUser(user) : null;
  }

  async findUserById(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user ? mapUser(user) : null;
  }

  async createUserWithWallet(input: CreateUserInput) {
    const created = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          ...input,
          wallet: { create: {} },
        },
        include: { wallet: true },
      });

      if (!user.wallet) throw new Error("Wallet creation failed");
      return { user, wallet: user.wallet };
    });

    return { user: mapUser(created.user), wallet: mapWallet(created.wallet) };
  }

  async getWalletByUserId(userId: string) {
    const wallet = await prisma.wallet.findUnique({ where: { userId } });
    return wallet ? mapWallet(wallet) : null;
  }
}
