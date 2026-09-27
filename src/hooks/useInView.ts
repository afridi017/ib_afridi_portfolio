import { useEffect, useRef, useState, type RefObject } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
  /** Keep the element visible once it has entered the viewport. */
  once?: boolean;
}

/**
 * Observes a single element and reports whether it is inside the viewport.
 * Used by <Reveal /> and by the stat counters. Content renders visible on the
 * server and in browsers without IntersectionObserver support.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: Options = {}): { ref: RefObject<T>; inView: boolean } {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
