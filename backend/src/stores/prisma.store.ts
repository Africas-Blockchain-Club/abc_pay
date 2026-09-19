import { randomBytes } from "node:crypto";
import { prisma } from "../lib/prisma.js";
import type { AppStore, CreateUserInput, UserRecord, WalletRecord } from "../types/store.js";

type DbUser = {
  id: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  walletAddress: string;
  role?: string;
  kycStatus: "NOT_STARTED" | "PENDING" | "VERIFIED" | "REJECTED";
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
    kycStatus: user.kycStatus,
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
    const user = await prisma.user.findUnique({ where: { walletAddress } });
    return user ? mapUser(user) : null;
  }

  async createUserWithWallet(input: CreateUserInput) {
    const walletAddress = input.walletAddress ;
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
}
