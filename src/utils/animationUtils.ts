
/**
 * Utility functions for handling animations
 */

/**
 * Initialize animation observers for elements with specific classes
 * This function should be called when a page component mounts
 */
export const initAnimationObservers = (): () => void => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const fadeInSections = document.querySelectorAll('.fade-in-section');
  
  // Options for the observer
  const observerOptions = {
    root: null, // relative to viewport
    rootMargin: '0px',
    threshold: 0.1, // trigger when 10% of the element is visible
  };
  
  // Observer for general animation elements
  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        // Once animated, no need to observe anymore
        animateObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observer for fade-in sections
  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Once animated, no need to observe anymore
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Start observing all elements
  animatedElements.forEach(el => animateObserver.observe(el));
  fadeInSections.forEach(el => fadeInObserver.observe(el));
  
  // Return a cleanup function to disconnect observers when component unmounts
  return () => {
    animateObserver.disconnect();
    fadeInObserver.disconnect();
  };
};

/**
 * Add staggered animation delay to a collection of elements
 * @param selector The CSS selector for elements to animate
 * @param baseDelay Base delay in milliseconds
 * @param increment Delay increment for each subsequent element
 */
export const addStaggeredAnimationDelay = (
  selector: string, 
  baseDelay: number = 100, 
  increment: number = 100
): void => {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el, index) => {
    const delay = baseDelay + (index * increment);
    (el as HTMLElement).style.animationDelay = `${delay}ms`;
  });
};
