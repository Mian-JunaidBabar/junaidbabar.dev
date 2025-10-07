"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Mail, Briefcase, Brain } from "lucide-react";
import resumeData from "@/data/resume.json";

export default function About() {
  const infoItems = [
    {
      icon: MapPin,
      label: "Location",
      value: `${resumeData.basics.location.city}, ${resumeData.basics.location.countryCode}`,
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "BSCS @ Superior University",
    },
    {
      icon: Mail,
      label: "Email",
      value: resumeData.basics.email,
    },
    {
      icon: Briefcase,
      label: "Open To",
      value: "Jobs & Projects",
    },
    {
      icon: Brain,
      label: "Focus Areas",
      value: "AI Systems, Web Engineering, Automation",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 w-full border-t border-gray-100 dark:border-gray-800"
    >
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {resumeData.basics.summary}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I love turning complex ideas into clean, working systems. Whether
              it’s an AI-powered tool or a web platform, I build solutions that
              actually make life easier.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a fast-moving developer who builds things that solve real
              problems, not just look good on GitHub. My focus is crafting web
              systems powered by AI, the kind that actually make life easier
              instead of adding another tab to your browser. Right now, I’m
              building Harmoni, an AI-driven collaboration tool designed to kill
              context-switching between apps.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I like experimenting, breaking things, and rebuilding them
              cleaner. For me, a project’s worth is simple — if it solves the
              problem it was made for, it’s a win. I turned my passion into my
              career, even though computer science throws its fair share of bugs
              and frustration. It’s just part of the game — and I like playing
              it.
            </p>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {infoItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex justify-center items-center">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white break-words">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
