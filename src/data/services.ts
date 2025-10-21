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
  roadmap: ServiceRoadmapStep[];
}

export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc:
      "Building fast, scalable web apps that feel great and perform even better.",
    fullDesc:
      "I design and develop full-stack web platforms using modern frameworks like Next.js and NestJS. My approach combines clean architecture, API-first design, and performance-driven deployment. Whether it’s a SaaS dashboard or a custom client portal, the goal is to build products that are beautiful, maintainable, and scalable.",
    tags: ["Next.js", "NestJS", "React", "Node.js", "SQL", "Firebase"],
    roadmap: [
      {
        step: "Discovery",
        detail: "Understand the product vision and target users.",
      },
      {
        step: "Architecture",
        detail: "Plan the stack and structure the backend & frontend flow.",
      },
      {
        step: "Development",
        detail:
          "Build fast, modular code with testing and scalability in mind.",
      },
      {
        step: "Launch & Optimize",
        detail: "Deploy, monitor, and refine performance for real-world use.",
      },
    ],
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    shortDesc:
      "Integrating AI models into real products that think, predict, and assist.",
    fullDesc:
      "I build AI-powered apps that actually make sense in production — from using OpenAI or Gemini APIs to custom training CNNs for real use cases. I experiment with generative models, YOLO for detection, and lightweight ML systems embedded into web apps. Not just proof-of-concepts — deployable, functional intelligence.",
    tags: ["Python", "TensorFlow", "PyTorch", "Gemini API", "LangChain"],
    roadmap: [
      {
        step: "Define Use Case",
        detail: "Understand what problem the AI is solving.",
      },
      {
        step: "Data Prep",
        detail: "Collect, clean, and prepare training datasets.",
      },
      {
        step: "Modeling",
        detail: "Train or integrate ML models (CNN, GAN, YOLO, etc.).",
      },
      {
        step: "Integration",
        detail: "Connect models via APIs or full-stack apps.",
      },
    ],
  },
  {
    slug: "automation-integrations",
    title: "Automation & Integrations",
    shortDesc:
      "Streamlining systems through intelligent automation and API bridges.",
    fullDesc:
      "I design automation pipelines that connect tools, sync data, and reduce manual work. From backend integrations to task automation scripts, I use Node.js, Firebase, and cloud functions to build seamless systems that talk to each other — saving teams hours of repetitive effort.",
    tags: ["APIs", "Node.js", "Firebase", "Zapier", "Automation"],
    roadmap: [
      {
        step: "Workflow Mapping",
        detail: "Analyze current processes to find automation opportunities.",
      },
      {
        step: "Integration Design",
        detail: "Plan how services communicate via APIs or webhooks.",
      },
      {
        step: "Automation Build",
        detail: "Implement background jobs, triggers, and real-time sync.",
      },
      {
        step: "Testing & Deploy",
        detail: "Run QA and deploy workflows to production environments.",
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    shortDesc: "Reliable cloud setups for scalable web and AI apps.",
    fullDesc:
      "I work with AWS and Azure to architect infrastructure that scales and stays online. From CI/CD pipelines to containerized deployments, my setups are clean, automated, and cost-efficient — making devops less painful and scaling frictionless.",
    tags: ["AWS", "Azure", "Docker", "CI/CD", "Kubernetes"],
    roadmap: [
      {
        step: "Infra Planning",
        detail: "Identify hosting, scaling, and security needs.",
      },
      {
        step: "Setup & Config",
        detail: "Build containerized apps and automate CI/CD pipelines.",
      },
      {
        step: "Deployment",
        detail: "Launch to cloud with load balancing and monitoring.",
      },
      {
        step: "Maintenance",
        detail: "Keep uptime high and optimize cloud spend.",
      },
    ],
  },
  {
    slug: "creative-design",
    title: "Creative & Digital Design",
    shortDesc:
      "Blending visuals, brand identity, and marketing strategy into one digital story.",
    fullDesc:
      "I design brand kits, social campaigns, and marketing visuals that help startups and creators stand out. Using Illustrator, Photoshop, and Canva, I focus on storytelling through design — backed by data-driven strategy and clean execution.",
    tags: ["Illustrator", "Photoshop", "Canva", "Meta Ads", "Branding"],
    roadmap: [
      {
        step: "Brand Strategy",
        detail: "Understand audience and brand message.",
      },
      {
        step: "Design Creation",
        detail: "Build cohesive visuals across digital platforms.",
      },
      {
        step: "Marketing Setup",
        detail: "Run campaigns, track reach, and optimize.",
      },
    ],
  },
];
