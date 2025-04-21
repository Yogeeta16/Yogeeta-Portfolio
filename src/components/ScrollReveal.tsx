
import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handleScroll = () => {
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (top < windowHeight * 0.8) {
        element.classList.add("active");
      }
    };
    
    // Call once to check initial elements in view
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div
      ref={elementRef}
      className={`reveal ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
