"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Brain, Zap, Cloud, Palette } from "lucide-react";
import { services } from "@/data/services";

const iconMap = {
  Code,
  Brain,
  Zap,
  Cloud,
  Palette,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-dark-bg w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What I Do
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I work across development, AI, cloud, and design to build digital
            systems that actually solve problems — not just exist online.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl group-hover:bg-primary transition-all duration-300">
                  {(() => {
                    const IconComponent =
                      iconMap[service.icon as keyof typeof iconMap];
                    return IconComponent ? (
                      <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    ) : null;
                  })()}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="text-primary text-sm font-medium mt-4 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
