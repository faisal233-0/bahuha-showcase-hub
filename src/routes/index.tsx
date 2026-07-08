import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    n: "01",
    title: "Ledger.io",
    tag: "Web App / Fintech",
    year: "2026",
    color: "bg-[var(--bauhaus-red)] text-primary-foreground",
    desc: "A minimal double-entry bookkeeping tool for freelancers. Built with TypeScript, Postgres, and a lot of coffee.",
  },
  {
    n: "02",
    title: "Studio Kova",
    tag: "Marketing Site",
    year: "2026",
    color: "bg-[var(--bauhaus-blue)] text-primary-foreground",
    desc: "Editorial one-pager for a Berlin architecture studio. Custom CMS, 98 Lighthouse score, ships in 3 weeks.",
  },
  {
    n: "03",
    title: "Pulse Meter",
    tag: "IoT Dashboard",
    year: "2025",
    color: "bg-[var(--bauhaus-yellow)] text-foreground",
    desc: "Realtime dashboard for a lab of 40 pulse sensors. Uni capstone. Grade: 1.0.",
  },
  {
    n: "04",
    title: "Formkit",
    tag: "Open Source",
    year: "2025",
    color: "bg-foreground text-background",
    desc: "A tiny React form primitives library. 1.2k stars, 40k weekly downloads.",
  },
];

const services = [
  { k: "Web", v: "Landing pages, marketing sites, custom CMS integrations." },
  { k: "App", v: "Full-stack React + TypeScript apps. Auth, payments, dashboards." },
  { k: "Design", v: "UI systems, wireframes, brand-aligned interfaces." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative block h-8 w-8">
              <span className="absolute inset-0 bg-[var(--bauhaus-red)]" />
              <span className="absolute right-0 top-0 h-8 w-4 bg-[var(--bauhaus-blue)]" />
              <span className="absolute bottom-0 left-0 h-4 w-4 bg-[var(--bauhaus-yellow)]" />
            </span>
            <span className="font-display text-lg">MILO/REYES</span>
          </a>
          <nav className="hidden gap-8 text-xs font-bold uppercase tracking-widest md:flex">
            <a href="#work" className="hover:text-primary">Work</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a
            href="#contact"
            className="bg-foreground px-4 py-2 text-xs font-bold uppercase tracking-widest text-background hard-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            Hire me
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden border-b-2 border-foreground">
        <div className="grid-bauhaus absolute inset-0" />
        {/* Geometric decorations */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--bauhaus-red)]" />
        <div className="pointer-events-none absolute right-40 top-32 hidden h-40 w-40 bg-[var(--bauhaus-blue)] md:block" />
        <div className="pointer-events-none absolute bottom-10 right-10 hidden h-24 w-24 rotate-45 bg-[var(--bauhaus-yellow)] md:block" />

        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-8 sm:pt-24 md:pb-40 md:pt-32">
          <div className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-widest">
            <span className="h-px w-12 bg-foreground" />
            <span>Portfolio / 2026 / Berlin</span>
          </div>
          <h1 className="max-w-5xl text-6xl uppercase leading-[0.85] sm:text-8xl md:text-[11rem]">
            Build.
            <br />
            <span className="text-[var(--bauhaus-red)]">Ship.</span>{" "}
            <span className="text-[var(--bauhaus-blue)]">Repeat.</span>
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <p className="max-w-md text-lg leading-relaxed md:col-span-2">
              I'm <strong>Milo Reyes</strong> — a computer science student at TU Berlin and freelance developer.
              I design and code interfaces that are honest, fast, and built to last.
            </p>
            <div className="flex flex-col justify-end gap-3">
              <a
                href="#work"
                className="inline-flex items-center justify-between bg-foreground px-5 py-4 text-sm font-bold uppercase tracking-widest text-background hard-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                View work <span>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-between border-2 border-foreground bg-[var(--bauhaus-yellow)] px-5 py-4 text-sm font-bold uppercase tracking-widest hard-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                Start a project <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STATS */}
      <section className="border-b-2 border-foreground bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-foreground md:grid-cols-4 md:divide-x-2">
          {[
            ["04+", "Years coding"],
            ["27", "Projects shipped"],
            ["12", "Happy clients"],
            ["3.9", "GPA / TU Berlin"],
          ].map(([k, v]) => (
            <div key={v} className="border-t-2 border-foreground px-6 py-8 md:border-t-0">
              <div className="font-display text-5xl md:text-6xl">{k}</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-widest opacity-70">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 md:py-32">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-4 font-mono text-xs uppercase tracking-widest">/ 01 — Selected work</div>
              <h2 className="text-5xl uppercase md:text-7xl">Projects</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              A slice of client work, coursework, and open source. All built end-to-end.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.n}
                className="group border-2 border-foreground bg-card hard-shadow transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <div className={`relative flex h-56 items-end justify-between overflow-hidden border-b-2 border-foreground p-6 ${p.color}`}>
                  <span className="font-display text-7xl leading-none">{p.n}</span>
                  {/* geometric flair per card */}
                  <div className="absolute right-6 top-6 h-16 w-16 rounded-full border-2 border-current opacity-60" />
                  <div className="absolute right-16 top-16 h-8 w-8 bg-current opacity-30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{p.tag}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 text-3xl uppercase">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b-2 border-foreground bg-[var(--bauhaus-cream)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-8 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <div className="mb-4 font-mono text-xs uppercase tracking-widest">/ 02 — About</div>
            <h2 className="text-5xl uppercase md:text-6xl">
              Form
              <br />
              follows
              <br />
              <span className="text-[var(--bauhaus-red)]">function.</span>
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-[var(--bauhaus-blue)]" />
              <div className="h-16 w-16 bg-[var(--bauhaus-yellow)]" />
              <div className="h-16 w-16" style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)", background: "var(--bauhaus-red)" }} />
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl leading-relaxed md:text-2xl">
              I'm a third-year CS student who freelances on the side. I care about type systems,
              interface honesty, and shipping things that actually solve someone's problem.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Currently</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>→ BSc Computer Science, TU Berlin</li>
                  <li>→ Freelancing part-time</li>
                  <li>→ Open source on GitHub</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Stack</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>→ TypeScript, React, Node</li>
                  <li>→ Postgres, Redis, Docker</li>
                  <li>→ Figma, Rust (learning)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 md:py-32">
          <div className="mb-16">
            <div className="mb-4 font-mono text-xs uppercase tracking-widest">/ 03 — Services</div>
            <h2 className="max-w-3xl text-5xl uppercase md:text-7xl">
              Three things,<br /> done well.
            </h2>
          </div>
          <div className="grid gap-0 border-2 border-foreground md:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.k}
                className={`p-8 md:p-10 ${i < 2 ? "border-b-2 border-foreground md:border-b-0 md:border-r-2" : ""} ${
                  i === 0 ? "bg-[var(--bauhaus-red)] text-primary-foreground" :
                  i === 1 ? "bg-[var(--bauhaus-blue)] text-primary-foreground" :
                  "bg-[var(--bauhaus-yellow)] text-foreground"
                }`}
              >
                <div className="mb-8 font-mono text-xs uppercase tracking-widest opacity-70">0{i + 1}</div>
                <h3 className="text-4xl uppercase md:text-5xl">{s.k}</h3>
                <p className="mt-6 text-sm leading-relaxed">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden border-b-2 border-foreground bg-foreground text-background">
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[var(--bauhaus-blue)] opacity-90" />
        <div className="pointer-events-none absolute right-10 top-10 hidden h-32 w-32 rotate-45 bg-[var(--bauhaus-yellow)] md:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-8 md:grid-cols-2 md:py-40">
          <div>
            <div className="mb-4 font-mono text-xs uppercase tracking-widest opacity-70">/ 04 — Contact</div>
            <h2 className="text-6xl uppercase leading-[0.9] md:text-8xl">
              Let's<br />
              <span className="text-[var(--bauhaus-yellow)]">build</span><br />
              something.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <a
              href="mailto:hello@miloreyes.dev"
              className="group flex items-center justify-between border-2 border-background bg-transparent px-6 py-6 text-lg font-bold uppercase transition-colors hover:bg-[var(--bauhaus-red)]"
            >
              hello@miloreyes.dev
              <span className="text-2xl">→</span>
            </a>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["GitHub", "@miloreyes"],
                ["LinkedIn", "in/miloreyes"],
                ["Read.cv", "milo"],
              ].map(([k, v]) => (
                <a
                  key={k}
                  href="#"
                  className="border-2 border-background px-4 py-4 transition-colors hover:bg-[var(--bauhaus-yellow)] hover:text-foreground"
                >
                  <div className="font-mono text-xs uppercase tracking-widest opacity-70">{k}</div>
                  <div className="mt-1 font-bold">{v}</div>
                </a>
              ))}
            </div>
            <p className="font-mono text-xs uppercase tracking-widest opacity-60">
              Currently booking projects for Q3 2026 →
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 font-mono text-xs uppercase tracking-widest sm:px-8">
          <div>© 2026 Milo Reyes / Berlin</div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[var(--bauhaus-red)]" />
            <span className="h-3 w-3 bg-[var(--bauhaus-blue)]" />
            <span className="h-3 w-3 rotate-45 bg-[var(--bauhaus-yellow)]" />
          </div>
          <div>Designed & coded in-house.</div>
        </div>
      </footer>
    </main>
  );
}
