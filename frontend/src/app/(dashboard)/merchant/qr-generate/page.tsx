"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";
import { api } from "@/services/api";
import { useAuth } from "@/context/AuthContext";

type PaymentRequest = {
  id: string;
  userId: string;
  userName: string;
  recipientAddress: string;
  amountUsdc: string;
  amountZar: string | null;
  valrRate?: string | null;
  network: string;
  token: string;
  tokenAddress: string;
  description: string | null;
  status: "PENDING" | "CONFIRMED" | "EXPIRED" | "FAILED";
  txHash: string | null;
  payerAddress: string | null;
  eip681Url?: string;
  createdAt: string;
};

type PaymentConfig = {
  defaultMerchantWalletAddress: string;
  usdcContractAddress: string;
  network: string;
  chainId: number;
  valrRate?: string;
};

async function generateQrDataUrl(req: PaymentRequest, mode: "web" | "eip681"): Promise<string> {
  const targetContent =
    mode === "web"
      ? `${typeof window !== "undefined" ? window.location.origin : ""}/pay/${req.id}`
      : req.eip681Url || `${typeof window !== "undefined" ? window.location.origin : ""}/pay/${req.id}`;

  return QRCode.toDataURL(targetContent, {
    width: 320,
    margin: 2,
    errorCorrectionLevel: "H",
    color: {
      dark: "#0b132b",
      light: "#ffffff",
    },
  });
}

// Mocked conversion rate: 1 USDC = R 18.50 ZAR
const MOCKED_USDC_ZAR_RATE = 18.5;

export default function MerchantQrPage() {
  const { user } = useAuth();

  // Mocked USDC to ZAR rate
  const valrRate = MOCKED_USDC_ZAR_RATE;

  // Form states
  const [amountUsdc, setAmountUsdc] = useState("10.00");
  const [amountZar, setAmountZar] = useState("185.00");
  const [customRecipientAddress, setCustomRecipientAddress] = useState<string | null>(null);
  const [backendDefaultAddress, setBackendDefaultAddress] = useState("");
  const [description, setDescription] = useState("");

  // App / Request states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [payment, setPayment] = useState<PaymentRequest | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [qrMode, setQrMode] = useState<"web" | "eip681">("web");
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Fetch backend default merchant address on mount
  useEffect(() => {
    let active = true;

    api<PaymentConfig>("/payments/config")
      .then((cfg) => {
        if (!active) return;
        if (cfg.defaultMerchantWalletAddress) {
          setBackendDefaultAddress(cfg.defaultMerchantWalletAddress);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  // Compute effective recipient address: custom input > user registered wallet > backend env default
  const effectiveRecipientAddress =
    customRecipientAddress ?? user?.walletAddress ?? backendDefaultAddress;

  function handleUsdcChange(val: string) {
    setAmountUsdc(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) {
      setAmountZar((num * valrRate).toFixed(2));
    } else {
      setAmountZar("");
    }
  }

  function handleZarChange(val: string) {
    setAmountZar(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0 && valrRate > 0) {
      setAmountUsdc((num / valrRate).toFixed(2));
    } else {
      setAmountUsdc("");
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
        setCustomRecipientAddress(accounts[0]);
      }
    } catch (caught: unknown) {
      setError(caught instanceof Error ? caught.message : "Could not connect MetaMask");
    }
  }

  async function handleQrModeChange(newMode: "web" | "eip681") {
    setQrMode(newMode);
    if (payment) {
      const dataUrl = await generateQrDataUrl(payment, newMode);
      setQrDataUrl(dataUrl);
    }
  }

  // Live polling: Check payment status every 2 seconds when pending
  useEffect(() => {
    if (!payment || payment.status === "CONFIRMED") return;

    const interval = setInterval(async () => {
      try {
        const latest = await api<PaymentRequest>(`/payments/request/${payment.id}`);
        if (latest.status === "CONFIRMED") {
          setPayment(latest);
          clearInterval(interval);
        }
      } catch {
        // Continue polling silently
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [payment]);

  async function handleGenerateQr(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const numUsdc = parseFloat(amountUsdc);
    if (isNaN(numUsdc) || numUsdc <= 0) {
      setError("Please enter a valid USDC amount greater than 0.");
      return;
    }

    const trimmedAddress = effectiveRecipientAddress.trim();
    if (!/^0x[a-fA-F0-9]{40}$/.test(trimmedAddress)) {
      setError("Please provide a valid 42-character EVM wallet address (starting with 0x).");
      return;
    }

    setLoading(true);

    try {
      const res = await api<PaymentRequest>("/payments/request", {
        method: "POST",
        body: JSON.stringify({
          amountUsdc: numUsdc.toFixed(2),
          amountZar: amountZar || undefined,
          recipientAddress: trimmedAddress,
          description: description.trim() || undefined,
        }),
      });

      const dataUrl = await generateQrDataUrl(res, qrMode);
      setPayment(res);
      setQrDataUrl(dataUrl);
    } catch (caught: unknown) {
      setError(caught instanceof Error ? caught.message : "Failed to generate payment QR code.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy(text: string, type: "link" | "address") {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "link") {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } else {
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2000);
      }
    } catch {
      // Fallback
    }
  }

  const checkoutUrl = payment ? `${typeof window !== "undefined" ? window.location.origin : ""}/pay/${payment.id}` : "";

  return (
    <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase", color: "#38bdf8", marginBottom: "0.5rem" }}>
          Merchant Payment Gateway
        </div>
        <h1 style={{ fontSize: "1.875rem", fontWeight: "800", color: "#f8fafc", margin: "0 0 0.5rem 0" }}>
          Generate Sepolia USDC Payment QR
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "0.95rem", margin: 0, maxWidth: "680px" }}>
          Create an on-chain payment request for your customer. Real-time ZAR <span style={{ color: "#38bdf8" }}>⇄</span> USDC conversion is powered directly by the <strong>VALR API</strong>.
        </p>
      </div>

      {error && (
        <div style={{ background: "rgba(239, 68, 68, 0.12)", border: "1px solid rgba(239, 68, 68, 0.3)", borderRadius: "0.75rem", padding: "1rem 1.25rem", color: "#fca5a5", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
           {error}
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: payment ? "1fr 1fr" : "1fr", gap: "2rem", alignItems: "start" }}>
        {/* Left Form Column */}
        <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "1rem", padding: "1.75rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#f1f5f9", marginTop: 0, marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            Invoice Configuration
          </h2>
        

          <form onSubmit={handleGenerateQr} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
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
                    min="0.01"
                    required
                    value={amountUsdc}
                    onChange={(e) => handleUsdcChange(e.target.value)}
                    placeholder="10.00"
                    style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontSize: "1.05rem", fontWeight: "600" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>
                  ZAR Equivalent (R)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={amountZar}
                  onChange={(e) => handleZarChange(e.target.value)}
                  placeholder="185.00"
                  style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#94a3b8", fontSize: "1.05rem" }}
                />
              </div>
            </div>

            {/* Configurable Wallet Address */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                <label style={{ fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1" }}>
                  Receiving USDC Wallet Address *
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
                required
                value={effectiveRecipientAddress}
                onChange={(e) => setCustomRecipientAddress(e.target.value)}
                placeholder="0x..."
                style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontFamily: "monospace", fontSize: "0.85rem" }}
              />
              <span style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginTop: "0.35rem" }}>
                Configurable. Defaults to your registered account or environment address. Payments arrive here directly.
              </span>
            </div>

            {/* Note / Description */}
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#cbd5e1", marginBottom: "0.4rem" }}>
                Note / Description (Optional)
              </label>
              <input
                type="text"
                maxLength={140}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Business  note "
                style={{ width: "100%", boxSizing: "border-box", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.75rem", color: "#ffffff", fontSize: "0.9rem" }}
              />
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
              {loading ? "Generating QR Code..." : payment ? "Update / Re-generate QR" : "Generate Payment QR"}
            </button>
          </form>
        </div>

        {/* Right Output Column: Payment QR & Live Tracker */}
        {payment && (
          <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "1rem", padding: "1.75rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            {/* Status Header */}
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <div style={{ textAlign: "left" }}>
                <span style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Invoice</span>
                <div style={{ color: "#e2e8f0", fontSize: "0.85rem", fontFamily: "monospace" }}>{payment.id}</div>
              </div>

              {payment.status === "CONFIRMED" ? (
                <div style={{ background: "rgba(34, 197, 94, 0.15)", border: "1px solid #22c55e", borderRadius: "9999px", padding: "0.35rem 0.85rem", color: "#4ade80", fontSize: "0.8rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <span>✓</span> CONFIRMED
                </div>
              ) : (
                <div style={{ background: "rgba(234, 179, 8, 0.15)", border: "1px solid #eab308", borderRadius: "9999px", padding: "0.35rem 0.85rem", color: "#facc15", fontSize: "0.8rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  WAITING FOR PAYMENT...
                </div>
              )}
            </div>

            {/* QR Mode Switcher */}
            <div style={{ display: "flex", background: "#020617", border: "1px solid #334155", borderRadius: "0.5rem", padding: "0.25rem", marginBottom: "1rem", gap: "0.25rem" }}>
              <button
                type="button"
                onClick={() => handleQrModeChange("web")}
                style={{
                  background: qrMode === "web" ? "#1e293b" : "transparent",
                  color: qrMode === "web" ? "#38bdf8" : "#94a3b8",
                  border: "none",
                  borderRadius: "0.35rem",
                  padding: "0.35rem 0.75rem",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                 Web Checkout QR
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

            {/* High-Contrast QR Code Card */}
            <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "1rem", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)", marginBottom: "1.25rem" }}>
              {qrDataUrl ? (
                <Image
                  src={qrDataUrl}
                  alt={`Payment QR code for ${payment.amountUsdc} USDC`}
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

            {/* Amount Display with VALR Conversion Rate */}
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ fontSize: "1.75rem", fontWeight: "800", color: "#f8fafc" }}>
                ${payment.amountUsdc} <span style={{ fontSize: "1rem", color: "#38bdf8" }}>USDC</span>
              </div>
              {payment.amountZar && (
                <div style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: "0.2rem" }}>
                  ≈ R {payment.amountZar} ZAR
                  <span style={{ fontSize: "0.75rem", color: "#38bdf8", marginLeft: "0.4rem" }}>
                    (Mocked @ R{valrRate.toFixed(2)} / USDC)
                  </span>
                </div>
              )}
            </div>

            {/* Configured Recipient Wallet */}
            <div style={{ width: "100%", background: "#020617", border: "1px solid #1e293b", borderRadius: "0.5rem", padding: "0.75rem", marginBottom: "1.25rem", textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.7rem", color: "#64748b", textTransform: "uppercase", fontWeight: "700" }}>Destination Wallet</span>
                <button
                  type="button"
                  onClick={() => handleCopy(payment.recipientAddress, "address")}
                  style={{ background: "none", border: "none", color: "#38bdf8", fontSize: "0.75rem", cursor: "pointer" }}
                >
                  {copiedAddress ? "Copied!" : "Copy"}
                </button>
              </div>
              <div style={{ color: "#cbd5e1", fontSize: "0.75rem", fontFamily: "monospace", wordBreak: "break-all" }}>
                {payment.recipientAddress}
              </div>
            </div>

            {/* Confirmed On-Chain Details */}
            {payment.status === "CONFIRMED" && (
              <div style={{ width: "100%", background: "rgba(34, 197, 94, 0.08)", border: "1px solid rgba(34, 197, 94, 0.3)", borderRadius: "0.75rem", padding: "1rem", marginBottom: "1.25rem", textAlign: "left" }}>
                <div style={{ color: "#4ade80", fontWeight: "700", fontSize: "0.9rem", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span>✓</span> Transaction Verified on Sepolia!
                </div>
                {payment.txHash && (
                  <div style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>
                    <div style={{ color: "#94a3b8", fontSize: "0.7rem", textTransform: "uppercase" }}>Transaction Hash</div>
                    <a
                      href={`https://sepolia.etherscan.io/tx/${payment.txHash}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#38bdf8", wordBreak: "break-all", textDecoration: "underline", fontFamily: "monospace" }}
                    >
                      {payment.txHash} ↗
                    </a>
                  </div>
                )}
                {payment.payerAddress && (
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: "0.5rem" }}>
                    Payer: <span style={{ color: "#e2e8f0", fontFamily: "monospace" }}>{payment.payerAddress}</span>
                  </div>
                )}
              </div>
            )}

            {/* Direct Link & Test Action */}
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link
                href={`/pay/${payment.id}`}
                target="_blank"
                style={{
                  display: "block",
                  width: "100%",
                  boxSizing: "border-box",
                  background: "#1e293b",
                  border: "1px solid #334155",
                  color: "#f8fafc",
                  borderRadius: "0.5rem",
                  padding: "0.75rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Open Customer Checkout Page ↗
              </Link>

              <button
                type="button"
                onClick={() => handleCopy(checkoutUrl, "link")}
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
                {copiedLink ? "✓ Link Copied to Clipboard" : "Copy Direct Payment Link"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
