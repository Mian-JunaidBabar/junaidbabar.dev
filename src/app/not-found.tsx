import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <div className="mb-8">
        <Compass
          className="h-24 w-24 text-slate-300 dark:text-slate-700"
          strokeWidth={1}
        />
      </div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
        404 Error
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
        You&#39;ve ventured off the map.
      </h1>
      <p className="mt-4 max-w-lg text-slate-600 dark:text-slate-300">
        The page you&#39;re looking for doesn&#39;t exist or has been moved.
        Let&#39;s get you back on track.
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-500"
        >
          <Home className="h-4 w-4" />
          Return to Home Page
        </Link>
      </div>
    </div>
  );
}
