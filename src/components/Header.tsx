"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-200/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-[family-name:var(--font-jakarta)] text-xl font-bold tracking-tight text-slate-900"
        >
          {portfolio.name.split(" ")[0]}
          <span className="gradient-text">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {portfolio.nav.map((item) =>
            "highlight" in item && item.highlight ? (
              <a
                key={item.href}
                href={item.href}
                className="ml-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition-all hover:bg-emerald-700 hover:shadow-lg"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href={portfolio.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-indigo-300 hover:text-indigo-700"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200/80 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {portfolio.nav.map((item) =>
              "highlight" in item && item.highlight ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="mt-1 rounded-full bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-indigo-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href={portfolio.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-700"
            >
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
