import Link from "next/link";

type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function ComingSoonPage({ eyebrow, title, description }: ComingSoonPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f8fa] px-6 py-16">
      <section className="w-full max-w-xl rounded-3xl border border-[#e2e6ed] bg-white p-8 shadow-xl sm:p-12">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e85d04]">{eyebrow}</p>
        <h1 className="text-4xl font-black tracking-tight text-[#0f1f3d]">{title}</h1>
        <p className="mt-4 leading-7 text-[#6b7a95]">{description}</p>
        <Link href="/" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0f1f3d] px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90">
          Return to ABC Pay
        </Link>
      </section>
    </main>
  );
}
