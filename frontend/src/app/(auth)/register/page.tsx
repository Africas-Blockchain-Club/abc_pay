"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { api } from "@/services/api";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const form = new FormData(event.currentTarget);

    try {
      await api("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          password: form.get("password"),
        }),
      });
      router.push("/wallet");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to register");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="card authCard">
      <div className="eyebrow">Create account</div>
      <h2>Start your wallet</h2>
      <p className="muted">Your account and MVP wallet are created together.</p>
      <form className="form" onSubmit={onSubmit}>
        <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required minLength={2} /></div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
        <div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" required minLength={8} /></div>
        {error && <div className="error">{error}</div>}
        <button className="button primary" disabled={loading}>{loading ? "Creating…" : "Create account"}</button>
      </form>
      <p className="muted">Already registered? <Link href="/login">Sign in</Link></p>
    </section>
  );
}
