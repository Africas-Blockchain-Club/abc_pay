export default function ScanPage() {
  return (
    <section>
      <div className="eyebrow">Customer payment</div>
      <h1 style={{ fontSize: "3rem" }}>Scan & pay</h1>
      <p className="lead">The QR scanner/payment-request flow plugs in here. For the MVP, this page is the boundary between the web UI and the payment API.</p>
      <div className="card"><h2>Next payment step</h2><p className="muted">Read a merchant payment request → fetch a quote → confirm → submit blockchain payment → track status.</p></div>
    </section>
  );
}
