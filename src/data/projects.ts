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
    image: "/projects/omni.png",
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
  {
    slug: "plant-disease-detector",
    name: "AI Plant Disease Detector",
    tagline: "High-Accuracy Crop Health Analysis for Farmers",
    description:
      "A CNN-powered web app that identifies 30+ plant diseases with 97% validation accuracy and provides AI-generated treatment advice.",
    image: "/projects/pdd.png",
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
      "I built and deployed a user-friendly web application that leverages a Convolutional Neural Network (CNN) to identify over 30 plant diseases with a 98% training and 97% validation accuracy. The system is enhanced with a Generative AI (Gemini) integration to provide farmers with immediate, actionable advice and preventive guidance, turning a powerful model into a practical tool.",
    keyFeatures: [
      {
        title: "High-Performance CNN Model",
        description:
          "Engineered a deep learning model with TensorFlow, achieving a 97% validation accuracy on the PlantVillage dataset, demonstrating robust and reliable classification.",
      },
      {
        title: "Generative AI Guidance",
        description:
          "Integrated the classification output with the Gemini LLM to provide clear, context-aware treatment and prevention strategies in natural language.",
      },
      {
        title: "Interactive Web Interface",
        description:
          "Developed a simple and accessible front-end with Streamlit, allowing for easy image uploads and instant, understandable results for non-technical users.",
      },
      {
        title: "End-to-End Deployment",
        description:
          "Managed the complete project lifecycle from model training and validation to deployment as a publicly accessible web application.",
      },
    ],
    techStack: ["Python", "TensorFlow", "CNNs", "Gemini API", "Streamlit"],
    gallery: [],
  },
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
  {
    slug: "golearn-lms",
    name: "GoLearn LMS (Web & Mobile)",
    tagline: "A Multi-Platform Learning Management System",
    description:
      "A comprehensive LMS for academic institutions, featuring a PHP web app and a native Java Android app.",
    image: "/projects/golearn.png",
    category: "Full-Stack Application",
    year: "2023",
    role: "Full Stack Developer",
    githubUrl: "https://github.com/Mian-JunaidBabar/GoLearn-LMS-Web-App",
    isFeatured: false,
    tags: ["Web App", "Mobile App", "Education", "PHP", "Java"],
    tech: ["PHP", "MySQL", "Java", "Android Studio", "Firebase"],
    status: "Completed",
    problem:
      "Educational institutions often need a centralized, digital platform to manage courses, assignments, and communication between teachers and students, but commercial solutions can be expensive and inflexible.",
    solution:
      "I engineered a complete, multi-platform Learning Management System. The core is a robust PHP web application for administrative control and desktop access. This is complemented by a native Java Android app, providing students and faculty with on-the-go access to their academic world via Firebase for real-time data synchronization.",
    keyFeatures: [
      {
        title: "Role-Based Access Control",
        description:
          "Secure, distinct interfaces and permissions for administrators, teachers, and students.",
      },
      {
        title: "Course & Content Management",
        description:
          "Teachers can create courses, upload materials, and post announcements.",
      },
      {
        title: "Assignment & Grading System",
        description:
          "A full workflow for creating, submitting, and grading student assignments.",
      },
      {
        title: "Cross-Platform Real-time Sync",
        description:
          "Firebase integration ensures that actions taken on the web app are instantly reflected on the Android app, and vice-versa.",
      },
    ],
    techStack: [
      "PHP",
      "MySQL",
      "HTML/CSS",
      "Java",
      "Android Studio",
      "Firebase",
    ],
    gallery: [],
  },
  {
    slug: "skin-cancer-detector",
    name: "Skin Cancer Lesion Classifier",
    tagline: "An Early-Stage CNN Model for Medical Image Analysis",
    description:
      "A foundational deep learning project to classify skin lesions using the HAM10000 dataset.",
    image: "/projects/scd.png",
    category: "AI & Machine Learning",
    year: "2023",
    role: "AI/ML Developer",
    githubUrl: "https://github.com/Mian-JunaidBabar/Skin-Cancer-Detection",
    isFeatured: false,
    tags: ["AI", "Machine Learning", "Healthcare Tech"],
    tech: ["Python", "PyTorch", "CNNs", "Scikit-learn"],
    status: "Completed",
    problem:
      "Automated analysis of dermatoscopic images is a complex computer vision challenge that could one day assist dermatologists in early-stage cancer detection. This requires robust data preprocessing and carefully designed neural network architectures.",
    solution:
      "As a foundational exploration into medical imaging, I developed a Convolutional Neural Network (CNN) using PyTorch to classify different types of skin lesions from the HAM10000 dataset. The project focused heavily on the critical steps of data cleaning, image augmentation to prevent overfitting, and model training, achieving a validation accuracy of 70%. This was a valuable exercise in handling complex, imbalanced datasets and a crucial step in my machine learning journey.",
    keyFeatures: [
      {
        title: "Complex Data Preprocessing",
        description:
          "Implemented extensive image augmentation and normalization techniques to prepare the imbalanced dataset for training.",
      },
      {
        title: "CNN Architecture",
        description:
          "Designed and implemented a custom Convolutional Neural Network architecture in PyTorch tailored for image classification.",
      },
      {
        title: "Model Training & Validation",
        description:
          "Managed the complete training and validation pipeline, tracking metrics to evaluate model performance.",
      },
      {
        title: "Foundation for Advanced Models",
        description:
          "The experience gained from this project directly contributed to the higher accuracy achieved in the subsequent Plant Disease Detector project.",
      },
    ],
    techStack: ["Python", "PyTorch", "Pandas", "Scikit-learn", "Matplotlib"],
    gallery: [],
  },
];
