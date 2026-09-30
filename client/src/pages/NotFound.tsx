import { useEffect } from "react";
import { Link } from "wouter";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | InMarketLab";
  }, []);

  return (
    <div className="site-shell palette-daylight surface-paper flex min-h-screen items-center justify-center">
      <div className="container max-w-xl py-24 text-center">
        <div className="section-label justify-center text-[var(--cobalt)]">404</div>
        <h1 className="section-title mt-6">Page not found.</h1>
        <p className="mt-6 text-base leading-7 text-[var(--ink)]/62">The page you're looking for doesn't exist.</p>
        <div className="mt-10">
          <Link href="/" className="button button-primary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
