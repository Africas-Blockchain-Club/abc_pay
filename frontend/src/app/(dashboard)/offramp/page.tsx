"use client";

import { FormEvent, useState } from "react";
import { api } from "@/services/api";

type Quote = {
  cryptoAmount: string;
  cryptoCurrency: "USDC";
  fiatCurrency: "ZAR";
  exchangeRate: string;
  grossFiatAmount: string;
  feeRate: string;
  feeAmount: string;
  netFiatAmount: string;
};

type Order = {
  id: string;
  status: string;
  cryptoAmount: string;
  fiatAmount: string;
  exchangeRate: string;
  platformFeeZar: string;
  cryptoDepositAddress: string | null;
  txHash: string | null;
};

export default function OfframpPage() {
  const [amount, setAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [branchCode, setBranchCode] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");

  const [quote, setQuote] = useState<Quote | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [txHash, setTxHash] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function getQuote(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
       const response = await api<{ quote: Quote }>("/ramp/quote", {
        method: "POST",
        body: JSON.stringify({
          type: "OFFRAMP",
          cryptoAmount: amount,
        }),
      });

      setQuote(response.quote);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not get quote");
    } finally {
      setLoading(false);
    }
  }

  async function createOrder() {
    if (!quote) return;

    setLoading(true);
    setMessage("");

    try {
        const response = await api<{ order: Order }>("/ramp/offramp", {
        method: "POST",
        body: JSON.stringify({
          cryptoAmount: amount,
          sourceWalletAddress:
            sessionStorage.getItem("abc_pay_metamask_address") || undefined,
          bankDetails: {
            bankName,
            accountNumber,
            branchCode,
            accountHolderName,
          },
        }),
      });

      setOrder(response.order);
      setMessage("Order created. Send your USDC to the receiving address below.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not create order");
    } finally {
      setLoading(false);
    }
  }

  async function verifyDeposit() {
    if (!order || !txHash.trim()) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await api<{ order: Order }>(`/ramp/orders/${order.id}/verify-deposit`, {
        method: "POST",
        body: JSON.stringify({
          txHash: txHash.trim(),
        }),
      });

      setOrder(response.order);
      setMessage("USDC deposit verified successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Deposit verification failed");
    } finally {
      setLoading(false);
    }
  }

  async function settleOrder() {
    if (!order) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await api<{ order: Order }>(`/ramp/orders/${order.id}/settle`, {
        method: "POST",
      });

      setOrder(response.order);
      setMessage("Off-ramp completed. Your ZAR payout has been processed.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Settlement failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <h1>Convert USDC to ZAR</h1>
      <p>Send USDC and receive the equivalent ZAR payout.</p>

      {!order && (
        <form onSubmit={getQuote}>
          <div style={{ display: "grid", gap: 16 }}>
            <label>
              USDC amount
              <input
                type="number"
                min="0.000001"
                step="0.000001"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                required
              />
            </label>

            <label>
              Bank name
              <input
                value={bankName}
                onChange={(event) => setBankName(event.target.value)}
                required
              />
            </label>

            <label>
              Account number
              <input
                value={accountNumber}
                onChange={(event) => setAccountNumber(event.target.value)}
                required
              />
            </label>

            <label>
              Branch code
              <input
                value={branchCode}
                onChange={(event) => setBranchCode(event.target.value)}
                required
              />
            </label>

            <label>
              Account holder name
              <input
                value={accountHolderName}
                onChange={(event) => setAccountHolderName(event.target.value)}
                required
              />
            </label>

            <button type="submit" disabled={loading}>
              {loading ? "Getting quote..." : "Get quote"}
            </button>
          </div>
        </form>
      )}

      {quote && !order && (
        <div style={{ marginTop: 30 }}>
          <h2>Quote</h2>

          <p>USDC: {quote.cryptoAmount}</p>
          <p>Rate: R{quote.exchangeRate} / USDC</p>
          <p>Gross: R{quote.grossFiatAmount}</p>
          <p>Fee: R{quote.feeAmount}</p>
          <p>
            <strong>You receive: R{quote.netFiatAmount}</strong>
          </p>

          <button type="button" onClick={createOrder} disabled={loading}>
            {loading ? "Creating order..." : "Continue"}
          </button>
        </div>
      )}

      {order && order.status !== "COMPLETED" && (
        <div style={{ marginTop: 30 }}>
          <h2>Send your USDC</h2>

          <p>Send exactly:</p>
          <strong>{order.cryptoAmount} USDC</strong>

          <p>To this Sepolia receiving address:</p>

          <div
            style={{
              padding: 12,
              wordBreak: "break-all",
              border: "1px solid #555",
              borderRadius: 8,
            }}
          >
            {order.cryptoDepositAddress}
          </div>

          <p style={{ marginTop: 20 }}>
            After sending the USDC from MetaMask, paste the transaction hash
            below.
          </p>

          <input
            value={txHash}
            onChange={(event) => setTxHash(event.target.value)}
            placeholder="0x..."
            style={{ width: "100%" }}
          />

          <button
            type="button"
            onClick={verifyDeposit}
            disabled={loading || !txHash.trim()}
            style={{ marginTop: 12 }}
          >
            {loading ? "Verifying..." : "Verify USDC deposit"}
          </button>

          {order.status === "PAYMENT_RECEIVED" && (
            <button
              type="button"
              onClick={settleOrder}
              disabled={loading}
              style={{ marginTop: 12, marginLeft: 12 }}
            >
              {loading ? "Processing..." : "Process ZAR payout"}
            </button>
          )}
        </div>
      )}

      {order?.status === "COMPLETED" && (
        <div style={{ marginTop: 30 }}>
          <h2>Off-ramp completed</h2>

          <p>
            <strong>USDC sent:</strong> {order.cryptoAmount}
          </p>

          <p>
            <strong>ZAR payout:</strong> R{order.fiatAmount}
          </p>

          <p>
            <strong>Platform fee:</strong> R{order.platformFeeZar}
          </p>

          <p>
            <strong>Status:</strong> {order.status}
          </p>
        </div>
      )}

      {message && (
        <p style={{ marginTop: 20 }}>
          {message}
        </p>
      )}
    </div>
  );
}