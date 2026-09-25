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

export type RampType = "ONRAMP" | "OFFRAMP";

export type RampStatus =
  | "PENDING_DEPOSIT"
  | "PAYMENT_RECEIVED"
  | "CONVERTING"
  | "SETTLING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED";

export type RampOrderRecord = {
  id: string;
  userId?: string | null;
  type: RampType;
  status: RampStatus;
  fiatCurrency: string;
  fiatAmount: string;
  cryptoAsset: string;
  cryptoAmount: string;
  exchangeRate: string;
  platformFeeRate: string;
  platformFeeZar: string;
  network: string;
  destinationWalletAddress?: string | null;
  sourceWalletAddress?: string | null;
  cryptoDepositAddress?: string | null;
  txHash?: string | null;
  bankName?: string | null;
  accountNumber?: string | null;
  branchCode?: string | null;
  accountHolderName?: string | null;
  fiatReference?: string | null;
  valrOrderId?: string | null;
  valrWithdrawalId?: string | null;
  errorMessage?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type BankAccountRecord = {
  id: string;
  userId?: string | null;
  bankName: string;
  accountNumber: string;
  branchCode: string;
  accountType: string;
  accountHolderName?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateRampOrderInput = {
  userId?: string | null;
  type: RampType;
  status?: RampStatus;
  fiatCurrency?: string;
  fiatAmount: string;
  cryptoAsset?: string;
  cryptoAmount: string;
  exchangeRate: string;
  platformFeeRate?: string;
  platformFeeZar: string;
  network?: string;
  destinationWalletAddress?: string | null;
  sourceWalletAddress?: string | null;
  cryptoDepositAddress?: string | null;
  bankName?: string | null;
  accountNumber?: string | null;
  branchCode?: string | null;
  accountHolderName?: string | null;
  fiatReference?: string | null;
};

export type UpdateRampOrderInput = {
  status?: RampStatus;
  cryptoDepositAddress?: string | null;
  txHash?: string | null;
  valrOrderId?: string | null;
  valrWithdrawalId?: string | null;
  errorMessage?: string | null;
};

export type CreateBankAccountInput = {
  userId?: string | null;
  bankName: string;
  accountNumber: string;
  branchCode: string;
  accountType?: string;
  accountHolderName?: string | null;
};

export interface AppStore {
  findUserByEmail(email: string): Promise<UserRecord | null>;
  findUserById(id: string): Promise<UserRecord | null>;
  findUserByPhoneNumber?(phoneNumber: string): Promise<UserRecord | null>;
  findUserByWalletAddress?(walletAddress: string): Promise<UserRecord | null>;
  createUserWithWallet(input: CreateUserInput): Promise<{ user: UserRecord; wallet: WalletRecord }>;
  getWalletByUserId(userId: string): Promise<WalletRecord | null>;

  createRampOrder(input: CreateRampOrderInput): Promise<RampOrderRecord>;
  getRampOrderById(id: string): Promise<RampOrderRecord | null>;
  findRampOrderByReference(reference: string): Promise<RampOrderRecord | null>;
  updateRampOrder(id: string, updates: UpdateRampOrderInput): Promise<RampOrderRecord>;
  listRampOrders(userId?: string): Promise<RampOrderRecord[]>;

  createBankAccount(input: CreateBankAccountInput): Promise<BankAccountRecord>;
  findBankAccountByUserId?(userId: string): Promise<BankAccountRecord | null>;
}
