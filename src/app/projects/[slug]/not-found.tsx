import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
        Project not found
      </h1>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        That project isn&apos;t available right now. Head back to the projects
        page to explore more case studies.
      </p>
      <Link
        href="/projects"
        className="mt-8 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
      >
        Browse projects
      </Link>
    </div>
  );
}
