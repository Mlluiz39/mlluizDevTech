// Utility function to handle scroll reveal animations with improved performance
export const setupScrollReveal = () => {
  // Use more efficient options for IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Only add active class when element comes into view
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          entry.target.classList.add('active');
        });
        // Once revealed, no need to keep observing
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px' // Start animation slightly before element comes into view
  });

  // Delay observation to improve initial page load performance
  const elements = document.querySelectorAll('.reveal-on-scroll');
  
  if (elements.length > 0) {
    elements.forEach((element) => observer.observe(element));
  }

  return () => {
    elements.forEach((element) => observer.unobserve(element));
  };
};

// Helper to add delay to animations
export const getDelayStyle = (index: number, baseDelay: number = 100) => {
  return {
    animationDelay: `${index * baseDelay}ms`,
  };
};

// Additional animation utility for different directions
export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export const getRevealClass = (direction: RevealDirection = 'up'): string => {
  switch (direction) {
    case 'up':
      return 'reveal-from-bottom';
    case 'down':
      return 'reveal-from-top';
    case 'left':
      return 'reveal-from-right';
    case 'right':
      return 'reveal-from-left';
    default:
      return 'reveal-fade';
  }
};
