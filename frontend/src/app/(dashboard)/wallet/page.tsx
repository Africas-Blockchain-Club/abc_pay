"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

type WalletResponse = {
  wallet: { id: string; publicAddress: string | null; chain: string; stablecoin: string; balanceCached: string };
};

type KycStatusResponse = {
  kycVerified: boolean;
  status: string;
};

export default function WalletPage() {
  const [data, setData] = useState<WalletResponse | null>(null);
  const [kycData, setKycData] = useState<KycStatusResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api<WalletResponse>("/wallets/me").then(setData).catch((err) => setError(err.message));
    api<KycStatusResponse>("/kyc/status").then(setKycData).catch(() => undefined);
  }, []);

  const isVerified = kycData?.kycVerified || kycData?.status === "Approved";

  return (
    <section>
      <div className="eyebrow">Wallet</div>
      <h1 style={{ fontSize: "3rem" }}>Your stablecoin wallet</h1>
      <p className="lead">MVP wallet record owned by the backend. On-chain provisioning can be connected next.</p>
      {error && <div className="error">{error}</div>}

      {!isVerified && kycData && (
        <div
          className="card"
          style={{
            marginBottom: 20,
            borderLeft: "4px solid #facc15",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div style={{ fontWeight: 700, color: "#facc15" }}>Identity Verification Required</div>
            <div className="muted" style={{ fontSize: "0.9rem" }}>
              Current Status: {kycData.status}. Verify your ID via Didit.me to unlock full withdrawal and merchant settlement capabilities.
            </div>
          </div>
          <Link className="button primary" href="/verify">
            Verify Now →
          </Link>
        </div>
      )}

      <div className="grid">
        <div className="card"><div className="muted">Cached balance</div><div className="stat">{data?.wallet.balanceCached ?? "0"} {data?.wallet.stablecoin ?? "USDC"}</div></div>
        <div className="card"><div className="muted">Network</div><div className="stat">{data?.wallet.chain ?? "EVM"}</div></div>
        <div className="card">
          <div className="muted">Identity Status</div>
          <div
            className="stat"
            style={{
              color: isVerified ? "var(--brand)" : "#facc15",
              fontSize: "1.6rem",
            }}
          >
            {isVerified ? "Verified ✓" : kycData?.status ?? "Unverified"}
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 18 }}><div className="muted">Public address</div><div className="code">{data?.wallet.publicAddress ?? "Not provisioned yet"}</div></div>
    </section>
  );
}
