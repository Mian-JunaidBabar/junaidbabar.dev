export interface EducationItem {
  institution: string;
  logo: string;
  degree: string;
  duration: string;
  details: string[];
}

export interface PublicationItem {
  title: string;
  journal: string;
  description: string;
  coAuthors: string[];
  link: string;
}

export const education: EducationItem[] = [
  {
    institution: "Superior University, Lahore",
    logo: "/logos/superior-university-logo.png",
    degree: "Bachelor of Science in Computer Science",
    duration: "2022 – Present",
    details: [
      "A focused curriculum centered on applying theoretical computer science principles to real-world challenges in AI and software engineering.",
      "Specialized coursework in Data Structures & Algorithms, Machine Learning, and Cloud Computing.",
      "Co-authored and published a peer-reviewed research paper on the application of deep learning for cloud security.",
    ],
  },
  {
    institution: "Government Islamia Graduate College, Civil Lines",
    logo: "/logos/islamia-college-logo.png",
    degree: "FSc, Pre-Engineering",
    duration: "2020 – 2022",
    details: [
      "Attended a prestigious and historic institution, building a strong analytical and problem-solving foundation.",
      "Completed a rigorous curriculum in Mathematics, Physics, and Chemistry.",
    ],
  },
];

export const publication: PublicationItem = {
  title:
    "Research Trends In Deep Learning and Machine Learning for Cloud Computing Security",
  journal: "Spectrum of Engineering Sciences, Vol. 2 No. 4 (2024)",
  description:
    "This peer-reviewed paper explores the critical intersection of AI and cloud security. We analyzed advanced machine learning techniques for detecting and preventing threats in cloud environments. Key areas of our research included privacy-preserving methods like federated learning and strategies for improving the resilience of AI models against adversarial attacks.",
  coAuthors: ["Shoaib", "Mohsin Ali", "Zain ul Abidien", "Muavia Hasan"],
  link: "https://sesjournal.com/index.php/1/article/view/76",
};
