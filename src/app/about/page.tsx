import Image from "next/image";
import { about } from "@/data/about";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-16 sm:px-6">
      <SectionHeader
        eyebrow="About"
        title="Meet the builder behind the portfolio"
        description={about.homePageBio}
      />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionWrapper className="space-y-6">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {about.fullBio}
          </p>
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Focus areas
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {about.focusAreas.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.1} className="relative">
          <div className="relative h-80 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 shadow-lg dark:border-slate-800/70 dark:bg-slate-950/60">
            <Image
              src={about.profileImage}
              alt={about.name}
              fill
              sizes="(min-width: 1024px) 28rem, 20rem"
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-6 rounded-2xl border border-sky-200/70 bg-sky-50/80 p-6 text-sm text-slate-700 shadow-sm dark:border-sky-800/60 dark:bg-slate-900/60 dark:text-slate-200">
            <p className="font-semibold text-sky-700 dark:text-sky-300">
              Currently based in {about.location}
            </p>
            <p className="mt-2">
              Available for product partnerships, fractional engineering
              leadership, and consults on AI-driven experiences.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}
