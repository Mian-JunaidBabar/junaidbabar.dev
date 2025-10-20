import Link from "next/link";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Card } from "@/components/Card";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-16 sm:px-6">
      <SectionHeader
        eyebrow="Services"
        title="Modular engagements for modern teams"
        description="Every service includes discovery, design, build, and handoff phases so we stay aligned from kickoff to delivery."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <MotionWrapper key={service.slug} delay={index * 0.05}>
            <Card
              title={service.title}
              description={service.fullDesc}
              tags={service.tags}
              href={`/services/${service.slug}`}
              ctaLabel="Learn more"
            />
          </MotionWrapper>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Not sure where your project fits?{" "}
          <Link
            href="/contact"
            className="font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-300"
          >
            Let&apos;s scope it together.
          </Link>
        </p>
      </div>
    </div>
  );
}
