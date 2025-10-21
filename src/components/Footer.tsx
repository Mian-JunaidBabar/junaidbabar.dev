import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";
import { about } from "@/data/about";

const socials = [
  { label: "GitHub", href: "https://github.com/example", icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/example",
    icon: Linkedin,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            {about.name}
          </p>
          <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">
            {about.homePageBio}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-sky-500" />
            <Link
              href={`mailto:${about.contactEmail}`}
              className="text-sm font-medium text-slate-700 transition hover:text-sky-500 dark:text-slate-200"
            >
              {about.contactEmail}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-300"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/70 bg-white/70 py-6 text-center text-xs text-slate-500 dark:border-slate-800/70 dark:bg-slate-950/70 dark:text-slate-400">
        © {year} {about.name}. Crafted with Next.js, Tailwind CSS, and Framer
        Motion.
      </div>
    </footer>
  );
}
