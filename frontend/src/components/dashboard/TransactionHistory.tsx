"use client";

import { useState } from "react";
import { DASHBOARD_TRANSACTIONS, type DashboardTransaction, type TransactionKind } from "@/data/dashboard-mock";
import styles from "./Dashboard.module.css";

type Filter = "all" | TransactionKind;
const filters: { value: Filter; label: string }[] = [{ value: "all", label: "All" }, { value: "received", label: "Received" }, { value: "converted", label: "Converted" }, { value: "sent", label: "Sent" }];

function TransactionRow({ transaction }: { transaction: DashboardTransaction }) {
  const isComplete = transaction.status === "completed";
  return <li className={styles.transaction}>
    <div className={styles.transactionIcon} aria-hidden="true">{transaction.kind === "received" ? "↓" : transaction.kind === "sent" ? "↑" : "↔"}</div>
    <div className={styles.transactionInfo}><strong>{transaction.title}</strong><span>{transaction.reference} · {transaction.time}</span></div>
    <div className={styles.transactionAmount}><strong>{transaction.zar}</strong><span>{transaction.usdc}</span><em className={isComplete ? styles.complete : styles.processing}>{isComplete ? "● Completed" : "◐ Processing"}</em></div>
  </li>;
}

export function TransactionHistory() {
  const [filter, setFilter] = useState<Filter>("all");
  const transactions = filter === "all" ? DASHBOARD_TRANSACTIONS : DASHBOARD_TRANSACTIONS.filter((transaction) => transaction.kind === filter);
  return <section className={styles.history} aria-labelledby="history-title">
    <div className={styles.historyHeading}><div><p className={styles.eyebrow}>Activity</p><h2 id="history-title">Transaction history</h2></div><button type="button" className={styles.textButton}>View all</button></div>
    <div className={styles.filters} role="tablist" aria-label="Transaction type">
      {filters.map(({ value, label }) => <button key={value} type="button" role="tab" aria-selected={filter === value} className={filter === value ? styles.activeFilter : ""} onClick={() => setFilter(value)}>{label}</button>)}
    </div>
    {transactions.length ? <ul className={styles.transactionList}>{transactions.map((transaction) => <TransactionRow key={transaction.id} transaction={transaction} />)}</ul> : <p className={styles.emptyState}>No {filter} transactions in this demo.</p>}
  </section>;
}
