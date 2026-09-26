"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DashboardNav } from "@/components/DashboardNav";
import { useAuth } from "@/context/AuthContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push("/");
  }, [loading, user, router]);

  if (loading) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      Loading…
    </div>
  );
  if (!user) return null;

  return (
    <div className="dashboard">
      <script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.dataset.dashboardTheme=localStorage.getItem('abc-pay-dashboard-theme')||'dark'}catch(e){document.documentElement.dataset.dashboardTheme='dark'}" }} />
      <DashboardNav />
      <main className="main">{children}</main>
    </div>
  );
}
