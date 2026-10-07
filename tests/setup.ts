import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  cleanup();
  if (typeof localStorage !== 'undefined') localStorage.clear();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  if (typeof document !== 'undefined') {
    delete document.documentElement.dataset.theme;
    document.documentElement.style.colorScheme = '';
  }
});
