"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/services/api";

type KycStatusResponse = {
  kycVerified: boolean;
  kycVerifiedAt: string | null;
  status: string;
  sessionId: string | null;
  latestVerification?: {
    id: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

type KycStartResponse = {
  verificationUrl: string;
  sessionToken: string;
  sessionId: string;
  status: string;
};

export default function VerifyPage() {
  const [data, setData] = useState<KycStatusResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState("");
  const [verificationUrl, setVerificationUrl] = useState<string | null>(null);

  async function fetchStatus() {
    try {
      setLoading(true);
      setError("");
      const res = await api<KycStatusResponse>("/kyc/status");
      setData(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load verification status");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStatus();
  }, []);

  async function handleStartVerification() {
    try {
      setStarting(true);
      setError("");
      const res = await api<KycStartResponse>("/kyc/start", {
        method: "POST",
      });
      setVerificationUrl(res.verificationUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to initiate verification session");
    } finally {
      setStarting(false);
    }
  }

  const isVerified = data?.kycVerified || data?.status === "Approved";
  const isInReview = data?.status === "In Review";
  const isDeclined = data?.status === "Declined";

  return (
    <section style={{ maxWidth: 880 }}>
      <div className="eyebrow">Compliance & Security</div>
      <h1 style={{ fontSize: "2.8rem", marginBottom: 12 }}>Identity Verification</h1>
      <p className="lead">
        Verify your identity via Didit.me to unlock unlimited payments, crypto-to-fiat conversion, and merchant settlements.
      </p>

      {error && <div className="error" style={{ marginBottom: 16 }}>{error}</div>}

      {loading ? (
        <div className="card">
          <p className="muted">Loading verification details…</p>
        </div>
      ) : (
        <>
          <div className="grid" style={{ marginBottom: 24 }}>
            <div className="card">
              <div className="muted">Verification Status</div>
              <div
                className="stat"
                style={{
                  color: isVerified
                    ? "var(--brand)"
                    : isInReview
                    ? "#facc15"
                    : isDeclined
                    ? "var(--danger)"
                    : "var(--text)",
                }}
              >
                {data?.status ?? "Not Started"}
              </div>
              <p className="muted" style={{ fontSize: "0.88rem", marginTop: 8 }}>
                {isVerified
                  ? "Full account tier active. Banking & exchange rails enabled."
                  : isInReview
                  ? "Our compliance team is reviewing your documents."
                  : isDeclined
                  ? "Verification was not approved. You may retry."
                  : "Requires government ID and biometric selfie."}
              </p>
            </div>

            <div className="card">
              <div className="muted">KYC Verified</div>
              <div className="stat">
                {isVerified ? "Yes ✓" : "Pending"}
              </div>
              <p className="muted" style={{ fontSize: "0.88rem", marginTop: 8 }}>
                {data?.kycVerifiedAt
                  ? `Verified on ${new Date(data.kycVerifiedAt).toLocaleDateString()}`
                  : "Pending verification completion"}
              </p>
            </div>
          </div>

          {isVerified ? (
            <div className="card" style={{ borderLeft: "4px solid var(--brand)" }}>
              <h3 style={{ marginTop: 0, color: "var(--brand)" }}>Your account is fully verified</h3>
              <p className="muted">
                Your identity has been confirmed via Didit. You have full access to high-volume payments, merchant QR codes, and automated bank settlements.
              </p>
              <div className="actions" style={{ marginTop: 16 }}>
                <Link className="button primary" href="/wallet">
                  Go to Wallet
                </Link>
                <Link className="button" href="/payments">
                  View Payments
                </Link>
              </div>
            </div>
          ) : (
            <div className="card">
              <h3>{data?.status === "In Review" ? "Verification In Review" : "Start your Didit Verification"}</h3>
              <p className="muted">
                Our verification flow runs in partnership with Didit.me. You will need a valid ID (Passport, National ID, or Driver&apos;s Licence) and a mobile device or webcam for a quick liveness selfie.
              </p>

              {!verificationUrl ? (
                <div className="actions" style={{ marginTop: 18 }}>
                  <button
                    className="button primary"
                    onClick={handleStartVerification}
                    disabled={starting}
                  >
                    {starting ? "Starting Session…" : "Start Identity Verification"}
                  </button>
                  <button className="button ghost" onClick={fetchStatus}>
                    Refresh Status
                  </button>
                </div>
              ) : (
                <div style={{ marginTop: 24 }}>
                  <div className="actions" style={{ marginBottom: 16 }}>
                    <a
                      className="button primary"
                      href={verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in New Window ↗
                    </a>
                    <button className="button ghost" onClick={fetchStatus}>
                      Check Status
                    </button>
                  </div>
                  <div className="muted" style={{ marginBottom: 10, fontSize: "0.88rem" }}>
                    Or complete verification directly inside this window:
                  </div>
                  <iframe
                    src={verificationUrl}
                    style={{
                      width: "100%",
                      height: 650,
                      borderRadius: 14,
                      border: "1px solid var(--border)",
                      background: "#fff",
                    }}
                    allow="camera; microphone; fullscreen; autoplay; encrypted-media"
                    title="Didit Identity Verification"
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
}

