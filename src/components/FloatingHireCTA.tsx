"use client";

import { portfolio } from "@/data/portfolio";
import { MailIcon } from "./Icons";

export function FloatingHireCTA() {
  if (!portfolio.freelancing.available) return null;

  return (
    <a
      href="#hire-me"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-300/50 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 md:bottom-8 md:right-8"
      aria-label="Hire me for freelance work"
    >
      <MailIcon className="h-4 w-4" />
      Hire Me
    </a>
  );
}
