import Image from "next/image";
import Link from "next/link";
import { education, publication } from "@/data/education";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { ArrowUpRight } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-24 px-4 py-24 sm:px-6">
      <MotionWrapper>
        <SectionHeader
          align="center"
          eyebrow="Academic Foundation"
          title="Education & Published Research"
          description="My academic background in computer science provided the strong theoretical foundation that I apply to every practical challenge, culminating in peer-reviewed research."
        />
      </MotionWrapper>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <MotionWrapper key={edu.institution} delay={index * 0.1}>
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white shadow-md">
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} Logo`}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {edu.degree} &middot; {edu.duration}
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {edu.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>
        ))}
      </div>

      <MotionWrapper delay={0.3}>
        <SectionHeader
          align="center"
          eyebrow="Peer-Reviewed Research"
          title="Academic Publications"
        />
        <div className="mt-10">
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {publication.title}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Published in:{" "}
              <span className="font-medium text-slate-600 dark:text-slate-300">
                {publication.journal}
              </span>
            </p>

            {/* RENDER THE NEW DESCRIPTION */}
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              {publication.description}
            </p>

            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-50 px-5 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100 dark:bg-sky-900/40 dark:text-sky-300 dark:hover:bg-sky-900"
            >
              Read Full Publication
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}
