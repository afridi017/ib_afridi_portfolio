import type { ThemeName } from '@/data/profile';

interface ThemeToggleProps {
  theme: ThemeName;
  label: string;
  nextLabel: string;
  onCycle: () => void;
}

const DOT_COLOR: Record<ThemeName, string> = {
  luxury: 'bg-brand',
  classic: 'bg-brand-cyan',
  light: 'bg-brand-pink',
};

export function ThemeToggle({ theme, label, nextLabel, onCycle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onCycle}
      aria-label={`Colour theme: ${label}. Switch to ${nextLabel}.`}
      title={`Switch to ${nextLabel}`}
      className="flex h-[44px] items-center gap-3 rounded-full border border-line bg-panel/85 px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/80 shadow-card backdrop-blur-xl transition hover:border-line-strong"
    >
      <span className={`h-2 w-2 animate-pulse rounded-full ${DOT_COLOR[theme]}`} />
      {label}
      <span
        aria-hidden="true"
        className="grid h-5 w-5 place-items-center rounded-full bg-brand-grad text-[10px] text-white"
      >
        ◐
      </span>
    </button>
  );
}
