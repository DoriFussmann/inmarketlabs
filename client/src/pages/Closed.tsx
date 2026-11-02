import { useEffect } from "react";
import { Link } from "wouter";
import { BrandMark } from "@/components/Brand";

export default function Closed() {
  useEffect(() => {
    document.title = "InMarketLab";
  }, []);

  return (
    <div className="site-shell palette-daylight surface-paper flex min-h-screen flex-col items-center justify-center">
      <main className="container max-w-xl py-24 text-center">
        <div className="mx-auto size-12">
          <BrandMark variant="orbit" />
        </div>
        <h1 className="section-title mt-8">InMarketLab is no longer offering services.</h1>
        <p className="mt-6 text-base leading-7 text-[var(--ink)]/62">
          Thank you to every client and partner we worked with.
        </p>
      </main>
      <footer className="pb-10 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink)]/40">
        <Link href="/privacy" className="hover:text-[var(--ink)]">
          Privacy Policy
        </Link>
        <span className="mx-3">·</span>
        <Link href="/terms" className="hover:text-[var(--ink)]">
          Terms of Use
        </Link>
      </footer>
    </div>
  );
}
