import { useMediaQuery } from './useMediaQuery';

/**
 * True when the visitor has asked their OS to reduce motion.
 * All animation-heavy components check this before running.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
