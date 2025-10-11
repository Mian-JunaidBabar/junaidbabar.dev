import {
  Code,
  Brain,
  Zap,
  Cloud,
  Globe,
  Palette,
  LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  icon: LucideIcon;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  skills: string[];
  relatedProjects: string[];
}

export const services: Service[] = [
  {
    title: "Web Development",
    slug: "web-development",
    icon: Code,
    shortDesc:
      "I build responsive and high-performance web apps using modern JavaScript frameworks and clean architecture principles.",
    fullDesc:
      "I specialize in creating modern, scalable web applications that deliver exceptional user experiences. From server-side rendered applications to static sites, I leverage the latest web technologies to build fast, accessible, and maintainable solutions. My approach focuses on clean code, performance optimization, and responsive design that works seamlessly across all devices.",
    tags: ["Next.js", "Node.js", "Tailwind", "MySQL", "TypeScript", "React"],
    skills: [
      "Full-stack development with Next.js and React",
      "RESTful API design and development",
      "Database design and optimization (MySQL, PostgreSQL)",
      "Responsive UI/UX implementation",
      "Server-side rendering and static site generation",
      "Authentication and authorization systems",
      "Performance optimization and SEO",
      "Testing and deployment automation",
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
      "I design and deploy intelligent systems that learn from data — from predictive models to generative AI apps.",
    fullDesc:
      "I develop AI-powered solutions that transform data into actionable insights. From building predictive models to implementing generative AI applications, I work with cutting-edge machine learning frameworks to create intelligent systems. My expertise includes natural language processing, computer vision, and integrating AI APIs to build practical, real-world applications.",
    tags: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Gemini API",
      "OpenAI",
      "Scikit-learn",
    ],
    skills: [
      "Machine learning model development and training",
      "Generative AI application development",
      "Natural language processing (NLP)",
      "Computer vision and image processing",
      "API integration (Gemini, OpenAI, Claude)",
      "Data preprocessing and feature engineering",
      "Model evaluation and optimization",
      "Deployment of ML models in production",
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
      "I streamline workflows and connect platforms through custom APIs, task automation, and real-time sync.",
    fullDesc:
      "I build automation solutions that eliminate manual tasks and connect disparate systems seamlessly. Whether it's creating custom API integrations, automating business workflows, or building real-time data synchronization systems, I help organizations save time and reduce errors through intelligent automation.",
    tags: ["REST", "Firebase", "Streamlit", "Zapier", "Python", "Node.js"],
    skills: [
      "Custom API development and integration",
      "Workflow automation and orchestration",
      "Real-time data synchronization",
      "Webhook implementation and management",
      "Third-party service integration",
      "Task scheduling and background jobs",
      "Event-driven architecture",
      "Process optimization and efficiency gains",
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
      "I create and optimize WordPress sites that blend design flexibility with performance and SEO best practices.",
    fullDesc:
      "I develop custom WordPress solutions that combine beautiful design with robust functionality. From custom theme development to plugin creation, I build WordPress sites that are fast, secure, and easy to manage. My work emphasizes performance optimization, SEO best practices, and creating intuitive admin experiences.",
    tags: ["WordPress", "Elementor", "PHP", "MySQL", "WooCommerce", "ACF"],
    skills: [
      "Custom WordPress theme development",
      "Plugin development and customization",
      "WooCommerce store setup and optimization",
      "Page builder customization (Elementor, Gutenberg)",
      "Advanced Custom Fields (ACF) implementation",
      "WordPress performance optimization",
      "SEO and Core Web Vitals optimization",
      "WordPress security and maintenance",
    ],
    relatedProjects: ["WordPress", "PHP", "cms", "MySQL"],
  },
  {
    title: "Cloud & Infrastructure",
    slug: "cloud-infrastructure",
    icon: Cloud,
    shortDesc:
      "I handle scalable deployments and infrastructure setup for web and AI apps across leading cloud providers.",
    fullDesc:
      "I design and implement cloud infrastructure that scales with your needs. From containerized deployments to serverless architectures, I work with leading cloud providers to build reliable, cost-effective infrastructure. My focus is on automation, monitoring, and ensuring high availability for mission-critical applications.",
    tags: ["AWS", "Oracle Cloud", "Docker", "Kubernetes", "CI/CD", "Vercel"],
    skills: [
      "Cloud architecture design (AWS, Oracle Cloud)",
      "Container orchestration with Docker and Kubernetes",
      "CI/CD pipeline setup and automation",
      "Infrastructure as Code (Terraform, CloudFormation)",
      "Serverless architecture implementation",
      "Database hosting and management",
      "Monitoring and logging setup",
      "Cost optimization and resource management",
    ],
    relatedProjects: ["cloud", "devops", "infrastructure", "deployment"],
  },
  {
    title: "Creative & Digital Design",
    slug: "creative-design",
    icon: Palette,
    shortDesc:
      "I use design and marketing tools to shape brand identity, visual storytelling, and digital outreach.",
    fullDesc:
      "I combine technical skills with creative design to build compelling digital experiences. From brand identity to digital marketing campaigns, I use industry-standard design tools to create visual content that resonates with audiences. My work bridges the gap between aesthetics and functionality.",
    tags: [
      "Illustrator",
      "Photoshop",
      "Meta Ads",
      "Figma",
      "Canva",
      "Branding",
    ],
    skills: [
      "Brand identity design and development",
      "Digital marketing asset creation",
      "Social media graphics and campaigns",
      "UI/UX design and prototyping",
      "Photo editing and manipulation",
      "Vector illustration and icon design",
      "Marketing campaign strategy",
      "Meta Ads and digital advertising",
    ],
    relatedProjects: ["design", "branding", "marketing", "ui", "ux"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
