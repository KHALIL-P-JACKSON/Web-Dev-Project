import { vi } from 'vitest';

type Listener = (event: MediaQueryListEvent) => void;

export function mockMedia(initial: Record<string, boolean> = {}) {
  const queries = new Map<
    string,
    {
      matches: boolean;
      listeners: Set<Listener>;
      media: MediaQueryList;
    }
  >();

  function get(query: string) {
    const existing = queries.get(query);
    if (existing) return existing;
    const state = {
      matches: initial[query] ?? false,
      listeners: new Set<Listener>(),
    };
    const media = {
      media: query,
      get matches() {
        return state.matches;
      },
      onchange: null,
      addEventListener: vi.fn((_type: string, listener: Listener) =>
        state.listeners.add(listener)
      ),
      removeEventListener: vi.fn((_type: string, listener: Listener) =>
        state.listeners.delete(listener)
      ),
      addListener: vi.fn((listener: Listener) => state.listeners.add(listener)),
      removeListener: vi.fn((listener: Listener) =>
        state.listeners.delete(listener)
      ),
      dispatchEvent: vi.fn(() => true),
    } as unknown as MediaQueryList;
    const entry = { ...state, media };
    // Both the getter and emitter must read the same mutable state.
    Object.defineProperty(entry, 'matches', {
      get: () => state.matches,
      set: (value: boolean) => {
        state.matches = value;
      },
    });
    queries.set(query, entry);
    return entry;
  }

  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => get(query).media)
  );
  return {
    change(query: string, matches: boolean) {
      const entry = get(query);
      entry.matches = matches;
      const event = { matches, media: query } as MediaQueryListEvent;
      entry.listeners.forEach((listener) => listener(event));
    },
    listenerCount(query: string) {
      return get(query).listeners.size;
    },
  };
}
