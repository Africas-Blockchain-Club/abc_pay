export default function PaymentsPage() {
  return (
    <section>
      <div className="eyebrow">History</div>
      <h1 style={{ fontSize: "3rem" }}>Payments</h1>
      <p className="lead">Payment history will be populated from the backend payment model.</p>
      <div className="card"><p className="muted">No payments yet.</p></div>
    </section>
  );
}
