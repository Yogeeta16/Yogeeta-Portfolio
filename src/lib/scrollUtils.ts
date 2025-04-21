
/**
 * Utility function to handle scroll animations
 * This gets called on initial load to activate any elements already in viewport
 */
export const initScrollAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const checkIfInView = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight * 0.8) {
        element.classList.add('active');
      }
    });
  };
  
  // Run once on load
  checkIfInView();
  
  // Add scroll event listener
  window.addEventListener('scroll', checkIfInView);
  
  // Clean up on component unmount
  return () => {
    window.removeEventListener('scroll', checkIfInView);
  };
};
