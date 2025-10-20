import Link from "next/link";
import Hero from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Card } from "@/components/Card";
import { about } from "@/data/about";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { blogs } from "@/data/blog";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      <Hero />

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <MotionWrapper>
          <SectionHeader
            eyebrow="About"
            title="Creating human-centered products with AI and web craftsmanship"
            description={about.bio}
          />
          <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/60">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {about.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {about.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/about"
                className="text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
              >
                Read full bio →
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionWrapper>
          <SectionHeader
            eyebrow="Services"
            title="How I collaborate with teams"
            description="Strategic engagements that pair product thinking with execution. Each service includes a clear roadmap and deliverables."
          />
        </MotionWrapper>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <MotionWrapper key={service.slug} delay={index * 0.05}>
              <Card
                title={service.title}
                description={service.shortDesc}
                tags={service.tags}
                href={`/services/${service.slug}`}
                ctaLabel="Learn more"
              />
            </MotionWrapper>
          ))}
        </div>
        <div className="mt-8 text-right">
          <Link
            href="/services"
            className="text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
          >
            View all services →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionWrapper>
          <SectionHeader
            eyebrow="Projects"
            title="Selected work"
            description="Recent collaborations exploring AI, automation, and thoughtful product experiences."
          />
        </MotionWrapper>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <MotionWrapper key={project.slug} delay={index * 0.05}>
              <Card
                title={project.name}
                description={project.description}
                tags={project.tech}
                href={`/projects/${project.slug}`}
                ctaLabel="View details"
              />
            </MotionWrapper>
          ))}
        </div>
        <div className="mt-8 text-right">
          <Link
            href="/projects"
            className="text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
          >
            View all projects →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionWrapper>
          <SectionHeader
            eyebrow="Journal"
            title="Thinking in public"
            description="Notes on emerging technology, product strategy, and lessons learned while building for clients."
          />
        </MotionWrapper>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((post, index) => (
            <MotionWrapper key={post.slug} delay={index * 0.05}>
              <Card
                title={post.title}
                description={post.excerpt}
                tags={post.tags}
                href={`/blog/${post.slug}`}
                ctaLabel="Read article"
              />
            </MotionWrapper>
          ))}
        </div>
        <div className="mt-8 text-right">
          <Link
            href="/blog"
            className="text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
          >
            View all posts →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <MotionWrapper>
          <div className="rounded-3xl border border-sky-200/80 bg-white/90 p-8 text-center shadow-lg dark:border-sky-800/60 dark:bg-slate-950/70">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Have an idea worth exploring?
            </h2>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              I partner with founders and teams to shape intelligent products.
              Share a brief and I’ll respond with a mini plan in 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
              >
                Start a project
              </Link>
              <Link
                href={`mailto:${about.contactEmail}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                {about.contactEmail}
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </section>
    </div>
  );
}
