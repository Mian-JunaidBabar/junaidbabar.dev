import { Bot, Code, Rocket, type LucideIcon } from "lucide-react";

export interface ServiceRoadmapStep {
  step: string;
  detail: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  icon: LucideIcon;
  roadmap: ServiceRoadmapStep[];
}

export const services: Service[] = [
  {
    slug: "custom-ai-applications",
    title: "Custom AI-Powered Web Applications",
    shortDesc:
      "Your vision, engineered from the ground up into a market-ready, intelligent product.",
    fullDesc:
      "I specialize in building complete, full-stack web applications that have artificial intelligence at their core. From initial strategy and architecture to deployment and scaling, I handle the entire product lifecycle to deliver a robust, scalable, and intelligent solution tailored to your business needs.",
    tags: ["Full-Stack", "AI Integration", "Product Development", "SaaS"],
    icon: Rocket,
    roadmap: [
      {
        step: "Phase 1: Discovery & Strategy",
        detail:
          "We define the core problem, map out user flows, and establish the technical and business requirements for your product.",
      },
      {
        step: "Phase 2: Architecture & Design",
        detail:
          "I design a scalable system architecture for both the backend (Nest.js) and frontend (Next.js) and create initial wireframes for the user experience.",
      },
      {
        step: "Phase 3: Agile Development & Integration",
        detail:
          "I build the application in agile sprints, integrating AI models and third-party services while providing regular demos and updates.",
      },
      {
        step: "Phase 4: Deployment & Handoff",
        detail:
          "The application is deployed to a production environment on the cloud. I provide full documentation and a handoff session to your team.",
      },
    ],
  },
  {
    slug: "ai-model-integration",
    title: "AI Model Integration & Deployment",
    shortDesc:
      "Infuse your existing applications with the power of machine learning and AI.",
    fullDesc:
      "You have an existing platform or a trained AI model, but need to bridge the gap to production. I specialize in integrating and deploying machine learning models into real-world applications, building the necessary APIs and infrastructure to make them functional and scalable.",
    tags: ["AI/ML", "Deployment", "API Development", "System Integration"],
    icon: Bot,
    roadmap: [
      {
        step: "Phase 1: Technical Audit",
        detail:
          "I review your existing application architecture and the AI model to determine the optimal integration strategy.",
      },
      {
        step: "Phase 2: API & Service Development",
        detail:
          "I build a robust API endpoint (typically with Nest.js) to serve your model's predictions and handle data processing.",
      },
      {
        step: "Phase 3: Frontend Integration",
        detail:
          "I connect your user interface to the new AI-powered API, ensuring a seamless and responsive user experience.",
      },
      {
        step: "Phase 4: Production Deployment",
        detail:
          "The integrated service is deployed and monitored to ensure performance and reliability at scale.",
      },
    ],
  },
  {
    slug: "mvp-prototyping",
    title: "MVP & Prototype Development",
    shortDesc:
      "Validate your startup idea with a functional, high-quality prototype, fast.",
    fullDesc:
      "For founders and innovators, speed to market is critical. I specialize in rapid development of Minimum Viable Products (MVPs) and functional prototypes. My goal is to quickly transform your core idea into a tangible product that you can use to attract users, gather feedback, and secure investment.",
    tags: [
      "Startups",
      "Prototyping",
      "Next.js",
      "Nest.js",
      "Rapid Development",
    ],
    icon: Code,
    roadmap: [
      {
        step: "Phase 1: Core Feature Scoping",
        detail:
          "We work together to strip the idea down to its essential features, defining the smallest possible version that delivers real value.",
      },
      {
        step: "Phase 2: Rapid Development Sprints",
        detail:
          "Using a modern stack (Next.js, Nest.js, Supabase), I build the core functionality in a focused, high-speed sprint.",
      },
      {
        step: "Phase 3: User Feedback Loop",
        detail:
          "You receive a deployed, functional prototype that you can immediately put in front of users to start gathering crucial feedback.",
      },
      {
        step: "Phase 4: Iteration & Handoff",
        detail:
          "Based on initial feedback, we can plan the next iteration or I can hand off the clean, well-documented codebase to your team.",
      },
    ],
  },
];
