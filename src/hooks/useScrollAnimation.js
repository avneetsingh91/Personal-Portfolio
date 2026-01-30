import { useEffect, useRef } from 'react';

/**
 * Hook to apply 3D scroll animations to elements
 * Detects when element enters viewport and applies transforms
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const {
    threshold = 0.2,
    triggerOnce = false,
    intensity = 1,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('scroll-animate-in');
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          element.classList.remove('scroll-animate-in');
        }
      },
      { threshold }
    );

    observer.observe(element);

    // Add scroll parallax effect
    const handleScroll = () => {
      if (!entry.isIntersecting) return;
      const rect = element.getBoundingClientRect();
      const scrollProgress = 1 - rect.top / window.innerHeight;
      const translateY = scrollProgress * 30 * intensity;
      const scaleVal = 0.95 + scrollProgress * 0.05;
      
      element.style.transform = `translateY(${translateY}px) scale(${scaleVal})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, triggerOnce, intensity]);

  return ref;
};

export default useScrollAnimation;
