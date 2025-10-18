import { useState, useEffect } from 'react';

const throttle = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func(...args);
        timeoutId = null;
      }, delay);
    }
  };
};

export const useScrollSpy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const currentActiveId = ids
        .map(id => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -Infinity };
          return { id, top: element.offsetTop };
        })
        .filter(({ top }) => top <= scrollPosition + offset)
        .reduce((prev, curr) => (curr.top > prev.top ? curr : prev), { id: '', top: -Infinity })
        .id;
      
      // If at the very top, no section is active
      if (window.scrollY === 0) {
        setActiveId('');
      } else {
        setActiveId(currentActiveId);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener('scroll', throttledHandleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [ids, offset]);

  return activeId;
};
