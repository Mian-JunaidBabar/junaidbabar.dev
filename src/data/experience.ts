export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  stack: string[];
}

// In your experience.ts file

export const experience = [
  {
    company: "Deal.ai",
    role: "Web Developer & Designer",
    duration: "Mar 2024 – Mar 2025", 
    description:
      "Led the development and design of bespoke web applications, integrating AI to automate client workflows and enhance user engagement.",
    achievements: [
      "Engineered and launched a full-stack AI-powered platform using Next.js, increasing client process efficiency by an estimated 20%.",
      "Designed and implemented responsive, high-performance user interfaces with React and Tailwind, receiving positive feedback on usability.",
      "Architected and managed scalable backend services and databases using Node.js and Firebase, ensuring 99.9% uptime.",
    ],
    stack: ["Next.js", "React", "Node.js", "Firebase", "Tailwind CSS"],
  },
  {
    company: "TezHost",
    role: "Web Development Intern",
    duration: "May 2024 – Sep 2024", // Use realistic, past dates.
    description:
      "Gained hands-on experience in a fast-paced agency environment, contributing to client projects and acquiring foundational skills in cloud infrastructure.",
    achievements: [
      "Assisted in the development and maintenance of multiple client websites on WordPress, improving page load times by 15% through optimization techniques.",
      "Acquired practical experience with AWS, assisting in the deployment and management of cloud-hosted applications.",
    ],
    stack: ["HTML/CSS", "WordPress", "AWS", "Adobe Illustrator"],
  },
  {
    company: "Inter-Services Public Relations (ISPR)",
    role: "Technology & Media Intern",
    duration: "Jul 2024 – Aug 2024", // Use realistic, past dates.
    description:
      "Selected for a competitive national internship to apply emerging technologies to media and cybersecurity challenges.",
    achievements: [
      "Conducted strategic research on the application of machine learning for detecting digital disinformation campaigns, presenting findings to senior staff.",
      "Developed a Python-based proof-of-concept tool using OpenCV for media analysis, demonstrating the potential for automated content verification.",
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "Data Analysis"],
  },
];
