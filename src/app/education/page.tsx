"use client";

import Image from "next/image";
import Link from "next/link";
import { education, publication } from "@/data/education";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { motion } from "framer-motion";
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

      <div className="relative mt-6 border-l border-slate-200 dark:border-slate-800">
        {education.map((edu, index) => (
          <MotionWrapper
            key={edu.institution}
            delay={index * 0.08}
            className="ml-6 pb-12 last:pb-0"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.6 }}
              className="absolute -left-2.5 mt-1 h-5 w-5 rounded-full border-2 border-white bg-sky-500 shadow-md shadow-sky-500/30 dark:border-slate-900"
            />

            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white shadow-sm">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} Logo`}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {edu.degree} &middot; {edu.duration}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {edu.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
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
