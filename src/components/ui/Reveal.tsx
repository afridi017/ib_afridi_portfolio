import type { ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface RevealProps {
  children: ReactNode;
  /** Seconds to wait before the element animates in. */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Fades + lifts its children into view on first scroll.
 * Falls back to a static block when the visitor prefers reduced motion.
 */
export function Reveal({ children, delay = 0, className = '', as }: RevealProps) {
  const Component = (as ?? 'div') as ElementType;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Component
      ref={ref}
      data-visible={inView ? 'true' : 'false'}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Component>
  );
}
