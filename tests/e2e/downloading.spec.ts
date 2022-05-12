import { test, expect } from '@playwright/test';
import { locales, defaultLocale } from './helpers/locales';

test.describe.parallel('The template can be downloaded', () => {
  locales.forEach(function (locale: string) {
    test(locale.toLocaleUpperCase(), async ({ page }) => {
      test.setTimeout(5000);
      let url = process.env.E2E_START_URL ?? 'http://localhost:3000';
      if (defaultLocale != locale) {
        url = url + '/' + locale;
      }
      await page.goto(url);

      const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('a#download').click(),
      ]);
    });
  });
});
