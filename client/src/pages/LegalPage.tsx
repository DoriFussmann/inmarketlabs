import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { Logo } from "@/components/Brand";
import SiteFooter from "@/components/SiteFooter";

export function EmailLink() {
  return (
    <a href="mailto:jon@inmarketlab.com" className="underline underline-offset-4">
      jon@inmarketlab.com
    </a>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mt-12 font-display text-2xl text-[var(--ink)]">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-[var(--ink)]/62">{children}</div>
    </section>
  );
}

export default function LegalPage({
  title,
  documentTitle,
  children,
}: {
  title: string;
  documentTitle: string;
  children: ReactNode;
}) {
  useEffect(() => {
    document.title = documentTitle;
    window.scrollTo(0, 0);
  }, [documentTitle]);

  return (
    <div className="site-shell palette-daylight min-h-screen">
      <header className="site-header border-b">
        <div className="container flex h-[76px] items-center justify-between">
          <Logo href="/" />
          <Link href="/" className="nav-link">
            Back to home
          </Link>
        </div>
      </header>
      <main className="surface-paper">
        <div className="container max-w-3xl py-20 md:py-28">
          <h1 className="section-title">{title}</h1>
          <p className="mt-4 text-sm text-[var(--ink)]/50">Effective date: September 30, 2026</p>
          <div className="mt-8 space-y-4 text-base leading-7 text-[var(--ink)]/62">{children}</div>
        </div>
      </main>
      <SiteFooter logoHref="/" />
    </div>
  );
}
