import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABC Pay | Accept stablecoins, receive rand",
  description:
    "A payment experience for South African merchants accepting stablecoins and settling sales in ZAR.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
