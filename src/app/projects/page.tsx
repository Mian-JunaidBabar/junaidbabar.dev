import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-16 sm:px-6">
      <SectionHeader
        eyebrow="Projects"
        title="A look at recent collaborations"
        description="Each project pairs modern web engineering with pragmatic AI to solve real product needs."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project: Project, index: number) => (
          <MotionWrapper
            key={project.slug}
            delay={index * 0.05}
            className="group rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/70"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="block h-full overflow-hidden rounded-3xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  <span>{project.year}</span>
                  <span>{project.role ?? ""}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-sm font-semibold text-sky-600 transition group-hover:text-sky-500 dark:text-sky-300">
                  View full case study →
                </span>
              </div>
            </Link>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}
