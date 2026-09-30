import { Link } from "wouter";
import { Logo } from "@/components/Brand";

export const navItems = [
  ["Model", "/#method"],
  ["Services", "/#capabilities"],
  ["Who it's for", "/#audiences"],
  ["FAQ", "/#faq"],
] as const;

const BOOKING_URL = "https://calendar.app.google/JcybaC5Sakrmxbb2A";

export default function SiteFooter({ logoHref = "#top" }: { logoHref?: string }) {
  return (
    <footer className="site-footer py-12">
      <div className="container">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Logo href={logoHref} />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
              Flat-rate media execution powered by current buying signals, nightly audience updates, and real-time reporting.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/45">
              Contact:{" "}
              <a href="mailto:jon@inmarketlab.com" className="transition-colors hover:text-white">
                jon@inmarketlab.com
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-14 gap-y-3 text-sm text-white/58">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-white">
                {label}
              </a>
            ))}
            <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              Strategy session
            </a>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <span>InMarketLab · Intent data to media execution</span>
          <span>© {new Date().getFullYear()} InMarketLabs, LLC</span>
        </div>
      </div>
    </footer>
  );
}
