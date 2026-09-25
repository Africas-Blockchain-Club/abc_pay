/**
 * Frontend-only dashboard fixture. Replace this module with authenticated wallet
 * and payment data before connecting ABC Pay to any production service.
 */
export const DASHBOARD_DEMO = {
  walletAddress: "0x7A3d9b84C1f2E6aB04D9c7fB5a0E2184cD0F9B12",
  usdcBalance: 100,
  exchangeRate: 18.15,
  zarBalance: 1815,
  network: "Polygon",
  settlementCurrency: "ZAR",
} as const;

export type TransactionKind = "received" | "converted" | "sent";
export type TransactionStatus = "completed" | "processing";

export type DashboardTransaction = {
  id: string;
  kind: TransactionKind;
  title: string;
  reference: string;
  time: string;
  zar: string;
  usdc: string;
  status: TransactionStatus;
};

export const DASHBOARD_TRANSACTIONS: DashboardTransaction[] = [
  { id: "txn-9b12", kind: "received", title: "Payment received", reference: "PAY-10482", time: "Today, 10:42", zar: "+R450.00", usdc: "+24.79 USDC", status: "completed" },
  { id: "txn-7d34", kind: "converted", title: "USDC converted", reference: "CNV-10481", time: "Today, 09:18", zar: "+R1,815.00", usdc: "-100.00 USDC", status: "processing" },
  { id: "txn-2f68", kind: "sent", title: "USDC sent", reference: "SND-10480", time: "Yesterday, 16:07", zar: "≈ R272.25", usdc: "-15.00 USDC", status: "completed" },
  { id: "txn-5c91", kind: "received", title: "Payment received", reference: "PAY-10479", time: "Yesterday, 12:26", zar: "+R725.00", usdc: "+39.94 USDC", status: "completed" },
];
