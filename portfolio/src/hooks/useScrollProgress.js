import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook to track scroll progress and active section
 * @param {string[]} sectionIds - Array of section IDs to track
 * @returns {{ scrollProgress: number, activeSection: string }}
 */
export function useScrollProgress(sectionIds = ['hero', 'projects', 'fun', 'contact']) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  const handleScroll = useCallback(() => {
    // Calculate overall scroll progress (0 to 1)
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(window.scrollY / totalHeight, 1);
    setScrollProgress(progress);

    // Determine active section based on scroll position
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sectionIds[i]);
        break;
      }
    }
  }, [sectionIds]);

  useEffect(() => {
    // Initial calculation
    handleScroll();

    // Add scroll listener with passive flag for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { scrollProgress, activeSection };
}

export default useScrollProgress;
