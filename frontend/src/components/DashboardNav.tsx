"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";

export function DashboardNav() {
  const router = useRouter();

  async function logout() {
    await api("/auth/logout", { method: "POST" }).catch(() => undefined);
    router.push("/login");
  }

  return (
    <aside className="sidebar">
      <Link className="brand" href="/wallet">ABC<span>Pay</span></Link>
      <nav className="sideNav">
        <Link href="/wallet">Wallet</Link>
        <Link href="/scan">Scan & pay</Link>
        <Link href="/payments">Payments</Link>
        <Link href="/merchant/qr-generate">Merchant QR</Link>
        <button className="button ghost" onClick={logout}>Logout</button>
      </nav>
    </aside>
  );
}
