export default function MerchantQrPage() {
  return (
    <section>
      <div className="eyebrow">Merchant tools</div>
      <h1 style={{ fontSize: "3rem" }}>Generate payment QR</h1>
      <p className="lead">Create a merchant payment request from a ZAR amount, then encode its payment ID/URL into a QR code.</p>
      <div className="card"><p className="muted">Merchant onboarding and QR generation are scaffolded for the next MVP slice.</p></div>
    </section>
  );
}
