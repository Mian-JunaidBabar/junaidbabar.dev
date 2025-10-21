import Image from "next/image";
import Link from "next/link";
import { about } from "@/data/about";
// SectionHeader no longer used here; kept markup inline for custom layout
import { MotionWrapper } from "@/components/MotionWrapper";
import { Linkedin, Github, Mail, ArrowRight, Download } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-24 sm:px-6">
      {/* 1. The Header */}
      <MotionWrapper>
        <div className="text-center">
          {/* Optional eyebrow */}
          {about && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">
              About Me
            </p>
          )}

          {/* Main title */}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {about.name}
          </h1>

          {/* Description as subheading */}
          <h3 className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-200">
            A builder who bridges the gap between great ideas and great products
          </h3>

          {/* Supporting belief paragraph */}
          <p className="mt-4 mx-auto max-w-3xl text-center text-base text-slate-600 dark:text-slate-400 lg:text-lg [text-wrap:balance]">
            I believe the best technology feels invisible, solving complex
            problems behind the scenes so users can achieve their goals with
            ease and clarity.
          </p>
        </div>
      </MotionWrapper>

      {/* 2. The Core Section */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Left Column: The Narrative (Bio & Capabilities) */}
        <MotionWrapper className="space-y-10">
          {/* Full Bio */}
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <p className="whitespace-pre-line text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {about.fullBio}
            </p>
          </div>

          {/* Core Capabilities */}
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              My Core Capabilities
            </h3>
            <div className="mt-6 space-y-6">
              {about.focusAreas.map((area) => (
                <div key={area.title} className="relative">
                  <div className="absolute top-2.5 left-0 h-full w-px bg-slate-200 dark:bg-slate-800" />
                  <div className="absolute top-0 -left-[5px] h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <div className="ml-6">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                      {area.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* Right Column: The Proof (Image, Info Card, Toolkit) */}
        <MotionWrapper delay={0.1} className="space-y-10">
          {/* Profile Image */}
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200/80 bg-white/60 shadow-lg dark:border-slate-800/70 dark:bg-slate-950/60">
            <Image
              src={about.profileImage}
              alt={about.name}
              fill
              sizes="(min-width: 1024px) 28rem, 20rem"
              className="object-cover"
              priority
            />
          </div>

          {/* Info Card - UPDATED */}
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Contact & Links
            </h3>
            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              {/* Email */}
              <a
                href={`mailto:${about.contactEmail}`}
                className="flex items-center gap-3 transition hover:text-sky-500"
              >
                <Mail className="h-4 w-4 flex-none" />
                <span>{about.contactEmail}</span>
              </a>
              {/* LinkedIn */}
              <a
                href={about.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-sky-500"
              >
                <Linkedin className="h-4 w-4 flex-none" />
                <span>Connect on LinkedIn</span>
              </a>
              {/* GitHub */}
              <a
                href={about.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-sky-500"
              >
                <Github className="h-4 w-4 flex-none" />
                <span>Follow on GitHub</span>
              </a>
              {/* Resume Link */}
              <a
                href={about.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-sky-500"
              >
                <Download className="h-4 w-4 flex-none" />
                <span>Download My Resume</span>
              </a>
            </div>
          </div>

          {/* Toolkit */}
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              My Toolkit
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.toolkit.map((tech) => (
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
      </div>

      {/* 3. The Call to Action */}
      <MotionWrapper>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
            Let&apos;s build something great together
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}

// You might need to adjust the SectionHeader component to handle an optional eyebrow prop
// and to center its content. Here is an example:

/*
export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string; }) {
  return (
    <div className="text-center">
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">{eyebrow}</p>}
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h1>
      <p className="mt-4 text-lg text-slate-700 dark:text-slate-200">{description}</p>
    </div>
  );
}
*/
