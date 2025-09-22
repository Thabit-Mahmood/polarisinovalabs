import React from "react";
import { HashRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Menu, X, Sparkles, Code2, Workflow, Settings, Gauge, Rocket, Cloud, Database, Wand2, Users2,
  Phone, Mail, MapPin, ShieldCheck, GitBranch, Cpu
} from "lucide-react";

/**
 * LOGO. – Web Development Company Template
 * Tech: React + React Router + Tailwind (v3+) + Framer Motion + Lucide Icons
 * Single-file for quick preview; split into components as needed.
 */

const cx = (...c) => c.filter(Boolean).join(" ");
const Section = ({ id, className = "", children }) => {
  const secRef = React.useRef(null);

  React.useEffect(() => {
    if (!secRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const el = secRef.current;

    // Create the reveal animation
    const anim = gsap.fromTo(
      el,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",            // reveal when near viewport
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // If already in view at load, play immediately so the hero isn't hidden
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92) anim.play(0);

    return () => anim.kill();
  }, []);

  return (
    <section ref={secRef} id={id} className={cx("w-full py-16 md:py-24", className)}>
      <div className="container mx-auto max-w-7xl px-4">{children}</div>
    </section>
  );
};

/** ---------------------- NAVBAR ---------------------- */
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const navRef = React.useRef(null);
  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/work", label: "Work" },
    { to: "/contact", label: "Contact" },
  ];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      backgroundColor: "rgba(9,9,11,0.8)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top+=8 top",
        toggleActions: "play none none reverse",
      },
      duration: 0.2,
      ease: "power2.out",
    });
  }, []);
  return (
    <header ref={navRef} className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-400 to-indigo-500" />
            <span className="text-white font-semibold tracking-wide">LOGO.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  cx(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors group relative",
                    isActive ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/10"
                  )
                }
              ><span className="relative z-10">{n.label}</span><span className="absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-teal-400/0 via-teal-400/70 to-indigo-400/0 transition-transform duration-300 group-hover:scale-x-100" /></NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-2 rounded-xl bg-white text-zinc-900 px-4 py-2 text-sm font-semibold hover:opacity-90"
            >
              <Sparkles className="h-4 w-4" /> Start a project
            </Link>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {nav.map((n) => (
                <NavLink onClick={() => setOpen(false)} key={n.to} to={n.to} className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10"><span className="relative z-10">{n.label}</span><span className="absolute left-3 right-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-teal-400/0 via-teal-400/70 to-indigo-400/0 transition-transform duration-300 group-hover:scale-x-100" /></NavLink>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-white text-zinc-900 font-semibold">Start a project</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/** ---------------------- HERO ---------------------- */
function GlowBG() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-teal-500/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[30rem] w-[30rem] rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:16px_16px]" />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative">
      <GlowBG />
      <Section className="pt-8 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-[0.2em] text-teal-300/90">We build systems that scale</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
              Software that solves the <span className="text-teal-300">real</span> problem
            </h1>
            <p className="mt-4 max-w-xl text-zinc-300">
              We’re a product‑minded software house focused on the *why*. We automate workflows, integrate data,
              and ship resilient web platforms tailored to your business.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-zinc-900">
                Explore services
              </Link>
              <Link to="/work" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 font-semibold text-white hover:bg-white/10">
                See our work
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center md:max-w-md">
              <KPI value="98%" label="On‑time delivery" />
              <KPI value="<200ms" label="TTFB targets" />
              <KPI value="200+" label="Automations shipped" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl"
          >
            <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-zinc-900/80" />
              ))}
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-zinc-300">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>CI • Tests • Observability</span>
              <span className="flex items-center gap-2"><Rocket className="h-4 w-4"/>Zero‑downtime deploys</span>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

function KPI({ value, label }) {
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-4">
      <p className="text-2xl font-extrabold text-white">{value}</p>
      <p className="mt-1 text-xs text-zinc-400">{label}</p>
    </div>
  );
}

/** ---------------------- SERVICES ---------------------- */
const SERVICES = [
  {
    key: "webapps",
    title: "Web Apps & Platforms",
    icon: <Code2 className="h-6 w-6" />,
    copy: "React/Next backbones with robust APIs, auth, billing, and analytics.",
    to: "/services/webapps",
  },
  {
    key: "automation",
    title: "Automation & Integrations",
    icon: <Workflow className="h-6 w-6" />,
    copy: "Zapier isn’t enough. We wire CRMs, ERPs, and data lakes with code.",
    to: "/services/automation",
  },
  {
    key: "devops",
    title: "DevOps & Cloud",
    icon: <Cloud className="h-6 w-6" />,
    copy: "IaC, CI/CD, autoscaling, and observability baked in from day one.",
    to: "/services/devops",
  },
  {
    key: "data",
    title: "Data & AI",
    icon: <Database className="h-6 w-6" />,
    copy: "ETL pipelines, vector search, and pragmatic AI that earns its keep.",
    to: "/services/data",
  },
  {
    key: "perf",
    title: "Performance Engineering",
    icon: <Gauge className="h-6 w-6" />,
    copy: "Latency budgets, Core Web Vitals, and load profiles for real users.",
    to: "/services/perf",
  },
  {
    key: "ux",
    title: "Product Design & UX",
    icon: <Wand2 className="h-6 w-6" />,
    copy: "Design sprints, prototypes, and systemized UI kits your devs love.",
    to: "/services/ux",
  },
];

function ServicesGrid() {
  return (
    <Section id="services">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Services tailored to your business</h2>
          <p className="text-zinc-400">From discovery to long‑term optimization.</p>
        </div>
        <Link to="/services" className="hidden md:inline-flex rounded-lg border border-white/15 px-3 py-1 text-sm text-white hover:bg-white/10">See all</Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.key}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Link to={s.to} className="group block rounded-2xl border border-white/10 bg-zinc-900/60 p-5 hover:border-white/20">
              <div className="flex items-center gap-3 text-white">
                <div className="rounded-xl bg-white/10 p-2">{s.icon}</div>
                <h3 className="font-semibold tracking-tight">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{s.copy}</p>
              <div className="mt-4 text-sm font-semibold text-teal-300 group-hover:text-teal-200">Learn more →</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/** ---------------------- PROCESS ---------------------- */
const STEPS = [
  { icon: <Users2 className="h-5 w-5"/>, title: "Discover", copy: "We start with outcomes—interviews, metrics, and constraints." },
  { icon: <Settings className="h-5 w-5"/>, title: "Design", copy: "Architecture, data models, and UX prototypes in tight loops." },
  { icon: <GitBranch className="h-5 w-5"/>, title: "Build", copy: "Trunk‑based dev, tests, and preview envs for every PR." },
  { icon: <Cpu className="h-5 w-5"/>, title: "Automate", copy: "Integrations and RPA where it matters—no busywork left behind." },
  { icon: <Rocket className="h-5 w-5"/>, title: "Optimize", copy: "Perf budgets, A/Bs, and KPIs so the product gets better week over week." },
];

function Process() {
  return (
    <Section className="bg-zinc-950/60">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-white">A process that de‑risks delivery</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
            <div className="flex items-center gap-2 text-white"><span className="rounded-lg bg-white/10 p-2">{s.icon}</span><span className="font-semibold">{s.title}</span></div>
            <p className="mt-2 text-sm text-zinc-400">{s.copy}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** ---------------------- STACK SHOWCASE (animated with GSAP) ---------------------- */
const STACK = [
  "AWS","Azure","GCP","Vercel","Cloudflare","Stripe","Shopify","HubSpot","Postgres","MongoDB","Next.js","Remix"
];

function StackShowcase() {
  const containerRef = React.useRef(null);
  const row1Ref = React.useRef(null);
  const row2Ref = React.useRef(null);
  const cardsRef = React.useRef([]);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Reveal-in animation
    if (containerRef.current) {
      ScrollTrigger.refresh();
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 16,
        rotateX: -10,
        transformOrigin: "50% 50%",
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }

    // Gentle float
    gsap.to(cardsRef.current, {
      y: "+=8",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 2.2,
      stagger: { each: 0.12, from: "random" },
    });

    // Marquee rows (infinite)
    if (row1Ref.current) {
      const t1 = gsap.to(row1Ref.current, {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: 18,
      });
      row1Ref.current.addEventListener("mouseenter", () => t1.pause());
      row1Ref.current.addEventListener("mouseleave", () => t1.play());
    }
    if (row2Ref.current) {
      const t2 = gsap.to(row2Ref.current, {
        xPercent: 50,
        repeat: -1,
        ease: "none",
        duration: 22,
      });
      row2Ref.current.addEventListener("mouseenter", () => t2.pause());
      row2Ref.current.addEventListener("mouseleave", () => t2.play());
    }

    // 3D tilt per-card
    cardsRef.current.forEach((card) => {
      if (!card) return;
      const rx = gsap.quickTo(card, "rotateX", { duration: 0.3, ease: "power3.out" });
      const ry = gsap.quickTo(card, "rotateY", { duration: 0.3, ease: "power3.out" });
      const tz = gsap.quickTo(card, "z", { duration: 0.3, ease: "power3.out" });
      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        ry(x * 10);
        rx(-y * 10);
        tz(12);
      };
      const onLeave = () => { rx(0); ry(0); tz(0); };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });
  }, []);

  const renderRow = (reverse=false) => {
    const items = reverse ? [...STACK].reverse() : STACK;
    const doubled = items.concat(items); // seamless loop
    return (
      <div className="flex w-[200%] gap-3 will-change-transform" ref={reverse ? row2Ref : row1Ref}>
        {doubled.map((c, i) => (
          <div
            key={`${c}-${i}`}
            ref={(el) => (cardsRef.current[(reverse?100:0)+i] = el)}
            className="stack-card group relative flex aspect-[7/3] min-w-[160px] items-center justify-center rounded-xl border border-white/10 bg-zinc-900/60 px-4 text-sm text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] [transform-style:preserve-3d]"
          >
            <span className="relative z-10 font-medium tracking-tight">{c}</span>
            <span className="pointer-events-none absolute inset-px rounded-[11px] bg-gradient-to-br from-teal-400/10 to-indigo-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute -inset-[1px] rounded-xl opacity-0 blur-md transition group-hover:opacity-100" style={{background:"radial-gradient(60%_100% at 50% 0%, rgba(20,184,166,0.25), transparent)"}} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Section>
      <div className="relative">
        <div className="pointer-events-none absolute -inset-x-6 -top-8 h-32 bg-gradient-to-b from-white/5 to-transparent blur-xl" />
        <h3 className="mb-6 text-center text-2xl font-bold text-white">We build on your stack</h3>
        <div ref={containerRef} className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:16px_16px]" />
          <div className="group relative">
            {renderRow(false)}
          </div>
          <div className="group relative mt-3 hidden sm:block">
            {renderRow(true)}
          </div>
        </div>
      </div>
    </Section>
  );
}

/** ---------------------- CASES ---------------------- */
function Cases() {
  return (
    <Section id="work">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Selected work</h2>
          <p className="text-zinc-400">Outcomes over outputs.</p>
        </div>
        <Link to="/work" className="hidden md:inline-flex rounded-lg border border-white/15 px-3 py-1 text-sm text-white hover:bg-white/10">View all</Link>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-white/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <div className="aspect-video bg-zinc-900/60"></div>
            <div className="bg-zinc-950/50 p-4">
              <p className="font-medium text-white">Case Study {i + 1}</p>
              <p className="text-xs text-zinc-400">Conversion +42% • Ops cost −27%</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/** ---------------------- CTA ---------------------- */
function CTA() {
  return (
    <Section id="cta">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/15 to-indigo-500/15 p-8 md:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">Let’s map your fastest path to value</h3>
            <p className="mt-1 text-zinc-300">Book a 30‑min discovery and we’ll outline automation + product quick wins.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-zinc-900">
            Book discovery
          </Link>
        </div>
      </div>
    </Section>
  );
}

/** ---------------------- PAGES ---------------------- */
function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <Process />
      <StackShowcase />
      <Cases />
      <CTA />
    </main>
  );
}

function AboutPage() {
  return (
    <main>
      <Section className="pt-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">About LOGO.</h1>
        <p className="mt-3 max-w-3xl text-zinc-300">
          We’re a software studio that treats your business like our own product. We focus on the real
          constraints—team, timeline, budget, risk—and deliver systems that compound: faster shipping,
          lower ops cost, and happier users.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[{t:"Outcome‑first",d:"Tie every sprint to a measurable KPI"},{t:"Ops automation",d:"Remove manual toil and integration gaps"},{t:"Reliability",d:"SLOs, tracing, alerts—no heroics"}].map((b,i)=> (
            <div key={i} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
              <h3 className="font-semibold text-white">{b.t}</h3>
              <p className="mt-2 text-zinc-400 text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

function ServicesPage() {
  return (
    <main>
      <Section className="pt-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Our Services</h1>
        <p className="mt-2 text-zinc-300">Pick a lane—or combine them for end‑to‑end delivery.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.key} to={s.to} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 hover:border-white/20">
              <div className="flex items-center gap-3 text-white"><div className="rounded-xl bg-white/10 p-2">{s.icon}</div><h3 className="font-semibold">{s.title}</h3></div>
              <p className="mt-2 text-sm text-zinc-400">{s.copy}</p>
              <div className="mt-4 text-sm font-semibold text-teal-300">Learn more →</div>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}

function ServiceDetail({ title, bullets }) {
  const sdRef = React.useRef(null);
  React.useEffect(() => {
    if (!sdRef.current) return;
    const items = sdRef.current.querySelectorAll('.sd-bullet');
    gsap.from(items, {
      opacity: 0,
      y: 12,
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: sdRef.current,
        start: 'top 80%'
      }
    });
  }, []);

  return (
    <main>
      <Section className="pt-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="aspect-video rounded-2xl border border-white/10 bg-zinc-900/60" />
          </div>
          <div className="space-y-3" ref={sdRef}>
            {bullets.map((b, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-zinc-900/60 p-4 text-zinc-300">• {b}</div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}

function WorkPage() {
  return (
    <main>
      <Section className="pt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Case Studies</h1>
            <p className="mt-2 text-zinc-300">A small sample of what we ship.</p>
          </div>
          <a href="#" className="hidden md:inline-flex rounded-xl border border-white/15 px-4 py-2 text-white hover:bg-white/10">Download capabilities</a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="aspect-video bg-zinc-900/60" />
              <div className="bg-zinc-950/50 p-4">
                <p className="font-medium text-white">B2B Platform Revamp</p>
                <p className="text-xs text-zinc-400">Lead time −46% • Revenue +18%</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <Section className="pt-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Let’s talk</h1>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          <form className="grid gap-4 md:col-span-2">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-white/20" placeholder="First name" />
              <input className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-white/20" placeholder="Last name" />
            </div>
            <input className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-white/20" placeholder="Company" />
            <input type="email" className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-white/20" placeholder="Work email" />
            <textarea rows={5} className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-white/20" placeholder="What are you trying to achieve?" />
            <button type="button" className="w-fit rounded-xl bg-white px-5 py-3 font-semibold text-zinc-900">Request proposal</button>
          </form>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 text-zinc-200">
              <div className="flex items-center gap-2 font-semibold text-white"><MapPin className="h-5 w-5"/>Riyadh, KSA</div>
              <p className="mt-2 text-zinc-400">Remote‑first, serving GCC & worldwide</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 text-zinc-200">
              <div className="flex items-center gap-2 font-semibold text-white"><Phone className="h-5 w-5"/>Phone</div>
              <p className="mt-2 text-zinc-400">+966 50 000 0000</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 text-zinc-200">
              <div className="flex items-center gap-2 font-semibold text-white"><Mail className="h-5 w-5"/>Email</div>
              <p className="mt-2 text-zinc-400">hello@loopforge.dev</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

/** ---------------------- FOOTER ---------------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Section className="py-10">
        <div className="grid gap-8 text-sm md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-400 to-indigo-500" />
              <span className="font-semibold text-white">LOGO.</span>
            </div>
            <p className="text-zinc-400">We design, build, and automate web platforms that compound value.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-zinc-400">
              {SERVICES.slice(0,4).map(s => (<li key={s.key}><Link to={s.to}>{s.title}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} LOGO.. All rights reserved.</p>
          <p>Built with React & Tailwind.</p>
        </div>
      </Section>
    </footer>
  );
}

/** ---------------------- ROUTES ---------------------- */
const webappBullets = [
  "SPA/SSR builds with auth, RBAC, and payments",
  "API gateways, GraphQL/REST, and webhooks",
  "Instrumentation: logs, metrics, traces",
];
const automationBullets = [
  "Orchestrate CRM/ERP/Lake integrations",
  "Event-driven jobs & human-in-the-loop",
  "Replace sheets + email ops with real flows",
];
const devopsBullets = [
  "IaC (Terraform), GitOps, and preview envs",
  "Blue‑green/Canary deploys and rollbacks",
  "On-call, SLOs, and cost guardrails",
];
const dataBullets = [
  "ETL/ELT, warehouses, and BI dashboards",
  "Vector search, embeddings, and RAG",
  "Feature stores and batch/stream scoring",
];
const perfBullets = [
  "CWV audits, bundle budgets, image pipelines",
  "CDN/edge caching, SSR/ISR tuning",
  "Load testing + flamegraph guided fixes",
];
const uxBullets = [
  "Design sprints and UX research",
  "Component libraries + tokens",
  "Prototyping & usability tests",
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-zinc-200 font-sans antialiased">
      <Router>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 rounded-md bg-white px-3 py-2 text-zinc-900">Skip to content</a>
        <Navbar />
        <div id="main" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/webapps" element={<ServiceDetail title="Web Apps & Platforms" bullets={webappBullets} />} />
          <Route path="/services/automation" element={<ServiceDetail title="Automation & Integrations" bullets={automationBullets} />} />
          <Route path="/services/devops" element={<ServiceDetail title="DevOps & Cloud" bullets={devopsBullets} />} />
          <Route path="/services/data" element={<ServiceDetail title="Data & AI" bullets={dataBullets} />} />
          <Route path="/services/perf" element={<ServiceDetail title="Performance Engineering" bullets={perfBullets} />} />
          <Route path="/services/ux" element={<ServiceDetail title="Product Design & UX" bullets={uxBullets} />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
