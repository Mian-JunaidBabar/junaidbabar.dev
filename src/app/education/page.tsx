"use client";

import Image from "next/image";
import Link from "next/link";
import { education, publication } from "@/data/education";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

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

// Card animation variants for a clean fade-in-up effect
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function EducationPage() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  return (
    <div className="mx-auto max-w-5xl space-y-24 px-4 py-24 sm:px-6">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <SectionHeader
          align="center"
          eyebrow="Academic Foundation"
          title="Education & Published Research"
          description="My academic background in computer science provided the strong theoretical foundation that I apply to every practical challenge, culminating in peer-reviewed research."
        />
      </motion.div>

      {/* The Timeline */}
      <div ref={timelineRef} className="relative mt-6">
        <TimelineLine scrollYProgress={scrollYProgress} />

        {/* The timeline items */}
        <div className="space-y-12">
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
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
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
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
      </motion.div>
    </div>
  );
}
