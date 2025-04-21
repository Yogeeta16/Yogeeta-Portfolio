import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-light/5 via-transparent to-purple-dark/5" />
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-purple-light/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-purple-dark">
                Yogeeta Bodade
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              Full Stack Developer specializing in Java & MERN Stack
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              B.Tech in Information Technology graduate with experience in building
              scalable web applications and robust backend systems.
            </p>

            <div className="flex items-center gap-2 mb-4 text-purple animate-pulse">
              <Sparkles className="w-5 h-5" />
              <span className="text-lg">Ready for any opportunity to grow professionally</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild variant="default" className="rounded-full">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Yogeeta16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-purple transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/yogeeta-bodade-1a7687228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-purple transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:bodadeyogeeta2001@gmail.com"
                className="text-foreground hover:text-purple transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+919911576133"
                className="text-foreground hover:text-purple transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer glow blur */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-light to-purple-dark opacity-20 blur-xl" />

              {/* Main gradient border */}
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-purple-light to-purple-dark" />

              {/* Image container */}
              <div className="absolute inset-5 rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img
                  src="/Image/8c976f73-ab15-467e-9fd6-addf7d85d602.png"
                  alt="Yogeeta Bodade"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-purple">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
