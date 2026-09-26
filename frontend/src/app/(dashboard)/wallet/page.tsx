"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

type WalletResponse = {
  wallet: { id: string; publicAddress: string | null; chain: string; stablecoin: string; balanceCached: string };
};

// Main already has these example rows. Keep them visibly labelled as sample data until the API provides history.
const SAMPLE_ACTIVITY = [
  { id: "txn-001", type: "Receive", amount: "+ 50.00", date: "18 Sep 2026 · 14:32", tone: "green" },
  { id: "txn-002", type: "Send", amount: "- 12.50", date: "17 Sep 2026 · 09:15", tone: "orange" },
  { id: "txn-003", type: "Buy", amount: "+ 100.00", date: "16 Sep 2026 · 18:45", tone: "green" },
];

export default function WalletPage() {
  const [data, setData] = useState<WalletResponse | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    api<WalletResponse>("/wallets/me")
      .then(setData)
      .catch((caught) => setError(caught instanceof Error ? caught.message : "Could not load wallet."))
      .finally(() => {
        setAddress(sessionStorage.getItem("abc_pay_metamask_address") ?? "");
        setLoading(false);
      });
  }, []);

  async function connectWallet() {
    setError("");
    try {
      if (!window.ethereum) throw new Error("Install MetaMask to connect your wallet.");
      const accounts = (await window.ethereum.request({ method: "eth_requestAccounts" })) as string[];
      if (!accounts?.[0]) throw new Error("Unlock MetaMask and select an account.");
      setAddress(accounts[0]);
      sessionStorage.setItem("abc_pay_metamask_address", accounts[0]);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not connect MetaMask.");
    }
  }

  const walletAddress = address || data?.wallet.publicAddress || "";
  async function copyAddress() {
    if (!walletAddress) return;
    await navigator.clipboard.writeText(walletAddress);
    setCopied(true);
  }

  return (
    <div className="abcWalletLayout">
      <div className="abcWalletMain">
        <div className="abcWalletTitle">
          <div><div className="abcSectionKicker">DASHBOARD</div><h1>Wallet overview</h1>
            <p>Monitor your stablecoin balance and payment activity.</p></div>
          <Link className="abcNewRequest" href="/merchant/qr-generate">▦ &nbsp; New payment request</Link>
        </div>

        <section className="abcBalanceCard" aria-label="Wallet balance">
          <div className="abcBalanceTop">
            <span>AVAILABLE BALANCE</span>
            <button type="button" className="abcConnectWallet" onClick={() => void connectWallet()}>
              {walletAddress ? "Wallet connected" : "Connect wallet"}
            </button>
          </div>
          <div className="abcBalanceAmount">
            <strong>{loading ? "—" : data?.wallet.balanceCached ?? "0.00"}</strong>
            <span>{data?.wallet.stablecoin ?? "USDC"}</span>
          </div>
          <div className="abcBalanceMeta">
            <div><span>Network</span><strong>{data?.wallet.chain ?? "EVM"}</strong></div>
            <div><span>Wallet address</span>
              <button type="button" onClick={() => void copyAddress()} disabled={!walletAddress}
                title={walletAddress || "Connect a wallet first"}>
                {walletAddress ? `${walletAddress.slice(0, 8)}…${walletAddress.slice(-6)}` : "Not connected"}
                {walletAddress && <span aria-hidden="true"> ⧉</span>}
              </button>
              {copied && <small role="status">Copied</small>}
            </div>
          </div>
        </section>

        <section className="abcQuickSection">
          <h2>Quick actions</h2>
          <div className="abcQuickGrid">
            <button type="button" disabled title="Transfers are coming soon"><span>↗</span><strong>Send</strong><small>Coming soon</small></button>
            <button type="button" onClick={() => void copyAddress()} disabled={!walletAddress}><span>↙</span><strong>Receive</strong><small>Copy wallet address</small></button>
            <button type="button" disabled title="On-ramp is coming soon"><span>＋</span><strong>Buy</strong><small>Coming soon</small></button>
            <button type="button" disabled title="Settlement is coming soon"><span>→</span><strong>Sell</strong><small>Coming soon</small></button>
          </div>
        </section>
      </div>

      <aside className="abcActivity">
        <div className="abcActivityHeading"><h2>Recent activity</h2><Link href="/payments">View all</Link></div>
        {error && <div className="abcWalletError" role="alert">
          <strong>{error === "Authentication required" ? "Authentication required" : "Wallet unavailable"}</strong>
          <span>{error === "Authentication required"
            ? "Your wallet is connected in the browser, but the server needs an account session."
            : error}</span>
        </div>}
        <p className="abcSampleLabel">Sample activity</p>
        <div className="abcActivityList">
          {SAMPLE_ACTIVITY.map((item) => (
            <div className="abcTransaction" key={item.id}>
              <span className={item.tone === "orange" ? "abcTxIcon out" : "abcTxIcon"}>{item.tone === "orange" ? "↗" : "↙"}</span>
              <div><strong>{item.type} USDC</strong><small>{item.date}</small><small>{item.id}</small></div>
              <span className={item.tone === "orange" ? "abcTxAmount out" : "abcTxAmount"}>{item.amount}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
