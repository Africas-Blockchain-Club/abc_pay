import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABC Pay",
  description: "Stablecoin payment movement MVP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
