"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "@/services/api";

const links = [
  { href: "/wallet", label: "Wallet" },
  { href: "/scan", label: "Scan & pay" },
  { href: "/payments", label: "Payments" },
  { href: "/merchant/qr-generate", label: "Merchant QR" },
];

export function DashboardNav() {
  const path = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  async function logout() {
    await api("/auth/logout", { method: "POST" }).catch(() => undefined);
    sessionStorage.removeItem("abc_pay_metamask_address");
    sessionStorage.removeItem("abc_pay_role");
    router.push("/");
  }

  return (
    <header className="abcDashHeader">
      <Link className="abcDashBrand" href="/" aria-label="ABC Pay home">
        <Image src="/images/abc-logo.png" alt="" width={34} height={34} />
        <span><strong>ABC Pay</strong><small>by Africa’s Blockchain Club</small></span>
      </Link>
      <nav id="dashboard-navigation" className={menuOpen ? "abcDashNav isOpen" : "abcDashNav"} aria-label="Dashboard">
        {links.map((link) => (
          <Link key={link.href} href={link.href} aria-current={path === link.href ? "page" : undefined}
            onClick={() => setMenuOpen(false)}>{link.label}</Link>
        ))}
      </nav>
      <div className="abcDashHeaderActions">
        <span className="abcDashNetwork">Polygon mainnet</span>
        <button type="button" className="abcDashLogout" onClick={logout}>Log out</button>
        <button type="button" className="abcDashMenu" aria-expanded={menuOpen}
          aria-controls="dashboard-navigation" aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? "×" : "☰"}</button>
      </div>
    </header>
  );
}
