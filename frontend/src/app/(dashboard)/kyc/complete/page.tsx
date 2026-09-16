"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { api } from "@/services/api";

type KycStatusResponse = {
  kycVerified: boolean;
  kycVerifiedAt: string | null;
  status: string;
};

function KycCompleteContent() {
  const searchParams = useSearchParams();
  const queryStatus = searchParams.get("status");
  const sessionId = searchParams.get("verificationSessionId");

  const [data, setData] = useState<KycStatusResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Poll or fetch status
    api<KycStatusResponse>("/kyc/status")
      .then((res) => setData(res))
      .catch(() => undefined)
      .finally(() => setLoading(false));
  }, []);

  const displayStatus = data?.status ?? queryStatus ?? "Submitted";
  const isApproved = data?.kycVerified || displayStatus === "Approved";

  return (
    <section style={{ maxWidth: 640 }}>
      <div className="eyebrow">Didit.me Verification</div>
      <h1 style={{ fontSize: "2.6rem", marginBottom: 12 }}>
        {isApproved ? "Verification Approved!" : "Verification Submitted"}
      </h1>
      <p className="lead">
        Thank you for submitting your identity verification documents.
      </p>

      <div className="card" style={{ marginTop: 24 }}>
        <div className="muted">Status</div>
        <div
          className="stat"
          style={{
            color: isApproved ? "var(--brand)" : "#facc15",
            marginTop: 4,
          }}
        >
          {loading ? "Checking status…" : displayStatus}
        </div>

        {sessionId && (
          <p className="muted" style={{ fontSize: "0.85rem", marginTop: 12 }}>
            Session reference: <span className="code">{sessionId}</span>
          </p>
        )}

        <p className="muted" style={{ fontSize: "0.92rem", marginTop: 16 }}>
          {isApproved
            ? "Your identity has been verified successfully. Your wallet limits and merchant payout capabilities are unlocked."
            : "Your documents are currently undergoing automated checks or compliance review. We will update your profile status as soon as the decision arrives."}
        </p>

        <div className="actions" style={{ marginTop: 24 }}>
          <Link className="button primary" href="/wallet">
            Go to Wallet
          </Link>
          <Link className="button ghost" href="/verify">
            View KYC Details
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function KycCompletePage() {
  return (
    <Suspense fallback={<div className="card"><p className="muted">Loading verification details…</p></div>}>
      <KycCompleteContent />
    </Suspense>
  );
}

