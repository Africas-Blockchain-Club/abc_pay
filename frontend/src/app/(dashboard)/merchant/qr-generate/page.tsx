"use client";
import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
export default function MerchantQrPage() {
  const [amount, setAmount] = useState("500.00"); const [qr, setQr] = useState(""); const [error, setError] = useState("");
  const request = useMemo(() => JSON.stringify({ type: "abc-pay-payment-request", amountZar: Number(amount) || 0, currency: "ZAR", network: "Polygon", createdAt: new Date().toISOString() }), [amount]);
  useEffect(() => { QRCode.toDataURL(request, { width: 320, margin: 2, errorCorrectionLevel: "M", color: { dark: "#102345", light: "#ffffff" } }).then(setQr).catch(() => setError("Could not generate the payment QR.")); }, [request]);
  return <section className="abcQrPage"><div className="abcSectionKicker">MERCHANT TOOLS</div><h1>Generate payment QR</h1><p>Create a demo QR from a ZAR amount. It is not a live payable payment request.</p><div className="abcQrCard"><strong className="abcQrDemo">DEMO — NOT PAYABLE</strong><label>ZAR amount<input value={amount} inputMode="decimal" onChange={(event) => setAmount(event.target.value)} /></label>{error ? <p role="alert">{error}</p> : qr && <img src={qr} alt={`Demo payment QR for R${amount}`} width={320} height={320} />}<code>{request}</code></div></section>;
}
