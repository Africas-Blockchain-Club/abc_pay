"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./WalletDashboard.module.css";

type ConversionMode = "on-ramp" | "off-ramp";

const modes: Record<ConversionMode, { tab: string; title: string; description: string; pay: string; receive: string }> = {
  "on-ramp": {
    tab: "Buy USDC · on-ramp",
    title: "ZAR to USDC",
    description: "Use South African rand to buy USDC. A quote will confirm the amount, fees, and network before you review.",
    pay: "ZAR",
    receive: "USDC",
  },
  "off-ramp": {
    tab: "Convert to ZAR · off-ramp",
    title: "USDC to ZAR",
    description: "Convert USDC to South African rand. A quote will confirm the payout, fees, and network before you review.",
    pay: "USDC",
    receive: "ZAR",
  },
};

export default function WalletDashboard() {
  const [mode, setMode] = useState<ConversionMode>("on-ramp");
  const current = modes[mode];

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <Link className={styles.brand} href="/" aria-label="ABC Pay home">
            <span className={styles.mark} aria-hidden="true">AB</span>
            <span>ABC Pay</span>
          </Link>
          <p className={styles.headerStatus}>Customer dashboard</p>
        </header>

        <section className={styles.intro} aria-labelledby="wallet-title">
          <div>
            <p className={styles.eyebrow}>Individual account</p>
            <h1 id="wallet-title">Wallet workspace</h1>
          </div>
          <p className={styles.accountUnavailable}>Account data unavailable</p>
        </section>

        <div className={styles.layout}>
          <section className={styles.workspace} aria-labelledby="conversion-title">
            <div className={styles.tabs} role="tablist" aria-label="Conversion direction">
              {(Object.keys(modes) as ConversionMode[]).map((item) => (
                <button
                  key={item}
                  className={styles.tab}
                  type="button"
                  role="tab"
                  aria-selected={mode === item}
                  aria-controls={`${item}-panel`}
                  id={`${item}-tab`}
                  onClick={() => setMode(item)}
                >
                  {modes[item].tab}
                </button>
              ))}
            </div>

            <div className={styles.conversion} role="tabpanel" id={`${mode}-panel`} aria-labelledby={`${mode}-tab`}>
              <div className={styles.conversionHeading}>
                <div>
                  <p className={styles.eyebrow}>Conversion workspace</p>
                  <h2 id="conversion-title">{current.title}</h2>
                </div>
                <span className={styles.quoteStatus}>Quote unavailable</span>
              </div>
              <p className={styles.description}>{current.description}</p>

              <div className={styles.amounts}>
                <div className={styles.amountRow}>
                  <span>You pay</span>
                  <strong>Amount unavailable</strong>
                  <span>{current.pay}</span>
                </div>
                <div className={styles.amountRow}>
                  <span>You receive</span>
                  <strong>Amount unavailable</strong>
                  <span>{current.receive}</span>
                </div>
              </div>

              <dl className={styles.details}>
                <div><dt>Rate</dt><dd>Quote unavailable</dd></div>
                <div><dt>Fees</dt><dd>Fees shown with quote</dd></div>
                <div><dt>Network</dt><dd>Network to be confirmed</dd></div>
              </dl>

              <div className={styles.conversionActions}>
                <button className={styles.primaryAction} type="button" disabled>Review conversion · Coming soon</button>
                <button className={styles.confirmationAction} type="button" disabled>Confirm conversion · Coming soon</button>
              </div>
              <p className={styles.integrationNote}>Quote and conversion endpoints are required before this action can be enabled.</p>
            </div>
          </section>

          <aside className={styles.sidebar} aria-label="Wallet overview">
            <section className={styles.walletCard} aria-labelledby="wallet-area-title">
              <p className={styles.eyebrow}>Your wallet</p>
              <h2 id="wallet-area-title">Wallet data unavailable</h2>
              <p className={styles.description}>We can’t confirm a signed-in account or connected wallet while the authenticated wallet service is unavailable.</p>
              <div className={styles.balance}>
                <span>Available balance</span>
                <strong>Unavailable</strong>
              </div>
              <div className={styles.secondaryActions}>
                <button type="button" disabled>Receive · Coming soon</button>
                <button type="button" disabled>Send · Coming soon</button>
              </div>
            </section>

            <section className={styles.transactions} aria-labelledby="transactions-title">
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>Activity</p>
                <h2 id="transactions-title">Transactions</h2>
              </div>
              <div className={styles.emptyState}>
                <p>No transactions yet</p>
                <span>Activity will appear here when wallet data is connected.</span>
              </div>
            </section>
          </aside>
        </div>

        <footer className={styles.footer}>ABC Pay dashboard · Quotes, conversions, and wallet access are not connected yet.</footer>
      </div>
    </main>
  );
}
