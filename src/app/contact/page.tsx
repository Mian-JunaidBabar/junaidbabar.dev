import Link from "next/link";
import { about } from "@/data/about";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";

const socials = [
  { label: "GitHub", href: "https://github.com/example" },
  { label: "LinkedIn", href: "https://linkedin.com/in/example" },
  { label: "Twitter", href: "https://twitter.com/example" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something meaningful"
        description="Share a quick summary of what you need. I typically reply within one business day with a short plan and next steps."
        align="center"
      />

      <MotionWrapper className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
        <form
          className="grid gap-6"
          action={`mailto:${about.contactEmail}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus-visible:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus-visible:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus-visible:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
          >
            Send message
          </button>
        </form>
      </MotionWrapper>

      <MotionWrapper>
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Prefer a direct chat? Email me at {about.contactEmail} or connect on
            these platforms.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href={`mailto:${about.contactEmail}`}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:text-slate-200"
            >
              {about.contactEmail}
            </Link>
            {socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:text-slate-200"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}
