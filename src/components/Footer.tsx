import Link from "next/link";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { about } from "@/data/about";

// The navigation links we want to show in the footer sitemap
const footerNavLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {about.name}
            </h2>
            <p className="max-w-xs text-sm text-slate-600 dark:text-slate-300">
              {about.homePageBio}
            </p>
            <div className="flex items-center gap-3">
              {about.socialLinks.github && (
                <a
                  href={about.socialLinks.github}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-300"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {about.socialLinks.linkedin && (
                <a
                  href={about.socialLinks.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Sitemap
            </h3>
            <ul className="space-y-3">
              {footerNavLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-700 transition hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Get in Touch
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Have a project in mind? I'm always open to discussing new ideas
              and opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
            >
              Start a Conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-slate-200/70 pt-8 text-center text-sm text-slate-500 dark:border-slate-800/70 dark:text-slate-400">
          <p>
            &copy; {year} {about.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
