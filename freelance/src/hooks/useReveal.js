import { useEffect, useRef, useState } from 'react';

// Adds `seen` once the element has entered the viewport, and keeps it.
// Media inside a section only starts loading/animating after this flips.
export const useReveal = ({ threshold = 0.15, rootMargin = '0px 0px -8% 0px' } = {}) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, seen];
};
