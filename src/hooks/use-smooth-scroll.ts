import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change with smooth behavior
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Small delay to ensure the new page is loaded
    const timeoutId = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  // Add smooth scrolling to all internal links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        // For internal links, scroll to top smoothly
        e.preventDefault();
        
        // Navigate to the link first
        window.location.href = link.href;
        
        // Then scroll to top
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }, 100);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}; 