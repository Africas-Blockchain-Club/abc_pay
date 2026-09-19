"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";

type WalletResponse = {
  wallet: { id: string; publicAddress: string | null; chain: string; stablecoin: string; balanceCached: string };
};

type Transaction = {
  id: string;
  type: "send" | "receive" | "buy" | "sell";
  amount: string;
  currency: string;
  date: string;
  status: "success" | "pending" | "failed";
};

const TRANSACTIONS: Transaction[] = [
  { id: "txn-001", type: "receive", amount: "50.00", currency: "USDC", date: "2026-09-18 14:32", status: "success" },
  { id: "txn-002", type: "send", amount: "12.50", currency: "USDC", date: "2026-09-17 09:15", status: "success" },
  { id: "txn-003", type: "buy", amount: "100.00", currency: "USDC", date: "2026-09-16 18:45", status: "success" },
];

function QRIcon({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ opacity: 0.15 }}>
      {Array.from({ length: 10 }, (_, r) =>
        Array.from({ length: 10 }, (_, c) =>
          (r * 3 + c * 7 + r * c) % 3 !== 0 ? (
            <rect key={`${r}-${c}`} x={c * 12} y={r * 12} width={10} height={10} rx={1.5} fill="#0f1f3d" />
          ) : null
        )
      )}
      <rect x="0" y="0" width="36" height="36" rx="4" fill="none" stroke="#0f1f3d" strokeWidth="3" />
      <rect x="84" y="0" width="36" height="36" rx="4" fill="none" stroke="#0f1f3d" strokeWidth="3" />
      <rect x="0" y="84" width="36" height="36" rx="4" fill="none" stroke="#0f1f3d" strokeWidth="3" />
      <rect x="8" y="8" width="20" height="20" rx="2" fill="#0f1f3d" />
      <rect x="92" y="8" width="20" height="20" rx="2" fill="#0f1f3d" />
      <rect x="8" y="92" width="20" height="20" rx="2" fill="#0f1f3d" />
    </svg>
  );
}

function TypeIcon({ type }: { type: Transaction["type"] }) {
  const colors: Record<Transaction["type"], string> = {
    receive: "#0dab76",
    send: "#e85d04",
    buy: "#6f42c1",
    sell: "#dc2626",
  };
  const labels: Record<Transaction["type"], string> = {
    receive: "↓",
    send: "↑",
    buy: "B",
    sell: "S",
  };
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: colors[type] + "18",
        color: colors[type],
        display: "grid",
        placeItems: "center",
        fontWeight: 800,
        fontSize: "0.85rem",
        flexShrink: 0,
      }}
    >
      {labels[type]}
    </div>
  );
}

export default function WalletPage() {
  const [data, setData] = useState<WalletResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const metamaskAddress = typeof window !== "undefined" ? sessionStorage.getItem("abc_pay_metamask_address") : null;
  const role = typeof window !== "undefined" ? sessionStorage.getItem("abc_pay_role") : null;

  useEffect(() => {
    setLoading(true);
    api<WalletResponse>("/wallets/me")
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }}>
      {/* ── Main column ─────────────────────────────── */}
      <div>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <div className="eyebrow">Dashboard</div>
            <h1 style={{ fontSize: "2.5rem", marginTop: 4 }}>
              Welcome, {role === "individual" ? "Individual" : "User"}
            </h1>
          </div>
          <button className="button primary">Connect Wallet</button>
        </div>

        {/* Wallet card */}
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: "32px 24px",
            borderColor: "#e85d04",
            background: "#ffffff",
            color: "#0f1f3d",
          }}
        >
          <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f1f3d" }}>Your Wallet</div>
          <div style={{ position: "relative", width: 140, height: 140 }}>
            <QRIcon size={140} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "grid",
                placeItems: "center",
                background: "rgba(255,255,255,0.85)",
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "#e85d04",
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                }}
              >
                A
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.85rem", color: "#6b7a95" }}>Wallet address</div>
            <code
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                background: "#f7f8fa",
                border: "1px solid #e2e6ed",
                padding: "6px 12px",
                borderRadius: 8,
                fontSize: "0.85rem",
                color: "#0f1f3d",
              }}
            >
              {metamaskAddress ?? data?.wallet.publicAddress ?? "Not connected"}
            </code>
          </div>
          <div style={{ display: "flex", gap: 24, textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f1f3d" }}>
                {loading ? "—" : data?.wallet.balanceCached ?? "0"} {data?.wallet.stablecoin ?? "USDC"}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#6b7a95" }}>Available balance</div>
            </div>
            <div>
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0f1f3d" }}>{data?.wallet.chain ?? "EVM"}</div>
              <div style={{ fontSize: "0.8rem", color: "#6b7a95" }}>Network</div>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0f1f3d", marginBottom: 12 }}>Quick Actions</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {["Send", "Receive", "Buy", "Sell"].map((action) => (
              <button
                key={action}
                className="button"
                style={{
                  background: action === "Buy" ? "#e85d04" : "#f7f8fa",
                  borderColor: action === "Buy" ? "#e85d04" : "#e2e6ed",
                  color: action === "Buy" ? "#fff" : "#0f1f3d",
                  fontWeight: 700,
                  padding: "10px 20px",
                }}
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sidebar: Transaction history ────────────── */}
      <div>
        <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0f1f3d", marginBottom: 12 }}>Recent Activity</div>
        <div
          className="card"
          style={{
            background: "#ffffff",
            borderColor: "#e2e6ed",
            padding: "16px",
            display: "grid",
            gap: 12,
          }}
        >
          {TRANSACTIONS.map((tx) => (
            <div
              key={tx.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <TypeIcon type={tx.type} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#0f1f3d" }}>
                  {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} {tx.currency}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#6b7a95" }}>{tx.date}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: tx.type === "send" ? "#e85d04" : "#0dab76" }}>
                  {tx.type === "send" ? "-" : "+"} {tx.amount}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: tx.status === "success" ? "#0dab76" : "#6b7a95",
                    background: tx.status === "success" ? "#e6f9f1" : "#f1f5f9",
                    padding: "2px 8px",
                    borderRadius: 20,
                    display: "inline-block",
                    marginTop: 2,
                  }}
                >
                  {tx.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {error && <div className="error" style={{ marginTop: 16 }}>{error}</div>}
      </div>
    </div>
  );
}
