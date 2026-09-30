"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { api } from "@/services/api";
import {
  connectPayerWallet,
  ensureSepoliaNetwork,
  getPayerUsdcBalance,
  sendUsdcTransfer,
  SEPOLIA_USDC_ADDRESS,
} from "@/services/web3";

type PaymentRequest = {
  id: string;
  userId: string;
  userName?: string;
  recipientAddress: string;
  amountUsdc: string;
  amountZar?: string | null;
  network: string;
  token: string;
  tokenAddress: string;
  description?: string | null;
  status: "PENDING" | "CONFIRMED" | "FAILED" | "EXPIRED";
  txHash?: string | null;
  payerAddress?: string | null;
  createdAt: string;
};

export default function PaymentCheckoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [payment, setPayment] = useState<PaymentRequest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [payerAccount, setPayerAccount] = useState<string | null>(null);
  const [payerBalance, setPayerBalance] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);
  const [payStep, setPayStep] = useState<string>("");
  const [confirmedTx, setConfirmedTx] = useState<string | null>(null);

  useEffect(() => {
    api<PaymentRequest>(`/payments/request/${id}`)
      .then((data) => {
        setPayment(data);
        if (data.status === "CONFIRMED" && data.txHash) {
          setConfirmedTx(data.txHash);
        }
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Payment request not found"))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleConnectWallet() {
    setError("");
    try {
      const account = await connectPayerWallet();
      setPayerAccount(account);
      const balance = await getPayerUsdcBalance(account);
      setPayerBalance(balance);
    } catch (err: any) {
      setError(err?.message || "Failed to connect wallet.");
    }
  }

  async function handlePay() {
    if (!payment) return;
    setError("");
    setPaying(true);
    setPayStep("Connecting wallet and switching to Sepolia...");

    try {
      await ensureSepoliaNetwork();
      setPayStep("Waiting for signature in MetaMask...");

      const { txHash, payerAddress } = await sendUsdcTransfer(
        payment.recipientAddress,
        payment.amountUsdc
      );

      setPayStep("Broadcasting & verifying transaction on Sepolia...");

      // Submit to backend for cryptographic verification on Sepolia
      const res = await api<{ message: string; payment: PaymentRequest }>(
        `/payments/request/${payment.id}/confirm`,
        {
          method: "POST",
          body: JSON.stringify({
            txHash,
            payerAddress,
          }),
        }
      );

      setPayment(res.payment);
      setConfirmedTx(txHash);
      setPayStep("");
    } catch (err: any) {
      setError(err?.message || "Payment transaction failed or was cancelled.");
    } finally {
      setPaying(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1d", color: "#f1f5f9", fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <header style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", color: "inherit" }}>
          <Image src="/images/abc-logo.png" alt="ABC Pay" width={40} height={40} />
          <div>
            <div style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em" }}>ABC Pay</div>
            <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>by Africa’s Blockchain Club</div>
          </div>
        </Link>
      </header>

      <main style={{ maxWidth: "480px", width: "100%", background: "#111827", border: "1px solid #1e293b", borderRadius: "1.25rem", padding: "2rem", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "3rem 1rem", color: "#94a3b8" }}>
            <div style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Loading payment request…</div>
            <div style={{ fontSize: "0.875rem" }}>Retrieving order details from Sepolia network</div>
          </div>
        ) : error && !payment ? (
          <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
            <div style={{ color: "#ef4444", fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.5rem" }}>Payment Error</div>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "1.5rem" }}>{error}</p>
            <Link href="/" style={{ background: "#3b82f6", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", textDecoration: "none", fontWeight: 500 }}>
              Return to Homepage
            </Link>
          </div>
        ) : payment ? (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid #1e293b", paddingBottom: "1rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", color: "#60a5fa", background: "rgba(59, 130, 246, 0.1)", padding: "0.25rem 0.6rem", borderRadius: "9999px" }}>
                SEPOLIA TESTNET
              </span>
              <span style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "0.25rem 0.6rem",
                borderRadius: "9999px",
                background: confirmedTx || payment.status === "CONFIRMED" ? "rgba(34, 197, 94, 0.15)" : "rgba(234, 179, 8, 0.15)",
                color: confirmedTx || payment.status === "CONFIRMED" ? "#4ade80" : "#facc15"
              }}>
                {confirmedTx || payment.status === "CONFIRMED" ? "✓ PAID & SETTLED" : "PENDING PAYMENT"}
              </span>
            </div>

            {/* Recipient Details */}
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontSize: "0.8125rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>
                Pay to
              </div>
              <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f8fafc" }}>
                {payment.userName || "ABC Pay Merchant"}
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#64748b", wordBreak: "break-all", fontFamily: "monospace", marginTop: "0.25rem" }}>
                {payment.recipientAddress}
              </div>
            </div>

            {/* Amount Box */}
            <div style={{ background: "#1e293b", borderRadius: "0.75rem", padding: "1.25rem", textAlign: "center", marginBottom: "1.5rem", border: "1px solid #334155" }}>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                Amount Due
              </div>
              <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
                {payment.amountUsdc} <span style={{ fontSize: "1.25rem", fontWeight: 600, color: "#60a5fa" }}>USDC</span>
              </div>
              {payment.amountZar && (
                <div style={{ fontSize: "0.875rem", color: "#94a3b8", marginTop: "0.25rem" }}>
                  ≈ R {payment.amountZar} ZAR
                </div>
              )}
            </div>

            {/* Success State */}
            {confirmedTx || payment.status === "CONFIRMED" ? (
              <div style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", borderRadius: "0.75rem", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎉</div>
                <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#4ade80", marginBottom: "0.25rem" }}>
                  Payment Transferred Successfully!
                </div>
                <p style={{ fontSize: "0.875rem", color: "#cbd5e1", margin: "0.5rem 0 1rem" }}>
                  <strong>{payment.amountUsdc} USDC</strong> has landed directly in the recipient’s Sepolia account.
                </p>
                {confirmedTx && (
                  <div style={{ marginBottom: "1rem" }}>
                    <a
                      href={`https://sepolia.etherscan.io/tx/${confirmedTx}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.8125rem", color: "#60a5fa", textDecoration: "underline", wordBreak: "break-all" }}
                    >
                      View on Sepolia Etherscan ↗
                    </a>
                  </div>
                )}
                <Link
                  href="/wallet"
                  style={{ display: "inline-block", background: "#3b82f6", color: "white", padding: "0.625rem 1.25rem", borderRadius: "0.5rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem" }}
                >
                  Go to Wallet Dashboard
                </Link>
              </div>
            ) : (
              /* Payment Action State */
              <div>
                {error && (
                  <div style={{ background: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.4)", borderRadius: "0.5rem", padding: "0.75rem", color: "#fca5a5", fontSize: "0.8125rem", marginBottom: "1rem" }}>
                    {error}
                  </div>
                )}

                {payStep && (
                  <div style={{ background: "rgba(59, 130, 246, 0.15)", border: "1px solid rgba(59, 130, 246, 0.4)", borderRadius: "0.5rem", padding: "0.75rem", color: "#93c5fd", fontSize: "0.8125rem", marginBottom: "1rem", textAlign: "center" }}>
                    ⏳ {payStep}
                  </div>
                )}

                {payerAccount ? (
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem", color: "#94a3b8", marginBottom: "0.5rem" }}>
                      <span>Connected Payer:</span>
                      <span style={{ fontFamily: "monospace" }}>{payerAccount.slice(0, 6)}…{payerAccount.slice(-4)}</span>
                    </div>
                    {payerBalance !== null && (
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem", color: "#94a3b8", marginBottom: "1.25rem" }}>
                        <span>Your Sepolia USDC:</span>
                        <span style={{ fontWeight: 600, color: "#f8fafc" }}>{payerBalance} USDC</span>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={handlePay}
                      disabled={paying}
                      style={{
                        width: "100%",
                        background: paying ? "#475569" : "#2563eb",
                        color: "white",
                        border: "none",
                        padding: "0.875rem",
                        borderRadius: "0.75rem",
                        fontSize: "1rem",
                        fontWeight: 700,
                        cursor: paying ? "not-allowed" : "pointer",
                        transition: "background 0.2s",
                      }}
                    >
                      {paying ? "Processing Transaction…" : `Pay ${payment.amountUsdc} USDC Now`}
                    </button>
                  </div>
                ) : (
                  <div>
                    <p style={{ fontSize: "0.8125rem", color: "#94a3b8", marginBottom: "1rem", textAlign: "center" }}>
                      Connect your MetaMask wallet on Sepolia to approve this transfer.
                    </p>
                    <button
                      type="button"
                      onClick={handleConnectWallet}
                      style={{
                        width: "100%",
                        background: "#3b82f6",
                        color: "white",
                        border: "none",
                        padding: "0.875rem",
                        borderRadius: "0.75rem",
                        fontSize: "1rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Connect MetaMask to Pay
                    </button>
                  </div>
                )}

                <div style={{ marginTop: "1.5rem", borderTop: "1px solid #1e293b", paddingTop: "1rem", textAlign: "center" }}>
                  <small style={{ color: "#64748b", fontSize: "0.75rem" }}>
                    Token contract (Sepolia USDC):{" "}
                    <code style={{ color: "#94a3b8" }}>{SEPOLIA_USDC_ADDRESS.slice(0, 10)}…{SEPOLIA_USDC_ADDRESS.slice(-8)}</code>
                  </small>
                </div>
              </div>
            )}
          </div>
        ) : null}
      </main>
    </div>
  );
}
