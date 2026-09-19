export type UserRecord = {
  id: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  walletAddress: string;
  kycStatus: "NOT_STARTED" | "PENDING" | "VERIFIED" | "REJECTED";
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
  phoneNumber: string;
  walletAddress: string;
};

export interface AppStore {
  findUserByEmail(email: string): Promise<UserRecord | null>;
  findUserById(id: string): Promise<UserRecord | null>;
  findUserByPhoneNumber?(phoneNumber: string): Promise<UserRecord | null>;
  findUserByWalletAddress?(walletAddress: string): Promise<UserRecord | null>;
  createUserWithWallet(input: CreateUserInput): Promise<{ user: UserRecord; wallet: WalletRecord }>;
  getWalletByUserId(userId: string): Promise<WalletRecord | null>;
}
