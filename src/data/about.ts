export interface About {
  name: string;
  title: string;
  location: string;
  summary: string;
  bio: string;
  focusAreas: string[];
  contactEmail: string;
  profileImage: string;
}

export const about = {
  name: "Junaid Babar",
  title: "Full Stack Developer & AI Systems Builder",
  location: "Lahore, Pakistan",
  summary:
    "I build intelligent and scalable systems that solve real problems — blending AI with web engineering to create tools that actually make life easier.",
  bio: "I'm the kind of developer who doesn't just code features; I build systems that think. My work spans full-stack web development and AI integration — from designing smooth frontends with React and Next.js to engineering backends that process data intelligently. I believe technology should be fast, functional, and smart enough to adapt to users, not the other way around. Currently, I'm working on Harmoni — an AI-powered collaboration tool that unifies task management, meetings, and communication in one workspace.",
  focusAreas: [
    "AI-Driven Web Apps",
    "Automation & Integrations",
    "Cloud Infrastructure",
    "Product Design & UX Thinking",
  ],
  contactEmail: "junaidbabar121@gmail.com",
  profileImage: "/profile.jpg",
};
