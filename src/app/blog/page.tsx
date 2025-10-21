import { blogs } from "@/data/blog";
import { SectionHeader } from "@/components/SectionHeader";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Card } from "@/components/Card";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-16 sm:px-6">
      <SectionHeader
        eyebrow="Journal"
        title="Ideas in progress"
        description="Short essays on AI, developer experience, and shipping reliable products."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post, index) => (
          <MotionWrapper key={post.slug} delay={index * 0.05}>
            <Card
              title={post.title}
              description={post.excerpt}
              tags={post.tags}
              href={`/blog/${post.slug}`}
              ctaLabel="Read article"
              footer={
                <time className="text-xs text-slate-500 dark:text-slate-400">
                  {new Date(post.date).toLocaleDateString()}
                </time>
              }
            />
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
}
