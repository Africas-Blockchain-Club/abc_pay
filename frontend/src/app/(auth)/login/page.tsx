"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { api } from "@/services/api";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const form = new FormData(event.currentTarget);

    try {
      await api("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
      });
      router.push("/wallet");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to sign in");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="card authCard">
      <div className="eyebrow">Welcome back</div>
      <h2>Sign in</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required /></div>
        <div className="field"><label htmlFor="password">Password</label><input id="password" name="password" type="password" required /></div>
        {error && <div className="error">{error}</div>}
        <button className="button primary" disabled={loading}>{loading ? "Signing in…" : "Sign in"}</button>
      </form>
      <p className="muted">No account? <Link href="/register">Register</Link></p>
    </section>
  );
}
