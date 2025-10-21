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

export const projects = [
  {
    slug: "harmoni-ai",
    name: "Harmoni – AI Collaboration Tool",
    description:
      "An AI-powered collaboration platform built to eliminate context-switching between apps. Combines task management, meeting automation, and intelligent communication in one space.",
    image: "/projects/harmoni.jpg",
    tech: ["Next.js", "PostgreSQL", "Prisma", "AI APIs"],
    role: "Full Stack Developer",
    year: "2025",
    liveUrl: "https://github.com/Mian-JunaidBabar/harmoni",
    githubUrl: "https://github.com/Mian-JunaidBabar/harmoni",
    content:
      "Built with a focus on productivity and automation, Harmoni uses AI to understand user workflows and cut repetitive steps. Real-time task sync, automated meeting summaries, and context-aware chats make it a true all-in-one workspace.",
  },
  {
    slug: "plant-disease-detection",
    name: "Plant Disease Detection",
    description:
      "An ML-powered app that identifies early crop diseases using computer vision — built with TensorFlow and Gemini API.",
    image: "/projects/plant.jpg",
    tech: ["TensorFlow", "Gemini API", "Streamlit"],
    role: "ML Engineer",
    year: "2024",
    liveUrl: "#",
    githubUrl: "https://github.com/Mian-JunaidBabar/plant-disease-detection",
    content:
      "Trained CNN models on plant datasets to classify diseases and integrated it into a user-friendly web app using Streamlit. The tool helps farmers and researchers monitor crop health efficiently.",
  },
  {
    slug: "golearn-lms",
    name: "GoLearn LMS",
    description:
      "A full-stack learning management system (LMS) with multi-role architecture and cloud sync for academic institutions.",
    image: "/projects/golearn.jpg",
    tech: ["PHP", "Java", "Firebase"],
    role: "Full Stack Developer",
    year: "2023",
    liveUrl: "#",
    githubUrl: "https://github.com/Mian-JunaidBabar/golearn-lms",
    content:
      "Built a complete LMS for institutions featuring role-based access, course management, grading, and assignment systems with Firebase-based authentication.",
  },
];
