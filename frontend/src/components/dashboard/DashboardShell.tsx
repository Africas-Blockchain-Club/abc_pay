"use client";

import { useState } from "react";
import { DASHBOARD_DEMO } from "@/data/dashboard-mock";
import { BackgroundArtwork } from "./BackgroundArtwork";
import { DashboardHeader } from "./DashboardHeader";
import { PaymentWorkspace } from "./PaymentWorkspace";
import { TransactionHistory } from "./TransactionHistory";
import styles from "./Dashboard.module.css";

function shortenAddress(address: string) { return `${address.slice(0, 6)}…${address.slice(-4)}`; }

export function DashboardShell() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  async function copyAddress() {
    try { await navigator.clipboard.writeText(DASHBOARD_DEMO.walletAddress); setCopyStatus("copied"); }
    catch { setCopyStatus("failed"); }
  }
  return <div className={styles.dashboardShell}><BackgroundArtwork /><DashboardHeader /><main className={styles.main}><section className={styles.walletStrip} aria-label="Demo wallet summary"><div><span>Available balance</span><strong>100.00 USDC</strong><em>≈ R1,815.00</em></div><div className={styles.walletAddress}><span>Wallet address</span><button type="button" onClick={copyAddress} aria-label="Copy complete wallet address">{shortenAddress(DASHBOARD_DEMO.walletAddress)} <b>Copy</b></button><p aria-live="polite">{copyStatus === "copied" ? "Copied complete wallet address." : copyStatus === "failed" ? "Could not copy address. Please copy it manually." : ""}</p></div></section><div className={styles.contentGrid}><PaymentWorkspace /><TransactionHistory /></div></main></div>;
}
