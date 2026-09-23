"use client";

import { useMemo, useState } from "react";
import { DASHBOARD_DEMO } from "@/data/dashboard-mock";
import styles from "./Dashboard.module.css";

type Tab = "receive" | "convert" | "send";
const tabs: { id: Tab; label: string }[] = [{ id: "receive", label: "Receive" }, { id: "convert", label: "Convert" }, { id: "send", label: "Send" }];

function validMoney(value: string) { return /^\d*(\.\d{0,2})?$/.test(value) && Number(value) >= 0; }
function money(value: number) { return new Intl.NumberFormat("en-ZA", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value); }

function ReceivePanel() {
  const [amount, setAmount] = useState("100.00");
  const [generated, setGenerated] = useState(false);
  const valid = validMoney(amount) && Number(amount) > 0;
  const error = amount && !validMoney(amount) ? "Enter a positive ZAR amount with no more than two decimal places." : "";
  const usdc = valid ? Number(amount) / DASHBOARD_DEMO.exchangeRate : 0;
  function changeAmount(next: string) {
    // Reject minus signs, a second decimal separator, and precision beyond cents.
    if (next === "" || /^\d*(\.\d{0,2})?$/.test(next)) setAmount(next);
    setGenerated(false);
  }
  return <div className={styles.panelBody}>
    <div className={styles.formGroup}><label htmlFor="receive-amount">Amount to receive</label><div className={styles.amountInput}><span>R</span><input id="receive-amount" inputMode="decimal" value={amount} onChange={(event) => changeAmount(event.target.value)} aria-describedby={error ? "receive-error" : "receive-help"} /><span>ZAR</span></div>{error ? <p id="receive-error" className={styles.error} role="alert">{error}</p> : <p id="receive-help" className={styles.hint}>Customer will pay approximately {money(usdc)} USDC.</p>}</div>
    <div className={styles.details}><div><span>Customer pays</span><strong>≈ {money(usdc)} USDC</strong></div><div><span>Stablecoin</span><strong>USDC</strong></div><div><span>Network</span><strong>Polygon</strong></div><div><span>Settlement</span><strong>ZAR</strong></div><div><span>Quote validity</span><strong>2 minutes</strong></div></div>
    {generated && <div className={styles.qrState} aria-live="polite"><div className={styles.demoQr} aria-hidden="true"><span>DEMO</span></div><div><strong>Waiting for payment</strong><p>Demo QR — not valid for payment. Reference: DEMO-PAY-10483</p></div></div>}
    <button type="button" className={styles.primaryButton} disabled={!valid} onClick={() => setGenerated(true)}>Generate payment QR</button>
    <a href="#manual-payment-details" className={styles.textButton}>View manual payment details</a>
    <p id="manual-payment-details" className={styles.demoNote}>Demo details: Polygon · USDC · reference DEMO-PAY-10483.</p>
  </div>;
}

function ConvertPanel() {
  const [amount, setAmount] = useState("100.00");
  const valid = validMoney(amount) && Number(amount) > 0;
  return <div className={styles.panelBody}><div className={styles.formGroup}><label htmlFor="convert-amount">USDC to convert</label><div className={styles.amountInput}><input id="convert-amount" inputMode="decimal" value={amount} onChange={(event) => setAmount(event.target.value)} /><span>USDC</span></div></div><div className={styles.details}><div><span>Rate</span><strong>1 USDC = R18.15</strong></div><div><span>You receive</span><strong>R{money((Number(amount) || 0) * DASHBOARD_DEMO.exchangeRate)}</strong></div><div><span>Settlement currency</span><strong>ZAR</strong></div></div><p className={styles.demoNote}>Demo only — conversion review does not submit a transaction.</p><button className={styles.primaryButton} type="button" disabled={!valid}>Review conversion</button></div>;
}

function SendPanel() {
  const [address, setAddress] = useState(""); const [amount, setAmount] = useState("");
  const valid = /^0x[a-fA-F0-9]{40}$/.test(address) && validMoney(amount) && Number(amount) > 0;
  return <div className={styles.panelBody}><div className={styles.formGroup}><label htmlFor="send-address">Recipient wallet address</label><input className={styles.textInput} id="send-address" placeholder="0x..." value={address} onChange={(event) => setAddress(event.target.value)} /></div><div className={styles.formGroup}><label htmlFor="send-amount">Amount to send</label><div className={styles.amountInput}><input id="send-amount" inputMode="decimal" value={amount} onChange={(event) => setAmount(event.target.value)} /><span>USDC</span></div></div><div className={styles.details}><div><span>Network</span><strong>Polygon</strong></div><div><span>Available</span><strong>100.00 USDC</strong></div></div><p className={styles.demoNote}>Demo only — transfer review does not submit a blockchain transaction.</p><button className={styles.primaryButton} type="button" disabled={!valid}>Review transfer</button></div>;
}

export function PaymentWorkspace() {
  const [tab, setTab] = useState<Tab>("receive");
  const panel = useMemo(() => tab === "receive" ? <ReceivePanel /> : tab === "convert" ? <ConvertPanel /> : <SendPanel />, [tab]);
  return <section className={styles.workspace} aria-labelledby="workspace-title"><div className={styles.workspaceHeading}><div><p className={styles.eyebrow}>Payments</p><h1 id="workspace-title">Move money simply.</h1></div><span className={styles.networkBadge}>● Polygon</span></div><div className={styles.tabs} role="tablist" aria-label="Payment action">{tabs.map(({ id, label }) => <button key={id} id={`${id}-tab`} type="button" role="tab" aria-selected={tab === id} aria-controls={`${id}-panel`} className={tab === id ? styles.activeTab : ""} onClick={() => setTab(id)}>{label}</button>)}</div><div id={`${tab}-panel`} role="tabpanel" aria-labelledby={`${tab}-tab`}>{panel}</div></section>;
}
