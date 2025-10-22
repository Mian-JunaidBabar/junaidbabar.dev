"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 py-24 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <SectionHeader
          align="center"
          eyebrow="My Offerings"
          title="From Idea to Impact: Client-Focused Solutions"
          description="I partner with businesses to transform ideas into high-quality, intelligent software. Here are the primary ways we can collaborate to bring your vision to life."
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
              delay: index * 0.1,
            }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/70"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-900/50">
                <service.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {service.shortDesc}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-sky-600 transition group-hover:text-sky-500 dark:text-sky-300">
                Learn more about my process{" "}
                <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
            Have a project that doesn't fit neatly into a box?
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            That's perfect. The most interesting projects rarely do.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
            >
              Let's scope it together
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
