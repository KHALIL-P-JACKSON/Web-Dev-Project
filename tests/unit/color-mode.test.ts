import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useColorMode } from '../../src/hooks/useColorMode';
import { mockMedia } from '../support/media';

const systemQuery = '(prefers-color-scheme: dark)';

describe('color mode', () => {
  it.each([false, true])(
    'follows the initial system preference (dark=%s)',
    (dark) => {
      mockMedia({ [systemQuery]: dark });
      const { result } = renderHook(() => useColorMode());
      expect(result.current.colorMode).toBe(dark ? 'dark' : 'light');
      expect(document.documentElement.dataset.theme).toBe(
        result.current.colorMode
      );
    }
  );

  it('remembers an explicit selection across visits', () => {
    mockMedia();
    const first = renderHook(() => useColorMode());
    act(() => first.result.current.toggleColorMode());
    expect(localStorage.getItem('kj-color-mode')).toBe('dark');
    first.unmount();
    const second = renderHook(() => useColorMode());
    expect(second.result.current.colorMode).toBe('dark');
    expect(document.documentElement.style.colorScheme).toBe('dark');
  });

  it('follows system changes until the visitor chooses a theme', () => {
    const media = mockMedia();
    const { result } = renderHook(() => useColorMode());
    act(() => media.change(systemQuery, true));
    expect(result.current.colorMode).toBe('dark');
    act(() => result.current.toggleColorMode());
    act(() => media.change(systemQuery, false));
    act(() => media.change(systemQuery, true));
    expect(result.current.colorMode).toBe('light');
    expect(document.documentElement.dataset.theme).toBe('light');
  });

  it('ignores invalid saved preferences', () => {
    mockMedia();
    localStorage.setItem('kj-color-mode', 'invalid');
    const { result } = renderHook(() => useColorMode());
    expect(result.current.colorMode).toBe('light');
  });

  it('works when reading browser storage is blocked', () => {
    mockMedia({ [systemQuery]: true });
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage blocked');
    });
    const { result } = renderHook(() => useColorMode());
    expect(result.current.colorMode).toBe('dark');
  });

  it('still toggles when saving to browser storage is blocked', () => {
    mockMedia();
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage blocked');
    });
    const { result } = renderHook(() => useColorMode());
    act(() => result.current.toggleColorMode());
    expect(result.current.colorMode).toBe('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('removes system listeners when unmounted', () => {
    const media = mockMedia();
    const { unmount } = renderHook(() => useColorMode());
    expect(media.listenerCount(systemQuery)).toBe(1);
    unmount();
    expect(media.listenerCount(systemQuery)).toBe(0);
  });
});
