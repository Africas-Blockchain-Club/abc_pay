import { PublicNav } from "@/components/PublicNav";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="shell">
      <PublicNav />
      <div className="container authWrap">{children}</div>
    </main>
  );
}
