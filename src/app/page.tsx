import Link from "next/link";
import Hero from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { about, homePageAboutSection } from "@/data/about";
import Image from "next/image";
import { ArrowRight, User, Rocket, Brain } from "lucide-react";

// Helper for the About section icons
const icons = {
  User: <User className="h-5 w-5 text-sky-600 dark:text-sky-300" />,
  Rocket: <Rocket className="h-5 w-5 text-sky-600 dark:text-sky-300" />,
  Brain: <Brain className="h-5 w-5 text-sky-600 dark:text-sky-300" />,
};

export default function Home() {
  // Use our `isFeatured` flag to get the hero projects
  const featuredProjects = projects.filter((p) => p.isFeatured);

  return (
    <div className="space-y-32 pb-24">
      {/* 1. The Hook: Hero Section */}
      <Hero />

      {/* 2. The Proof: Featured Projects (NOW SECOND) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionWrapper>
          <SectionHeader
            align="center"
            eyebrow="Featured Work"
            title="A Showcase of My Best Projects"
            description="Here are a few key projects that demonstrate my skills in full-stack development, AI integration, and problem-solving."
          />
        </MotionWrapper>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <MotionWrapper
              key={project.slug}
              delay={index * 0.1}
              className="group rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm transition-all duration-300 hover:!opacity-100 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/70"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block h-full overflow-hidden rounded-3xl"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {project.tagline}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-sky-600 transition group-hover:text-sky-500 dark:text-sky-300">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </Link>
            </MotionWrapper>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* 3. The Offer: Services */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionWrapper>
          <SectionHeader
            align="center"
            eyebrow="My Offerings"
            title="Client-Focused Solutions"
            description="I partner with businesses to transform ideas into high-quality, intelligent software. Here are the primary ways we can collaborate."
          />
        </MotionWrapper>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionWrapper
                key={service.title}
                delay={index * 0.1}
                className="flex"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/70"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 dark:bg-sky-900/50">
                    {Icon && (
                      <Icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-300">
                    {service.shortDesc}
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-sky-600 transition group-hover:text-sky-500 dark:text-sky-300">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </MotionWrapper>
            );
          })}
        </div>
      </section>

      {/* 4. The Philosophy: About Snippet */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionWrapper className="flex flex-col justify-center">
            <SectionHeader
              eyebrow={homePageAboutSection.eyebrow}
              title={homePageAboutSection.title}
              description={about.homePageBio}
            />
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
              >
                Read my full story <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <div className="space-y-8 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
              {homePageAboutSection.approachItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-sky-50 dark:bg-slate-800">
                    {icons[item.icon as keyof typeof icons]}
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

      {/* 5. The Final CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6">
        <MotionWrapper>
          <div className="rounded-3xl border border-sky-200/80 bg-white/90 p-8 text-center shadow-lg dark:border-sky-800/60 dark:bg-slate-950/70">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Let's connect and discuss how I can bring your ideas to life.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </section>
    </div>
  );
}
