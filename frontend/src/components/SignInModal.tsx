"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";
import { useAuth, type AuthUser } from "@/context/AuthContext";

export type AuthView = "type" | "individual" | "register";

type Props = {
  open: boolean;
  initialView?: AuthView;
  onClose: () => void;
};

type Eip6963Detail = { info: { rdns: string }; provider: { request(args: { method: string; params?: unknown[] }): Promise<unknown> } };

function discoverMetaMask(): Promise<Eip6963Detail["provider"]> {
  return new Promise((resolve, reject) => {
    const onAnnounce = (event: Event) => {
      const detail = (event as CustomEvent<Eip6963Detail>).detail;
      if (detail?.info.rdns !== "io.metamask") return;
      cleanup();
      resolve(detail.provider);
    };
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("Install or enable MetaMask to continue."));
    }, 500);
    const cleanup = () => {
      window.clearTimeout(timeout);
      window.removeEventListener("eip6963:announceProvider", onAnnounce);
    };
    window.addEventListener("eip6963:announceProvider", onAnnounce);
    window.dispatchEvent(new Event("eip6963:requestProvider"));
  });
}

export function SignInModal({ open, initialView = "individual", onClose }: Props) {
  const router = useRouter();
  const { login, setUser } = useAuth();
  const dialog = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState<AuthView>(initialView === "type" ? "individual" : initialView);
  const [address, setAddress] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // A new open action may come from either the header or a direct /register link.
  useEffect(() => {
    if (!open || !mounted) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.querySelector<HTMLElement>("button")?.focus();
    function keys(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab" || !dialog.current) return;
      const items = Array.from(dialog.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled])'
      ));
      if (!items.length) return;
      if (event.shiftKey && document.activeElement === items[0]) {
        event.preventDefault(); items[items.length - 1].focus();
      } else if (!event.shiftKey && document.activeElement === items[items.length - 1]) {
        event.preventDefault(); items[0].focus();
      }
    }
    document.addEventListener("keydown", keys);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", keys);
      previousFocus?.focus();
    };
  }, [mounted, open, onClose]);

  function changeView(next: AuthView) {
    setView(next);
    setError("");
  }

  async function connectWallet(signIn: boolean, changeWallet = false) {
    setBusy(true); setError("");
    try {
      const provider = await discoverMetaMask();
      if (changeWallet) {
        await provider.request({ method: "wallet_requestPermissions", params: [{ eth_accounts: {} }] });
      }
      const accounts = (await provider.request({ method: "eth_requestAccounts" })) as string[];
      if (!accounts?.[0]) throw new Error("Unlock MetaMask and select an account.");
      setAddress(accounts[0]);
      if (!signIn) return;
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "Could not connect MetaMask.";
      setError(/reject|deny/i.test(message) ? "MetaMask connection was cancelled." : message);
    } finally { setBusy(false); }
  }

  async function continueToDashboard() {
    if (!address) return;
    setBusy(true); setError("");
    try {
      await login(address);
      sessionStorage.setItem("abc_pay_metamask_address", address);
      router.push("/wallet");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not sign in.");
    } finally { setBusy(false); }
  }

  async function register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    const data = new FormData(event.currentTarget);
    const walletAddress = address.trim();
    if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      setError("Connect MetaMask or enter a valid wallet address.");
      return;
    }
    setBusy(true);
    try {
      const result = await api<{ user: AuthUser }>("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: data.get("name"),
          surname: data.get("surname"),
          email: data.get("email"),
          phoneNumber: data.get("phoneNumber"),
          walletAddress,
        }),
      });
      setUser(result.user);
      sessionStorage.setItem("abc_pay_metamask_address", walletAddress);
      router.push("/wallet");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not create your account.");
    } finally { setBusy(false); }
  }

  if (!open || !mounted) return null;
  return createPortal(
    <div className="abcAuthBackdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={dialog} className="abcAuthDialog" role="dialog" aria-modal="true" aria-labelledby="abc-auth-title">
        <button type="button" className="abcAuthClose" aria-label="Close" onClick={onClose}>×</button>
        <div className="abcAuthLabel"><Image src="/images/abc-logo.png" width={24} height={24} alt="" /> ABC Pay account</div>
        <h2 id="abc-auth-title">{view === "register" ? "Create your account." : "Sign in"}</h2>
        <p className="abcAuthLead">
          {view === "register"
            ? "Set up your ABC Pay account to start accepting stablecoins."
            : "Connect your wallet to continue to ABC Pay."}
        </p>

        {view === "individual" && (
          <div className="abcAuthChoices">
            <div className="abcAuthChoice abcAuthSelected" aria-label="Individual account selected">
              <span className="abcAuthChoiceIcon">◎</span><span><strong>Individual</strong><small>Sign in with your wallet</small></span><span aria-hidden="true">✓</span>
            </div>
            <button type="button" className="abcAuthChoice abcMetaMask" onClick={() => void connectWallet(true)} disabled={busy || Boolean(address)}>
              <span className="abcAuthChoiceIcon abcFox" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M5 4.5 14.5 8 17 4.5 27 7l-4.5 8.5-5.5-3-5.5 3L7 11z" /><path d="m7 11 4.5 3.5 5.5-3 5.5 3L25 11l-2.5 9-5-2.5-5 2.5z" /></svg></span><span><strong>MetaMask</strong><small>{busy ? "Waiting for approval…" : address ? `${address.slice(0, 6)}…${address.slice(-4)} connected` : "Connect with your wallet"}</small></span><span aria-hidden="true">→</span>
            </button>
            {address && <button type="button" className="abcAuthBack" onClick={() => void connectWallet(true, true)} disabled={busy}>Change wallet</button>}
            {address && <button type="button" className="abcAuthSubmit" onClick={continueToDashboard}>Continue to dashboard <span>→</span></button>}
          </div>
        )}

        {view === "register" && (
          <form className="abcAuthForm" onSubmit={register}>
            <div className="abcAuthNameRow">
              <label>First name<input name="name" autoComplete="given-name" required minLength={2} maxLength={80} placeholder="Thabo" /></label>
              <label>Surname<input name="surname" autoComplete="family-name" required minLength={2} maxLength={80} placeholder="Mokoena" /></label>
            </div>
            <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@business.co.za" /></label>
            <label>Phone number<input name="phoneNumber" type="tel" autoComplete="tel" required pattern="[0-9]{10}" title="Enter a 10-digit phone number" placeholder="0820000000" /></label>
            <label>Wallet address<input value={address} onChange={(event) => setAddress(event.target.value)} required placeholder="0x..." /></label>
            <button type="button" className="abcAuthConnect" onClick={() => void connectWallet(false)} disabled={busy}>Connect MetaMask <span>Fill address →</span></button>
            <button type="submit" className="abcAuthSubmit" disabled={busy}>{busy ? "Creating…" : "Create account"} <span>→</span></button>
          </form>
        )}
        {error && <p className="abcAuthError" role="alert">{error}</p>}
        <p className="abcAuthSwitch">
          {view === "register" ? "Already have an account?" : "New to ABC Pay?"}{" "}
          <button type="button" onClick={() => changeView(view === "register" ? "individual" : "register")}>
            {view === "register" ? "Sign in" : "Create an account"}
          </button>
        </p>
      </div>
    </div>,
    document.body
  );
}
