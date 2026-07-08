import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Sparkles,
  Code2,
  Palette,
  Rocket,
  Zap,
  Target,
  MessageCircle,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    n: "01",
    tag: "Client · Completed",
    title: "Educational Website",
    copy: "A site for an academy — services, core programs and faculty in a clean, user-friendly layout.",
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    tint: "bg-[var(--bauhaus-red)]/25",
    accent: "bg-[var(--bauhaus-red)]",
  },
  {
    n: "02",
    tag: "Personal · Completed",
    title: "Fainix Portfolio",
    copy: "Portfolio with modern UI and a dark theme to showcase projects and contact info.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    tint: "bg-[var(--bauhaus-blue)]/25",
    accent: "bg-[var(--bauhaus-blue)]",
  },
  {
    n: "03",
    tag: "R&D · In Progress",
    title: "Something in AI",
    copy: "An AI-related experiment. Still cooking — I'll let you know when it's done.",
    stack: ["GitHub", "AI Tools"],
    tint: "bg-[var(--bauhaus-yellow)]/25",
    accent: "bg-[var(--bauhaus-yellow)]",
  },
];

const skills = [
  { k: "HTML5", v: 85 },
  { k: "CSS3", v: 74 },
  { k: "JavaScript", v: 50 },
  { k: "Figma", v: 40 },
];

const learning = ["JavaScript", "Figma", "AI tools", "Git"];

const perks = [
  { icon: Zap, k: "Fast Delivery", v: "Quick turnaround without compromising quality." },
  { icon: Target, k: "Quality Focus", v: "Clean, maintainable, scalable code." },
  { icon: MessageCircle, k: "Clear Comms", v: "Regular updates, transparent process." },
  { icon: Rocket, k: "Modern Tech", v: "Latest tooling and best practices." },
];

function Index() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      {/* Bauhaus floating shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[var(--bauhaus-red)] opacity-70" />
        <div className="absolute top-40 right-10 h-56 w-56 bg-[var(--bauhaus-blue)] opacity-80" />
        <div className="absolute top-[45%] left-[5%] h-40 w-40 rotate-45 bg-[var(--bauhaus-yellow)] opacity-70" />
        <div className="absolute top-[75%] right-1/3 h-64 w-64 rounded-full bg-[var(--bauhaus-blue)] opacity-60" />
        <div className="absolute bottom-40 left-1/2 h-48 w-48 bg-[var(--bauhaus-red)] opacity-50" />
        <div className="absolute bottom-10 right-10 h-32 w-32 rotate-12 bg-[var(--bauhaus-yellow)] opacity-60" />
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
            <span className="font-display text-sm tracking-tight">FAINIX</span>
          </a>
          <nav className="hidden gap-6 text-xs font-medium uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#hire" className="hover:text-foreground">Hire Me</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#hire"
            className="rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-background hover:opacity-90"
          >
            Hire me
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:pt-12">
        <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-6 gap-4">
          {/* HERO */}
          <div className="glass-strong relative col-span-6 row-span-2 overflow-hidden rounded-3xl p-8 md:col-span-4 md:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--bauhaus-red)] opacity-90" />
            <div className="pointer-events-none absolute right-10 bottom-6 h-16 w-16 rotate-45 bg-[var(--bauhaus-yellow)]" />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--bauhaus-yellow)]" />
                Currently enhancing my skill set
              </div>
              <h1 className="text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl">
                Hi, I'm<br />
                <span className="text-[var(--bauhaus-yellow)]">Faisal.</span>{" "}
                <span className="text-[var(--bauhaus-blue)]">aka Fainix</span>
              </h1>
              <p className="mt-6 max-w-md text-base text-muted-foreground">
                Figuring things out by doing, exploring, and learning every day.
                A fresh mind in tech — frontend web developer in the making.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold uppercase tracking-wider text-background hover:opacity-90"
                >
                  View projects <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white/20"
                >
                  Let's connect
                </a>
              </div>
            </div>
          </div>

          {/* IDENTITY CARD */}
          <div className="glass relative col-span-3 row-span-2 overflow-hidden rounded-3xl p-6 md:col-span-2">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[var(--bauhaus-blue)] opacity-80" />
              <div className="absolute right-4 top-4 h-10 w-10 bg-[var(--bauhaus-red)]" />
              <div className="absolute bottom-6 right-6 h-14 w-14 rotate-45 bg-[var(--bauhaus-yellow)] opacity-90" />
            </div>
            <div className="relative flex h-full flex-col justify-between gap-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available for hire
              </div>
              <div>
                <div className="font-display text-3xl uppercase leading-none">Faisal<br />Shaikh</div>
                <div className="mt-2 font-mono text-xs text-muted-foreground">Fresh mind in tech · Frontend dev</div>
              </div>
            </div>
          </div>

          {/* MINI STATS */}
          <div className="glass col-span-3 rounded-3xl p-5 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ Projects</div>
            <div className="mt-3 font-display text-5xl">03</div>
            <div className="mt-1 text-xs text-muted-foreground">shipped + in progress</div>
          </div>
          <div className="glass col-span-3 rounded-3xl bg-[var(--bauhaus-yellow)]/20 p-5 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ Stream</div>
            <div className="mt-3 font-display text-5xl">PCM</div>
            <div className="mt-1 text-xs text-muted-foreground">12th grade · self-taught in code</div>
          </div>
          <a
            href="#hire"
            className="glass group col-span-6 flex items-center justify-between rounded-3xl p-6 hover:bg-white/10 md:col-span-2"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Work with me</div>
              <div className="mt-2 font-display text-xl uppercase">Hire me →</div>
            </div>
            <ArrowUpRight className="h-8 w-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>

          {/* ABOUT */}
          <div id="about" className="col-span-6 mt-8 flex items-end justify-between">
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ 01 — About me</div>
              <h2 className="text-4xl uppercase md:text-5xl">My Story</h2>
              <p className="mt-2 text-sm text-muted-foreground">From early mobile edits to hands-on tech exploration.</p>
            </div>
          </div>

          <div className="glass col-span-6 rounded-3xl p-8 md:col-span-4">
            <p className="text-lg leading-relaxed">
              I'm <span className="text-[var(--bauhaus-yellow)]">Mo Faisal</span>, a learner and
              tech geek with a growing interest in computer science. My journey started as a kid,
              editing videos in KineMaster on a 1 GB RAM phone, messing with games like Subway
              Surfers and pirated Vice City, and living on tech-tutorial YouTube.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              That curiosity naturally led me into <span className="text-[var(--bauhaus-red)]">PCM in 12th grade</span>,
              and since then I've been learning to code and exploring tools. I haven't built anything
              huge yet, but I keep trying — I experiment, I struggle, I make mistakes, and I ship anyway.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Today I grow as a student, freelancer, and teammate — open to collaboration and to
              contributing in ways that actually matter.
            </p>
          </div>
          <div className="glass col-span-6 flex flex-col justify-between rounded-3xl bg-[var(--bauhaus-blue)]/25 p-6 md:col-span-2">
            <Sparkles className="h-8 w-8 text-[var(--bauhaus-yellow)]" />
            <div>
              <div className="font-display text-2xl uppercase leading-tight">"Expect for the unexpected."</div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                — Fainix motto
              </div>
            </div>
          </div>

          {/* PROJECTS */}
          <div id="projects" className="col-span-6 mt-8 flex items-end justify-between">
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ 02 — My projects</div>
              <h2 className="text-4xl uppercase md:text-5xl">Selected work</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A brief look at what I've built, with the tech I used.
              </p>
            </div>
          </div>

          {projects.map((p) => (
            <a
              key={p.n}
              href="#"
              className={`glass group relative col-span-6 overflow-hidden rounded-3xl p-6 md:col-span-2 ${p.tint}`}
            >
              <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-80 ${p.accent}`} />
              <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 rotate-45 bg-white/10" />
              <div className="relative flex h-full min-h-[220px] flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest">{p.n} / {p.tag}</span>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <div>
                  <h3 className="text-2xl uppercase">{p.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{p.copy}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 font-mono text-[10px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}

          <a
            href="https://github.com/"
            className="glass group relative col-span-6 overflow-hidden rounded-3xl p-6 md:col-span-6"
          >
            <div className="pointer-events-none absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-[var(--bauhaus-blue)] opacity-70" />
            <div className="pointer-events-none absolute right-8 top-6 h-12 w-12 rotate-45 bg-[var(--bauhaus-yellow)] opacity-80" />
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Want to see more?</div>
                <h3 className="mt-2 text-3xl uppercase">All projects on GitHub →</h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                  I keep building small things and testing new tech. Follow along to see what I'm working on right now.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-6 w-6" />
                <span className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold uppercase tracking-wider text-background">
                  View all
                </span>
              </div>
            </div>
          </a>

          {/* SKILLS */}
          <div id="skills" className="col-span-6 mt-8">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ 03 — My skills</div>
            <h2 className="text-4xl uppercase md:text-5xl">What I know & what I'm learning</h2>
          </div>

          <div className="glass col-span-6 rounded-3xl p-6 md:col-span-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Frontend development</div>
            </div>
            <div className="mt-6 space-y-5">
              {skills.map((s) => (
                <div key={s.k}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{s.k}</span>
                    <span className="font-mono text-xs text-muted-foreground">{s.v}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--bauhaus-red)] via-[var(--bauhaus-yellow)] to-[var(--bauhaus-blue)]"
                      style={{ width: `${s.v}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass col-span-6 flex flex-col justify-between rounded-3xl bg-[var(--bauhaus-yellow)]/25 p-6 md:col-span-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ Currently learning</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {learning.map((l) => (
                  <span key={l} className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-xs">
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              The tech world evolves fast — so do I. I try to improve a little every day.
            </p>
          </div>

          <div className="glass col-span-6 rounded-3xl p-6 md:col-span-3">
            <Palette className="h-6 w-6" />
            <h3 className="mt-4 text-xl uppercase">Tools & Tech</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Netlify", "VS Code", "GitHub", "Figma", "ChatGPT"].map((t) => (
                <span key={t} className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 font-mono text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="glass col-span-6 rounded-3xl bg-[var(--bauhaus-blue)]/25 p-6 md:col-span-3">
            <Sparkles className="h-6 w-6" />
            <h3 className="mt-4 text-xl uppercase">Other skills</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Video editing (KineMaster)", "Content research", "Teamwork", "Curiosity"].map((t) => (
                <span key={t} className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 font-mono text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* HIRE ME */}
          <div id="hire" className="col-span-6 mt-8">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ 04 — Work with me</div>
            <h2 className="text-4xl uppercase md:text-5xl">Hire me</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              I love helping people and making cool things. If you value quality, let's work together.
            </p>
          </div>

          <div className="glass relative col-span-6 overflow-hidden rounded-3xl p-8 md:col-span-4">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--bauhaus-red)] opacity-70" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                Frontend Development
              </div>
              <h3 className="mt-4 text-3xl uppercase">Beautiful, responsive interfaces</h3>
              <p className="mt-2 text-sm text-muted-foreground">Pricing based on project scope.</p>
              <ul className="mt-6 grid gap-2 text-sm sm:grid-cols-2">
                {[
                  "Custom portfolio sites",
                  "Landing pages",
                  "Blog setups",
                  "Educational websites",
                  "As per your requirement",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--bauhaus-yellow)]" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass col-span-6 flex flex-col justify-between rounded-3xl bg-[var(--bauhaus-yellow)]/25 p-6 md:col-span-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Ready to start?</div>
              <h3 className="mt-3 text-2xl uppercase">Let's discuss your idea.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Currently accepting new projects.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-between rounded-2xl bg-foreground px-5 py-4 text-sm font-semibold uppercase tracking-wider text-background hover:opacity-90"
            >
              Let's talk <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {perks.map((p) => (
            <div key={p.k} className="glass col-span-3 rounded-3xl p-5 md:col-span-3 lg:col-span-3">
              <p.icon className="h-6 w-6 text-[var(--bauhaus-yellow)]" />
              <div className="mt-3 font-display text-xl uppercase">{p.k}</div>
              <p className="mt-1 text-xs text-muted-foreground">{p.v}</p>
            </div>
          ))}

          {/* CONTACT */}
          <div id="contact" className="col-span-6 mt-8">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">/ 05 — Let's connect</div>
            <h2 className="text-4xl uppercase md:text-5xl">Say hi</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const to = "faisalshaikh47757@gmail.com";
              const subj = encodeURIComponent(form.subject || "Hello from your site");
              const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
              window.location.href = `mailto:${to}?subject=${subj}&body=${body}`;
            }}
            className="glass-strong relative col-span-6 overflow-hidden rounded-3xl p-8 md:col-span-4"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--bauhaus-blue)] opacity-70" />
            <div className="relative">
              <h3 className="font-display text-2xl uppercase">Send me a message</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--bauhaus-yellow)] focus:outline-none"
                  />
                </label>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--bauhaus-yellow)] focus:outline-none"
                  />
                </label>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:col-span-2">
                  Subject
                  <input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="What's this about?"
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--bauhaus-yellow)] focus:outline-none"
                  />
                </label>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:col-span-2">
                  Message
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or just say hello..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--bauhaus-yellow)] focus:outline-none"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider text-background hover:opacity-90"
              >
                <Send className="h-4 w-4" /> Send message
              </button>
            </div>
          </form>

          <div className="col-span-6 space-y-4 md:col-span-2">
            <div className="glass rounded-3xl p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Quick contact</div>
              <a
                href="mailto:faisalshaikh47757@gmail.com"
                className="mt-4 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 hover:bg-white/10"
              >
                <Mail className="mt-0.5 h-5 w-5 text-[var(--bauhaus-yellow)]" />
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase text-muted-foreground">Email</div>
                  <div className="mt-0.5 truncate text-sm font-semibold">faisalshaikh47757@gmail.com</div>
                </div>
              </a>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Response time · usually within 24h
              </p>
            </div>

            <div className="glass rounded-3xl bg-[var(--bauhaus-red)]/25 p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Follow me</div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  { icon: Github, k: "GitHub" },
                  { icon: Mail, k: "Email" },
                  { icon: Instagram, k: "Instagram" },
                  { icon: Linkedin, k: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.k}
                    href="#"
                    className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-2.5 text-xs font-semibold uppercase hover:bg-white/10"
                  >
                    <s.icon className="h-4 w-4" /> {s.k}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mx-auto mt-12 px-2">
          <div className="glass flex flex-col items-center justify-between gap-3 rounded-3xl p-6 text-center font-mono text-xs text-muted-foreground md:flex-row md:text-left">
            <div>
              Made with <span className="text-[var(--bauhaus-red)]">♥</span>,{" "}
              <span className="text-[var(--bauhaus-blue)]">code</span> and{" "}
              <span className="text-[var(--bauhaus-yellow)]">chai</span> by{" "}
              <span className="text-foreground">Faisal Shaikh</span> aka Fainix
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[var(--bauhaus-red)]" />
              <span className="h-3 w-3 bg-[var(--bauhaus-blue)]" />
              <span className="h-3 w-3 rotate-45 bg-[var(--bauhaus-yellow)]" />
            </div>
            <div>© 2025 Faisal Shaikh. Making progress, one small commit at a time.</div>
          </div>
        </footer>
      </section>
    </main>
  );
}
