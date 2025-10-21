export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  stack: string[];
  logo: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Cubic Solutions",
    role: "Associate Software Engineer",
    duration: "Aug 2025 – Present",
    logo: "/logos/company/cubic.png",
    description:
      "A key engineer on the team responsible for the complete architectural overhaul of OmniBlox, the company's core enterprise platform. The mission is to migrate a legacy PHP system to a modern, high-performance stack to address critical scalability and maintainability issues.",
    achievements: [
      "Architecting and developing scalable, microservice-oriented backend systems using Nest.js.",
      "Building a fast, modern, and interactive frontend with Next.js and TypeScript to replace the outdated user interface.",
      "Collaborating directly with the CEO on the technical roadmap and product strategy.",
      "Ensuring the new architecture is robust, maintainable, and aligned with future business growth.",
    ],
    stack: [
      "Nest.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Microservices",
      "PHP",
    ],
  },
  {
    company: "Inter-Services Public Relations (ISPR)",
    role: "Technology & Strategy Training Program",
    duration: "Jul 2025 – Aug 2025",
    logo: "/logos/company/ispr.jpg",
    description:
      "Selected for a competitive national-level program focused on the intersection of technology, cybersecurity, and strategic communications in a defense environment.",
    achievements: [
      "Gained strategic insights into the application of AI for cybersecurity and threat detection.",
      "Analyzed the role of modern technology in media narratives and information security.",
      "Developed a broader understanding of how technology strategy impacts national-level objectives.",
    ],
    stack: ["Cybersecurity Strategy", "AI Applications", "Media Analysis"],
  },
  {
    company: "TezHost",
    role: "Web Development Intern",
    duration: "May 2025 – Oct 2025",
    logo: "/logos/company/tezhost.png",
    description:
      "A structured internship focused on practical skills in a fast-paced agency environment, contributing to client projects and building foundational knowledge in cloud infrastructure.",
    achievements: [
      "Contributed to the development and maintenance of multiple client websites on WordPress.",
      "Gained practical experience deploying and managing cloud applications using Amazon Web Services (AWS).",
      "Earned a Certificate of Completion and a Letter of Recommendation from the CEO in recognition of strong performance.",
    ],
    stack: ["HTML/CSS", "WordPress", "AWS", "Adobe Illustrator"],
  },
  {
    company: "Deal.ai",
    role: "Web Developer & Designer",
    duration: "Mar 2024 – May 2025",
    logo: "/logos/company/deal.png",
    description:
      "Developed and designed AI-powered and custom-coded web solutions for a diverse client base, managing projects from conception to deployment.",
    achievements: [
      "Successfully managed multiple client projects simultaneously, ensuring on-time delivery and high-quality UI/UX.",
      "Built custom, responsive features using HTML, CSS, and JavaScript to meet specific client requirements.",
      "Utilized AI-powered tools to accelerate the development workflow while maintaining code quality.",
    ],
    stack: ["HTML/CSS", "JavaScript", "UI/UX Design", "Project Management"],
  },
];
