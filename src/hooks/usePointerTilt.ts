import { useEffect, useRef, useState, type RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

export interface TiltValues {
  rotateY: number;
  rotateX: number;
  translateY: number;
}

/**
 * Subtle 3D tilt that follows the pointer over the referenced element.
 * Disabled for touch devices and for visitors who prefer reduced motion.
 */
export function usePointerTilt<T extends HTMLElement = HTMLDivElement>(
  strength = 16,
): { ref: RefObject<T>; tilt: TiltValues; active: boolean } {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState<TiltValues>({ rotateY: 0, rotateX: 0, translateY: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const node = ref.current;
    if (!node || window.matchMedia('(hover: none)').matches) return;

    const handleMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      if (x < -0.15 || x > 1.15 || y < -0.15 || y > 1.15) return;

      setActive(true);
      setTilt({
        rotateY: (x - 0.5) * strength,
        rotateX: (0.5 - y) * (strength * 0.7),
        translateY: (0.5 - y) * 6,
      });
    };

    const handleLeave = () => {
      setActive(false);
      setTilt({ rotateY: 0, rotateX: 0, translateY: 0 });
    };

    window.addEventListener('pointermove', handleMove);
    node.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      node.removeEventListener('pointerleave', handleLeave);
    };
  }, [strength, reducedMotion]);

  return { ref, tilt, active };
}
