import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-16 sm:px-6">
      <Link
        href="/projects"
        className="text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
      >
        ← Back to projects
      </Link>

      <SectionHeader
        title={project.name}
        description={project.description}
        eyebrow={project.year}
      />

      <MotionWrapper>
        <div className="relative h-72 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 shadow-lg dark:border-slate-800/70 dark:bg-slate-950/70">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 768px) 40rem, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
        </div>
      </MotionWrapper>

      <MotionWrapper>
        <div className="grid gap-6 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 sm:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)]">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Overview
            </h3>
            <ReactMarkdown className="prose prose-slate prose-sm max-w-none dark:prose-invert">
              {project.content}
            </ReactMarkdown>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Stack
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2 text-sm">
              {project.role && (
                <p>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    Role:
                  </span>{" "}
                  {project.role}
                </p>
              )}
              <p>
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  Year:
                </span>{" "}
                {project.year}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-sky-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Visit live project
              </Link>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:text-slate-200"
              >
                View code
              </Link>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}
