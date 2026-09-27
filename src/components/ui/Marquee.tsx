interface MarqueeProps {
  items: string[];
  /** Duplicate count — 2 is enough for a seamless loop. */
  repeat?: number;
}

export function Marquee({ items, repeat = 2 }: MarqueeProps) {
  return (
    <div
      className="mt-8 flex h-[46px] items-center overflow-hidden rounded-full border border-line bg-panel/80 backdrop-blur md:mt-2"
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {Array.from({ length: repeat }).map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="flex items-center gap-8 pr-8 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/70"
          >
            {items.map((item) => (
              <span key={`${groupIndex}-${item}`} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="inline-block h-1 w-1 rounded-full bg-brand" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
