import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  Compass,
  Crosshair,
  Database,
  Menu,
  Radar,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";
import SiteFooter, { navItems } from "@/components/SiteFooter";
import { Logo } from "@/components/Brand";

const BOOKING_URL = "https://calendar.app.google/JcybaC5Sakrmxbb2A";

const hero = {
  eyebrow: "Audience intelligence + activation",
  lead: "Know where demand is moving.",
  body: "InMarketLab helps emerging brands find, understand, and reach qualified buyers sooner—combining market intelligence with coordinated media execution.",
  image: "/images/hero.webp",
};

const HERO_WORDS = [
  { word: "intent", color: "#155eef" },
  { word: "timing", color: "#2478ff" },
  { word: "precision", color: "#12998c" },
  { word: "confidence", color: "#ff6638" },
] as const;

const heroPrefix = "Move with";

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function HeroTypedWord({
  reducedMotion,
  onWord,
}: {
  reducedMotion: boolean;
  onWord?: (word: string) => void;
}) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(reducedMotion ? HERO_WORDS[0].word.length : 0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setIndex(0);
    setDeleting(false);
    setCount(reducedMotion ? HERO_WORDS[0].word.length : 0);
  }, [reducedMotion]);

  useEffect(() => {
    onWord?.(HERO_WORDS[index].word);
  }, [index, onWord]);

  useEffect(() => {
    if (reducedMotion) return;

    const current = HERO_WORDS[index].word;
    const atEnd = !deleting && count === current.length;
    const atStart = deleting && count === 0;
    const delay = atEnd ? 1900 : atStart ? 280 : deleting ? 40 : 72;

    const timeout = window.setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
        return;
      }
      if (atStart) {
        setIndex((value) => (value + 1) % HERO_WORDS.length);
        setDeleting(false);
        return;
      }
      setCount((value) => value + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [count, deleting, index, reducedMotion]);

  const current = HERO_WORDS[index];
  const sizer = HERO_WORDS.reduce((longest, item) => (item.word.length > longest.length ? item.word : longest), "");

  return (
    <span className="hero-typed-word">
      <span className="hero-typed-word-sizer" aria-hidden="true">
        {sizer}.
      </span>
      <span className="hero-typed-word-live">
        <span style={{ color: current.color }}>
          {current.word.slice(0, count)}
          {!reducedMotion && <span className="hero-typed-caret" aria-hidden="true" />}
        </span>
        .
      </span>
    </span>
  );
}

const capabilities = [
  {
    number: "01",
    icon: Radar,
    title: "Audience intelligence",
    kicker: "Intent + propensity",
    description:
      "Combine people actively showing intent with propensity-based audiences to create a more complete and current view of likely buyers.",
    points: ["High-intent buying signals", "Propensity-based audiences", "Nightly audience refreshes"],
  },
  {
    number: "02",
    icon: Zap,
    title: "Coordinated activation",
    kicker: "Reach buyers in context",
    description:
      "Move prioritized audiences into coordinated programs across the channels your buyers use—managed by one accountable execution team.",
    points: ["Email and LinkedIn", "Website visitor identification", "Paid search, social, and programmatic"],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Live reporting",
    kicker: "No black box",
    description:
      "See spend, delivery, engagement, conversion, and available pipeline signals in real time—with clear decisions attached to the numbers.",
    points: ["Real-time performance view", "Transparent spend visibility", "Decision-ready optimization notes"],
  },
];

const audiences = [
  {
    eyebrow: "Primary",
    title: "Growth-stage brands",
    body: "Get senior media execution and better audience inputs without building a large in-house buying operation.",
    image: "/images/audience-growth.webp",
    alt: "A growing consumer brand team reviewing packaging and market data",
  },
  {
    eyebrow: "Multi-market",
    title: "Franchise & multi-location",
    body: "Coordinate national strategy and local activation with clear market-level visibility and fresher demand signals.",
    image: "/images/audience-franchise.webp",
    alt: "A team reviewing a regional market map",
  },
  {
    eyebrow: "Lean teams",
    title: "In-house marketing teams",
    body: "Add a dependable execution desk that works inside your strategy, systems, and reporting rhythm—not around them.",
    image: "/images/audience-inhouse.webp",
    alt: "A marketing team collaborating around performance data",
  },
];

const faqs = [
  {
    question: "How does flat-rate pricing work?",
    answer:
      "We agree on a fixed monthly operating fee based on scope, channels, and execution complexity. Your fee does not rise simply because media spend rises, so incentives stay aligned around performance and clarity.",
  },
  {
    question: "Do you mark up media spend?",
    answer:
      "No. There is no percentage-of-spend media markup. Your media budget goes to media, and our operating fee is disclosed separately.",
  },
  {
    question: "How current are the high-intent lists?",
    answer:
      "Priority buying-signal and high-intent lists are refreshed nightly from the approved sources in your program, then organized for activation by audience, account, market, or campaign need.",
  },
  {
    question: "What can we see in reporting?",
    answer:
      "You get a real-time view of available spend, delivery, engagement, conversion, and downstream performance signals. We pair the dashboard with plain-language optimization notes so reporting explains what changed and what happens next.",
  },
];

function ArrowLink({ children, href }: { children: ReactNode; href: string }) {
  const external = href.startsWith("http");
  return (
    <a className="arrow-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <span>{children}</span>
      <ArrowRight className="size-4" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const reducedMotion = useReducedMotion();
  const [announcedWord, setAnnouncedWord] = useState<string>(HERO_WORDS[0].word);

  useEffect(() => {
    document.title = "InMarketLab | Flat-Rate Media Execution";
    const hash = window.location.hash;
    if (!hash) return;

    const frame = window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      }, 0);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div id="top" className="site-shell palette-daylight min-h-screen overflow-x-hidden">
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
        <div className="container flex h-[76px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a className="button button-small button-light" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book a strategy session
              <ArrowRight className="size-4" />
            </a>
          </div>
          <button
            className="mobile-menu-button grid size-11 place-items-center rounded-full border lg:hidden"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu border-t px-5 py-6 lg:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="mobile-menu-link border-b py-4 font-display text-2xl">
                  {label}
                </a>
              ))}
              <a className="button button-primary mt-6 justify-center" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Book a strategy session <ArrowRight className="size-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      <main>
        <section className="hero-section relative flex min-h-[900px] flex-col overflow-hidden pt-[120px] lg:min-h-[920px]">
          <img
            src={hero.image}
            alt="A clear, sunlit view of market activity forming before it becomes crowded"
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover object-[65%_center]"
          />
          <div className="hero-vignette absolute inset-0" />
          <div className="hero-grid absolute inset-0 opacity-25" />
          <div className="container relative z-10 grid flex-1 items-end gap-14 pb-16 lg:grid-cols-[minmax(0,1.25fr)_380px] lg:items-center lg:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="hero-copy max-w-4xl"
            >
              <div className="eyebrow mb-7"><span className="pulse-dot" /> {hero.eyebrow}</div>
              <h1 className="hero-title">
                <span className="sr-only">
                  {hero.lead} {heroPrefix} {announcedWord}.
                </span>
                <span aria-hidden="true">
                  <span className="hero-title-line">{hero.lead}</span>
                  <span className="hero-title-line">
                    {heroPrefix}{" "}
                    <HeroTypedWord reducedMotion={reducedMotion} onWord={setAnnouncedWord} />
                  </span>
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                {hero.body}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="button button-primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Book a strategy session <ArrowRight className="size-4" />
                </a>
                <a className="button button-ghost" href="#capabilities">
                  See the model <ChevronDown className="size-4" />
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="signal-panel hidden lg:block"
              aria-label="Signal to action workflow"
            >
              <div className="flex items-center justify-between border-b border-white/12 px-5 py-4">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-white/42">Media desk</p>
                  <p className="mt-1 font-display text-sm text-white">Intent → execution</p>
                </div>
                <span className="grid size-8 place-items-center rounded-full bg-[var(--electric)]/15 text-[var(--electric)]"><Sparkles className="size-4" /></span>
              </div>
              {[
                ["01", "Tonight", "Refresh active buying-signal lists"],
                ["02", "Tomorrow", "Activate priority audience segments"],
                ["03", "Live", "See spend and performance as it moves"],
              ].map(([number, title, description], index) => (
                <div key={number} className="group grid grid-cols-[42px_1fr_24px] items-center gap-3 border-b border-white/10 px-5 py-5 last:border-0">
                  <span className="font-mono text-[10px] text-[var(--electric)]">{number}</span>
                  <span>
                    <span className="block font-display text-sm text-white">{title}</span>
                    <span className="mt-1 block text-xs leading-5 text-white/48">{description}</span>
                  </span>
                  <span className="relative flex h-8 items-center"><span className={`h-px bg-[var(--signal)] ${index === 1 ? "w-5" : index === 2 ? "w-3" : "w-7"}`} /></span>
                </div>
              ))}
              <div className="flex items-center gap-2 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                <span className="size-1.5 rounded-full bg-[var(--signal)]" /> No percentage-of-spend fee
              </div>
            </motion.aside>
          </div>
          <div className="hero-stats relative z-10 hidden border-t border-white/10 bg-[rgba(5,13,25,0.55)] backdrop-blur-md lg:block">
            <div className="container grid grid-cols-4 divide-x divide-white/10">
              {["Flat-rate fee", "0% media markup", "Lists updated nightly", "Real-time reporting"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 py-5 pl-5 first:pl-0">
                  <span className="font-mono text-[9px] text-[var(--electric)]">0{index + 1}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-paper py-24 md:py-32" id="method">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <div className="section-label text-[var(--cobalt)]">A different agency model</div>
                <div className="mt-8 h-px w-full bg-[var(--ink)]/12">
                  <div className="h-px w-1/3 bg-[var(--cobalt)]" />
                </div>
              </div>
              <div>
                <h2 className="section-title max-w-4xl">Media execution without the usual <em>conflict.</em></h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--ink)]/62">
                  Percentage-of-spend models reward agencies when budgets rise. We charge a clear operating fee, put media dollars into media, and give your team direct visibility into what is running and why.
                </p>
                <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-[var(--ink)]/12 md:grid-cols-3">
                  {[
                    ["FIXED", "Flat monthly scope", "One disclosed operating fee tied to the work—not a percentage of your media spend."],
                    ["0%", "No media markup", "Your approved media budget goes to platforms and placements, not an agency margin."],
                    ["24H", "Nightly list refresh", "High-intent and buying-signal audiences are updated every night for the next day’s execution."],
                  ].map(([value, title, body]) => (
                    <div key={title} className="insight-tile p-7">
                      <span className="font-display text-4xl font-light tracking-[-0.06em] text-[var(--cobalt)]">{value}</span>
                      <h3 className="mt-8 font-display text-xl tracking-[-0.03em]">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--ink)]/58">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="surface-depth relative overflow-hidden py-24 md:py-32" id="capabilities">
          <div className="orb orb-one" />
          <div className="container relative z-10">
            <div className="grid items-end gap-8 md:grid-cols-[1fr_0.8fr]">
              <div>
                <div className="section-label text-[var(--electric)]">Inside the media desk</div>
                <h2 className="section-title mt-6 max-w-3xl text-white">Better audiences.<br />Sharper execution.</h2>
              </div>
              <p className="max-w-lg text-base leading-7 text-white/55 md:justify-self-end">
                Strategy, buying, audience intelligence, creative coordination, and reporting work as one operating system—without layers of account-management theater.
              </p>
            </div>

            <div className="mt-16 grid gap-4 lg:grid-cols-3">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="capability-card group">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-white/35">CAPABILITY {item.number}</span>
                      <span className="grid size-11 place-items-center rounded-xl border border-white/12 bg-white/[0.05] text-[var(--electric)] transition-all duration-200 group-hover:border-[var(--electric)]/45 group-hover:bg-[var(--electric)]/10">
                        <Icon className="size-5" strokeWidth={1.7} />
                      </span>
                    </div>
                    <div className="mt-16">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--signal)]">{item.kicker}</p>
                      <h3 className="mt-3 font-display text-4xl font-light tracking-[-0.05em] text-white">{item.title}</h3>
                      <p className="mt-5 min-h-[84px] text-sm leading-7 text-white/55">{item.description}</p>
                      <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                        {item.points.map((point) => (
                          <div key={point} className="flex items-center gap-3 text-sm text-white/72">
                            <span className="size-1 rounded-full bg-[var(--electric)]" /> {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="surface-paper py-24 md:py-32" id="about">
          <div className="container">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <div className="section-label text-[var(--cobalt)]">The working rhythm</div>
                <h2 className="mt-6 font-display text-4xl font-light tracking-[-0.055em] md:text-5xl">A media agency that operates like part of your team.</h2>
                <p className="mt-6 text-base leading-7 text-[var(--ink)]/60">
                  Senior operators stay close to the buying, the data, and the decisions. You see what we see, know what changed, and understand the next move.
                </p>
                <div className="mt-8"><ArrowLink href={BOOKING_URL}>Book a strategy session</ArrowLink></div>
              </div>
              <div className="process-list border-t border-[var(--ink)]/15">
                {[
                  [Compass, "Align", "Set channel roles, audiences, budgets, performance definitions, and the operating cadence."],
                  [Database, "Refresh", "Update high-intent and buying-signal lists nightly for current campaign use."],
                  [Target, "Execute", "Buy, launch, pace, test, and optimize media through one accountable desk."],
                  [Crosshair, "Report live", "Keep spend and performance visible, with plain-language decisions attached."],
                ].map(([Icon, title, body], index) => {
                  const ItemIcon = Icon as typeof Compass;
                  return (
                    <div key={title as string} className="grid grid-cols-[42px_42px_1fr] gap-4 border-b border-[var(--ink)]/15 py-7 md:grid-cols-[52px_52px_1fr] md:py-9">
                      <span className="font-mono text-[10px] text-[var(--cobalt)]">0{index + 1}</span>
                      <ItemIcon className="size-5 text-[var(--ink)]/48" strokeWidth={1.7} />
                      <div>
                        <h3 className="font-display text-2xl tracking-[-0.04em]">{title as string}</h3>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--ink)]/58">{body as string}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="proof-section py-20 md:py-24" id="proof">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <div className="section-label text-[var(--electric)]">Brand-level experience</div>
                <h2 className="mt-6 font-display text-4xl font-light leading-[1.02] tracking-[-0.055em] text-white md:text-5xl">Enterprise experience. Built for growing brands.</h2>
              </div>
              <div>
                <p className="max-w-2xl text-lg leading-8 text-white/62">
                  Our team has worked at the brand level with major national organizations, bringing that operating discipline to emerging and growing companies without forcing them into an enterprise-agency model.
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/42">
                  Brand-level experience includes work with organizations such as:
                </p>
                <div className="brand-proof-grid mt-8">
                  {["Express Employment Professionals", "Great Clips", "BELFOR", "And other national and growth-stage brands"].map((brand, index) => (
                    <div key={brand} className="brand-proof-item">
                      <span className="font-mono text-[9px] text-[var(--electric)]">0{index + 1}</span>
                      <span className="font-display text-lg tracking-[-0.03em] text-white">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="surface-depth border-y py-24 md:py-32" id="audiences">
          <div className="container">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <div className="section-label text-[var(--electric)]">Built for ambitious media teams</div>
                <h2 className="section-title mt-6 max-w-3xl text-white">For brands that need execution—not another agency layer.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-white/48">Designed for growth-stage brands, franchise systems, multi-location operators, and lean in-house marketing teams.</p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {audiences.map((audience, index) => (
                <article key={audience.title} className="audience-card group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={audience.image} alt={audience.alt} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.025]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-transparent to-transparent" />
                    <span className="audience-badge absolute left-5 top-5 rounded-full border border-white/20 bg-[var(--ink)]/65 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-lg">
                      0{index + 1} / {audience.eyebrow}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-3xl font-light tracking-[-0.045em] text-white">{audience.title}</h3>
                    <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/53">{audience.body}</p>
                    <div className="mt-7"><ArrowLink href={BOOKING_URL}>Book a strategy session</ArrowLink></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-soft py-24 md:py-32" id="faq">
          <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <div className="section-label text-[var(--cobalt)]">Straight answers</div>
              <h2 className="section-title mt-6">No markup. No mystery.</h2>
            </div>
            <div className="border-t border-[var(--ink)]/16">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div key={faq.question} className="border-b border-[var(--ink)]/16">
                    <button
                      className="flex w-full items-center justify-between gap-6 py-7 text-left"
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? -1 : index)}
                    >
                      <span className="font-display text-xl tracking-[-0.03em] md:text-2xl">{faq.question}</span>
                      <span className={`grid size-8 shrink-0 place-items-center rounded-full border border-[var(--ink)]/15 transition-transform duration-200 ${open ? "rotate-45 bg-[var(--ink)] text-white" : ""}`}>
                        <span className="text-xl leading-none">+</span>
                      </span>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-200 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-8 text-sm leading-7 text-[var(--ink)]/60">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="surface-cta relative overflow-hidden py-24 text-white md:py-32">
          <div className="cta-grid absolute inset-0 opacity-20" />
          <div className="absolute -right-24 -top-24 size-[440px] rounded-full bg-[var(--electric)]/30 blur-[100px]" />
          <div className="container relative z-10">
            <div className="max-w-5xl">
              <div className="section-label text-white/60">Turn market activity into business action</div>
              <h2 className="mt-7 font-display text-5xl font-light leading-[0.98] tracking-[-0.065em] md:text-7xl lg:text-[92px]">
                Identify real demand. Turn it into measurable growth.
              </h2>
              <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center">
                <a className="button button-light" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Book a strategy session <ArrowRight className="size-4" />
                </a>
                <p className="max-w-sm text-sm leading-6 text-white/62">We’ll look at where demand may already be forming, how your audiences are built, and how to connect intelligence to measurable activation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
