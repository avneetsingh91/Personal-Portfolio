import { useEffect } from 'react';

/**
 * Global Scroll Animation Manager
 * Observes all scroll-animated elements and triggers animations when they enter viewport
 */
const ScrollAnimationManager = () => {
  useEffect(() => {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes based on element type
            const element = entry.target;
            
            if (element.classList.contains('scroll-item')) {
              element.classList.add('scroll-animate-in');
            }
            if (element.classList.contains('scroll-card')) {
              element.classList.add('scroll-animate-in');
            }
            if (element.classList.contains('scroll-text')) {
              element.classList.add('scroll-animate-in');
            }
            if (element.classList.contains('scroll-image')) {
              element.classList.add('scroll-animate-in');
            }
            if (element.classList.contains('scroll-lift')) {
              element.classList.add('scroll-animate-in');
            }
            if (element.classList.contains('scroll-list-item')) {
              element.classList.add('scroll-animate-in');
            }
          }
        });
      },
      {
        threshold: [0, 0.15, 0.3],
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
      }
    );

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-item, .scroll-card, .scroll-text, .scroll-image, .scroll-lift, .scroll-list-item'
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return null;
};

export default ScrollAnimationManager;
