import Link from "next/link";
import { type ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  tags?: string[];
  // Allow slotting extra JSX such as footer content.
  footer?: ReactNode;
}

export function Card({
  title,
  description,
  href,
  ctaLabel,
  tags,
  footer,
}: CardProps) {
  const content = (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-slate-800 dark:text-sky-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
      {(ctaLabel || footer) && (
        <div className="mt-6 flex items-center justify-between">
          {footer ?? <span />}
          {ctaLabel && (
            <span className="text-sm font-medium text-sky-600 transition group-hover:text-sky-500 dark:text-sky-300">
              {ctaLabel}
            </span>
          )}
        </div>
      )}
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="group block h-full no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
