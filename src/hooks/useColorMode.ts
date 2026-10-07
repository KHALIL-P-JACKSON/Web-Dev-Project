import { useEffect, useState } from 'react';

export type ColorMode = 'light' | 'dark';
const storageKey = 'kj-color-mode';

function readPreference(): ColorMode | null {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
}

export function useColorMode() {
  const [preference, setPreference] = useState(readPreference);
  const [systemMode, setSystemMode] = useState<ColorMode>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  const colorMode = preference ?? systemMode;

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemMode(event.matches ? 'dark' : 'light');
    };
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = colorMode;
    document.documentElement.style.colorScheme = colorMode;
  }, [colorMode]);

  function toggleColorMode() {
    const next = colorMode === 'dark' ? 'light' : 'dark';
    setPreference(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // The toggle still works when the browser blocks persistent storage.
    }
  }

  return { colorMode, toggleColorMode };
}
