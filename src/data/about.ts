export interface About {
  name: string;
  title: string;
  location: string;
  heroSummary: string;
  homePageBio: string;
  fullBio: string;
  focusAreas: { title: string; description: string }[];
  contactEmail: string;
  profileImage: string;
  toolkit: string[];
  socialLinks: { linkedin?: string; github?: string; whatsapp?: string };
  resumeUrl?: string;
}

export const about: About = {
  name: "Junaid Babar",
  title: "AI-Powered Web Application Specialist",
  location: "Lahore, Pakistan",
  contactEmail: "junaidbabar121@gmail.com",
  profileImage: "/profile.jpg",
  resumeUrl: "/resume.pdf",

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mian-junaidbabar/",
    github: "https://github.com/mian-junaidbabar",
    whatsapp: "+923374990542",
  },

  heroSummary:
    "I help innovative companies build intelligent web applications that automate tasks, analyze data, and create smarter user experiences.",

  homePageBio:
    "Beyond the code, I'm a product-focused engineer who bridges the gap between technical execution and business goals. I thrive on building tools that are not only powerful but also intuitive and enjoyable to use.",

  fullBio: `From the moment I realized that a few lines of code could create something that thinks and reacts, I was hooked. For me, computer science isn't just about building applications; it's about solving puzzles, finding that elegant, efficient solution that turns a complex business problem into a simple, intuitive tool.

  My philosophy is built on a foundation of clean code and clear communication. I believe the best products emerge from a deep understanding of the user's needs, which is why I focus on bridging the gap between a powerful backend and a user-friendly frontend. I thrive on the process of experimenting, breaking things, and rebuilding them better, always with the end goal in sight: did this solve the problem it was made for?

  Ultimately, I build intelligent systems and AI-powered web platforms for businesses that want to work smarter, not harder. Whether it's automating a workflow or uncovering data-driven insights, my goal is to create technology that feels less like another browser tab and more like a trusted teammate.
  `,

  focusAreas: [
    {
      title: "AI-Driven Web Apps",
      description:
        "I build web applications that go beyond static pages. By integrating machine learning, I create smarter, more personalized experiences that can analyze data, automate decisions, and provide real value to your users.",
    },
    {
      title: "Automation & Integrations",
      description:
        "I specialize in connecting disparate systems and automating repetitive workflows. Whether it's integrating with third-party APIs or building custom scripts, my goal is to save your team time and eliminate manual effort.",
    },
    {
      title: "Full-Stack Development",
      description:
        "I manage the entire lifecycle of a project, from the database architecture to the user-facing interface. This end-to-end ownership ensures a cohesive, robust, and seamless product experience.",
    },
    {
      title: "Product & UX Thinking",
      description:
        "I'm a developer who thinks like a product manager. I focus on the 'why' behind the 'what,' ensuring that every feature I build is not only technically sound but also solves a real user problem and aligns with your business goals.",
    },
  ],

  toolkit: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Firebase",
    "Tailwind CSS",
    "Git",
    "Docker",
    "AWS",
  ],
};

export const homePageAboutSection = {
  eyebrow: "About Me",
  title: "A builder who bridges strategy and execution",
  approachItems: [
    {
      icon: "User",
      title: "User-Centric Design",
      description:
        "I start with the end-user, ensuring the final product is intuitive, accessible, and solves a real-world problem.",
    },
    {
      icon: "Rocket",
      title: "Scalable Architecture",
      description:
        "I build with clean code and robust architecture, creating systems that are designed to grow and adapt with your business.",
    },
    {
      icon: "Brain",
      title: "AI-Powered Solutions",
      description:
        "I leverage AI not as a buzzword, but as a practical tool to build smarter, more efficient, and data-driven applications.",
    },
  ],
};
