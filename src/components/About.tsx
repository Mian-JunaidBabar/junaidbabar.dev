"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Mail, Briefcase } from "lucide-react";
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
      value: "BCS @ Superior University",
    },
    {
      icon: Mail,
      label: "Email",
      value: resumeData.basics.email,
    },
    {
      icon: Briefcase,
      label: "Open To",
      value: "Internships & Projects",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {resumeData.basics.summary}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently pursuing my Bachelor&apos;s in Computer Science, I
              combine academic knowledge with hands-on experience in building
              real-world applications. From AI-powered collaboration tools to
              healthcare solutions, I&apos;m passionate about leveraging
              technology to solve meaningful problems.
            </p>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
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
