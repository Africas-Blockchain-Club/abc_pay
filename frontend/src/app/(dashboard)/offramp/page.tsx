"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import QRCode from "qrcode";
import { api } from "@/services/api";
import { useAuth } from "@/context/AuthContext";

type Quote = {
  quoteId: string;
  cryptoAmount: string;
  cryptoCurrency: "USDC";
  fiatCurrency: "ZAR";
  exchangeRate: string;
  grossFiatAmount: string;
  feeRate: string;
  feeAmount: string;
  netFiatAmount: string;
  expiresAt: string;
  bankDetails: {
    bankName: string;
    accountNumber: string;
    branchCode: string;
    accountHolderName: string;
    accountType: string;
  };
};

type Order = {
  id: string;
  orderId?: string;
  status: string;
  cryptoAmount: string;
  fiatAmount: string;
  exchangeRate: string;
  platformFeeZar: string;
  cryptoDepositAddress: string | null;
  txHash: string | null;
  network?: string;
  createdAt?: string;
  bankDetails?: {
    bankName: string;
    accountNumber: string;
    branchCode?: string;
    accountHolderName: string;
    accountType?: string;
  };
};

const SA_BANKS = [
  { name: "Standard Bank", branchCode: "051001" },
  { name: "First National Bank (FNB)", branchCode: "250655" },
  { name: "Absa Bank", branchCode: "632005" },
  { name: "Nedbank", branchCode: "198765" },
  { name: "Capitec Bank", branchCode: "470010" },
  { name: "Discovery Bank", branchCode: "679000" },
  { name: "TymeBank", branchCode: "678910" },
  { name: "Investec", branchCode: "580105" },
  { name: "Other / Custom Bank", branchCode: "" },
];

const PRESET_AMOUNTS = ["25", "50", "100", "250", "500"];
const VALR_USDC_ZAR_RATE = 18.5;
const PLATFORM_FEE_RATE = 0.02;

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", marginLeft: "4px", verticalAlign: "middle" }}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

async function generateQrDataUrl(content: string): Promise<string> {
  return QRCode.toDataURL(content, {
    width: 320,
    margin: 2,
    errorCorrectionLevel: "H",
    color: {
      dark: "#0b132b",
      light: "#ffffff",
    },
  });
}

function triggerDownload(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

function buildQuoteHtml(quote: Quote): string {
  const quoteId = quote.quoteId;
  const issuedDate = new Date().toUTCString();
  const expiryDate = quote.expiresAt
    ? new Date(quote.expiresAt).toUTCString()
    : new Date(Date.now() + 15 * 60 * 1000).toUTCString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ABC Pay Quotation - ${quoteId}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      background: #0b132b;
      color: #0f172a;
      padding: 40px 20px;
      line-height: 1.5;
    }
    .quote-container {
      max-width: 680px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      overflow: hidden;
    }
    .header {
      background: #0f172a;
      color: #ffffff;
      padding: 30px 36px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .brand strong {
      font-size: 22px;
      letter-spacing: -0.03em;
      color: #ffffff;
      display: block;
    }
    .brand small {
      color: #94a3b8;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .badge {
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid #38bdf8;
      color: #38bdf8;
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .meta-bar {
      background: #f1f5f9;
      padding: 14px 36px;
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #475569;
      border-bottom: 1px solid #e2e8f0;
    }
    .meta-bar strong {
      color: #0f172a;
    }
    .body {
      padding: 36px;
    }
    .section-title {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #0284c7;
      margin-bottom: 14px;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
    }
    .data-table tr {
      border-bottom: 1px solid #f1f5f9;
    }
    .data-table td {
      padding: 11px 0;
      font-size: 14px;
    }
    .data-table td:last-child {
      text-align: right;
      font-weight: 600;
      color: #0f172a;
    }
    .payout-box {
      background: #f8fafc;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px 24px;
      margin-bottom: 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .payout-box span {
      display: block;
      font-size: 11px;
      color: #64748b;
      text-transform: uppercase;
      font-weight: 700;
    }
    .payout-box strong {
      font-size: 14px;
      color: #0f172a;
    }
    .payout-amount {
      font-size: 26px;
      font-weight: 800;
      color: #099875;
      letter-spacing: -0.03em;
    }
    .bank-box {
      background: #fafbfc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 16px 20px;
      margin-bottom: 28px;
      font-size: 13px;
    }
    .bank-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 10px;
    }
    .bank-grid div span {
      display: block;
      color: #64748b;
      font-size: 11px;
      text-transform: uppercase;
    }
    .bank-grid div strong {
      color: #0f172a;
      font-size: 13px;
    }
    .footer-notes {
      font-size: 11px;
      color: #64748b;
      line-height: 1.6;
      border-top: 1px solid #e2e8f0;
      padding-top: 18px;
      margin-top: 20px;
    }
    .actions-bar {
      margin-top: 24px;
      text-align: center;
    }
    .print-button {
      background: #0284c7;
      color: #ffffff;
      border: none;
      padding: 12px 28px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
    }
    .print-button:hover {
      background: #0369a1;
    }
    @media print {
      body { padding: 0; background: #fff; }
      .quote-container { border: none; box-shadow: none; max-width: 100%; }
      .actions-bar { display: none; }
    }
  </style>
</head>
<body>
  <div class="quote-container">
    <div class="header">
      <div class="brand">
        <strong>ABC Pay</strong>
        <small>by Africa's Blockchain Club</small>
      </div>
      <div class="badge">Official Quote</div>
    </div>

    <div class="meta-bar">
      <div>Reference: <strong>${quoteId}</strong></div>
      <div>Issued: <strong>${issuedDate}</strong></div>
    </div>

    <div class="body">
      <div class="section-title">Conversion Summary</div>
      <table class="data-table">
        <tr>
          <td>Crypto Asset</td>
          <td>USDC (Ethereum Sepolia)</td>
        </tr>
        <tr>
          <td>Amount to Convert</td>
          <td>${quote.cryptoAmount} USDC</td>
        </tr>
        <tr>
          <td>Exchange Rate</td>
          <td>1 USDC = R ${quote.exchangeRate} ZAR</td>
        </tr>
        <tr>
          <td>Gross ZAR Amount</td>
          <td>R ${quote.grossFiatAmount} ZAR</td>
        </tr>
        <tr>
          <td>Platform Fee (${(parseFloat(quote.feeRate) * 100).toFixed(2)}%)</td>
          <td>-R ${quote.feeAmount} ZAR</td>
        </tr>
      </table>

      <div class="payout-box">
        <div>
          <span>Net Settlement Payout</span>
          <strong>Direct to South African Bank</strong>
        </div>
        <div class="payout-amount">R ${quote.netFiatAmount} ZAR</div>
      </div>

      <div class="section-title">Beneficiary Banking Details</div>
      <div class="bank-box">
        <div class="bank-grid">
          <div>
            <span>Account Holder</span>
            <strong>${quote.bankDetails.accountHolderName}</strong>
          </div>
          <div>
            <span>Bank Institution</span>
            <strong>${quote.bankDetails.bankName}</strong>
          </div>
          <div>
            <span>Account Number</span>
            <strong>${quote.bankDetails.accountNumber}</strong>
          </div>
          <div>
            <span>Branch Code</span>
            <strong>${quote.bankDetails.branchCode}</strong>
          </div>
          <div>
            <span>Account Type</span>
            <strong>${quote.bankDetails.accountType}</strong>
          </div>
        </div>
      </div>

      <div class="footer-notes">
        <p><strong>Settlement Notice:</strong></p>
        <p>This quotation is valid until <strong>${expiryDate}</strong>. Exchange rates are locked upon order creation. ZAR fiat disbursement will be processed to the nominated bank account upon confirmation of the USDC deposit on the Ethereum Sepolia network.</p>
        <p style="margin-top: 6px;">ABC Pay Financial Services - Support: support@abcpay.africa</p>
      </div>

      <div class="actions-bar">
        <button class="print-button" onclick="window.print()">Print / Save as PDF</button>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function buildQuoteTxt(quote: Quote): string {
  const quoteId = quote.quoteId;
  const issuedDate = new Date().toUTCString();
  const expiryDate = quote.expiresAt
    ? new Date(quote.expiresAt).toUTCString()
    : new Date(Date.now() + 15 * 60 * 1000).toUTCString();

  return `================================================================================
                          ABC PAY - CONVERSION QUOTE
                         by Africa's Blockchain Club
================================================================================

Reference:          ${quoteId}
Issued:             ${issuedDate}
Valid Until:        ${expiryDate}
Status:             GUARANTEED (15 min window)

--------------------------------------------------------------------------------
1. CONVERSION SUMMARY
--------------------------------------------------------------------------------
Crypto Asset:       USDC (Ethereum Sepolia)
Crypto Amount:      ${quote.cryptoAmount} USDC
Target Currency:    ZAR (South African Rand)
Exchange Rate:      1 USDC = R ${quote.exchangeRate} ZAR

--------------------------------------------------------------------------------
2. FINANCIAL BREAKDOWN
--------------------------------------------------------------------------------
Gross Fiat Value:   R ${quote.grossFiatAmount} ZAR
ABC Pay Fee (${(parseFloat(quote.feeRate) * 100).toFixed(2)}%): R ${quote.feeAmount} ZAR
--------------------------------------------------------------------------------
NET PAYOUT AMOUNT:  R ${quote.netFiatAmount} ZAR
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
3. BENEFICIARY BANKING DETAILS
--------------------------------------------------------------------------------
Account Holder:     ${quote.bankDetails.accountHolderName || "N/A"}
Bank Institution:   ${quote.bankDetails.bankName || "N/A"}
Account Number:     ${quote.bankDetails.accountNumber || "N/A"}
Branch Code:        ${quote.bankDetails.branchCode || "N/A"}
Account Type:       ${quote.bankDetails.accountType || "CURRENT"}

--------------------------------------------------------------------------------
4. SETTLEMENT INSTRUCTIONS & CONDITIONS
--------------------------------------------------------------------------------
- This quote is locked for the duration of the validity window.
- Transfer the exact crypto amount to the assigned ABC Pay deposit address.
- ZAR funds will be disbursed automatically to the specified bank account.
- For queries or support: support@abcpay.africa

================================================================================
ABC Pay - Africa's Blockchain Club - All rights reserved.
================================================================================
`;
}

function buildReceiptTxt(order: Order): string {
  const orderId = order.id || order.orderId || "N/A";
  const dateStr = order.createdAt ? new Date(order.createdAt).toUTCString() : new Date().toUTCString();

  return `================================================================================
                     ABC PAY - OFF-RAMP SETTLEMENT RECEIPT
                         by Africa's Blockchain Club
================================================================================

Order Reference:    ${orderId}
Timestamp:          ${dateStr}
Status:             ${order.status}
Network:            ${order.network || "Ethereum Sepolia"}

--------------------------------------------------------------------------------
SETTLEMENT SUMMARY
--------------------------------------------------------------------------------
Crypto Deposited:   ${order.cryptoAmount} USDC
Exchange Rate:      1 USDC = R ${order.exchangeRate} ZAR
Platform Fee:       R ${order.platformFeeZar} ZAR
Net ZAR Paid Out:   R ${order.fiatAmount} ZAR
--------------------------------------------------------------------------------
Destination Bank:   ${order.bankDetails?.bankName || "South African Bank"}
Account Number:     ${order.bankDetails?.accountNumber || "N/A"}
Account Holder:     ${order.bankDetails?.accountHolderName || "N/A"}
Transaction Hash:   ${order.txHash || "N/A"}
--------------------------------------------------------------------------------

For inquiries: support@abcpay.africa
================================================================================
`;
}

export default function OfframpPage() {
  const { user } = useAuth();

  // Rate config
  const valrRate = VALR_USDC_ZAR_RATE;

  // Form states matching merchant qr style
  const [amountUsdc, setAmountUsdc] = useState("10.00");
  const [amountZar, setAmountZar] = useState("176.40");
  const [selectedBankPreset, setSelectedBankPreset] = useState("Standard Bank");
  const [bankName, setBankName] = useState("Standard Bank");
  const [accountNumber, setAccountNumber] = useState("");
  const [branchCode, setBranchCode] = useState("051001");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [accountType, setAccountType] = useState("CURRENT");
  const [sourceWalletAddress, setSourceWalletAddress] = useState("");

  // Operation states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quote, setQuote] = useState<Quote | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [txHash, setTxHash] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [qrMode, setQrMode] = useState<"address" | "eip681">("address");
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedAmount, setCopiedAmount] = useState(false);

  // Initialize wallet and user name if available
  useEffect(() => {
    if (user && !accountHolderName) {
      const fullName = [user.name, user.surname].filter(Boolean).join(" ");
      if (fullName) {
        setAccountHolderName(fullName);
      }
    }
    const stored = sessionStorage.getItem("abc_pay_metamask_address");
    if (stored) {
      setSourceWalletAddress(stored);
    } else if (user?.walletAddress) {
      setSourceWalletAddress(user.walletAddress);
    }
  }, [user, accountHolderName]);

  function handleUsdcChange(val: string) {
    setAmountUsdc(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) {
      const gross = num * valrRate;
      const net = gross * (1 - PLATFORM_FEE_RATE);
      setAmountZar(net.toFixed(2));
    } else {
      setAmountZar("");
    }
  }

  function handleZarChange(val: string) {
    setAmountZar(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0 && valrRate > 0) {
      const gross = num / (1 - PLATFORM_FEE_RATE);
      setAmountUsdc((gross / valrRate).toFixed(2));
    } else {
      setAmountUsdc("");
    }
  }

  function handleBankPresetChange(bankTitle: string) {
    setSelectedBankPreset(bankTitle);
    const found = SA_BANKS.find((b) => b.name === bankTitle);
    if (found) {
      if (bankTitle !== "Other / Custom Bank") {
        setBankName(found.name);
        setBranchCode(found.branchCode);
      } else {
        setBankName("");
        setBranchCode("");
      }
    }
  }

  async function handleConnectMetaMask() {
    setError("");
    if (typeof window === "undefined" || !window.ethereum) {
      setError("No Web3 wallet found. Please install MetaMask to auto-fill your address.");
      return;
    }
    try {
      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];
      if (accounts && accounts[0]) {
        setSourceWalletAddress(accounts[0]);
        sessionStorage.setItem("abc_pay_metamask_address", accounts[0]);
      }
    } catch (caught: unknown) {
      setError(caught instanceof Error ? caught.message : "Could not connect MetaMask");
    }
  }

  async function handleQrModeChange(newMode: "address" | "eip681") {
    setQrMode(newMode);
    const depositTarget = order?.cryptoDepositAddress;
    if (depositTarget) {
      const content =
        newMode === "address"
          ? depositTarget
          : `ethereum:${depositTarget}`;
      const url = await generateQrDataUrl(content);
      setQrDataUrl(url);
    }
  }

  // Live polling: Check order status every 3 seconds when pending
  useEffect(() => {
    if (!order || order.status === "COMPLETED") return;

    const interval = setInterval(async () => {
      try {
        const orderId = order.id || order.orderId;
        const latest = await api<any>(`/ramp/orders/${orderId}`);
        if (latest && (latest.status === "PAYMENT_RECEIVED" || latest.status === "COMPLETED")) {
          setOrder((prev) => ({
            ...prev!,
            ...latest,
            id: latest.id || latest.orderId || prev!.id,
            status: latest.status,
          }));
        }
      } catch {
        // Continue polling silently
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [order]);

  async function handleGenerateQuoteAndOrder(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const numUsdc = parseFloat(amountUsdc);
    if (isNaN(numUsdc) || numUsdc < 5) {
      setError("Please enter a valid amount of at least 5.00 USDC.");
      return;
    }

    if (!accountHolderName.trim()) {
      setError("Please provide the account holder name.");
      return;
    }

    if (!accountNumber.trim()) {
      setError("Please provide a valid bank account number.");
      return;
    }

    if (!branchCode.trim()) {
      setError("Please provide a valid branch code.");
      return;
    }

    setLoading(true);

    try {
      // 1. Fetch live market quote from backend
      const quoteRes = await api<any>("/ramp/quote", {
        method: "POST",
        body: JSON.stringify({
          fromAsset: "USDC",
          toAsset: "ZAR",
          amount: numUsdc.toFixed(2),
          type: "OFFRAMP",
        }),
      });

      const effectiveRate = quoteRes.rate || quoteRes.exchangeRate || valrRate.toFixed(2);
      const effectiveGross = (numUsdc * parseFloat(effectiveRate)).toFixed(2);
      const effectiveFee = quoteRes.platformFeeZar || (parseFloat(effectiveGross) * PLATFORM_FEE_RATE).toFixed(2);
      const effectiveNet = quoteRes.destinationAmount || (parseFloat(effectiveGross) - parseFloat(effectiveFee)).toFixed(2);

      const generatedQuote: Quote = {
        quoteId: quoteRes.quoteId || `QT-${Math.floor(100000 + Math.random() * 900000)}`,
        cryptoAmount: numUsdc.toFixed(2),
        cryptoCurrency: "USDC",
        fiatCurrency: "ZAR",
        exchangeRate: parseFloat(effectiveRate).toFixed(2),
        grossFiatAmount: parseFloat(effectiveGross).toFixed(2),
        feeRate: "0.0200",
        feeAmount: parseFloat(effectiveFee).toFixed(2),
        netFiatAmount: parseFloat(effectiveNet).toFixed(2),
        expiresAt: quoteRes.expiresAt || new Date(Date.now() + 15 * 60 * 1000).toISOString(),
        bankDetails: {
          bankName: bankName.trim(),
          accountNumber: accountNumber.trim(),
          branchCode: branchCode.trim(),
          accountHolderName: accountHolderName.trim(),
          accountType,
        },
      };

      setQuote(generatedQuote);

      // 2. Create the offramp deposit order
      const effectiveSource = sourceWalletAddress.trim() || undefined;
      const orderRes = await api<any>("/ramp/offramp", {
        method: "POST",
        body: JSON.stringify({
          amountUsdc: numUsdc.toFixed(2),
          sourceWalletAddress: effectiveSource,
          bankDetails: {
            bankName: bankName.trim(),
            accountNumber: accountNumber.trim(),
            branchCode: branchCode.trim(),
            accountHolderName: accountHolderName.trim(),
            accountType,
          },
        }),
      });

      const rawOrder = orderRes.order || orderRes;
      const orderId = rawOrder.id || rawOrder.orderId;

      const orderObj: Order = {
        id: orderId,
        orderId: orderId,
        status: rawOrder.status || "PENDING_DEPOSIT",
        cryptoAmount: rawOrder.cryptoAmount || numUsdc.toFixed(2),
        fiatAmount: rawOrder.fiatAmount || rawOrder.estimatedFiatAmount || effectiveNet,
        exchangeRate: rawOrder.exchangeRate || effectiveRate,
        platformFeeZar: rawOrder.platformFeeZar || effectiveFee,
        cryptoDepositAddress: rawOrder.cryptoDepositAddress || null,
        txHash: rawOrder.txHash || null,
        network: rawOrder.network || "SEPOLIA",
        createdAt: rawOrder.createdAt || new Date().toISOString(),
        bankDetails: generatedQuote.bankDetails,
      };

      setOrder(orderObj);

      // 3. Generate QR code for the receiving deposit address
      if (orderObj.cryptoDepositAddress) {
        const qrUrl = await generateQrDataUrl(
          qrMode === "address"
            ? orderObj.cryptoDepositAddress
            : `ethereum:${orderObj.cryptoDepositAddress}`
        );
        setQrDataUrl(qrUrl);
      }
    } catch (caught: unknown) {
      setError(caught instanceof Error ? caught.message : "Failed to generate off-ramp order.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy(text: string, type: "address" | "amount") {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "address") {
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2000);
      } else {
        setCopiedAmount(true);
        setTimeout(() => setCopiedAmount(false), 2000);
      }
    } catch {
      // Fallback
    }
  }

  async function verifyDeposit() {
    if (!order || !txHash.trim()) return;

    setLoading(true);
    setError("");

    const orderId = order.id || order.orderId;

    try {
      const response = await api<any>(`/ramp/orders/${orderId}/verify-deposit`, {
        method: "POST",
        body: JSON.stringify({
          txHash: txHash.trim(),
        }),
      });

      const updated = response.order || response;
      setOrder((prev) => ({
        ...prev!,
        ...updated,
        id: updated.id || updated.orderId || prev!.id,
        status: updated.status || "PAYMENT_RECEIVED",
        txHash: txHash.trim(),
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Deposit verification failed. Please verify the transaction hash.");
    } finally {
      setLoading(false);
    }
  }

  async function settleOrder() {
    if (!order) return;

    setLoading(true);
    setError("");

    const orderId = order.id || order.orderId;

    try {
      const response = await api<any>(`/ramp/orders/${orderId}/settle`, {
        method: "POST",
      });

      const updated = response.order || response;
      setOrder((prev) => ({
        ...prev!,
        ...updated,
        id: updated.id || updated.orderId || prev!.id,
        status: updated.status || "COMPLETED",
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Settlement execution failed.");
    } finally {
      setLoading(false);
    }
  }

  function handleDownloadQuoteHtml() {
    if (!quote) return;
    const htmlContent = buildQuoteHtml(quote);
    triggerDownload(htmlContent, `ABC_Pay_Quote_${quote.quoteId}.html`, "text/html");
  }

  function handleDownloadQuoteTxt() {
    if (!quote) return;
    const txtContent = buildQuoteTxt(quote);
    triggerDownload(txtContent, `ABC_Pay_Quote_${quote.quoteId}.txt`, "text/plain");
  }

  function handleDownloadReceipt() {
    if (!order) return;
    const txtContent = buildReceiptTxt(order);
    triggerDownload(txtContent, `ABC_Pay_Receipt_${order.id || order.orderId}.txt`, "text/plain");
  }

  function handlePrintQuote() {
    if (!quote) return;
    const htmlContent = buildQuoteHtml(quote);
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 300);
    }
  }

  function resetFlow() {
    setQuote(null);
    setOrder(null);
    setTxHash("");
    setQrDataUrl("");
    setError("");
  }

  const hasOutput = Boolean(order || quote);
  const activeAmountUsdc = order ? order.cryptoAmount : quote ? quote.cryptoAmount : amountUsdc;
  const activeAmountZar = order ? order.fiatAmount : quote ? quote.netFiatAmount : amountZar;
  const activeRate = order ? order.exchangeRate : quote ? quote.exchangeRate : valrRate.toFixed(2);
  const depositAddress = order?.cryptoDepositAddress;

  return (
    <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "1.5rem" }}>
      {/* Header exactly matching merchant qr layout */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#38bdf8", marginBottom: "0.5rem" }}>
          Off-Ramp Settlement Gateway
        </div>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "800", color: "#f8fafc", margin: "0 0 0.5rem 0" }}>
          Convert Sepolia USDC to ZAR
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "0.95rem", margin: 0, maxWidth: "680px" }}>
          Lock in live conversion rates, deposit USDC on Ethereum Sepolia, and receive direct ZAR payout to your South African bank account. Real-time conversion is powered directly by the <strong>VALR API</strong>.
        </p>
      </div>

      {error && (
        <div style={{ background: "rgba(239, 68, 68, 0.12)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "0.75rem", padding: "1rem 1.25rem", color: "#fca5a5", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
          {error}
        </div>
      )}

      {/* Grid matching merchant qr page: 1fr when only form, 1fr 1fr when output exists */}
      <div style={{ display: "grid", gridTemplateColumns: hasOutput ? "1fr 1fr" : "1fr", gap: "2rem", alignItems: "start" }}>
        {/* Left Form Column */}
        <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "1rem", padding: "1.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", marginTop: 0, marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            Off-Ramp Configuration
          </h2>

          <form onSubmit={handleGenerateQuoteAndOrder} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Amount Inputs with two-way VALR conversion */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>
                  USDC Amount ($) *
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="number"
                    step="0.01"
                    min="5"
                    required
                    value={amountUsdc}
                    onChange={(e) => handleUsdcChange(e.target.value)}
                    placeholder="10.00"
                    style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontSize: "1.05rem", fontWeight: "600" }}
                  />
                </div>
                <span style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginTop: "0.35rem" }}>
                  Min 5.00 USDC
                </span>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>
                  Net ZAR Payout (R)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={amountZar}
                  onChange={(e) => handleZarChange(e.target.value)}
                  placeholder="176.40"
                  style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#94a3b8", fontSize: "1.05rem" }}
                />
                <span style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginTop: "0.35rem" }}>
                  @ R{valrRate.toFixed(2)} / USDC (2% fee)
                </span>
              </div>
            </div>

            {/* Quick Amount Chips */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "-0.5rem" }}>
              {PRESET_AMOUNTS.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleUsdcChange(val)}
                  style={{
                    background: amountUsdc === val ? "#1e293b" : "#020617",
                    border: amountUsdc === val ? "1px solid #38bdf8" : "1px solid #334155",
                    color: amountUsdc === val ? "#38bdf8" : "#94a3b8",
                    borderRadius: "0.35rem",
                    padding: "0.3rem 0.65rem",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  {val} USDC
                </button>
              ))}
            </div>

            {/* Bank Institution & Account Type Selection */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>
                  South African Bank *
                </label>
                <select
                  value={selectedBankPreset}
                  onChange={(e) => handleBankPresetChange(e.target.value)}
                  style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontSize: "0.85rem" }}
                >
                  {SA_BANKS.map((b) => (
                    <option key={b.name} value={b.name} style={{ background: "#0f172a", color: "#ffffff" }}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>
                  Account Type *
                </label>
                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontSize: "0.85rem" }}
                >
                  <option value="CURRENT" style={{ background: "#0f172a", color: "#ffffff" }}>Cheque / Current</option>
                  <option value="SAVINGS" style={{ background: "#0f172a", color: "#ffffff" }}>Savings</option>
                  <option value="TRANSMISSION" style={{ background: "#0f172a", color: "#ffffff" }}>Transmission</option>
                </select>
              </div>
            </div>

            {selectedBankPreset === "Other / Custom Bank" && (
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>
                  Bank Institution Name *
                </label>
                <input
                  type="text"
                  required
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  placeholder="e.g. Investec Bank"
                  style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontSize: "0.9rem" }}
                />
              </div>
            )}

            {/* Account Holder Name */}
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>
                Account Holder Name *
              </label>
              <input
                type="text"
                required
                value={accountHolderName}
                onChange={(e) => setAccountHolderName(e.target.value)}
                placeholder="Full legal name as registered on bank account"
                style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontSize: "0.9rem" }}
              />
            </div>

            {/* Account Number & Branch Code */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>
                  Account Number *
                </label>
                <input
                  type="text"
                  required
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="e.g. 1012345678"
                  style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontFamily: "monospace", fontSize: "0.85rem" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>
                  Branch Code *
                </label>
                <input
                  type="text"
                  required
                  value={branchCode}
                  onChange={(e) => setBranchCode(e.target.value)}
                  placeholder="051001"
                  style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontFamily: "monospace", fontSize: "0.85rem" }}
                />
              </div>
            </div>

            {/* Source Wallet Address */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1" }}>
                  Source Wallet Address (Optional)
                </label>
                <button
                  type="button"
                  onClick={handleConnectMetaMask}
                  style={{ background: "none", border: "none", color: "#38bdf8", fontSize: "0.75rem", cursor: "pointer", padding: 0, textDecoration: "underline" }}
                >
                  Use MetaMask Address
                </button>
              </div>

              <input
                type="text"
                value={sourceWalletAddress}
                onChange={(e) => setSourceWalletAddress(e.target.value)}
                placeholder="0x..."
                style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontFamily: "monospace", fontSize: "0.85rem" }}
              />
              <span style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginTop: "0.35rem" }}>
                Wallet from which you will send USDC on Sepolia. Used for transaction verification.
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                background: loading ? "#475569" : "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                color: "#ffffff",
                border: "none",
                borderRadius: "0.6rem",
                padding: "0.85rem",
                fontSize: "1rem",
                fontWeight: "700",
                cursor: loading ? "not-allowed" : "pointer",
                boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
                transition: "opacity 0.15s ease",
              }}
            >
              {loading ? "Generating Off-Ramp..." : hasOutput ? "Update / Re-calculate Quote" : "Generate Off-Ramp Quote & QR"}
            </button>
          </form>
        </div>

        {/* Right Output Column: Payment QR & Live Tracker matching merchant qr page */}
        {hasOutput && (
          <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "1rem", padding: "1.75rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            {/* Status Header */}
            <div style={{ width: "100%", display: "flex", justifyContent: order ? "space-between" : "flex-end", alignItems: "center", marginBottom: "1.25rem" }}>
              {order && (
                <div style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Invoice</span>
                  <div style={{ color: "#e2e8f0", fontSize: "0.85rem", fontFamily: "monospace" }}>{order.id || order.orderId}</div>
                </div>
              )}

              {order?.status === "COMPLETED" ? (
                <div style={{ background: "rgba(34, 197, 94, 0.15)", border: "1px solid #22c55e", borderRadius: "9999px", padding: "0.35rem 0.85rem", color: "#4ade80", fontSize: "0.8rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <CheckIcon /> SETTLED
                </div>
              ) : order?.status === "PAYMENT_RECEIVED" ? (
                <div style={{ background: "rgba(34, 197, 94, 0.15)", border: "1px solid #22c55e", borderRadius: "9999px", padding: "0.35rem 0.85rem", color: "#4ade80", fontSize: "0.8rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <CheckIcon /> DEPOSIT VERIFIED
                </div>
              ) : order ? (
                <div style={{ background: "rgba(234, 179, 8, 0.15)", border: "1px solid #eab308", borderRadius: "9999px", padding: "0.35rem 0.85rem", color: "#facc15", fontSize: "0.8rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  WAITING FOR DEPOSIT...
                </div>
              ) : (
                <div style={{ background: "rgba(56, 189, 248, 0.15)", border: "1px solid #38bdf8", borderRadius: "9999px", padding: "0.35rem 0.85rem", color: "#38bdf8", fontSize: "0.8rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <CheckIcon /> QUOTE LOCKED (15 MIN)
                </div>
              )}
            </div>

            {/* QR Mode Switcher */}
            {depositAddress && (
              <div style={{ display: "flex", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.25rem", marginBottom: "1rem", gap: "0.25rem" }}>
                <button
                  type="button"
                  onClick={() => handleQrModeChange("address")}
                  style={{
                    background: qrMode === "address" ? "#1e293b" : "transparent",
                    color: qrMode === "address" ? "#38bdf8" : "#94a3b8",
                    border: "none",
                    borderRadius: "0.35rem",
                    padding: "0.35rem 0.75rem",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Deposit Address QR
                </button>
                <button
                  type="button"
                  onClick={() => handleQrModeChange("eip681")}
                  style={{
                    background: qrMode === "eip681" ? "#1e293b" : "transparent",
                    color: qrMode === "eip681" ? "#38bdf8" : "#94a3b8",
                    border: "none",
                    borderRadius: "0.35rem",
                    padding: "0.35rem 0.75rem",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  EIP-681 Web3 QR
                </button>
              </div>
            )}

            {/* High-Contrast QR Code Card */}
            {depositAddress && (
              <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "1rem", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)", marginBottom: "1.25rem" }}>
                {qrDataUrl ? (
                  <Image
                    src={qrDataUrl}
                    alt={`Deposit QR code for ${activeAmountUsdc} USDC`}
                    width={260}
                    height={260}
                    unoptimized
                    style={{ display: "block", borderRadius: "0.5rem" }}
                  />
                ) : (
                  <div style={{ width: 260, height: 260, display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>
                    Generating QR...
                  </div>
                )}
              </div>
            )}

            {/* Amount Display with VALR Conversion Rate */}
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ fontSize: "1.75rem", fontWeight: "800", color: "#f8fafc" }}>
                ${activeAmountUsdc} <span style={{ fontSize: "1rem", color: "#38bdf8" }}>USDC</span>
              </div>
              <div style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: "0.2rem" }}>
                ≈ R {activeAmountZar} ZAR
                <span style={{ fontSize: "0.75rem", color: "#38bdf8", marginLeft: "0.4rem" }}>
                  (Net payout @ R{activeRate} / USDC)
                </span>
              </div>
            </div>

            {/* Sepolia Deposit Address Box with Copy */}
            {depositAddress && (
              <div style={{ width: "100%", background: "#020617", border: "1px solid #1e293b", borderRadius: "0.5rem", padding: "0.75rem", marginBottom: "1rem", textAlign: "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                  <span style={{ fontSize: "0.7rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Sepolia Deposit Address</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(depositAddress, "address")}
                    style={{ background: "none", border: "none", color: "#38bdf8", fontSize: "0.75rem", cursor: "pointer" }}
                  >
                    {copiedAddress ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div style={{ color: "#cbd5e1", fontSize: "0.75rem", fontFamily: "monospace", wordBreak: "break-all" }}>
                  {depositAddress}
                </div>
              </div>
            )}

            {/* Downloadable Quotation & PDF Actions */}
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                <button
                  type="button"
                  onClick={handleDownloadQuoteHtml}
                  style={{
                    background: "#1e293b",
                    border: "1px solid #334155",
                    color: "#f8fafc",
                    borderRadius: "0.5rem",
                    padding: "0.65rem",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Download Quote (HTML)
                </button>

                <button
                  type="button"
                  onClick={handleDownloadQuoteTxt}
                  style={{
                    background: "#1e293b",
                    border: "1px solid #334155",
                    color: "#f8fafc",
                    borderRadius: "0.5rem",
                    padding: "0.65rem",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Download Slip (TXT)
                </button>
              </div>

              <button
                type="button"
                onClick={handlePrintQuote}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "1px solid #334155",
                  color: "#94a3b8",
                  borderRadius: "0.5rem",
                  padding: "0.55rem",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                Print / Save as PDF
              </button>
            </div>

            {/* Deposit Transfer & Verification Box */}
            {order && order.status !== "COMPLETED" && (
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1rem" }}>
                {/* Send exact amount helper with copy */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.6rem 0.75rem", background: "#020617", borderRadius: "0.5rem", border: "1px solid #1e293b", fontSize: "0.8rem" }}>
                  <span style={{ color: "#94a3b8" }}>Send Exact Amount:</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <strong style={{ color: "#f8fafc" }}>{order.cryptoAmount} USDC</strong>
                    <button
                      type="button"
                      onClick={() => handleCopy(order.cryptoAmount, "amount")}
                      style={{ background: "none", border: "none", color: "#38bdf8", fontSize: "0.75rem", cursor: "pointer", padding: 0 }}
                    >
                      {copiedAmount ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                {/* Paste Transaction Hash */}
                <div style={{ textAlign: "left" }}>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.35rem" }}>
                    Paste Transaction Hash (TxID)
                  </label>
                  <input
                    type="text"
                    value={txHash}
                    onChange={(e) => setTxHash(e.target.value)}
                    placeholder="0x..."
                    disabled={order.status === "PAYMENT_RECEIVED"}
                    style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontFamily: "monospace", fontSize: "0.85rem" }}
                  />
                </div>

                {order.status !== "PAYMENT_RECEIVED" ? (
                  <button
                    type="button"
                    onClick={verifyDeposit}
                    disabled={loading || !txHash.trim()}
                    style={{
                      width: "100%",
                      background: loading || !txHash.trim() ? "#475569" : "linear-gradient(135deg, #0284c7 0%, #2563eb 100%)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "0.6rem",
                      padding: "0.85rem",
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      cursor: loading || !txHash.trim() ? "not-allowed" : "pointer",
                      boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
                    }}
                  >
                    {loading ? "Verifying..." : "Verify USDC Deposit"}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={settleOrder}
                    disabled={loading}
                    style={{
                      width: "100%",
                      background: loading ? "#475569" : "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "0.6rem",
                      padding: "0.85rem",
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      cursor: loading ? "not-allowed" : "pointer",
                      boxShadow: "0 4px 12px rgba(16, 185, 129, 0.25)",
                    }}
                  >
                    {loading ? "Processing..." : "Process ZAR Bank Payout"}
                  </button>
                )}
              </div>
            )}

            {/* Confirmed / Settled Card */}
            {order?.status === "COMPLETED" && (
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <div style={{ width: "100%", background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.3)", borderRadius: "0.75rem", padding: "1rem", textAlign: "left" }}>
                  <div style={{ color: "#4ade80", fontWeight: "700", fontSize: "0.9rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <CheckIcon /> Payout Processed to Bank Account
                  </div>
                  {order.txHash && (
                    <div style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>
                      <div style={{ color: "#94a3b8", fontSize: "0.7rem", textTransform: "uppercase" }}>Transaction Hash</div>
                      <a
                        href={`https://sepolia.etherscan.io/tx/${order.txHash}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#38bdf8", wordBreak: "break-all", textDecoration: "underline", fontFamily: "monospace" }}
                      >
                        {order.txHash} <ExternalIcon />
                      </a>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleDownloadReceipt}
                  style={{
                    width: "100%",
                    background: "#1e293b",
                    border: "1px solid #334155",
                    color: "#f8fafc",
                    borderRadius: "0.5rem",
                    padding: "0.75rem",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Download Settlement Receipt (TXT)
                </button>

                <button
                  type="button"
                  onClick={resetFlow}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "1px solid #334155",
                    color: "#94a3b8",
                    borderRadius: "0.5rem",
                    padding: "0.6rem",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                  }}
                >
                  New Off-Ramp Conversion
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
