import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <main className="w-full">
        <div className="space-y-24">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
