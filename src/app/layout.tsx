import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Junaid Babar - Full Stack Developer | AI/ML Enthusiast",
  description:
    "Full Stack Developer and AI/ML enthusiast building intelligent and scalable web platforms. Specializing in Next.js, React, Python, TensorFlow, and modern web technologies.",
  keywords: [
    "Junaid Babar",
    "Full Stack Developer",
    "AI/ML",
    "Machine Learning",
    "Web Development",
    "Next.js",
    "React",
    "Python",
    "TensorFlow",
    "Portfolio",
  ],
  authors: [{ name: "Junaid Babar" }],
  openGraph: {
    title: "Junaid Babar - Full Stack Developer | AI/ML Enthusiast",
    description:
      "Full Stack Developer and AI/ML enthusiast building intelligent and scalable web platforms.",
    url: "https://junaidbabar.vercel.app",
    siteName: "Junaid Babar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junaid Babar - Full Stack Developer | AI/ML Enthusiast",
    description:
      "Full Stack Developer and AI/ML enthusiast building intelligent and scalable web platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
