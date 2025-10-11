"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import resumeData from "@/data/resume.json";
import { getServiceBySlug, services } from "@/data/services";

// Generate static params for all service pages
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  // Filter projects related to this service
  const relatedProjects = resumeData.projects.filter((project) =>
    service.relatedProjects.some((keyword) =>
      project.keywords?.some((k) =>
        k.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  );

  const ServiceIcon = service.icon;

  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Header */}
      <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 pb-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl">
                <ServiceIcon className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h1>
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              What I Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {service.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Related Projects
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.slice(0, 6).map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.keywords?.slice(0, 3).map((keyword) => (
                          <span
                            key={keyword}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                        >
                          View Project <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-50/50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your project to life with{" "}
              {service.title.toLowerCase()}.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get in Touch
              </Link>
              <Link
                href="/#services"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors font-medium"
              >
                Explore Other Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
