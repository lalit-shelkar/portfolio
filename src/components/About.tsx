import { portfolio } from "@/data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      number="01"
      title="About Me"
      subtitle="Software professional focused on building reliable, scalable applications."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-indigo-50/40 p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-slate-600 md:text-xl md:leading-relaxed">
              {portfolio.summary}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-indigo-100 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">Current Role</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {portfolio.role} @ {portfolio.company}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                <p className="text-sm font-medium text-emerald-700">Freelancing</p>
                <p className="mt-1 font-semibold text-slate-900">Open for projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="card-shine h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="font-[family-name:var(--font-jakarta)] text-lg font-bold text-slate-900">
              Languages
            </h3>
            <p className="mt-1 text-sm text-slate-500">Professional communication</p>
            <ul className="mt-6 space-y-4">
              {portfolio.languages.map((lang) => (
                <li key={lang.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-slate-800">{lang.name}</span>
                    <span className="text-sm text-slate-500">{lang.level}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-indigo-500 to-sky-500" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
