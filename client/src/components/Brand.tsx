type LogoKey = "orbit" | "window" | "monogram";

export function BrandMark({ variant }: { variant: LogoKey }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      {variant === "orbit" && (
        <svg viewBox="0 0 40 40" fill="none" className="size-full">
          <circle cx="20" cy="20" r="11.25" stroke="currentColor" strokeWidth="1.4" strokeDasharray="25 8" />
          <circle cx="20" cy="20" r="5.5" stroke="currentColor" strokeWidth="1.4" opacity=".65" />
          <path d="M8 25.5c5.5-1 7.2-8.7 12.3-8.7 4.3 0 5.5 5.7 11.7 4.3" stroke="var(--signal)" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="31.8" cy="21" r="2.15" fill="var(--electric)" />
        </svg>
      )}
      {variant === "window" && (
        <svg viewBox="0 0 40 40" fill="none" className="size-full">
          <path d="M9.5 9.5h9v9h-9zM21.5 9.5h9v9h-9zM9.5 21.5h9v9h-9z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M21.5 21.5h9v9h-9z" fill="var(--electric)" />
          <circle cx="26" cy="26" r="2.2" fill="var(--signal)" />
        </svg>
      )}
      {variant === "monogram" && (
        <svg viewBox="0 0 40 40" fill="none" className="size-full">
          <path d="M9 29V11m0 9h5l5-9 5 18 4-9h3" stroke="currentColor" strokeWidth="2.35" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="31" cy="20" r="2.25" fill="var(--signal)" />
        </svg>
      )}
    </span>
  );
}

export function Logo({
  compact = false,
  variant = "orbit",
  href = "#top",
}: {
  compact?: boolean;
  variant?: LogoKey;
  href?: string;
}) {
  return (
    <a href={href} className="group inline-flex items-center gap-3" aria-label="InMarketLab home">
      <BrandMark variant={variant} />
      <span className="leading-none">
        <span className="brand-word block font-display text-[15px] tracking-[-0.02em]">INMARKET</span>
        {!compact && <span className="brand-sub mt-1 block font-mono text-[9px] tracking-[0.34em]">LAB</span>}
      </span>
    </a>
  );
}
