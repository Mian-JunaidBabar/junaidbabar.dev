import {
  Code,
  Brain,
  Zap,
  Cloud,
  Globe,
  Palette,
  LucideIcon,
} from "lucide-react";

export interface SkillDetail {
  name: string;
  description: string;
}

export interface RoadmapStep {
  title: string;
  detail: string;
}

export interface Service {
  title: string;
  slug: string;
  icon: LucideIcon;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  skillsDetailed: SkillDetail[];
  roadmap: RoadmapStep[];
  targetClients: string[];
  relatedProjects: string[];
}

export const services: Service[] = [
  {
    title: "Web Development",
    slug: "web-development",
    icon: Code,
    shortDesc:
      "Responsive, maintainable web apps built with modern frameworks and clean architecture.",
    fullDesc:
      "I build production-ready web applications that prioritize performance, accessibility, and maintainability. I choose the right balance of server-rendering, client interactivity, and static assets depending on product needs and SEO requirements.",
    tags: ["Next.js", "Nest.js", "React", "TypeScript"],
    skillsDetailed: [
      {
        name: "Next.js (JS/TS)",
        description:
          "Server-rendered and hybrid React apps. I use App Router, server components and edge functions for fast, SEO-friendly pages and dynamic features.",
      },
      {
        name: "Nest.js (JS/TS)",
        description:
          "Structured backend for modular APIs. I use Nest for enterprise-style services, DI, and building maintainable microservices/APIs.",
      },
      {
        name: "Node / Express / React",
        description:
          "Core JS stack I use for API layers and client apps — REST endpoints, frontend state and component-driven UI.",
      },
      {
        name: "PHP / WordPress",
        description:
          "Legacy & CMS work. I use PHP for custom WordPress themes/plugins and CMS migrations when appropriate.",
      },
      {
        name: "SQL & NoSQL",
        description:
          "MySQL/Postgres for relational data, MongoDB for flexible schemas — I design DB structure for scale and queries.",
      },
      {
        name: "Realtime & Managed DBs",
        description:
          "Firebase / Supabase / Neon for realtime features and quick prototyping with hosted databases.",
      },
      {
        name: "Styling: Tailwind / Bootstrap",
        description:
          "Utility-first styling for consistent UI. Tailwind for componentized UI; Bootstrap for rapid marketing pages when suitable.",
      },
    ],
    roadmap: [
      {
        title: "Discovery",
        detail:
          "Requirements, user stories, core success metrics and tech constraints — we define scope and MVP.",
      },
      {
        title: "Architecture & Tech",
        detail:
          "Choose SSR/SSG, DB, hosting and third-party services; sketch data flow and API contracts.",
      },
      {
        title: "Prototype & UI",
        detail:
          "Clickable prototype and component library to validate UX before full build.",
      },
      {
        title: "Iterative Build",
        detail:
          "Sprints of features with tests, code reviews, and continuous integration.",
      },
      {
        title: "Performance & QA",
        detail:
          "Accessibility, Core Web Vitals, SEO checks, and cross-device testing.",
      },
      {
        title: "Deploy & Monitor",
        detail:
          "Production deployment (Vercel, AWS, OCI), logging and uptime monitoring; handoff docs.",
      },
    ],
    targetClients: [
      "Startups building an MVP",
      "SMBs migrating from CMS to modern stack",
      "Teams needing fast, SEO-first product sites",
    ],
    relatedProjects: [
      "Next.js",
      "React",
      "web",
      "full-stack",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    icon: Brain,
    shortDesc:
      "Applied ML: image models, detection, and LLM integrations that power product features.",
    fullDesc:
      "I build practical AI features (computer vision and LLM-based) that integrate with apps. My approach is pragmatic: start with a small proof-of-concept, validate on data, then integrate as an API/service.",
    tags: ["Python", "TensorFlow", "PyTorch", "YOLO", "LLM APIs"],
    skillsDetailed: [
      {
        name: "Python (TensorFlow & PyTorch)",
        description:
          "Model training, experimentation and evaluation. I implement CNNs for image tasks and prototype with TF/PyTorch.",
      },
      {
        name: "Object detection (YOLO)",
        description:
          "Real-time detection pipelines; I wrap YOLO models into inference services and connect outputs to apps (alerts, overlays).",
      },
      {
        name: "LLM APIs & LangChain",
        description:
          "Use Gemini/OpenAI endpoints and LangChain patterns for RAG and orchestration — integrate hallucination controls and retrieval layers.",
      },
      {
        name: "Generative & Research",
        description:
          "Experimented with GAN variants (DCGAN, CycleGAN) for research/experimentation; useful for prototyping creative features.",
      },
      {
        name: "Deployment & Demos",
        description:
          "Streamlit for fast demos; wrap models as REST microservices for production integration.",
      },
    ],
    roadmap: [
      {
        title: "Problem & Data Audit",
        detail:
          "Define objective, gather sample data and do quick feasibility checks.",
      },
      {
        title: "Proof-of-Concept",
        detail:
          "Train small model and run realistic tests to validate baseline performance.",
      },
      {
        title: "Integration Design",
        detail:
          "Wrap model as an API, define latency/throughput needs and data contracts.",
      },
      {
        title: "Deploy & Monitor",
        detail:
          "Containerized deployment or managed infra + monitoring and retraining plan.",
      },
      {
        title: "Iterate",
        detail:
          "Collect production data, fine-tune, and improve performance in cycles.",
      },
    ],
    targetClients: [
      "Product teams needing image/vision features",
      "Startups validating ML prototypes",
      "Teams adding LLM-powered features (search, summarization)",
    ],
    relatedProjects: [
      "AI",
      "TensorFlow",
      "ML",
      "Machine Learning",
      "Computer Vision",
      "Deep Learning",
      "CNN",
    ],
  },
  {
    title: "Automation & Integrations",
    slug: "automation-integrations",
    icon: Zap,
    shortDesc:
      "Connect services and automate workflows to remove repetitive work and sync data reliably.",
    fullDesc:
      "I design integration layers and automations that replace manual tasks: stable APIs, webhook flows, scheduled jobs, and event-driven syncs. The goal is reduced human error and faster throughput.",
    tags: ["REST", "Webhooks", "Serverless", "Zapier"],
    skillsDetailed: [
      {
        name: "API Development (REST/GraphQL)",
        description:
          "Design robust API endpoints and contracts used by frontends and external services.",
      },
      {
        name: "Webhooks & Eventing",
        description:
          "Build webhook listeners and event systems to react to third-party events in real time.",
      },
      {
        name: "Serverless & Scheduled Jobs",
        description:
          "Use serverless functions (Lambda/Cloud Functions) and scheduled tasks for background processing.",
      },
      {
        name: "No-code Integrators",
        description:
          "Zapier / Make for rapid integrations when a low-code approach fits the budget.",
      },
      {
        name: "Queues & Reliability",
        description:
          "Use Redis/Bull or RabbitMQ for reliable background jobs and retry logic in production.",
      },
    ],
    roadmap: [
      {
        title: "Workflow Audit",
        detail:
          "Map manual steps, pain points and integration opportunities before any code.",
      },
      {
        title: "Design & Contracts",
        detail:
          "Define APIs, events and failure modes — plan retries and idempotency.",
      },
      {
        title: "Build Connectors",
        detail:
          "Implement connectors, webhooks, or serverless functions and local tests.",
      },
      {
        title: "Automate & Monitor",
        detail:
          "Deploy automations, set alerts and dashboards for failures and latencies.",
      },
      {
        title: "Operationalize",
        detail:
          "Harden retry logic, add backfills and hand-off runbook for operations teams.",
      },
    ],
    targetClients: [
      "SMBs wanting to remove manual tasks",
      "SaaS teams needing 3rd-party integrations",
      "Operations teams improving data sync reliability",
    ],
    relatedProjects: [
      "Firebase",
      "API",
      "Streamlit",
      "automation",
      "integration",
    ],
  },
  {
    title: "WordPress Development",
    slug: "wordpress-development",
    icon: Globe,
    shortDesc:
      "Custom, performant WordPress sites and stores with CMS-friendly workflows.",
    fullDesc:
      "I build WordPress sites that balance design flexibility with performance. From custom themes to WooCommerce stores, I focus on governable admin UX, speed and security.",
    tags: ["WordPress", "WooCommerce", "PHP", "cPanel"],
    skillsDetailed: [
      {
        name: "Theme & Plugin Development",
        description:
          "Custom themes and plugins for tailored CMS experiences and unique functionality.",
      },
      {
        name: "WooCommerce & eCommerce",
        description:
          "Store setup, payment integration and optimization for conversion and performance.",
      },
      {
        name: "cPanel & Hosting Management",
        description:
          "Site migrations, DNS, backups and server-level optimizations on shared hosting or VPS.",
      },
      {
        name: "SEO & Performance",
        description:
          "Core Web Vitals improvements, caching, and image optimization for better search results.",
      },
    ],
    roadmap: [
      {
        title: "Content & UX Audit",
        detail:
          "Map pages, flows and conversion points (for stores: product flows and checkout).",
      },
      {
        title: "Theme & Hosting",
        detail:
          "Choose or build theme, configure hosting and caching, and secure the site.",
      },
      {
        title: "Customization & QA",
        detail:
          "Add custom features, test for cross-browser and device compatibility.",
      },
      {
        title: "Launch & Handoff",
        detail:
          "Final launch, backup plan and admin training for content teams.",
      },
    ],
    targetClients: [
      "Small businesses needing a marketing site",
      "Ecommerce sellers wanting manageable stores",
      "Agencies needing a reliable WordPress developer",
    ],
    relatedProjects: ["WordPress", "PHP", "cms", "MySQL"],
  },
  {
    title: "Cloud & Infrastructure",
    slug: "cloud-infrastructure",
    icon: Cloud,
    shortDesc:
      "Design and run cloud infrastructure for apps and ML workloads with repeatable IaC patterns.",
    fullDesc:
      "I architect and provision infrastructure for web and AI applications. Emphasis on automation, cost-conscious design and monitoring so systems stay reliable as usage grows.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes"],
    skillsDetailed: [
      {
        name: "AWS & Azure",
        description:
          "VMs, managed databases, storage and IAM. I build secure environments using provider best practices.",
      },
      {
        name: "Containerization & Orchestration",
        description:
          "Docker for packaging, Kubernetes when apps need horizontal scale and resilience.",
      },
      {
        name: "Infrastructure as Code",
        description:
          "Terraform or CloudFormation for reproducible, auditable provisioning.",
      },
      {
        name: "CI/CD & Monitoring",
        description:
          "Pipelines (GitHub Actions / GitLab) and logging/monitoring so deployments are safe and observable.",
      },
    ],
    roadmap: [
      {
        title: "Requirements & Cost",
        detail:
          "Define performance needs, security constraints and cost targets to pick the right services.",
      },
      {
        title: "Architecture",
        detail:
          "Draw the architecture, choose IaC pattern and design backup/restore strategies.",
      },
      {
        title: "Provision & Deploy",
        detail:
          "Provision infra, containerize app and push through CI/CD with automated tests.",
      },
      {
        title: "Observe & Optimize",
        detail:
          "Add monitoring, alerts and iterate for efficiency and reliability.",
      },
    ],
    targetClients: [
      "Teams going into production",
      "Startups scaling usage",
      "ML teams needing GPU or managed infra",
    ],
    relatedProjects: ["cloud", "devops", "infrastructure", "deployment"],
  },
  {
    title: "Creative & Digital Design",
    slug: "creative-design",
    icon: Palette,
    shortDesc:
      "Brand assets, UI mockups and ad creatives that convert — from identity to ads.",
    fullDesc:
      "I create brand kits, UI prototypes and marketing assets. The focus is measurable creative that supports product goals — not just pretty images.",
    tags: ["Illustrator", "Photoshop", "Figma", "Meta Ads"],
    skillsDetailed: [
      {
        name: "Brand Identity (Illustrator/Photoshop)",
        description:
          "Logos, brand guidelines and assets that maintain consistency across touchpoints.",
      },
      {
        name: "UI/UX & Prototyping (Figma)",
        description:
          "Low and high-fidelity prototypes that communicate user flows and layout decisions.",
      },
      {
        name: "Ad Creatives & Management",
        description:
          "Create and manage Meta ad creatives, A/B tests and tracking for eCommerce stores.",
      },
      {
        name: "Rapid Content (Canva)",
        description:
          "Quick-turn social and marketing assets for campaigns and organic growth.",
      },
    ],
    roadmap: [
      {
        title: "Discovery & Tone",
        detail:
          "Define brand voice, competitors and visual direction with a short workshop.",
      },
      {
        title: "Identity & Assets",
        detail:
          "Deliver logo, color palette, fonts and a mini brand kit for reuse.",
      },
      {
        title: "Campaign & Creative",
        detail:
          "Design ad templates and test creatives; iterate based on engagement and metrics.",
      },
      {
        title: "Handoff",
        detail:
          "Provide final assets, source files and campaign recommendations.",
      },
    ],
    targetClients: [
      "Ecommerce brands needing creatives and ads",
      "Startups looking for a visual identity",
      "Marketing teams that need quick-turn assets",
    ],
    relatedProjects: ["design", "branding", "marketing", "ui", "ux"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
