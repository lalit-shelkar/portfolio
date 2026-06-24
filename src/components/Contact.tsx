import { portfolio } from "@/data/portfolio";
import { GithubIcon, MailIcon, PhoneIcon } from "./Icons";
import { Section } from "./Section";

const contactLinks = [
  {
    label: "Email",
    value: portfolio.email,
    href: `mailto:${portfolio.email}`,
    icon: MailIcon,
    description: "Reach out for freelance work or collaborations",
  },
  {
    label: "Phone",
    value: portfolio.phone,
    href: `tel:${portfolio.phone.replace(/\s/g, "")}`,
    icon: PhoneIcon,
    description: "Available during business hours",
  },
  {
    label: "GitHub",
    value: "github.com/lalit-shelkar",
    href: portfolio.github,
    icon: GithubIcon,
    description: "View repositories and projects",
    external: true,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      number="07"
      variant="muted"
      title="Let's Connect"
      subtitle="Prefer another way to reach me? Use any of the options below."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
              <link.icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium text-slate-500">{link.label}</p>
            <p className="mt-1 break-all font-semibold text-slate-900">{link.value}</p>
            <p className="mt-2 text-sm text-slate-500">{link.description}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
