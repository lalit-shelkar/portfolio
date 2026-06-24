import { portfolio } from "@/data/portfolio";
import { Section } from "./Section";

export function Education() {
  const degree = portfolio.education[0];

  return (
    <Section
      id="education"
      number="06"
      title="Education"
      subtitle="Academic background in computer science."
    >
      <div className="max-w-2xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Bachelor&apos;s Degree
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-jakarta)] text-xl font-bold text-slate-900">
            {degree.degree}
          </h3>
          <p className="mt-2 text-slate-600">{degree.school}</p>
        </div>
      </div>
    </Section>
  );
}
