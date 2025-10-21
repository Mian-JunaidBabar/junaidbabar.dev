import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, type Project } from "@/data/projects";
import { MotionWrapper } from "@/components/MotionWrapper";
import { ArrowUpRight, Github, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project: Project) => ({ slug: project.slug }));
}

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = projects.find((p: Project) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-24 sm:px-6">
      {/* 1. Project Hero Section */}
      <MotionWrapper>
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
            {project.category}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300 [text-wrap:balance]">
            {project.tagline}
          </p>
        </div>
      </MotionWrapper>

      {/* 2. Main Project Image */}
      <MotionWrapper delay={0.1}>
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 shadow-lg dark:border-slate-800/70 dark:bg-slate-950/60">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </MotionWrapper>

      {/* 3. Case Study Details (Two-Column Layout) */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-12">
        {/* Left Column: The Narrative */}
        <MotionWrapper className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">
              The Problem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {project.problem}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-white">
              The Solution
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {project.solution}
            </p>
          </div>
        </MotionWrapper>

        {/* Right Column: Key Info Sidebar */}
        <MotionWrapper delay={0.1} className="space-y-10">
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Tech Stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Status & Links
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                />
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {project.status}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
                  >
                    Visit Live Project <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  View on GitHub <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>

      {/* 4. Key Features Section */}
      <MotionWrapper>
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white">
          Key Features & Contributions
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {project.keyFeatures.map(
            (feature: { title: string; description: string }) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70"
              >
                <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            )
          )}
        </div>
      </MotionWrapper>

      {/* 5. Conditional Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <MotionWrapper>
          <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white">
            Gallery
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {project.gallery.map((image: string, index: number) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-xl border border-slate-200/80 shadow-md"
              >
                <Image
                  src={image}
                  alt={`${project.name} gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </MotionWrapper>
      )}

      {/* Back to projects link */}
      <MotionWrapper className="text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Projects
        </Link>
      </MotionWrapper>
    </div>
  );
}
