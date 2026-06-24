import { portfolio } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      number="02"
      variant="muted"
      title="Work Experience"
      subtitle="Professional experience delivering software in enterprise environments."
    >
      <div className="space-y-8">
        {portfolio.experience.map((job) => (
          <article
            key={job.company}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-indigo-100/50"
          >
            <div className="h-1.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500" />
            <div className="p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                    {job.company}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-jakarta)] text-2xl font-bold text-slate-900">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-slate-500">{job.location}</p>
                </div>
                <span className="inline-flex w-fit rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-100">
                  {job.period}
                </span>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">{job.description}</p>

              <ul className="mt-6 space-y-3">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
