"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Code,
  Brain,
  Zap,
  Cloud,
  Globe,
  Palette,
} from "lucide-react";
import Link from "next/link";

interface SkillDetail {
  name: string;
  description: string;
}

interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  roadmap: { step: string; detail: string }[];
  icon: string;
  targetClients?: string[];
  skillsDetailed?: SkillDetail[];
}

interface Project {
  slug: string;
  name: string;
  description: string;
  image: string;
  tech: string[];
  role?: string;
  year: string;
  liveUrl: string;
  githubUrl: string;
  content: string;
}

interface ServiceClientProps {
  service: Service;
  relatedProjects: Project[];
}

function iconForSlug(slug: string) {
  switch (slug) {
    case "web-development":
      return Code;
    case "ai-machine-learning":
      return Brain;
    case "automation-integrations":
      return Zap;
    case "wordpress-development":
      return Globe;
    case "cloud-infrastructure":
      return Cloud;
    case "creative-design":
      return Palette;
    default:
      return Code;
  }
}

export default function ServiceClient({
  service,
  relatedProjects,
}: ServiceClientProps) {
  const ServiceIcon = iconForSlug(service.slug || "");

  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Header */}
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-28 pb-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl">
                <ServiceIcon className="w-12 h-12 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {service.shortDesc}
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
              {service.fullDesc}
            </p>

            {/* Who it's for */}
            {service.targetClients && service.targetClients.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {service.targetClients.map((t: string) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {service.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills & How I use them */}
      <section className="py-14 bg-white dark:bg-dark-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Skills — how I use them
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl">
              Short explanations so you know what each technical item means in
              practice and how I&apos;d use it on your project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {service.skillsDetailed?.map((s: SkillDetail, i: number) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {s.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {s.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      {service.roadmap && service.roadmap.length > 0 && (
        <section className="py-14 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Project roadmap
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-2xl">
                Typical engagement phases — clear milestones so clients know
                what to expect.
              </p>
            </motion.div>

            <ol className="space-y-4">
              {service.roadmap.map(
                (step: { step: string; detail: string }, idx: number) => (
                  <motion.li
                    key={step.step}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.35 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex items-center justify-center min-w-[40px] h-[40px] rounded-full bg-primary/10 text-primary font-semibold">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {step.step}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {step.detail}
                      </div>
                    </div>
                  </motion.li>
                )
              )}
            </ol>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects?.length > 0 && (
        <section className="py-14 bg-white dark:bg-dark-bg">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Related projects
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.slice(0, 6).map((project: Project) => (
                <article
                  key={project.name}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm inline-flex items-center gap-2"
                      >
                        View project <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500">
                        No live link
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-purple-50/30 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Ready to start?
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            If this sounds like the right fit, let&apos;s discuss scope,
            timeline and budget. I&apos;ll propose a short plan and the next
            steps.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="/#services"
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
            >
              Back to services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
