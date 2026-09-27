import { useCallback, useEffect, useState } from 'react';

interface ActiveSection {
  activeSection: string;
  /** Optimistic update — used when a nav link is clicked. */
  setActiveSection: (id: string) => void;
}

/**
 * Tracks which section currently occupies the reading area of the page so
 * navigation can highlight it. Clicking a link also jumps ahead of the
 * observer for instant feedback.
 */
export function useActiveSection(
  sectionIds: string[],
  fallback = sectionIds[0] ?? '',
): ActiveSection {
  const [activeSection, setActive] = useState(fallback);
  const key = sectionIds.join('|');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sections = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible?.target.id) setActive(mostVisible.target.id);
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.15, 0.4, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [key]);

  const setActiveSection = useCallback((id: string) => setActive(id), []);

  return { activeSection, setActiveSection };
}
