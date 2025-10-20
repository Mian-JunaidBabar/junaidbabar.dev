export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  content: string;
}

export const blogs: BlogPost[] = [
  {
    slug: "ai-in-web-dev",
    title: "How AI is Changing Web Development",
    date: "2025-03-10",
    excerpt: "Exploring how generative AI is reshaping development workflows.",
    image: "/blog/ai-web.jpg",
    tags: ["AI", "Web", "Development"],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel elit nisi. Vivamus suscipit bibendum lorem, eget convallis dolor varius sed.\n\n## Modern tooling\n\nCurabitur ac nibh nec justo viverra porta vitae nec massa. Pellentesque id magna ac elit aliquam tristique a eget arcu.",
  },
  {
    slug: "scaling-nextjs",
    title: "Scaling Next.js Apps with Server Components",
    date: "2025-01-20",
    excerpt: "Learn modern deployment patterns for large-scale Next.js apps.",
    image: "/blog/next-scale.jpg",
    tags: ["Next.js", "Cloud", "DevOps"],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer eget sapien nisl.\n\n### Deployment considerations\n\nNam ultricies sem nec ante suscipit, sit amet consequat ante hendrerit.",
  },
];
