import { portfolio } from "@/data/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      number="04"
      variant="muted"
      title="Skills & Tech"
      subtitle="Technologies applied across professional and personal development work."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {portfolio.skillCategories.map((category) => (
          <div
            key={category.name}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-sm font-bold text-white shadow-md shadow-indigo-200">
                {category.name[0]}
              </div>
              <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-slate-900">
                {category.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200/80 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-800 group-hover:ring-indigo-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
