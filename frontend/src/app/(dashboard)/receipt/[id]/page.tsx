export default async function ReceiptPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <section>
      <div className="eyebrow">Receipt</div>
      <h1 style={{ fontSize: "3rem" }}>Payment receipt</h1>
      <p className="lead">The completed payment, blockchain reference, fees and settlement status will appear here.</p>
      <div className="card"><div className="muted">Payment ID</div><div className="code">{id}</div></div>
    </section>
  );
}
