export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export const experience = [
  {
    company: "Deal.ai",
    role: "Web Developer & Designer",
    duration: "Mar 2024 – Mar 2025",
    description:
      "Developed and designed AI-powered web solutions tailored for client workflows. Focused on merging strong UI/UX with scalable backend systems.",
    achievements: [
      "Built AI-integrated web platforms using Next.js and Node.js.",
      "Designed user interfaces with Tailwind and React best practices.",
      "Collaborated with AI engineers to deliver intelligent business tools.",
    ],
    stack: ["Next.js", "React", "Tailwind", "Node.js", "Firebase"],
  },
  {
    company: "TezHost",
    role: "IT Intern",
    duration: "May 2025 – Sep 2025",
    description:
      "Explored web development, cloud management, and brand marketing within a fast-moving IT company.",
    achievements: [
      "Worked across web, AWS cloud, and digital design modules.",
      "Learned deployment pipelines and client-side hosting strategies.",
    ],
    stack: ["AWS", "WordPress", "HTML", "CSS", "Illustrator"],
  },
  {
    company: "Inter-Services Public Relations (ISPR)",
    role: "Tech & Media Intern",
    duration: "Jul 2025 – Aug 2025",
    description:
      "Worked on technology-driven media projects and explored AI applications in cybersecurity within a defense environment.",
    achievements: [
      "Researched AI use cases for digital security.",
      "Assisted with media and data-driven communication tools.",
    ],
    stack: ["Python", "TensorFlow", "OpenCV"],
  },
];
