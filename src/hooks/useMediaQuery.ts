import { useCallback, useSyncExternalStore } from 'react';

/**
 * Tracks a CSS media query.
 * Built on useSyncExternalStore so there is a single source of truth and no
 * cascading renders when the query flips.
 */
export function useMediaQuery(query: string, defaultValue = false): boolean {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (typeof window === 'undefined' || !window.matchMedia) return () => {};
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener('change', onStoreChange);
      return () => mediaQuery.removeEventListener('change', onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return defaultValue;
    return window.matchMedia(query).matches;
  }, [query, defaultValue]);

  return useSyncExternalStore(subscribe, getSnapshot, () => defaultValue);
}
