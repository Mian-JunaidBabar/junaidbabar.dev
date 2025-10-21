import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { blogs } from "@/data/blog";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogs.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogs
    .filter((entry) => entry.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl space-y-12 px-4 py-16 sm:px-6">
      <Link
        href="/blog"
        className="text-sm font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
      >
        ← Back to blog
      </Link>

      <SectionHeader
        eyebrow={new Date(post.date).toLocaleDateString()}
        title={post.title}
        description={post.excerpt}
      />

      <MotionWrapper>
        <article className="prose prose-slate prose-lg max-w-none rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-sm dark:prose-invert dark:border-slate-800 dark:bg-slate-950/70">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </MotionWrapper>

      {relatedPosts.length > 0 && (
        <MotionWrapper>
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Related posts
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="font-semibold text-sky-600 transition hover:text-sky-500 dark:text-sky-300"
                  >
                    {related.title}
                  </Link>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {related.excerpt}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </MotionWrapper>
      )}
    </div>
  );
}
