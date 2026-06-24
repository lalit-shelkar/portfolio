import { portfolio } from "@/data/portfolio";
import { GithubIcon, MailIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="font-[family-name:var(--font-jakarta)] text-xl font-bold text-white">
              {portfolio.name}
            </p>
            <p className="mt-1 text-sm">{portfolio.role} @ {portfolio.company} · {portfolio.location}</p>
          </div>

          <div className="flex gap-3">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-colors hover:bg-indigo-600 hover:text-white"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${portfolio.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition-colors hover:bg-indigo-600 hover:text-white"
              aria-label="Email"
            >
              <MailIcon className="h-5 w-5" />
            </a>
            <a
              href={portfolio.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-indigo-600 hover:text-white"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} {portfolio.name}. Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
