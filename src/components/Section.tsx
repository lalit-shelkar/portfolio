type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  number: string;
  variant?: "default" | "muted";
  children: React.ReactNode;
};

export function Section({
  id,
  title,
  subtitle,
  number,
  variant = "default",
  children,
}: SectionProps) {
  const bg = variant === "muted" ? "bg-slate-50/80" : "bg-white/80";

  return (
    <section id={id} className={`scroll-mt-24 border-t border-slate-200/70 py-24 ${bg}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-end gap-6">
          <span className="font-[family-name:var(--font-jakarta)] text-5xl font-extrabold leading-none text-indigo-100 md:text-6xl">
            {number}
          </span>
          <div className="pb-1">
            <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500" />
            <h2 className="font-[family-name:var(--font-jakarta)] text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 max-w-2xl text-lg text-slate-600">{subtitle}</p>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
