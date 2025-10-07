"use client";

import { Github, Linkedin, Heart } from "lucide-react";
import resumeData from "@/data/resume.json";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Quote */}
          <div className="text-center md:text-left">
            <p className="text-lg font-medium text-gray-300 italic">
              &quot;Building tomorrow&apos;s systems today.&quot;
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {resumeData.basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={profile.network}
              >
                {profile.network === "GitHub" ? (
                  <Github className="w-6 h-6" />
                ) : (
                  <Linkedin className="w-6 h-6" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Junaid Babar. Built with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-current" /> using
            Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
