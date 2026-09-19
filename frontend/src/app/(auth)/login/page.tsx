"use client";

import { useState } from "react";
import Link from "next/link";
import { SignInModal } from "@/components/SignInModal";

export default function LoginPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="card authCard">
        <div className="eyebrow">Welcome back</div>
        <h2>Sign in</h2>
        <p className="muted" style={{ marginTop: -8 }}>
          Connect your wallet to get started.
        </p>
        <button
          className="button primary"
          style={{ width: "100%", justifyContent: "center" }}
          onClick={() => setModalOpen(true)}
        >
          Sign in
        </button>
        <p className="muted">
          No account? <Link href="/register">Register</Link>
        </p>
      </section>
      <SignInModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
