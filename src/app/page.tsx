import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <Navbar />
      <main className="w-full">
        <Hero />
        <div className="space-y-24">
          <About />
          <Services />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
