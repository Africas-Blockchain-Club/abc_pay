import { DashboardNav } from "@/components/DashboardNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard">
      <script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.dataset.dashboardTheme=localStorage.getItem('abc-pay-dashboard-theme')||'dark'}catch(e){document.documentElement.dataset.dashboardTheme='dark'}" }} />
      <DashboardNav />
      <main className="main">{children}</main>
    </div>
  );
}
