-- Add missing updatedAt to User
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- Create missing enums
DO $$ BEGIN
  CREATE TYPE "RampType" AS ENUM ('ONRAMP', 'OFFRAMP');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE "RampStatus" AS ENUM ('PENDING_DEPOSIT', 'PAYMENT_RECEIVED', 'CONVERTING', 'SETTLING', 'COMPLETED', 'FAILED', 'CANCELLED');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- CreateTable RampOrder
CREATE TABLE IF NOT EXISTS "RampOrder" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "type" "RampType" NOT NULL,
    "status" "RampStatus" NOT NULL DEFAULT 'PENDING_DEPOSIT',
    "fiatCurrency" TEXT NOT NULL DEFAULT 'ZAR',
    "fiatAmount" DECIMAL(18,2) NOT NULL,
    "cryptoAsset" TEXT NOT NULL DEFAULT 'USDC',
    "cryptoAmount" DECIMAL(36,18) NOT NULL,
    "exchangeRate" DECIMAL(36,18) NOT NULL,
    "platformFeeRate" DECIMAL(6,4) NOT NULL DEFAULT 0.02,
    "platformFeeZar" DECIMAL(18,2) NOT NULL,
    "network" TEXT NOT NULL DEFAULT 'SOL',
    "destinationWalletAddress" TEXT,
    "sourceWalletAddress" TEXT,
    "cryptoDepositAddress" TEXT,
    "txHash" TEXT,
    "bankName" TEXT,
    "accountNumber" TEXT,
    "branchCode" TEXT,
    "accountHolderName" TEXT,
    "fiatReference" TEXT,
    "valrOrderId" TEXT,
    "valrWithdrawalId" TEXT,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RampOrder_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "RampOrder_fiatReference_key" ON "RampOrder"("fiatReference");

ALTER TABLE "RampOrder" DROP CONSTRAINT IF EXISTS "RampOrder_userId_fkey";
ALTER TABLE "RampOrder" ADD CONSTRAINT "RampOrder_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable BankAccount
CREATE TABLE IF NOT EXISTS "BankAccount" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "bankName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "branchCode" TEXT NOT NULL,
    "accountType" TEXT NOT NULL DEFAULT 'CURRENT',
    "accountName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BankAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable Transaction
CREATE TABLE IF NOT EXISTS "Transaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "fiatAmount" DECIMAL(18,4) NOT NULL,
    "fiatCurrency" TEXT NOT NULL,
    "cryptoAmount" DECIMAL(36,18) NOT NULL,
    "cryptoAsset" TEXT NOT NULL,
    "chain" TEXT NOT NULL,
    "valrMarketRate" DECIMAL(36,18) NOT NULL,
    "markupBps" INTEGER NOT NULL,
    "finalRate" DECIMAL(36,18) NOT NULL,
    "valrOrderId" TEXT,
    "depositTxHash" TEXT,
    "payoutRef" TEXT,
    "quoteExpiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Transaction" DROP CONSTRAINT IF EXISTS "Transaction_userId_fkey";
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable VerificationToken
CREATE TABLE IF NOT EXISTS "VerificationToken" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id")
);
