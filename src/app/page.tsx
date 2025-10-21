import Link from "next/link";
import Hero from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Card } from "@/components/Card";
import { about, homePageAboutSection } from "@/data/about";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { blogs } from "@/data/blog";
import { User, Rocket, Brain } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <div className="space-y-24 pb-24">
      <Hero />

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Philosophy */}
          <MotionWrapper className="flex flex-col justify-center">
            <SectionHeader
              eyebrow={homePageAboutSection.eyebrow}
              title={homePageAboutSection.title}
              description={about.homePageBio} // Use the short bio from our main about object
            />
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
              >
                Read my full story
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </MotionWrapper>

          {/* Right Column: Approach */}
          <MotionWrapper delay={0.1}>
            <div className="space-y-8">
              {homePageAboutSection.approachItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-sky-50 dark:bg-slate-800">
                    {item.icon === "User" && <User className="h-5 w-5" />}
                    {item.icon === "Rocket" && <Rocket className="h-5 w-5" />}
                    {item.icon === "Brain" && <Brain className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>
        </div>
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
