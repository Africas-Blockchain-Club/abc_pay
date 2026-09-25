"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";

type WalletResponse = {
  wallet: { id: string; publicAddress: string | null; chain: string; stablecoin: string; balanceCached: string };
};

export default function WalletPage() {
  const [data, setData] = useState<WalletResponse | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api<WalletResponse>("/wallets/me").then(setData).catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <div className="eyebrow">Wallet</div>
      <h1 style={{ fontSize: "3rem" }}>Your stablecoin wallet</h1>
      <p className="lead">MVP wallet record owned by the backend. On-chain provisioning can be connected next.</p>
      {error && <div className="error">{error}</div>}
      <div className="grid">
        <div className="card"><div className="muted">Cached balance</div><div className="stat">{data?.wallet.balanceCached ?? "0"} {data?.wallet.stablecoin ?? "USDC"}</div></div>
        <div className="card"><div className="muted">Network</div><div className="stat">{data?.wallet.chain ?? "EVM"}</div></div>
      </div>
      <div className="card" style={{ marginTop: 18 }}><div className="muted">Public address</div><div className="code">{data?.wallet.publicAddress ?? "Not provisioned yet"}</div></div>
    </section>
  );
}
