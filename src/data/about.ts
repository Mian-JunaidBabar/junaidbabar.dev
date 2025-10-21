export interface About {
  name: string;
  title: string;
  location: string;
  heroSummary: string;
  homePageBio: string;
  fullBio: string;
  focusAreas: string[];
  contactEmail: string;
  profileImage: string;
}

// Updated about.ts

export const about: About = {
  name: "Junaid Babar",
  title: "Full Stack Developer Specializing in AI-Powered Web Applications",
  location: "Lahore, Pakistan",

  // JOB #1: The 5-Second Hook for the HERO SECTION.
  // It must be client-focused. It answers "What can you do FOR ME?"
  heroSummary:
    "I help innovative companies build intelligent web applications that automate tasks, analyze data, and create smarter user experiences.",

  // JOB #2: A slightly more detailed snippet for the ABOUT SECTION ON THE HOME PAGE.
  // This is a bridge that makes them want to click "Read full bio".
  homePageBio:
    "Beyond the code, I'm a product-focused engineer who bridges the gap between technical execution and business goals. I thrive on building tools that are not only powerful but also intuitive and enjoyable to use.",

  // JOB #3: Your full story for the DEDICATED /ABOUT PAGE.
  // This is where your original 'bio' content should go.
  fullBio:
    "I'm the kind of developer who doesn't just code features; I build systems that think. My work spans full-stack web development and AI integration — from designing smooth frontends with React and Next.js to engineering backends that process data intelligently. I believe technology should be fast, functional, and smart enough to adapt to users, not the other way around. Currently, I'm working on Harmoni — an AI-powered collaboration tool that unifies task management, meetings, and communication in one workspace.",

  focusAreas: [
    "AI-Driven Web Apps",
    "Automation & Integrations",
    "Full-Stack Development",
    "Product & UX Thinking",
  ],
  contactEmail: "junaidbabar121@gmail.com",
  profileImage: "/profile.jpg",
};
