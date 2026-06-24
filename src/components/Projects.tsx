import { portfolio } from "@/data/portfolio";
import { Section } from "./Section";

const projectIcons: Record<string, string> = {
  "Pet-Guardian": "🐾",
  Foodixpress: "🍽️",
};

export function Projects() {
  return (
    <Section
      id="projects"
      number="05"
      title="Personal Projects"
      subtitle="Side projects that showcase additional technical depth beyond day-to-day work."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {portfolio.projects.map((project) => (
          <article
            key={project.name}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/60"
          >
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400" />

            <div className="flex flex-1 flex-col p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 text-2xl ring-1 ring-indigo-100">
                  {projectIcons[project.name] ?? "💻"}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-jakarta)] text-xl font-bold text-slate-900">
                    {project.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-500">{project.period}</p>
                </div>
              </div>

              <p className="mb-6 flex-1 leading-relaxed text-slate-600">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
