import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-24 sm:px-6">
      {/* 1. The Header */}
      <MotionWrapper>
        <div className="text-center">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Services
          </Link>
          <SectionHeader
            align="center"
            eyebrow="Service Breakdown"
            title={service.title}
          />
        </div>
      </MotionWrapper>

      {/* 2. Service Overview (Two-Column Layout) */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10">
        <MotionWrapper className="lg:col-span-2">
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
              Service Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {service.fullDesc}
            </p>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Ideal For
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
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
      </div>

      {/* 3. The Collaborative Roadmap */}
      <MotionWrapper>
        <SectionHeader
          align="center"
          eyebrow="The Process"
          title="Our Collaborative Roadmap"
          description="Every project is a partnership. My process is designed to be transparent, collaborative, and focused on delivering results at every stage."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {service.roadmap.map((step, index) => (
            <div
              key={step.step}
              className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200/80 bg-white text-lg font-semibold text-sky-600 shadow-sm dark:border-sky-800/60 dark:bg-slate-900 dark:text-sky-300">
                {index + 1}
              </div>
              <h3 className="mt-4 font-semibold text-slate-800 dark:text-slate-100">
                {step.step}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </MotionWrapper>

      {/* 4. The Final Call to Action */}
      <MotionWrapper>
        <div className="mt-16 rounded-3xl border border-sky-200/80 bg-white/90 p-8 text-center shadow-lg dark:border-sky-800/60 dark:bg-slate-950/70">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Ready to build your vision?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Let's discuss how this service can be tailored to your project's
            unique needs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}
