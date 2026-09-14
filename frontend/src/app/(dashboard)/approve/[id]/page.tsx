export default async function ApprovePaymentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <section>
      <div className="eyebrow">Payment approval</div>
      <h1 style={{ fontSize: "3rem" }}>Review payment</h1>
      <p className="lead">Confirm the quote and payment details before the wallet transaction is submitted.</p>
      <div className="card"><div className="muted">Payment ID</div><div className="code">{id}</div></div>
    </section>
  );
}
