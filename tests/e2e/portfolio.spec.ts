import AxeBuilder from '@axe-core/playwright';
import { test, expect } from './fixtures';

test('loads the production page and all visible images under the Pages base path', async ({
  page,
  request,
}) => {
  await page.goto('./');
  await expect(page).toHaveTitle(/Khalil Jackson/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Khalil');
  await expect(page.locator('.project-card')).toHaveCount(3);
  await expect(page.locator('.field-photo')).toHaveCount(4);
  const images = page.locator('img');
  for (const image of await images.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate(
          (element: HTMLImageElement) =>
            element.complete && element.naturalWidth > 0
        )
      )
      .toBe(true);
    await expect(image).toHaveAttribute('src', /^\/Web-Dev-Project\//);
  }
  const favicon = await request.get('favicon.svg');
  expect(favicon.ok()).toBe(true);
  expect(favicon.headers()['content-type']).toContain('image/svg+xml');
});

test('supports skip-link keyboard navigation and section anchors', async ({
  page,
}) => {
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' })
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  for (const section of ['Projects', 'About', 'Contact', 'Home']) {
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: section, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp('#' + section + '$'));
    await expect
      .poll(async () => {
        const target = await page.locator('#' + section).boundingBox();
        const header = await page.locator('header').boundingBox();
        return Boolean(
          target && header && target.y >= header.y + header.height - 1
        );
      })
      .toBe(true);
  }
  await expect(
    page.getByRole('link', { name: 'Say hello', exact: true })
  ).toHaveAttribute('href', 'mailto:Jacksonkhalil05@gmail.com');
});

test('remembers light and dark selections after reload', async ({ page }) => {
  await page.goto('./');
  for (const mode of ['dark', 'light']) {
    await page
      .getByRole('button', { name: 'Switch to ' + mode + ' mode' })
      .click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', mode);
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', mode);
    await expect(
      page.getByRole('button', {
        name: 'Switch to ' + (mode === 'dark' ? 'light' : 'dark') + ' mode',
      })
    ).toBeVisible();
  }
});

test('follows system preference until the visitor overrides it', async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.goto('./');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await page.emulateMedia({ colorScheme: 'dark' });
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('works when local storage is unavailable', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error('Storage blocked');
    };
    Storage.prototype.setItem = () => {
      throw new Error('Storage blocked');
    };
  });
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('switches real GymTracker screens with mouse and keyboard and opens the original', async ({
  page,
}) => {
  await page.goto('./');
  const group = page.getByRole('group', { name: 'GymTracker screenshots' });
  await expect(group.getByRole('button')).toHaveCount(3);
  await expect(
    group.getByRole('button', { name: 'Home', exact: true })
  ).toHaveAttribute('aria-pressed', 'true');
  for (const label of ['Home', 'Workout', 'Plan']) {
    await group.getByRole('button', { name: label, exact: true }).click();
    await expect(group.locator('[aria-pressed="true"]')).toHaveText(label);
    const screenshot = page.locator('#gymtracker-screen-preview');
    await expect(screenshot).toHaveAttribute('alt', new RegExp(label));
    await expect(screenshot).toHaveAttribute(
      'src',
      '/Web-Dev-Project/projects/gymtracker-' + label.toLowerCase() + '.jpg'
    );
    await expect
      .poll(() =>
        screenshot.evaluate(
          (image: HTMLImageElement) =>
            image.complete &&
            image.naturalWidth === 588 &&
            image.naturalHeight === 1280
        )
      )
      .toBe(true);
  }
  await group.getByRole('button', { name: 'Home', exact: true }).focus();
  await page.keyboard.press('Tab');
  await expect(
    group.getByRole('button', { name: 'Workout', exact: true })
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(
    group.getByRole('button', { name: 'Workout', exact: true })
  ).toHaveAttribute('aria-pressed', 'true');
  const popupPromise = page.waitForEvent('popup');
  await page
    .getByRole('link', {
      name: 'View full-size GymTracker Workout screenshot (opens in a new tab)',
    })
    .click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(/\/projects\/gymtracker-workout\.jpg$/);
});

test('opens original field photos and resume without broken paths', async ({
  page,
  request,
}) => {
  await page.goto('./');
  const links = page.locator('.field-photo-link, .resume-preview');
  await expect(links).toHaveCount(5);
  for (const link of await links.all()) {
    const href = await link.getAttribute('href');
    expect(href).toMatch(/^\/Web-Dev-Project\//);
    const response = await request.get(href!);
    expect(response.ok(), href!).toBe(true);
    expect(response.headers()['content-type']).toMatch(/^image\//);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noopener/);
  }
});

test('keeps controls and screenshots inside the viewport', async ({
  page,
}, testInfo) => {
  await page.goto('./');
  const widths =
    testInfo.project.name === 'mobile-safari'
      ? [320, 375]
      : [320, 375, 768, 1024, 1440];
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await expect
      .poll(() =>
        page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)
      )
      .toBe(true);
    for (const selector of [
      '.navbar-links',
      '.app-screen-preview',
      '.field-photo-grid',
    ]) {
      const element = page.locator(selector);
      await element.scrollIntoViewIfNeeded();
      const bounds = await element.boundingBox();
      expect(bounds).not.toBeNull();
      expect(bounds!.x).toBeGreaterThanOrEqual(0);
      expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width + 1);
    }
    const screenshot = await page.locator('.phone-screenshot').boundingBox();
    expect(screenshot).not.toBeNull();
    expect(screenshot!.width / screenshot!.height).toBeCloseTo(588 / 1280, 2);
  }
});

test('reveals content on scroll and immediately honors reduced motion', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('./');
  const reveal = page.locator('#Projects .section-heading');
  await reveal.scrollIntoViewIfNeeded();
  await expect(reveal).not.toHaveClass(/reveal-pending/);
  await expect(reveal).toHaveCSS('opacity', '1');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('.reveal-pending')).toHaveCount(0);
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
  await expect(page.locator('.phone-screenshot')).toHaveCSS(
    'transition-duration',
    '0s'
  );
});

for (const mode of ['light', 'dark'] as const) {
  test(
    'has no automated WCAG A/AA violations in ' + mode + ' mode',
    async ({ page }) => {
      await page.goto('./');
      if (mode === 'dark')
        await page.getByRole('button', { name: 'Switch to dark mode' }).click();
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(results.violations).toEqual([]);
    }
  );
}
