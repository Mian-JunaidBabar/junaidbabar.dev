interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-300">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </header>
  );
}
