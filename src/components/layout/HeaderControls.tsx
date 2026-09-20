import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import type { ThemeName } from '@/data/profile';

interface HeaderControlsProps {
  theme: ThemeName;
  themeLabel: string;
  nextThemeLabel: string;
  onCycleTheme: () => void;
  onOpenMenu: () => void;
}

export function HeaderControls({
  theme,
  themeLabel,
  nextThemeLabel,
  onCycleTheme,
  onOpenMenu,
}: HeaderControlsProps) {
  return (
    <div className="fixed right-5 top-5 z-[60] flex items-center gap-2 md:right-7 md:top-7">
      <ThemeToggle
        theme={theme}
        label={themeLabel}
        nextLabel={nextThemeLabel}
        onCycle={onCycleTheme}
      />
      <button
        type="button"
        onClick={onOpenMenu}
        aria-label="Open menu"
        className="grid h-[44px] w-[44px] place-items-center rounded-full border border-line bg-panel/85 text-ink shadow-card backdrop-blur-xl md:hidden"
      >
        <Menu className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
