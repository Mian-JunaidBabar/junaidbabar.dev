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

export const about: About = {
  name: "John Doe",
  title: "AI/ML Engineer & Web Developer",
  location: "Lahore, Pakistan",
  summary:
    "Passionate about building intelligent systems and scalable web solutions.",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  focusAreas: [
    "Web Development",
    "AI Systems",
    "Automation",
    "Cloud Infrastructure",
  ],
  contactEmail: "john@example.com",
  profileImage: "/profile.jpg",
};
