"use client";

import Image from "next/image";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-24 px-4 py-24 sm:px-6">
      {/* 1. The NEW Header: Personal and Narrative-Driven */}
      <MotionWrapper>
        <SectionHeader
          align="center"
          eyebrow="Professional Journey"
          title="From Intern to Engineer: A Record of Growth and Impact"
          description="This is a timeline of my professional growth, showcasing how I've applied my skills in real-world environments to solve complex problems and deliver tangible results for businesses and organizations."
        />
      </MotionWrapper>

      {/* 2. The Timeline: This component is already perfect and requires no changes */}
      <div className="relative mt-16 border-l border-slate-200 dark:border-slate-800">
        {experience.map((role, index) => (
          <MotionWrapper
            key={`${role.company}-${role.role}`}
            delay={index * 0.05}
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
                  {/* Logo container: fixed square with object-contain to handle varying aspect ratios */}
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white shadow-sm">
                    <Image
                      src={role.logo}
                      alt={`${role.company} logo`}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {role.role}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {role.company}
                    </p>
                  </div>
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
