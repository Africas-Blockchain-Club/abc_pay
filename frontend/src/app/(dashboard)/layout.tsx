import { DashboardNav } from "@/components/DashboardNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard">
      <DashboardNav />
      <main className="main">{children}</main>
    </div>
  );
}
