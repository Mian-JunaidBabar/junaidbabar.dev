"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { about } from "@/data/about";
import {
  ArrowRight,
  BrainCircuit,
  Layers,
  Lightbulb,
  MapPin,
  Zap,
} from "lucide-react";

const expertiseIcons = {
  "AI-Driven Web Apps": <BrainCircuit size={20} />,
  "Automation & Integrations": <Zap size={20} />,
  "Full-Stack Development": <Layers size={20} />,
  "Product & UX Thinking": <Lightbulb size={20} />,
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_55%),_radial-gradient(circle_at_bottom_right,_rgba(101,163,240,0.18),_transparent_55%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 shadow-sm dark:border-sky-800/50 dark:bg-slate-900/70 dark:text-sky-300">
            <MapPin className="h-4 w-4" />
            {about.location}
          </span>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {about.name}
            </h1>
            <p className="text-lg font-semibold text-sky-600 dark:text-sky-300">
              {about.title}
            </p>
          </div>

          <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            {about.heroSummary}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {about.focusAreas.map((area) => (
              <div key={area.title} className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/50 dark:text-sky-300">
                  {expertiseIcons[area.title as keyof typeof expertiseIcons]}
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {area.title}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-200"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex-1"
        >
          <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-sky-100/60 via-white/60 to-sky-200/60 shadow-xl shadow-sky-500/10 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 lg:h-[22rem] lg:w-[22rem]">
            <Image
              src={about.profileImage}
              alt={about.name}
              fill
              sizes="(min-width: 1024px) 22rem, 18rem"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent dark:from-slate-950/60" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
