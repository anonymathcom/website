import { test, expect } from '@playwright/test';
import { locales, defaultLocale } from './helpers/locales';
import { getRoutesByPage } from '../../lib/locales';

test.describe
  .parallel('A link to the Contribute page is present in footer links and opens the right page', () => {
  const routes = getRoutesByPage('messages', defaultLocale, 'Contribute');
  locales.forEach(function (locale: any) {
    test(locale.toLocaleUpperCase(), async ({ page }) => {
      let url = process.env.E2E_START_URL ?? 'http://localhost:3000';
      if (defaultLocale != locale) {
        url = url + '/' + locale;
      }
      const expectedURL = url + routes[locale];

      await page.goto(url);
      await page.click('.footer-links a.contribute');
      await expect(page).toHaveURL(expectedURL, { timeout: 3000 });
    });
  });
});
