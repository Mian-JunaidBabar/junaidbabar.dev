export interface Project {
  slug: string;
  name: string;
  description: string;
  image: string;
  tech: string[];
  role?: string;
  year: string;
  liveUrl: string;
  githubUrl: string;
  content: string;
}

export const projects: Project[] = [
  {
    slug: "harmoni-ai",
    name: "Harmoni AI",
    description:
      "An AI-powered collaboration platform eliminating the need for multiple apps.",
    image: "/projects/harmoni.jpg",
    tech: ["Next.js", "OpenAI", "Firebase"],
    role: "Lead Developer",
    year: "2025",
    liveUrl: "https://harmoni.ai",
    githubUrl: "https://github.com/user/harmoni",
    content:
      "Detailed markdown or HTML description for the project page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    slug: "vision-detect",
    name: "Vision Detect",
    description:
      "Computer vision tool for detecting defects in manufacturing processes.",
    image: "/projects/vision.jpg",
    tech: ["Python", "YOLO", "Streamlit"],
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget eros sit amet eros interdum gravida eget et ex.",
  },
];
