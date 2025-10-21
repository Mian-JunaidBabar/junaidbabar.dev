import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { about } from "@/data/about";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-16 sm:px-6">
      <Link
        href="/services"
        className="text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
      >
        ← Back to services
      </Link>

      <SectionHeader
        eyebrow="Service"
        title={service.title}
        description={service.fullDesc}
      />

      <MotionWrapper>
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            What you can expect
          </h3>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            {service.shortDesc}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper>
        <div className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Roadmap
          </h3>
          <ol className="space-y-4">
            {service.roadmap.map((step, index) => (
              <li key={step.step} className="flex gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-200/80 bg-white text-sm font-semibold text-sky-600 shadow-sm dark:border-sky-800/60 dark:bg-slate-900/60 dark:text-sky-300">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {step.step}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </MotionWrapper>

      <MotionWrapper>
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Ready to start? Share your brief and I&apos;ll follow up within a
            day with timelines and next steps.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
            >
              Start a conversation
            </Link>
            <Link
              href={`mailto:${about.contactEmail}`}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:text-slate-200"
            >
              Email details
            </Link>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}
