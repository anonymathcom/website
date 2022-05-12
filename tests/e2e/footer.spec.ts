import { test, expect } from '@playwright/test';
import { locales, defaultLocale } from './helpers/locales';

test.describe.parallel(
  'A link to the About page is present in footer links and opens the right page',
  () => {
    locales.forEach(function (locale: string) {
      test(locale.toLocaleUpperCase(), async ({ page }) => {
        let url = process.env.E2E_START_URL ?? 'http://localhost:3000';
        if (defaultLocale != locale) {
          url = url + '/' + locale;
        }
        const expectedURL = url + '/about';

        await page.goto(url);
        await page.click('.footer-links a.about');
        await expect(page).toHaveURL(expectedURL, { timeout: 3000 });
      });
    });
  }
);

test.describe.parallel(
  'A link to the Contribute page is present in footer links and opens the right page',
  () => {
    locales.forEach(function (locale: string) {
      test(locale.toLocaleUpperCase(), async ({ page }) => {
        let url = process.env.E2E_START_URL ?? 'http://localhost:3000';
        if (defaultLocale != locale) {
          url = url + '/' + locale;
        }
        const expectedURL = url + '/contribute';

        await page.goto(url);
        await page.click('.footer-links a.contribute');
        await expect(page).toHaveURL(expectedURL, { timeout: 3000 });
      });
    });
  }
);
