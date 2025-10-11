import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Service Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Unfortunately, we don't have the service you're looking for currently.
        </p>
        <Link
          href="/#services"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors inline-block"
        >
          Back to Services
        </Link>
      </div>
    </div>
  );
}
