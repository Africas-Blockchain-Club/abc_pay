import Link from "next/link";
import { PublicNav } from "@/components/PublicNav";

export default function HomePage() {
  return (
    <main className="shell">
      <PublicNav />
      <section className="container hero">
        <div className="eyebrow">Stablecoin movement MVP</div>
        <h1>Pay in stablecoins. Settle merchants in local currency.</h1>
        <p className="lead">
          ABC Pay connects a customer wallet to a merchant payment flow while the backend handles quotes,
          blockchain verification, conversion and settlement integrations.
        </p>
        <div className="actions">
          <Link className="button primary" href="/register">Create account</Link>
          <Link className="button ghost" href="/login">Sign in</Link>
        </div>
        <div className="grid">
          <div className="card"><h2>Customer</h2><p className="muted">Register, view wallet, scan a merchant QR and approve payment.</p></div>
          <div className="card"><h2>Merchant</h2><p className="muted">Generate payment requests and track settlement status.</p></div>
          <div className="card"><h2>Backend</h2><p className="muted">Owns auth, wallets, payments, ledger data and external integrations.</p></div>
        </div>
      </section>
    </main>
  );
}
