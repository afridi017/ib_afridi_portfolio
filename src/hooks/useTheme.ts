import { useCallback, useEffect, useState } from 'react';
import type { ThemeName } from '@/data/profile';

const STORAGE_KEY = 'ib-afridi-theme';
const THEMES: ThemeName[] = ['luxury', 'classic', 'light'];
const THEME_COLOR: Record<ThemeName, string> = {
  luxury: '#0B0F19',
  classic: '#06101F',
  light: '#F8FAFC',
};

const LABELS: Record<ThemeName, string> = {
  luxury: 'Luxury',
  classic: 'Classic Dark',
  light: 'Light',
};

function readStoredTheme(): ThemeName {
  if (typeof window === 'undefined') return 'luxury';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && (THEMES as string[]).includes(stored)) return stored as ThemeName;
  } catch {
    /* storage can be blocked — ignore and use the default */
  }
  return 'luxury';
}

/**
 * Three-theme design system controller.
 * Writes `data-theme` on <html>, persists the choice and syncs the
 * browser UI colour (mobile address bar).
 */
export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>(readStoredTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = THEME_COLOR[theme];

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const cycleTheme = useCallback(() => {
    setTheme((current) => {
      const nextIndex = (THEMES.indexOf(current) + 1) % THEMES.length;
      return THEMES[nextIndex];
    });
  }, []);

  return { theme, setTheme, cycleTheme, label: LABELS[theme], themes: THEMES, labels: LABELS };
}
