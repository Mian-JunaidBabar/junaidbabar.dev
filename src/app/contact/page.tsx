"use client";

import React, { useState } from "react";
import Image from "next/image";
import { about } from "@/data/about";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

function stripHtml(input: string) {
  // Remove tags
  const withoutTags = input.replace(/<[^>]*>/g, " ");
  // Decode a few common HTML entities
  return withoutTags
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const contentType = (res.headers.get("content-type") || "").toLowerCase();
      let data: any = null;

      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        // Fallback to text when server returns HTML (error pages) or plain text
        data = await res.text();
      }

      if (!res.ok) {
        // If the response is HTML, strip tags for a readable error message
        const textError =
          typeof data === "string" ? stripHtml(data) : data?.error;
        setStatus("error");
        setErrorMsg(
          textError || "An error occurred while sending the message."
        );
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || String(err));
    }
  }
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-24 sm:px-6">
      {/* 1. The Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <SectionHeader
          align="center"
          eyebrow="Contact"
          title="Let's Build Something Great Together"
          description="Have a project in mind, or just want to connect? I'm always open to discussing new ideas and opportunities."
        />
      </motion.div>

      {/* 2. The Two-Column Layout */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Personal Info & Links */}
        <MotionWrapper className="space-y-8">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-slate-900">
            <Image
              src={about.profileImage}
              alt={about.name}
              fill
              className="object-cover"
              sizes="12rem"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Junaid Babar
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              I'm currently based in Lahore, Pakistan, and available for
              freelance projects worldwide. Let's schedule a call to discuss how
              I can help your business.
            </p>
          </div>
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <a
              href={`mailto:${about.contactEmail}`}
              className="flex items-center gap-3 transition hover:text-sky-500"
            >
              <Mail className="h-4 w-4 flex-none" />
              <span>{about.contactEmail}</span>
            </a>
            <a
              href={about.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-sky-500"
            >
              <Linkedin className="h-4 w-4 flex-none" />
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href={about.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-sky-500"
            >
              <Github className="h-4 w-4 flex-none" />
              <span>Follow on GitHub</span>
            </a>
          </div>
        </MotionWrapper>

        {/* Right Column: The Contact Form */}
        <MotionWrapper delay={0.1}>
          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus-visible:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus-visible:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>
              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  How can I help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus-visible:border-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600">
                  {errorMsg || "Failed to send message."}
                </p>
              )}
              {status === "success" && (
                <p className="text-sm text-green-600">
                  Message sent — thank you!
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500 disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
}
