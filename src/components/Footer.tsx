
import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              Yogeeta<span className="text-purple-light">.dev</span>
            </h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Full Stack Developer specializing in Java & MERN Stack
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/Yogeeta16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-purple-light transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yogeeta-bodade-1a7687228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background hover:text-purple-light transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:bodadeyogeeta2001@gmail.com"
                className="text-background hover:text-purple-light transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm font-medium text-background hover:text-purple-light transition-colors"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Yogeeta Bodade. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground">
              Made with <span className="text-purple-light">❤</span> by Yogeeta Bodade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
