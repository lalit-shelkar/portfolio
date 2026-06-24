import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { FloatingHireCTA } from "@/components/FloatingHireCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HireMe } from "@/components/HireMe";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <HireMe />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <FloatingHireCTA />
    </>
  );
}
