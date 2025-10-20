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

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc: "Responsive, maintainable web apps using modern frameworks.",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod massa at magna tempus, nec interdum augue porta.",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
    roadmap: [
      {
        step: "Discovery",
        detail: "Understand project goals and requirements.",
      },
      {
        step: "Design & Prototype",
        detail: "Create wireframes and UX flows to validate the experience.",
      },
      {
        step: "Development",
        detail: "Build scalable front and backend with best practices.",
      },
      {
        step: "Deployment",
        detail: "Launch and monitor on Vercel or preferred cloud provider.",
      },
    ],
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    shortDesc: "Practical AI systems — vision, NLP, and intelligent APIs.",
    fullDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet semper lacus, vel tempor odio tristique sed.",
    tags: ["Python", "TensorFlow", "OpenAI API", "LangChain"],
    roadmap: [
      { step: "Data Prep", detail: "Collect and clean data for training." },
      {
        step: "Modeling",
        detail: "Train, fine-tune, and evaluate models against goals.",
      },
      {
        step: "Integration",
        detail: "Deploy the model behind an API or app experience.",
      },
    ],
  },
];
