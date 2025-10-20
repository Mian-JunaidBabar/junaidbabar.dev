export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Applicon Soft",
    role: "Associate Software Engineer",
    duration: "2023 — Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    achievements: [
      "Built scalable internal tools for automation.",
      "Led integration of AI-based analytics modules.",
    ],
    stack: ["Next.js", "Node.js", "AWS"],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    duration: "2021 — 2023",
    description: "Worked with multiple clients on web and AI solutions.",
    achievements: [
      "Developed SaaS dashboards using Next.js.",
      "Integrated APIs for automation and data analysis.",
    ],
    stack: ["React", "Firebase", "Python"],
  },
];
