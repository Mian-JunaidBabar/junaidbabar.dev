"use client";

import Image from "next/image";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

function TimelineLine({ scrollYProgress }: { scrollYProgress: any }) {
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleY }}
      className="absolute left-0 top-0 h-full w-0.5 origin-top bg-slate-200 dark:bg-slate-800"
    />
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ExperiencePage() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  return (
    <div className="mx-auto max-w-5xl space-y-24 px-4 py-24 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <SectionHeader
          align="center"
          eyebrow="Professional Journey"
          title="From Intern to Engineer: A Record of Growth and Impact"
          description="This is a timeline of my professional growth, showcasing how I've applied my skills in real-world environments to solve complex problems and deliver tangible results."
        />
      </motion.div>

      {/* 2. The Timeline */}
      <div ref={timelineRef} className="relative mt-16">
        <TimelineLine scrollYProgress={scrollYProgress} />

        {/* The timeline items */}
        <div className="space-y-12">
          {experience.map((role) => (
            <motion.div
              key={`${role.company}-${role.role}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="relative ml-6 pl-6"
            >
              <div className="absolute -left-2.5 top-2 h-5 w-5 rounded-full border-2 border-white bg-sky-500 shadow-md shadow-sky-500/30 dark:border-slate-900" />
              <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
