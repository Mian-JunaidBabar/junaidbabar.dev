"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import resumeData from "@/data/resume.json";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gray-50 dark:bg-dark-bg w-full"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {resumeData.work.map((job, index) => (
              <motion.div
                key={job.name + index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-gray-50 dark:border-dark-bg"></div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content card */}
                <div className="md:w-1/2 ml-8 md:ml-0">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    {/* Date badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
                      <Calendar className="w-4 h-4" />
                      {job.startDate} - {job.endDate}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {job.position}
                    </h3>

                    <div className="flex items-center gap-2 text-accent mb-4">
                      <MapPin className="w-4 h-4" />
                      <span className="font-semibold">{job.name}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {job.summary}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-primary mr-2 mt-1">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
