export type UserRecord = {
  id: string;
  name: string;
  surname: string;
  email: string;
  role: "USER" | "MERCHANT" | "ADMIN";
  createdAt: Date;
};

export type WalletRecord = {
  id: string;
  userId: string;
  publicAddress: string | null;
  chain: string;
  stablecoin: string;
  balanceCached: string;
  createdAt: Date;
};

export type CreateUserInput = {
  name: string;
  surname: string;
  email: string;
  wallet: WalletRecord
};

export interface AppStore {
  findUserByEmail(email: string): Promise<UserRecord | null>;
  findUserById(id: string): Promise<UserRecord | null>;
  createUserWithWallet(input: CreateUserInput): Promise<{ user: UserRecord; wallet: WalletRecord }>;
  getWalletByUserId(userId: string): Promise<WalletRecord | null>;
}
