import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Eases a number from 0 → target once `active` becomes true.
 * Visitors who prefer reduced motion jump straight to the final value.
 */
export function useCountUp(target: number, active: boolean, durationMs = 1400): number {
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = reducedMotion ? 0 : durationMs;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = duration > 0 ? Math.min(1, (now - start) / duration) : 1;
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, durationMs, reducedMotion]);

  return value;
}
