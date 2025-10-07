"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, ExternalLink } from "lucide-react";
import resumeData from "@/data/resume.json";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Publications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={edu.institution + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h4>
                    <p className="text-accent font-semibold">
                      {edu.studyType} in {edu.area}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {edu.startDate} - {edu.endDate}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Publications
          </h3>
          {resumeData.publications.map((pub, index) => (
            <motion.div
              key={pub.name + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {pub.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {pub.summary}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-accent">
                      {pub.publisher}
                    </span>
                    <span>•</span>
                    <span>{pub.releaseDate}</span>
                  </div>
                </div>
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-accent text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read Paper
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
