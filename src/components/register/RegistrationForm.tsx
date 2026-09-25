"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { registerCustomer, RegistrationError, type RegistrationPayload } from "@/src/lib/api/auth";
import styles from "./RegistrationForm.module.css";

type FieldName = keyof RegistrationPayload;

const initialForm: RegistrationPayload = {
  name: "",
  surname: "",
  email: "",
  phoneNumber: "",
  walletAddress: "",
};

const fieldDetails: Record<FieldName, { label: string; placeholder: string; type?: "email" | "tel" }> = {
  name: { label: "Name", placeholder: "Thandi" },
  surname: { label: "Surname", placeholder: "Mokoena" },
  email: { label: "Email", placeholder: "you@example.com", type: "email" },
  phoneNumber: { label: "Phone number (10 digits)", placeholder: "0712345678", type: "tel" },
  walletAddress: { label: "Wallet address", placeholder: "0x…" },
};

export default function RegistrationForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionInFlight = useRef(false);

  function updateField(field: FieldName, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting || submissionInFlight.current) return;

    submissionInFlight.current = true;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await registerCustomer({
        name: form.name.trim(),
        surname: form.surname.trim(),
        email: form.email.trim(),
        phoneNumber: form.phoneNumber.trim(),
        walletAddress: form.walletAddress.trim(),
      });
      router.replace("/wallet");
      router.refresh();
    } catch (error) {
      setSubmitError(error instanceof RegistrationError ? error.message : "Unable to create account. Please try again.");
    } finally {
      submissionInFlight.current = false;
      setIsSubmitting(false);
    }
  }

  function field(name: FieldName) {
    const { label, placeholder, type = "text" } = fieldDetails[name];
    const isName = name === "name" || name === "surname";
    const isPhone = name === "phoneNumber";

    return (
      <div className={styles.field}>
        <label htmlFor={`register-${name}`}>{label}</label>
        <input
          id={`register-${name}`}
          name={name}
          type={type}
          value={form[name]}
          placeholder={placeholder}
          onChange={(event) => updateField(name, event.target.value)}
          required
          minLength={isName ? 2 : undefined}
          maxLength={isName ? 80 : undefined}
          autoComplete={name === "name" ? "given-name" : name === "surname" ? "family-name" : name === "email" ? "email" : name === "phoneNumber" ? "tel-national" : "off"}
          inputMode={isPhone ? "numeric" : undefined}
          pattern={isPhone ? "[0-9]{10}" : undefined}
          title={isPhone ? "Enter 10 digits, for example 0821234567" : undefined}
        />
      </div>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="register-title">
        <header className={styles.heading}>
          <span className={styles.mark} aria-hidden="true">AB</span>
          <div>
            <span className={styles.kicker}>ABC Pay / Individual account</span>
            <h1 id="register-title">Create account</h1>
          </div>
        </header>

        <p className={styles.notice}>Enter your details to create an account. Your wallet address is recorded but ownership is not verified yet.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Personal details</h2>
          <div className={styles.row}>{field("name")}{field("surname")}</div>
          {field("email")}
          {field("phoneNumber")}
          <h2>Wallet</h2>
          {field("walletAddress")}
          <p className={styles.help}>Enter a public address you own. ABC Pay does not connect to or verify the wallet during registration.</p>

          {submitError && <p className={styles.error} role="alert">{submitError}</p>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating account…" : "Create account"}
          </button>
        </form>

        <footer className={styles.footer}>Already have an account? <Link href="/sign-in">Sign in</Link></footer>
      </section>
    </main>
  );
}
