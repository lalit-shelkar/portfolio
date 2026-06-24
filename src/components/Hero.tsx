import { portfolio } from "@/data/portfolio";
import { ArrowDownIcon, GithubIcon, MailIcon, MapPinIcon, PhoneIcon, SparklesIcon } from "./Icons";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="animate-fade-up mb-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                {portfolio.role} @ {portfolio.company}
              </span>
              {portfolio.freelancing.available && (
                <a
                  href="#hire-me"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-4 py-1.5 text-sm font-medium text-emerald-700 shadow-sm transition-colors hover:bg-emerald-100"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {portfolio.freelancing.tagline}
                </a>
              )}
            </div>

            <h1 className="animate-fade-up-delay-1 font-[family-name:var(--font-jakarta)] text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl md:leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{portfolio.name}</span>
            </h1>

            <p className="animate-fade-up-delay-2 mt-5 text-xl font-semibold text-slate-700 md:text-2xl">
              {portfolio.title}
            </p>
            <p className="animate-fade-up-delay-2 mt-2 text-base text-slate-500 md:text-lg">
              {portfolio.company} · Pune, India
            </p>

            <p className="animate-fade-up-delay-3 mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {portfolio.summary}
            </p>

            <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
              <a
                href="#hire-me"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                <MailIcon className="h-4 w-4" />
                Hire Me
              </a>
              <a
                href="#experience"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
              >
                <SparklesIcon className="h-4 w-4" />
                View Experience
              </a>
              <a
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:border-indigo-300 hover:text-indigo-700"
              >
                Download Resume
              </a>
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:border-indigo-300 hover:text-indigo-700"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
              {portfolio.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-shine rounded-2xl border border-slate-200/80 bg-white/90 px-5 py-4 shadow-sm"
                >
                  <p className="font-[family-name:var(--font-jakarta)] text-2xl font-bold text-indigo-600">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up-delay-2 hidden lg:block">
            <div className="relative">
              <div className="animate-float absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-400/30 to-sky-400/30 blur-2xl" />
              <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl border border-white/60 bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 shadow-2xl shadow-indigo-500/25">
                <span className="font-[family-name:var(--font-jakarta)] text-7xl font-extrabold text-white/95">
                  {getInitials(portfolio.name)}
                </span>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
                <p className="text-xs font-medium text-slate-500">Employer</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-800">{portfolio.company}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-200/80 pt-8 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 text-indigo-400" />
            {portfolio.location}
          </span>
          <a href={`mailto:${portfolio.email}`} className="flex items-center gap-2 transition-colors hover:text-indigo-600">
            <MailIcon className="h-4 w-4 text-indigo-400" />
            {portfolio.email}
          </a>
          <a href={`tel:${portfolio.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-indigo-600">
            <PhoneIcon className="h-4 w-4 text-indigo-400" />
            {portfolio.phone}
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-indigo-600 md:flex"
          aria-label="Scroll to about"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Explore</span>
          <ArrowDownIcon className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
