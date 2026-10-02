import type { Metadata } from "next";
import RegistrationForm from "@/src/components/register/RegistrationForm";

export const metadata: Metadata = {
  title: "Create account | ABC Pay",
  description: "Create an ABC Pay customer account.",
};

export default function RegisterPage() {
  return <RegistrationForm />;
}
