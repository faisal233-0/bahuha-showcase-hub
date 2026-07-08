import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles, Code2, Palette, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      {/* Bauhaus geometric floating shapes behind glass */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[var(--bauhaus-red)] opacity-70 blur-[2px]" />
        <div className="absolute top-40 right-10 h-56 w-56 bg-[var(--bauhaus-blue)] opacity-80" />
        <div className="absolute top-[55%] left-[5%] h-40 w-40 rotate-45 bg-[var(--bauhaus-yellow)] opacity-70" />
        <div className="absolute bottom-20 right-1/3 h-64 w-64 rounded-full bg-[var(--bauhaus-blue)] opacity-60" />
        <div className="absolute bottom-10 left-1/2 h-48 w-48 bg-[var(--bauhaus-red)] opacity-50" />
      </div>

      {/* NAV */}
      <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
        <div className="glass flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="relative block h-7 w-7">
              <span className="absolute inset-0 rounded-full bg-[var(--bauhaus-red)]" />
              <span className="absolute right-0 top-0 h-7 w-3.5 rounded-r-full bg-[var(--bauhaus-blue)]" />
              <span className="absolute bottom-0 left-0 h-3 w-3 bg-[var(--bauhaus-yellow)]" />
            </span>
            <span className="font-display text-sm tracking-tight">MILO/REYES</span>
          </a>
          <nav className="hidden gap-6 text-xs font-medium uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#stack" className="hover:text-foreground">Stack</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-background hover:opacity-90"
          >
            Hire me
          </a>
        </div>
      </header>

      {/* BENTO GRID */}
      <section id="top" className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:pt-12">
        <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-6 gap-4">
          {/* HERO — spans wide */}
          <div className="glass-strong relative col-span-6 row-span-2 overflow-hidden rounded-3xl p-8 md:col-span-4 md:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--bauhaus-red)] opacity-90" />
            <div className="pointer-events-none absolute right-10 bottom-6 h-16 w-16 rotate-45 bg-[var(--bauhaus-yellow)]" />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--bauhaus-yellow)]" />
                Available for Q3 2026
              </div>
              <h1 className="text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl">
                Build.<br />
                <span className="text-[var(--bauhaus-yellow)]">Ship.</span>{" "}
                <span className="text-[var(--bauhaus-blue)]">Repeat.</span>
              </h1>
              <p className="mt-6 max-w-md text-base text-muted-foreground">
                I'm <span className="text-foreground">Milo Reyes</span> — CS student at TU Berlin
                and freelance developer. I design and code interfaces that are honest, fast, and built to last.
              </p>
            </div>
          </div>

          {/* AVATAR / IDENTITY */}
          <div className="glass relative col-span-3 row-span-2 overflow-hidden rounded-3xl p-6 md:col-span-2">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[var(--bauhaus-blue)] opacity-80" />
              <div className="absolute right-4 top-4 h-10 w-10 bg-[var(--bauhaus-red)]" />
              <div className="absolute bottom-6 right-6 h-14 w-14 rotate-45 bg-[var(--bauhaus-yellow)] opacity-90" />
            </div>
            <div className="relative flex h-full flex-col justify-between">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ Portrait</div>
              <div>
                <div className="font-display text-2xl uppercase">Milo Reyes</div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">Berlin · 21 y/o</div>
              </div>
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="glass col-span-3 rounded-3xl p-5 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ Shipped</div>
            <div className="mt-3 font-display text-5xl">27</div>
            <div className="mt-1 text-xs text-muted-foreground">projects, clients + open source</div>
          </div>
          <div className="glass col-span-3 rounded-3xl bg-[var(--bauhaus-yellow)]/20 p-5 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ GPA</div>
            <div className="mt-3 font-display text-5xl">3.9</div>
            <div className="mt-1 text-xs text-muted-foreground">CS · TU Berlin · 3rd year</div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="glass group col-span-6 flex items-center justify-between rounded-3xl p-6 hover:bg-white/10 md:col-span-2"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Start a project</div>
              <div className="mt-2 font-display text-xl uppercase">Let's talk →</div>
            </div>
            <ArrowUpRight className="h-8 w-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>

          {/* ABOUT */}
          <div id="about" className="glass col-span-6 rounded-3xl p-8 md:col-span-4">
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ 01 — About</div>
            <p className="text-xl leading-relaxed md:text-2xl">
              I care about <span className="text-[var(--bauhaus-yellow)]">type systems</span>,
              interface honesty, and shipping things that actually{" "}
              <span className="text-[var(--bauhaus-red)]">solve someone's problem</span>.
              Form follows function — always.
            </p>
          </div>
          <div className="glass col-span-6 flex flex-col justify-between rounded-3xl bg-[var(--bauhaus-blue)]/25 p-6 md:col-span-2">
            <Sparkles className="h-8 w-8 text-[var(--bauhaus-yellow)]" />
            <div>
              <div className="font-display text-3xl uppercase">04+ yrs</div>
              <div className="mt-1 text-xs text-muted-foreground">writing production code</div>
            </div>
          </div>

          {/* WORK SECTION HEADER */}
          <div id="work" className="col-span-6 mt-8 flex items-end justify-between">
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ 02 — Selected work</div>
              <h2 className="text-4xl uppercase md:text-5xl">Projects</h2>
            </div>
            <div className="hidden font-mono text-xs text-muted-foreground sm:block">
              04 of 27 →
            </div>
          </div>

          {/* PROJECTS BENTO */}
          <a href="#" className="glass group relative col-span-6 overflow-hidden rounded-3xl p-6 md:col-span-4 md:row-span-2 md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--bauhaus-red)]/60 to-transparent" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[var(--bauhaus-red)] opacity-70" />
            <div className="pointer-events-none absolute right-16 bottom-10 h-12 w-12 bg-[var(--bauhaus-yellow)]" />
            <div className="relative flex h-full min-h-[280px] flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-widest">01 / Fintech · 2026</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <div>
                <h3 className="text-4xl uppercase md:text-5xl">Ledger.io</h3>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  Minimal double-entry bookkeeping for freelancers. TypeScript, Postgres, and a lot of coffee.
                </p>
              </div>
            </div>
          </a>

          <a href="#" className="glass group relative overflow-hidden rounded-3xl p-6 col-span-6 md:col-span-2">
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[var(--bauhaus-blue)] opacity-80" />
            <div className="relative flex h-full flex-col justify-between">
              <span className="font-mono text-xs uppercase tracking-widest">02 / Site · 26</span>
              <div>
                <h3 className="text-2xl uppercase">Studio Kova</h3>
                <p className="mt-2 text-xs text-muted-foreground">Editorial one-pager for Berlin architects.</p>
              </div>
            </div>
          </a>

          <a href="#" className="glass group relative overflow-hidden rounded-3xl bg-[var(--bauhaus-yellow)]/25 p-6 col-span-6 md:col-span-2">
            <div className="pointer-events-none absolute -top-4 -right-4 h-24 w-24 rotate-45 bg-[var(--bauhaus-yellow)] opacity-80" />
            <div className="relative flex h-full flex-col justify-between">
              <span className="font-mono text-xs uppercase tracking-widest">03 / IoT · 25</span>
              <div>
                <h3 className="text-2xl uppercase">Pulse Meter</h3>
                <p className="mt-2 text-xs text-muted-foreground">Realtime lab dashboard. Capstone, grade 1.0.</p>
              </div>
            </div>
          </a>

          <a href="#" className="glass group relative col-span-6 overflow-hidden rounded-3xl p-6 md:col-span-3">
            <div className="pointer-events-none absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-[var(--bauhaus-blue)] opacity-70" />
            <div className="relative flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest">04 / Open source · 25</span>
                <h3 className="mt-3 text-3xl uppercase">Formkit</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Tiny React form primitives. 1.2k stars · 40k weekly downloads.
                </p>
              </div>
              <Github className="h-8 w-8 opacity-70" />
            </div>
          </a>

          <a href="#" className="glass group relative col-span-6 overflow-hidden rounded-3xl bg-[var(--bauhaus-red)]/25 p-6 md:col-span-3">
            <div className="pointer-events-none absolute right-4 top-4 h-10 w-10 rounded-full bg-[var(--bauhaus-yellow)]" />
            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-widest">/ View archive</span>
              <h3 className="mt-3 text-3xl uppercase">23 more →</h3>
              <p className="mt-2 text-xs text-muted-foreground">Coursework, experiments, client micro-sites.</p>
            </div>
          </a>

          {/* SERVICES / STACK */}
          <div id="stack" className="col-span-6 mt-8">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ 03 — Services & stack</div>
            <h2 className="text-4xl uppercase md:text-5xl">Three things, done well.</h2>
          </div>

          {[
            { icon: Code2, title: "App", copy: "Full-stack React + TypeScript apps. Auth, payments, dashboards.", tint: "bg-[var(--bauhaus-red)]/25" },
            { icon: Rocket, title: "Web", copy: "Landing pages, marketing sites, custom CMS integrations.", tint: "bg-[var(--bauhaus-blue)]/25" },
            { icon: Palette, title: "Design", copy: "UI systems, wireframes, brand-aligned interfaces.", tint: "bg-[var(--bauhaus-yellow)]/25" },
          ].map((s) => (
            <div key={s.title} className={`glass col-span-6 rounded-3xl p-6 md:col-span-2 ${s.tint}`}>
              <s.icon className="h-8 w-8" />
              <h3 className="mt-6 text-3xl uppercase">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
            </div>
          ))}

          <div className="glass col-span-6 rounded-3xl p-6 md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ Toolbox</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["TypeScript", "React", "Node", "Postgres", "Redis", "Docker", "Figma", "Rust (learning)", "TanStack", "Tailwind"].map((t) => (
                <span key={t} className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 font-mono text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="glass col-span-6 rounded-3xl bg-[var(--bauhaus-blue)]/25 p-6 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ Now</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>→ BSc CS, TU Berlin</li>
              <li>→ Freelancing part-time</li>
              <li>→ Shipping open source</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div id="contact" className="glass-strong relative col-span-6 overflow-hidden rounded-3xl p-8 md:p-12">
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[var(--bauhaus-blue)] opacity-80" />
            <div className="pointer-events-none absolute right-10 top-10 hidden h-24 w-24 rotate-45 bg-[var(--bauhaus-yellow)] opacity-90 md:block" />
            <div className="pointer-events-none absolute right-40 bottom-6 hidden h-16 w-16 rounded-full bg-[var(--bauhaus-red)] md:block" />
            <div className="relative grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ 04 — Contact</div>
                <h2 className="text-5xl uppercase leading-[0.9] md:text-6xl">
                  Let's<br />
                  <span className="text-[var(--bauhaus-yellow)]">build</span><br />
                  something.
                </h2>
              </div>
              <div className="flex flex-col justify-end gap-3">
                <a href="mailto:hello@miloreyes.dev" className="glass group flex items-center justify-between rounded-2xl p-5 hover:bg-white/10">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <span className="font-medium">hello@miloreyes.dev</span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a href="#" className="glass flex items-center gap-3 rounded-2xl p-4 hover:bg-white/10">
                    <Github className="h-5 w-5" />
                    <div>
                      <div className="font-mono text-[10px] uppercase text-muted-foreground">GitHub</div>
                      <div className="text-sm font-semibold">@miloreyes</div>
                    </div>
                  </a>
                  <a href="#" className="glass flex items-center gap-3 rounded-2xl p-4 hover:bg-white/10">
                    <Linkedin className="h-5 w-5" />
                    <div>
                      <div className="font-mono text-[10px] uppercase text-muted-foreground">LinkedIn</div>
                      <div className="text-sm font-semibold">in/miloreyes</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mx-auto mt-10 flex flex-wrap items-center justify-between gap-4 px-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <div>© 2026 Milo Reyes / Berlin</div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[var(--bauhaus-red)]" />
            <span className="h-3 w-3 bg-[var(--bauhaus-blue)]" />
            <span className="h-3 w-3 rotate-45 bg-[var(--bauhaus-yellow)]" />
          </div>
          <div>Designed & coded in-house.</div>
        </footer>
      </section>
    </main>
  );
}
