
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Yogeeta Bodade | Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <ScrollReveal>
        <About />
      </ScrollReveal>
      
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default Index;
