import { portfolio } from "@/data/portfolio";
import { MailIcon, PhoneIcon } from "./Icons";
import { Section } from "./Section";

export function HireMe() {
  return (
    <Section
      id="hire-me"
      number="03"
      title="Work With Me"
      subtitle="Looking for a developer? I take on freelance projects and am ready to help you build."
    >
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 p-8 text-white shadow-xl shadow-indigo-200 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
              Freelance &amp; contract work
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-jakarta)] text-3xl font-bold leading-tight md:text-4xl">
              Need a developer for your next project?
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-indigo-100">
              {portfolio.freelancing.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {portfolio.freelancing.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-medium text-white ring-1 ring-white/25"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
              Get started
            </p>
            <p className="mt-2 text-indigo-50">
              Tell me about your idea, timeline, and budget — I&apos;ll get back to you quickly.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`mailto:${portfolio.email}?subject=Freelance%20Project%20Inquiry`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-indigo-700 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MailIcon className="h-4 w-4" />
                Email Me
              </a>
              <a
                href={`tel:${portfolio.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <PhoneIcon className="h-4 w-4" />
                Call {portfolio.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
