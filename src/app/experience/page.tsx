import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 px-4 py-16 sm:px-6">
      <SectionHeader
        eyebrow="Experience"
        title="Building products with cross-functional teams"
        description="A snapshot of recent roles focused on web platforms, AI integrations, and automation that unblocks teams."
      />

      <div className="relative border-l border-slate-200 dark:border-slate-800">
        {experience.map((role, index) => (
          <MotionWrapper
            key={`${role.company}-${role.role}`}
            delay={index * 0.05}
            className="ml-6 pb-12 last:pb-0"
          >
            <div className="absolute -left-2.5 mt-1 h-5 w-5 rounded-full border-2 border-white bg-sky-500 shadow-md shadow-sky-500/30 dark:border-slate-900" />
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {role.role}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {role.company}
                  </p>
                </div>
                <span className="rounded-full border border-sky-200/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:border-sky-800/60 dark:text-sky-300">
                  {role.duration}
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                {role.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {role.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-500" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}
