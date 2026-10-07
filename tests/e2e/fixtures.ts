import { test as base, expect } from '@playwright/test';

export const test = base.extend<{ runtimeErrors: void }>({
  runtimeErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      const capture = (error: Error) => errors.push(error.message);
      page.on('pageerror', capture);
      await use();
      page.off('pageerror', capture);
      expect(errors, 'The page should not throw JavaScript errors').toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };
