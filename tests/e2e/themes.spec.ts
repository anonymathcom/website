import { test, expect } from '@playwright/test';
import { locales, defaultLocale } from './helpers/locales';

test.describe.parallel(
  'Open theme menu in home page and click dark mode to set page to corresponding dark theme',
  () => {
    locales.forEach(function (locale: string) {
      test(locale.toLocaleUpperCase(), async ({ page }) => {
        let url = process.env.E2E_START_URL ?? 'http://localhost:3000';
        if (defaultLocale != locale) {
          url = url + '/' + locale;
        }

        await page.goto(url);
        await page.click('img[alt=themeMode]');
        await page.click('#dark-option');

        const locator = page.locator('html');
        await expect
          .soft(locator)
          .toHaveAttribute('data-theme', 'dark', { timeout: 3000 });
      });
    });
  }
);

test.describe.parallel(
  'Open theme menu in home page and click light mode to set page to corresponding light theme',
  () => {
    locales.forEach(function (locale: string) {
      test(locale.toLocaleUpperCase(), async ({ page }) => {
        let url = process.env.E2E_START_URL ?? 'http://localhost:3000';
        if (defaultLocale != locale) {
          url = url + '/' + locale;
        }

        await page.goto(url);
        await page.click('img[alt=themeMode]');
        await page.click('#light-option');
        const locator = page.locator('html');
        await expect
          .soft(locator)
          .toHaveAttribute('data-theme', 'light', { timeout: 3000 });
      });
    });
  }
);
