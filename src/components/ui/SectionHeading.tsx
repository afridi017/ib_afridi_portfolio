import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  /** Small mono label rendered above the title. */
  eyebrow: string;
  /** Section title — pass JSX when you need a line break or a gradient word. */
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  /** Optional trailing slot, e.g. a GitHub button. */
  action?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <Reveal
      className={`flex flex-wrap items-end gap-4 ${
        centered ? 'flex-col items-center text-center' : 'justify-between'
      }`}
    >
      <div className={centered ? 'max-w-[640px]' : ''}>
        <p className="mono-label">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-[40px] leading-[0.92] tracking-[-0.03em] md:text-[54px]">
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 text-[14.5px] leading-[1.6] text-ink/60 ${
              centered ? 'mx-auto max-w-[560px]' : 'max-w-[620px]'
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </Reveal>
  );
}
