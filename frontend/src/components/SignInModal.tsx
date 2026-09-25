"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
}

function MetaMaskIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M21.5 3.5L12 8.5L2.5 3.5L6 19.5L12 22L18 19.5L21.5 3.5Z"
        fill="#E4761B"
        stroke="#E4761B"
        strokeWidth="0.5"
      />
      <path d="M12 8.5L6 3.5L2.5 3.5L6 19.5L12 22L18 19.5L21.5 3.5L18 3.5L12 8.5Z" fill="#E4761B" />
      <path d="M12 8.5L6 3.5L2.5 3.5L6 19.5L12 22L12 8.5Z" fill="#F68410" />
      <path d="M12 8.5L18 3.5L21.5 3.5L18 19.5L12 22L12 8.5Z" fill="#F68410" />
      <path d="M12 8.5L6 3.5L12 22L18 19.5L12 8.5Z" fill="#E4761B" />
      <path d="M7.5 4.5L12 8.5L16.5 4.5L12 2L7.5 4.5Z" fill="#E4761B" />
      <path d="M7.5 4.5L12 8.5L7 5L7.5 4.5Z" fill="#F68410" />
      <path d="M16.5 4.5L12 8.5L17 5L16.5 4.5Z" fill="#F68410" />
      <path d="M12 8.5V22" stroke="#C6902D" strokeWidth="0.5" />
    </svg>
  );
}

type ModalStep = "type" | "individual";

export function SignInModal({ open, onClose }: SignInModalProps) {
  const router = useRouter();
  const [step, setStep] = useState<ModalStep>("type");
  const [connecting, setConnecting] = useState(false);
  const [error, setError] = useState("");

  async function connectMetaMask() {
    setConnecting(true);
    setError("");

    try {
      if (!window.ethereum) {
        throw new Error("MetaMask is not installed. Please install MetaMask to continue.");
      }

      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];

      if (accounts.length === 0) {
        throw new Error("No accounts found. Please unlock MetaMask.");
      }

      const addr = accounts[0];
      sessionStorage.setItem("abc_pay_metamask_address", addr);
      sessionStorage.setItem("abc_pay_role", "individual");
      router.push("/wallet");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect to MetaMask");
    } finally {
      setConnecting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modalHeader">
          <div className="eyebrow">Sign in</div>
          {step === "type" && <h2>Choose your type</h2>}
          {step === "individual" && <h2>Sign in</h2>}
        </div>

        <div className="modalBody">
          {step === "type" && (
            <div className="typeOptions">
              <button className="signInOption" onClick={() => setStep("individual")}>
                <div className="optionIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="optionText">
                  <span className="optionTitle">Individual</span>
                  <span className="optionDesc">Sign in with your wallet</span>
                </div>
              </button>
              <button className="signInOption" disabled>
                <div className="optionIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4v18" />
                    <path d="M19 21V11l-6-4" />
                    <path d="M9 9h1" />
                    <path d="M9 13h1" />
                    <path d="M9 17h1" />
                  </svg>
                </div>
                <div className="optionText">
                  <span className="optionTitle">Merchant</span>
                  <span className="optionDesc">Coming soon</span>
                </div>
              </button>
            </div>
          )}

          {step === "individual" && (
            <>
              <button
                className="signInOption"
                onClick={connectMetaMask}
                disabled={connecting}
              >
                <div className="optionIcon">
                  <MetaMaskIcon size={28} />
                </div>
                <div className="optionText">
                  <span className="optionTitle">MetaMask</span>
                  <span className="optionDesc">
                    {connecting ? "Connecting…" : "Connect with your wallet"}
                  </span>
                </div>
                {connecting && <div className="miniSpinner" />}
              </button>
              {error && <div className="error modalError">{error}</div>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
