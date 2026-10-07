import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Reveal from '../../src/components/Reveal';
import { mockMedia } from '../support/media';

const motionQuery = '(prefers-reduced-motion: reduce)';

function mockObserver() {
  let notify: IntersectionObserverCallback | undefined;
  const observer = { observe: vi.fn(), disconnect: vi.fn() };
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(function (callback: IntersectionObserverCallback) {
      notify = callback;
      return observer;
    })
  );
  return {
    observer,
    intersect() {
      notify?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        observer as unknown as IntersectionObserver
      );
    },
  };
}

describe('scroll reveals', () => {
  it('keeps content visible when reduced motion is requested', () => {
    mockMedia({ [motionQuery]: true });
    const { observer } = mockObserver();
    render(
      <Reveal>
        <p>Portfolio content</p>
      </Reveal>
    );
    expect(screen.getByText('Portfolio content').parentElement).not.toHaveClass(
      'reveal-pending'
    );
    expect(observer.observe).not.toHaveBeenCalled();
  });

  it('keeps content visible when IntersectionObserver is unavailable', () => {
    mockMedia();
    Reflect.deleteProperty(window, 'IntersectionObserver');
    render(
      <Reveal>
        <p>Portfolio content</p>
      </Reveal>
    );
    expect(screen.getByText('Portfolio content').parentElement).not.toHaveClass(
      'reveal-pending'
    );
  });

  it('reveals intersecting content and stops observing it', () => {
    mockMedia();
    const { observer, intersect } = mockObserver();
    render(
      <Reveal>
        <p>Portfolio content</p>
      </Reveal>
    );
    const wrapper = screen.getByText('Portfolio content').parentElement;
    expect(wrapper).toHaveClass('reveal-pending');
    act(intersect);
    expect(wrapper).not.toHaveClass('reveal-pending');
    expect(observer.disconnect).toHaveBeenCalled();
  });

  it('shows pending content immediately when reduced motion is enabled', () => {
    const media = mockMedia();
    const { observer } = mockObserver();
    const { unmount } = render(
      <Reveal>
        <p>Portfolio content</p>
      </Reveal>
    );
    act(() => media.change(motionQuery, true));
    expect(screen.getByText('Portfolio content').parentElement).not.toHaveClass(
      'reveal-pending'
    );
    expect(observer.disconnect).toHaveBeenCalled();
    unmount();
    expect(media.listenerCount(motionQuery)).toBe(0);
  });
});
