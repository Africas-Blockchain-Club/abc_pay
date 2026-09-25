"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────
const C = {
  navy: "#0f1f3d",
  navyDark: "#070f1e",
  orange: "#e85d04",
  orangeLight: "#ff7a2f",
  white: "#ffffff",
  surface: "#f7f8fa",
  border: "#e2e6ed",
  muted: "#6b7a95",
  success: "#0dab76",
  successBg: "#e6f9f1",
  amber: "#d97706",
  amberBg: "#fef3c7",
  error: "#dc2626",
  errorBg: "#fee2e2",
  neutral: "#64748b",
  neutralBg: "#f1f5f9",
};

// ── SVG Icon system — 2px stroke, round caps, Lucide-style ────────────────────
const stroke = { stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

function Icon({ children, size = 20, className = "" }: { children: React.ReactNode; size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} className={className}>{children}</svg>;
}

function IconZAR({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8h4.5a2.5 2.5 0 010 5H9m0-5v8m0-4.5h6" />
    </Icon>
  );
}
function IconCoin({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12h6M12 9v6" />
      <path d="M9 8.5c0-1.1 1.3-2 3-2s3 .9 3 2-1.3 1.5-3 1.5-3 .4-3 1.5 1.3 2 3 2 3-.9 3-2" />
    </Icon>
  );
}
function IconPulse({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <polyline points="22 12 18 12 15 20 9 4 6 12 2 12" />
    </Icon>
  );
}
function IconAfrica({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <path d="M12 3C7 3 3.5 7 3.5 11c0 2.5 1 4.5 2 6 .8 1.2 1.5 2.5 1.5 4h2c0 0 .5-1 1-1s1 1 2 1 1-1 1-1h1c0-1.5.7-2.8 1.5-4 1-1.5 2-3.5 2-6 0-4-3.5-8-6.5-8z" />
      <circle cx="16" cy="10" r="1.5" />
      <path d="M14 10.5l4 2" />
    </Icon>
  );
}
function IconTerminal({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 20h8M12 18v2" />
      <path d="M7 10h4M7 13h6" />
    </Icon>
  );
}
function IconQRScan({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <path d="M4 7V4h3M17 4h3v3M4 17v3h3M20 17v3h-3" />
      <rect x="7" y="7" width="4" height="4" rx="0.5" />
      <rect x="13" y="7" width="4" height="4" rx="0.5" />
      <rect x="7" y="13" width="4" height="4" rx="0.5" />
      <path d="M13 15h4v2M15 13v2" />
    </Icon>
  );
}
function IconWalletCheck({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <path d="M2 7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7z" />
      <path d="M16 11l2 2 4-4" />
      <path d="M2 10h14" />
    </Icon>
  );
}
function IconSettlement({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
      <path d="M12 15v2" />
    </Icon>
  );
}
function IconShieldCheck({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <path d="M12 3l8 4v5c0 4.5-3.5 8.7-8 10-4.5-1.3-8-5.5-8-10V7l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  );
}
function IconReceipt({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <path d="M4 4v16l2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 2 1.5 2-1.5V4H4z" />
      <path d="M8 9h8M8 13h5" />
    </Icon>
  );
}
function IconNodes({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 11l10-4M7 13l10 4" />
    </Icon>
  );
}
function IconWallet({ size = 20 }: { size?: number }) {
  return (
    <Icon size={size}>
      <path d="M2 8a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" />
      <path d="M2 11h20" />
      <circle cx="17" cy="15" r="1" fill="currentColor" />
    </Icon>
  );
}
function IconCheck({ size = 20 }: { size?: number }) {
  return <Icon size={size}><path d="M5 12l5 5 9-10" /></Icon>;
}
function IconClock({ size = 20 }: { size?: number }) {
  return <Icon size={size}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></Icon>;
}
function IconChevron({ size = 16 }: { size?: number }) {
  return <Icon size={size}><path d="M9 18l6-6-6-6" /></Icon>;
}
// ── Status badge ───────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: "success" | "processing" | "expired" | "failed" }) {
  const map = {
    success:    { bg: C.successBg, color: C.success, dot: C.success,   label: "Successful" },
    processing: { bg: C.amberBg,   color: C.amber,   dot: C.amber,     label: "Processing" },
    expired:    { bg: C.neutralBg, color: C.neutral, dot: C.neutral,   label: "Expired" },
    failed:     { bg: C.errorBg,   color: C.error,   dot: C.error,     label: "Failed" },
  };
  const s = map[status];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full"
      style={{ background: s.bg, color: s.color }}>
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.dot }} />
      {s.label}
    </span>
  );
}

// ── Countdown ──────────────────────────────────────────────────────────────────
function CountdownBadge({ seconds }: { seconds: number }) {
  const [rem, setRem] = useState(seconds);
  useEffect(() => {
    if (rem <= 0) return;
    const t = setTimeout(() => setRem((r) => r - 1), 1000);
    return () => clearTimeout(t);
  }, [rem]);
  const m = Math.floor(rem / 60);
  const s = rem % 60;
  const urgent = rem < 30;
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
      style={{ background: urgent ? C.errorBg : C.amberBg, color: urgent ? C.error : "#92400e" }}>
      <IconClock size={12} />
      Quote expires {m}:{s.toString().padStart(2, "0")}
    </div>
  );
}

// ── QR pattern (deterministic, decorative) ─────────────────────────────────────
const QR_GRID = Array.from({ length: 10 }, (_, r) =>
  Array.from({ length: 10 }, (_, c) => (r * 3 + c * 7 + r * c) % 3 !== 0)
);
function QRPattern() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" style={{ opacity: 0.18 }}>
      {QR_GRID.map((row, r) => row.map((on, c) =>
        on ? <rect key={`${r}-${c}`} x={c * 12} y={r * 12} width={10} height={10} rx={1.5} fill={C.navy} /> : null
      ))}
      <rect x="0" y="0" width="36" height="36" rx="4" fill="none" stroke={C.navy} strokeWidth="3" />
      <rect x="84" y="0" width="36" height="36" rx="4" fill="none" stroke={C.navy} strokeWidth="3" />
      <rect x="0" y="84" width="36" height="36" rx="4" fill="none" stroke={C.navy} strokeWidth="3" />
      <rect x="8" y="8" width="20" height="20" rx="2" fill={C.navy} />
      <rect x="92" y="8" width="20" height="20" rx="2" fill={C.navy} />
      <rect x="8" y="92" width="20" height="20" rx="2" fill={C.navy} />
    </svg>
  );
}

// ── Merchant payment card (hero product visual) ────────────────────────────────
function MerchantCard() {
  const [amount, setAmount] = useState("500");
  const [stage, setStage] = useState<"input" | "qr" | "success">("input");
  const [notif, setNotif] = useState(false);
  const usdc = (Number(amount) / 18.42).toFixed(2);

  const generate = () => {
    setStage("qr");
    setTimeout(() => {
      setStage("success");
      setNotif(true);
      setTimeout(() => setNotif(false), 3500);
    }, 3000);
  };
  const reset = () => { setStage("input"); setNotif(false); };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Success notification */}
      <div className="absolute -top-14 left-1/2 z-20 pointer-events-none transition-all duration-500"
        style={{ transform: `translateX(-50%) translateY(${notif ? 0 : -8}px)`, opacity: notif ? 1 : 0 }}>
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg text-white whitespace-nowrap"
          style={{ background: C.success }}>
          <IconCheck size={15} />
          R{amount} payment received
        </div>
      </div>

      <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: C.white, border: `1px solid ${C.border}` }}>
        {/* Card header */}
        <div className="px-5 py-3.5 flex items-center justify-between" style={{ borderBottom: `1px solid ${C.border}` }}>
          <div className="flex items-center gap-2">
            <Image src="/images/abc-logo.jpg" alt="ABC Pay" width={190} height={200} className="h-6 w-auto" />
            <span className="font-bold text-sm" style={{ color: C.navy }}>ABC Pay</span>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full"
            style={{ background: C.successBg, color: C.success }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.success }} />
            Live
          </span>
        </div>

        <div className="p-5">
          {stage === "input" && (
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: C.muted }}>
                  Amount to receive
                </label>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl"
                  style={{ border: `2px solid ${C.orange}`, background: "#fff9f5" }}>
                  <span className="font-bold text-xl" style={{ color: C.muted }}>R</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 bg-transparent font-black text-2xl outline-none w-0 min-w-0"
                    style={{ color: C.navy }}
                  />
                  <span className="text-sm font-medium flex-shrink-0" style={{ color: C.muted }}>ZAR</span>
                </div>
              </div>

              <div className="rounded-xl p-3.5 flex flex-col gap-2.5" style={{ background: C.surface }}>
                {[
                  ["Customer pays", `≈ ${usdc} USDC`],
                  ["Network", "Polygon"],
                  ["Quote validity", "2 minutes"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: C.muted }}>{k}</span>
                    <span className="text-sm font-semibold" style={{ color: C.navy }}>{v}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-3 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                style={{ background: C.orange }}
                onClick={generate}
              >
                <IconQRScan size={16} />
                Generate payment QR
              </button>
            </div>
          )}

          {stage === "qr" && (
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm font-medium" style={{ color: C.muted }}>Waiting for payment…</p>
              <div className="w-48 h-48 rounded-xl flex items-center justify-center relative"
                style={{ background: C.surface, border: `2px dashed ${C.border}` }}>
                <QRPattern />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 rounded-xl">
                  <div className="w-8 h-8 rounded-full border-[3px] animate-spin"
                    style={{ borderColor: `${C.orange} transparent transparent transparent` }} />
                </div>
              </div>
              <div className="text-center">
                <div className="font-black text-2xl" style={{ color: C.navy }}>R{amount}.00</div>
                <div className="text-xs mt-0.5" style={{ color: C.muted }}>≈ {usdc} USDC · Polygon</div>
              </div>
              <CountdownBadge seconds={120} />
            </div>
          )}

          {stage === "success" && (
            <div className="flex flex-col items-center gap-4 py-2">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: C.successBg }}>
                <span style={{ color: C.success }}><IconCheck size={28} /></span>
              </div>
              <div className="text-center">
                <div className="font-black text-xl" style={{ color: C.success }}>Payment received</div>
                <div className="text-sm mt-0.5" style={{ color: C.muted }}>R{amount}.00 ZAR</div>
              </div>
              <div className="w-full rounded-xl p-3.5 text-sm flex flex-col gap-2" style={{ background: C.surface }}>
                {[["Reference","TXN-2481"],["Network","Polygon"],["Settlement","Processing ZAR"]].map(([k,v]) => (
                  <div key={k} className="flex justify-between">
                    <span style={{ color: C.muted }}>{k}</span>
                    <span className="font-semibold" style={{ color: k === "Settlement" ? C.success : C.navy }}>{v}</span>
                  </div>
                ))}
              </div>
              <button className="text-sm font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity"
                style={{ color: C.orange }} onClick={reset}>
                New payment <IconChevron size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Nav ────────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
      }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2.5">
          <Image src="/images/abc-logo.jpg" alt="ABC" width={190} height={200} className="h-9 w-auto" priority />
          <div className="leading-none">
            <div className="font-black text-lg tracking-tight" style={{ color: C.navy }}>ABC Pay</div>
            <div className="text-[10px] font-medium" style={{ color: C.muted }}>by Africa’s Blockchain Club</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: C.navy }}>
          {["How it works", "For merchants", "For customers", "Security"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="hover:opacity-60 transition-opacity">{l}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm font-medium hover:opacity-60 transition-opacity" style={{ color: C.navy }}>Sign in</Link>
          <Link href="/merchant/qr-generate" className="px-4 py-2 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
            style={{ background: C.orange }}>
            Start accepting payments
          </Link>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
          {[0, 1, 2].map(i => <span key={i} className="block w-5 h-0.5 rounded" style={{ background: C.navy }} />)}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-3 text-sm font-medium bg-white" style={{ color: C.navy }}>
          {["How it works","For merchants","For customers","Security"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="py-2.5 border-b" style={{ borderColor: C.border }} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <Link href="/login" className="py-2.5 border-b" style={{ borderColor: C.border }}>Sign in</Link>
          <Link href="/merchant/qr-generate" className="mt-1 py-3.5 rounded-xl font-bold text-white text-center" style={{ background: C.orange, minHeight: 44 }}>
            Start accepting payments
          </Link>
        </div>
      )}
    </nav>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 relative overflow-hidden">
      {/* Subtle payment network lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }} preserveAspectRatio="xMidYMid slice">
        <line x1="0" y1="30%" x2="100%" y2="70%" stroke={C.navy} strokeWidth="1" />
        <line x1="20%" y1="0" x2="80%" y2="100%" stroke={C.navy} strokeWidth="1" />
        <line x1="60%" y1="0" x2="40%" y2="100%" stroke={C.navy} strokeWidth="1" />
        <circle cx="30%" cy="40%" r="4" fill={C.navy} />
        <circle cx="70%" cy="60%" r="4" fill={C.navy} />
        <circle cx="55%" cy="25%" r="3" fill={C.navy} />
      </svg>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold w-fit"
              style={{ background: "#fff4ee", color: C.orange, border: `1px solid #fcd5b0` }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: C.orange }} />
              An Africa’s Blockchain Club project
            </div>

            <h1 className="text-5xl lg:text-[3.75rem] font-black leading-[1.04] tracking-tight" style={{ color: C.navy }}>
              Accept stablecoins.<br />
              <span style={{ color: C.orange }}>Receive rand.</span>
            </h1>

            <p className="text-lg leading-relaxed max-w-lg" style={{ color: C.muted }}>
              ABC Pay gives South African businesses a simple way to accept stablecoin payments and settle their sales in ZAR — no crypto expertise required.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/merchant/qr-generate" className="px-6 py-3 rounded-xl font-bold text-white hover:opacity-90 transition-opacity"
                style={{ background: C.orange, minHeight: 44 }}>
                Start accepting payments
              </Link>
              <a href="#how-it-works" className="px-6 py-3 rounded-xl font-bold hover:opacity-80 transition-opacity"
                style={{ background: C.white, border: `2px solid ${C.navy}`, color: C.navy, minHeight: 44 }}>
                See how it works
              </a>
            </div>

            {/* Trust row — icon + label, no emojis */}
            <div className="flex flex-wrap items-center gap-6 pt-1" style={{ borderTop: `1px solid ${C.border}`, paddingTop: "1.25rem" }}>
              {[
                { icon: <IconZAR size={18} />, label: "Settle in ZAR" },
                { icon: <IconPulse size={18} />, label: "Track payments live" },
                { icon: <IconCoin size={18} />, label: "Stablecoin enabled" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm font-medium" style={{ color: C.muted }}>
                  <span style={{ color: C.navy }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — product card */}
          <MerchantCard />
        </div>
      </div>
    </section>
  );
}

// ── Feature strip ──────────────────────────────────────────────────────────────
function FeatureStrip() {
  const features = [
    { icon: <IconZAR size={24} />, title: "ZAR settlement", desc: "Receive the rand value of completed payments." },
    { icon: <IconCoin size={24} />, title: "Stablecoin payments", desc: "Let customers pay using supported stablecoins." },
    { icon: <IconPulse size={24} />, title: "Live payment tracking", desc: "Follow a payment from request to confirmation." },
    { icon: <IconAfrica size={24} />, title: "Built for African commerce", desc: "Designed around local merchants and payment behaviour." },
  ];
  return (
    <section className="py-14 px-6" style={{ background: C.navy }}>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
        {features.map((f) => (
          <div key={f.title} className="flex flex-col gap-3 p-6" style={{ background: C.navy }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(232,93,4,0.2)", color: C.orange }}>
              {f.icon}
            </div>
            <div>
              <div className="font-bold text-sm text-white">{f.title}</div>
              <div className="text-xs mt-1 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── How it works ───────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: "01", icon: <IconTerminal size={22} />, title: "Create payment", desc: "The merchant enters the ZAR amount. ABC Pay generates a secure payment request with a fixed quote." },
    { n: "02", icon: <IconQRScan size={22} />, title: "Display QR", desc: "A QR code is presented at the till or online checkout. The customer scans it with their wallet app." },
    { n: "03", icon: <IconWalletCheck size={22} />, title: "Customer approves", desc: "The customer reviews all payment details: merchant, amount, network, destination, and expiry." },
    { n: "04", icon: <IconSettlement size={22} />, title: "Receive confirmation", desc: "Both the customer and merchant see a clear payment result in this frontend demonstration." },
  ];
  return (
    <section id="how-it-works" className="py-20 px-6" style={{ background: C.surface }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14">
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.orange }}>How it works</div>
          <h2 className="text-4xl font-black" style={{ color: C.navy }}>Four steps from payment request to ZAR.</h2>
        </div>

        {/* Desktop: horizontal with connector */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          <div className="absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-px" style={{ background: C.border }} />
          {steps.map((s, i) => (
            <div key={s.n} className="flex flex-col gap-4 relative">
              <div className="w-18 h-18 w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center z-10"
                style={{
                  background: i === steps.length - 1 ? C.orange : C.white,
                  border: `1px solid ${C.border}`,
                  color: i === steps.length - 1 ? C.white : C.orange,
                }}>
                {s.icon}
              </div>
              <div className="text-xs font-black tracking-widest" style={{ color: C.orange }}>{s.n}</div>
              <div>
                <div className="font-bold text-sm mb-1" style={{ color: C.navy }}>{s.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: C.muted }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col gap-0 relative">
          <div className="absolute left-5 top-10 bottom-10 w-px" style={{ background: C.border }} />
          {steps.map((s, i) => (
            <div key={s.n} className="flex gap-5 pb-8 relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 z-10"
                style={{
                  background: i === steps.length - 1 ? C.orange : C.white,
                  border: `1px solid ${C.border}`,
                  color: i === steps.length - 1 ? C.white : C.orange,
                }}>
                {s.icon}
              </div>
              <div className="pt-1.5">
                <div className="text-xs font-black tracking-widest mb-0.5" style={{ color: C.orange }}>{s.n}</div>
                <div className="font-bold text-sm mb-1" style={{ color: C.navy }}>{s.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: C.muted }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Merchant dashboard ─────────────────────────────────────────────────────────
function MerchantDashboard() {
  const txns: { ref: string; amount: string; coin: string; status: "success" | "processing" | "expired" | "failed"; time: string }[] = [
    { ref: "TXN-2481", amount: "R 500.00",   coin: "27.17 USDC",  status: "success",    time: "2 min ago" },
    { ref: "TXN-2480", amount: "R 1 200.00", coin: "65.22 USDC",  status: "processing", time: "8 min ago" },
    { ref: "TXN-2479", amount: "R 350.00",   coin: "19.02 USDC",  status: "expired",    time: "22 min ago" },
    { ref: "TXN-2478", amount: "R 4 800.00", coin: "260.87 USDC", status: "success",    time: "1 hr ago" },
  ];
  return (
    <div className="rounded-2xl shadow-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
      {/* Top bar */}
      <div className="px-5 py-4 flex items-center justify-between" style={{ background: C.navy }}>
        <div className="flex items-center gap-2.5">
          <Image src="/images/abc-logo.jpg" alt="ABC Pay" width={190} height={200} className="h-6 w-auto brightness-0 invert" />
          <span className="font-bold text-sm text-white">Merchant Dashboard</span>
        </div>
        <button className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
          style={{ background: C.orange, minHeight: 32 }}>
          <IconTerminal size={13} />
          Create payment
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 bg-white" style={{ borderBottom: `1px solid ${C.border}` }}>
        {[
          { label: "Today's sales", value: "R 6 850.00", sub: "+12% vs yesterday", good: true },
          { label: "ZAR balance",   value: "R 22 400.00", sub: "Available to withdraw", good: true },
          { label: "Transactions",  value: "14",          sub: "Today", good: false },
        ].map((s, i) => (
          <div key={s.label} className="px-4 py-3" style={{ borderRight: i < 2 ? `1px solid ${C.border}` : undefined }}>
            <div className="text-xs" style={{ color: C.muted }}>{s.label}</div>
            <div className="font-black text-base mt-0.5 tabular-nums" style={{ color: C.navy }}>{s.value}</div>
            <div className="text-xs mt-0.5" style={{ color: s.good ? C.success : C.muted }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Transactions */}
      <div className="bg-white px-5 py-3">
        <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: C.muted }}>Recent transactions</div>
        <div className="flex flex-col">
          {txns.map((t) => (
            <div key={t.ref} className="flex items-center justify-between py-2.5" style={{ borderBottom: `1px solid ${C.border}` }}>
              <div>
                <div className="text-xs font-mono font-semibold" style={{ color: C.navy }}>{t.ref}</div>
                <div className="text-xs mt-0.5" style={{ color: C.muted }}>{t.time} · {t.coin}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-sm tabular-nums" style={{ color: C.navy }}>{t.amount}</span>
                <StatusBadge status={t.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Merchant section ───────────────────────────────────────────────────────────
function MerchantSection() {
  const features = [
    { icon: <IconQRScan size={20} />, title: "Generate payment QR codes", desc: "Create a payment request in seconds for any ZAR amount." },
    { icon: <IconPulse size={20} />, title: "Track payment status", desc: "Give merchants a clear waiting, success, failed, or expired state." },
    { icon: <IconReceipt size={20} />, title: "Receipts and transaction history", desc: "Prepare transaction records once the payments API is implemented." },
    { icon: <IconZAR size={20} />, title: "Prepare for rand settlement", desc: "Keep the merchant experience focused on the ZAR sale amount." },
  ];
  return (
    <section id="for-merchants" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-start">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.orange }}>For Merchants</div>
            <h2 className="text-4xl font-black leading-tight mb-5" style={{ color: C.navy }}>
              Crypto payments without<br />the crypto complexity.
            </h2>
            <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: C.muted }}>
              ABC Pay handles the payment and settlement experience so merchants do not need to manage blockchain transactions directly.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3 p-4 rounded-xl"
                  style={{ background: C.surface, border: `1px solid ${C.border}` }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "#fff4ee", color: C.orange }}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: C.navy }}>{f.title}</div>
                    <div className="text-xs mt-0.5 leading-relaxed" style={{ color: C.muted }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:sticky lg:top-24">
            <MerchantDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Customer phone ─────────────────────────────────────────────────────────────
function CustomerPhone() {
  const [paid, setPaid] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="w-[260px] rounded-[2rem] shadow-2xl overflow-hidden" style={{ background: C.navy, padding: 3 }}>
        <div className="rounded-[1.75rem] overflow-hidden bg-white">
          <div className="flex justify-between items-center px-4 py-2 text-[10px] font-semibold text-white"
            style={{ background: C.navy }}>
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="white" opacity="0.8">
                <rect x="0" y="3" width="3" height="7" rx="0.5" />
                <rect x="4" y="2" width="3" height="8" rx="0.5" />
                <rect x="8" y="1" width="3" height="9" rx="0.5" />
                <rect x="12" y="0" width="2" height="10" rx="0.5" />
              </svg>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <rect x="0.5" y="0.5" width="13" height="9" rx="1.5" stroke="white" strokeOpacity="0.6" />
                <rect x="2" y="2" width="9" height="6" rx="0.5" fill="white" />
                <path d="M14.5 3.5v3a1.5 1.5 0 000-3z" fill="white" fillOpacity="0.5" />
              </svg>
            </span>
          </div>

          {!paid ? (
            <div className="p-4 flex flex-col gap-3">
              <div className="text-center pt-1">
                <div className="text-[11px] font-semibold" style={{ color: C.muted }}>Payment to</div>
                <div className="font-black text-base mt-0.5" style={{ color: C.navy }}>Shoprite Thokoza</div>
              </div>
              <div className="rounded-xl p-3 flex flex-col gap-2 text-xs" style={{ background: C.surface }}>
                {[
                  ["Amount",      "R 500.00"],
                  ["Pay with",    "USDC"],
                  ["Network",     "Polygon"],
                  ["You pay",     "27.17 USDC"],
                  ["Destination", "0x3f8…2a9d"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span style={{ color: C.muted }}>{k}</span>
                    <span className="font-semibold tabular-nums" style={{ color: C.navy }}>{v}</span>
                  </div>
                ))}
              </div>
              <CountdownBadge seconds={90} />
              <div className="rounded-xl p-3" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
                <div className="text-[11px]" style={{ color: C.muted }}>Wallet balance</div>
                <div className="font-black text-sm mt-0.5 tabular-nums" style={{ color: C.navy }}>142.30 USDC</div>
              </div>
              <button
                className="w-full py-3 rounded-xl font-bold text-sm text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                style={{ background: C.orange, minHeight: 44 }}
                onClick={() => setPaid(true)}>
                <IconWalletCheck size={15} />
                Approve payment
              </button>
            </div>
          ) : (
            <div className="p-6 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: C.successBg }}>
                <span style={{ color: C.success }}><IconCheck size={28} /></span>
              </div>
              <div className="text-center">
                <div className="font-black text-lg" style={{ color: C.success }}>Payment Sent</div>
                <div className="text-xs mt-1" style={{ color: C.muted }}>27.17 USDC · Polygon</div>
              </div>
              <div className="w-full rounded-xl p-3 text-xs flex flex-col gap-2" style={{ background: C.surface }}>
                {[
                  ["Merchant",   "Shoprite Thokoza"],
                  ["Amount",     "R 500.00"],
                  ["Reference",  "TXN-2481"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span style={{ color: C.muted }}>{k}</span>
                    <span className="font-semibold" style={{ color: C.navy }}>{v}</span>
                  </div>
                ))}
              </div>
              <button className="text-xs font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity"
                style={{ color: C.orange }} onClick={() => setPaid(false)}>
                Try again <IconChevron size={12} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CustomerSection() {
  return (
    <section id="for-customers" className="py-20 px-6" style={{ background: C.surface }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[480px_1fr] gap-16 items-center">
          <CustomerPhone />
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.orange }}>For Customers</div>
            <h2 className="text-4xl font-black leading-tight mb-5" style={{ color: C.navy }}>Scan. Review. Pay.</h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              Use stablecoins you already hold to pay at any ABC Pay merchant. Every detail is shown before you approve — nothing hidden.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: <IconQRScan size={18} />, title: "Scan the merchant's QR code", desc: "Open any compatible wallet app and point your camera at the payment QR." },
                { icon: <IconShieldCheck size={18} />, title: "Review all payment details", desc: "Merchant name, ZAR amount, stablecoin equivalent, network, and quote expiry — all confirmed before approval." },
                { icon: <IconWalletCheck size={18} />, title: "Approve the payment", desc: "Tap approve in the demo to see the intended customer confirmation experience." },
              ].map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#fff4ee", color: C.orange }}>
                    {s.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: C.navy }}>{s.title}</div>
                    <div className="text-sm mt-0.5 leading-relaxed" style={{ color: C.muted }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Security section ───────────────────────────────────────────────────────────
function SecuritySection() {
  const items = [
    { icon: <IconNodes size={18} />, label: "Merchant name" },
    { icon: <IconZAR size={18} />, label: "Rand amount" },
    { icon: <IconCoin size={18} />, label: "Stablecoin amount" },
    { icon: <IconAfrica size={18} />, label: "Blockchain network" },
    { icon: <IconWallet size={18} />, label: "Destination wallet address" },
    { icon: <IconReceipt size={18} />, label: "Payment reference" },
    { icon: <IconClock size={18} />, label: "Quote expiry time" },
  ];
  return (
    <section id="security" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-start">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.orange }}>Security</div>
            <h2 className="text-4xl font-black mb-5" style={{ color: C.navy }}>
              Clear information<br />before every payment.
            </h2>
            <p className="text-lg leading-relaxed max-w-lg" style={{ color: C.muted }}>
              Customers always see exactly what they’re approving. No hidden amounts, no ambiguous destinations, no surprises.
            </p>
            <div className="mt-8 flex items-center gap-2 p-4 rounded-xl text-sm"
              style={{ background: C.surface, border: `1px solid ${C.border}` }}>
              <span style={{ color: C.success }}><IconShieldCheck size={20} /></span>
              <span style={{ color: C.muted }}>Review the merchant, amount, network, and destination before approving every payment.</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3.5 rounded-xl"
                style={{ background: C.surface, border: `1px solid ${C.border}` }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: C.successBg, color: C.success }}>
                  {item.icon}
                </div>
                <span className="text-sm font-semibold" style={{ color: C.navy }}>{item.label}</span>
                <span className="ml-auto" style={{ color: C.success }}><IconCheck size={16} /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ──────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-20 px-6" style={{ background: C.navy }}>
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <Image src="/images/abc-logo.jpg" alt="ABC" width={190} height={200} className="h-14 w-auto brightness-0 invert opacity-75" />
        <h2 className="text-4xl font-black text-white">Give your customers another way to pay.</h2>
        <p className="text-base max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
          A practical payment experience for African merchants, ready for the next integration milestone.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/merchant/qr-generate" className="px-6 py-3 rounded-xl font-bold text-white hover:opacity-90 transition-opacity"
            style={{ background: C.orange, minHeight: 44 }}>
            Create merchant account
          </Link>
          <Link href="/scan" className="px-6 py-3 rounded-xl font-bold transition-opacity hover:opacity-80"
            style={{ background: "rgba(255,255,255,0.08)", color: C.white, border: "1px solid rgba(255,255,255,0.18)", minHeight: 44 }}>
            Explore customer payments
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 px-6" style={{ background: C.navyDark }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image src="/images/abc-logo.jpg" alt="ABC Pay" width={190} height={200} className="h-8 w-auto brightness-0 invert" />
              <span className="font-black text-white">ABC Pay</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>An Africa’s Blockchain Club project.</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Johannesburg, South Africa</p>
          </div>
          {[
            {
              heading: "Product",
              links: [
                { label: "How it works", href: "#how-it-works" },
                { label: "For merchants", href: "#for-merchants" },
                { label: "For customers", href: "#for-customers" },
                { label: "Security", href: "#security" },
              ],
            },
            {
              heading: "Build plan",
              links: [
                { label: "Payment API", comingSoon: true },
                { label: "Quotes API", comingSoon: true },
                { label: "Customer scan", href: "/scan" },
              ],
            },
            {
              heading: "Prototype",
              links: [
                { label: "Merchant workspace", href: "/merchant/qr-generate" },
                { label: "Customer approval", href: "/approve/demo" },
                { label: "Registration", href: "/register" },
              ],
            },
          ].map((col) => (
            <div key={col.heading}>
              <div className="text-xs font-bold uppercase tracking-widest text-white mb-4">{col.heading}</div>
              <div className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  l.href !== undefined ? (
                    <Link key={l.label} href={l.href} className="text-xs transition-colors"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                      {l.label}
                    </Link>
                  ) : (
                    <div key={l.label} className="flex items-center gap-2 text-xs"
                      style={{ color: "rgba(255,255,255,0.4)" }}>
                      <span>{l.label}</span>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                        style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>
                        Coming soon
                      </span>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)" }}>
          <span>© 2026 ABC Pay — an Africa’s Blockchain Club project</span>
          <span>Johannesburg, South Africa</span>
        </div>
      </div>
    </footer>
  );
}

// ── Root ───────────────────────────────────────────────────────────────────────
export default function AbcPayLanding() {
  return (
    <div className="landing-page min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <FeatureStrip />
      <HowItWorks />
      <MerchantSection />
      <CustomerSection />
      <SecuritySection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
