export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description?: string; // Short description for project listing
  image: string;
  category: "Full-Stack Application" | "AI & Machine Learning";
  year?: string; // Project year
  role?: string; // Role in the project
  liveUrl?: string;
  githubUrl: string;

  // --- Scalable Properties ---
  isFeatured: boolean; // true = show on home page or at the top
  tags: string[]; // For filtering (e.g., "Web App", "AI", "Mobile")
  tech: string[]; // Technologies used (for compatibility)
  status: "Completed" | "In Progress" | "Archived"; // The new project status

  // --- Case Study Content ---
  problem: string;
  solution: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  // --- HERO PROJECT 1 ---
  {
    slug: "omniblox",
    name: "OmniBlox",
    tagline: "An All-in-One ERP & CRM for Modern Businesses",
    description:
      "A unified platform to manage the entire business lifecycle from sales pipelines to inventory.",
    image: "/projects/omniblox.png",
    category: "Full-Stack Application",
    year: "2025",
    role: "Associate Software Engineer",
    githubUrl: "",
    isFeatured: true,
    tags: ["Web App", "ERP", "CRM", "SaaS"],
    tech: ["Nest.js", "Next.js", "TypeScript", "PostgreSQL"],
    status: "In Progress",
    problem:
      "Small to medium-sized businesses often rely on a fragmented set of tools for CRM and ERP, leading to data silos, inefficiencies, and a lack of a single source of truth for their operations.",
    solution:
      "OmniBlox is being architected as the central nervous system for a business. By migrating a legacy PHP system to a modern, scalable stack (NestJS & Next.js), we are building a unified platform to manage the entire business lifecycle, from sales pipelines and inventory to procurement and expense tracking.",
    keyFeatures: [
      {
        title: "Unified Dashboard",
        description:
          "Integrates sales, inventory, and financial data into a single, real-time view.",
      },
      {
        title: "End-to-End Lifecycle Management",
        description:
          "Manages contacts, products, purchase orders, and expenses from one interface.",
      },
      {
        title: "Scalable Microservice Architecture",
        description:
          "The NestJS backend is designed for high performance and maintainability, ready to grow with the business.",
      },
      {
        title: "Type-Safe & Modern Frontend",
        description:
          "The Next.js and TypeScript frontend ensures a robust, error-free, and highly interactive user experience.",
      },
    ],
    techStack: ["Nest.js", "Next.js", "TypeScript", "PostgreSQL", "Prisma ORM"],
    gallery: [],
  },
  // --- HERO PROJECT 2 ---
  {
    slug: "harmoni-ai",
    name: "Harmoni AI",
    tagline: "The AI-Powered Team Collaboration Hub",
    description:
      "An intelligent all-in-one platform with AI Meeting Assistant that converts verbal commitments into tasks.",
    image: "/projects/harmoni.png",
    category: "Full-Stack Application",
    year: "2024-2025",
    role: "Full Stack Developer",
    githubUrl: "",
    isFeatured: true,
    tags: ["Web App", "AI", "Collaboration", "Productivity"],
    tech: ["Next.js", "Nest.js", "AI APIs", "PostgreSQL"],
    status: "In Progress",
    problem:
      "Modern teams are drowning in context-switching, losing productivity by juggling separate apps for project management, chat, and video calls. Verbal commitments made in meetings are often lost, requiring tedious manual follow-up.",
    solution:
      "Harmoni is an intelligent, all-in-one platform that serves as a central hub for all work. Its core innovation is an AI Meeting Assistant that actively listens to conversations, transcribes them, and autonomously converts verbal commitments into structured, assigned tasks.",
    keyFeatures: [
      {
        title: "AI Meeting Assistant",
        description:
          "Automatically transcribes meetings and creates tasks from verbal commitments, eliminating manual follow-up.",
      },
      {
        title: "Proactive AI Agents",
        description:
          "Provides intelligent suggestions for task assignments and monitors project health to alert managers of potential risks.",
      },
      {
        title: "Unified Workspace",
        description:
          "Combines project boards, real-time chat, and video conferencing in a single, seamless environment.",
      },
      {
        title: "Secure & Enterprise-Ready",
        description:
          "Features a multi-tiered access model and an offline mode for LAN-based operation.",
      },
    ],
    techStack: [
      "Next.js",
      "Nest.js",
      "AI APIs",
      "PostgreSQL",
      "Real-time Chat",
    ],
    gallery: [],
  },
  // --- AI & ML PROJECT ---
  {
    slug: "plant-disease-detector",
    name: "AI Plant Disease Detector",
    tagline: "Instant Crop Health Analysis for Farmers",
    description:
      "A CNN-powered web app that identifies 30+ plant diseases and provides AI-generated treatment advice.",
    image: "/projects/plant.png",
    category: "AI & Machine Learning",
    year: "2024",
    role: "AI/ML Developer",
    liveUrl: "https://plant-disease-detector-ai-by-junaid-babar.streamlit.app/",
    githubUrl: "https://github.com/Mian-JunaidBabar/Plant-Disease-Detector-AI",
    isFeatured: true,
    tags: ["AI", "Machine Learning", "Data Science"],
    tech: ["Python", "TensorFlow", "CNNs", "Gemini API"],
    status: "Completed",
    problem:
      "Farmers and agriculturalists often struggle with the early and accurate identification of plant diseases, leading to potential crop loss and inefficient use of treatments.",
    solution:
      "I built a user-friendly web application that leverages a Convolutional Neural Network (CNN) to identify over 30 plant diseases from an uploaded image. The system is enhanced with a Generative AI (Gemini) integration to provide farmers with immediate, actionable advice and preventive guidance.",
    keyFeatures: [
      {
        title: "High-Accuracy CNN Model",
        description:
          "Developed a deep learning model with TensorFlow, achieving high accuracy in disease classification.",
      },
      {
        title: "Generative AI Guidance",
        description:
          "Integrated with the Gemini LLM to provide clear, context-aware treatment and prevention advice.",
      },
      {
        title: "Interactive Web Interface",
        description:
          "Built a simple and accessible front-end with Streamlit, allowing for easy image uploads and instant results.",
      },
    ],
    techStack: ["Python", "TensorFlow", "CNNs", "Gemini API", "Streamlit"],
    gallery: [],
  },
  // --- OTHER NOTEWORTHY PROJECT ---
  {
    slug: "collabsphere",
    name: "CollabSphere",
    tagline: "A Unified Team Productivity Platform",
    description:
      "A centralized platform integrating project boards, real-time chat, and file sharing for team collaboration.",
    image: "/projects/collabsphere.png",
    category: "Full-Stack Application",
    year: "2024",
    role: "Full Stack Developer",
    githubUrl: "https://github.com/Mian-JunaidBabar/CollabSphere",
    isFeatured: false,
    tags: ["Web App", "Productivity"],
    tech: ["Next.js", "Nest.js", "Supabase"],
    status: "Completed",
    problem:
      "Teams often face fragmented workflows, relying on separate tools for task management, chat, and file sharing, which hinders productivity and creates communication gaps.",
    solution:
      "CollabSphere is a centralized platform that integrates project boards, real-time chat, and file sharing into a single, cohesive environment. It provides a unified hub for all project activities to enhance team productivity and streamline communication from start to finish.",
    keyFeatures: [
      {
        title: "Integrated Task Management",
        description: "Kanban-style project boards to track progress visually.",
      },
      {
        title: "Real-Time Chat",
        description:
          "Embedded team and personal chat to keep communication in context.",
      },
      {
        title: "Centralized Workspaces",
        description:
          "Nested workspaces and file sharing to organize all project-related assets.",
      },
    ],
    techStack: ["Next.js", "Nest.js", "Supabase", "Real-time Chat"],
    gallery: [],
  },
];
