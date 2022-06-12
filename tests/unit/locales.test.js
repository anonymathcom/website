const locales = require('../../lib/locales');
const nextConfig = require('../../next.config.js');

test('Empty array is returned when directory not exists', () => {
  const data =
    locales.getLanguageISOAndNameFromLocaleFiles('/notexists/folder');
  expect(data).toHaveLength(0);
});

test('Only JSON files with the "language" key set are recognized', () => {
  const data = locales.getLanguageISOAndNameFromLocaleFiles('messages');
  expect(data).toHaveLength(3);
  const expectedData = [
    { iso: 'ca', name: 'Català' },
    { iso: 'en', name: 'English' },
    { iso: 'es', name: 'Español' },
  ];
  expect(data).toMatchObject(expectedData);
});

test('The array expected by i18n module is returned', () => {
  const localeData = locales.getLanguageISOAndNameFromLocaleFiles('messages');
  const data = locales.getI18nLocales(localeData);
  const expectedData = ['ca', 'en', 'es'];
  expect(data).toMatchObject(expectedData);
});

test('All localized routes are returned', () => {
  const data = locales.getLocalizedRoutes(
    'messages',
    nextConfig.i18n.defaultLocale
  );
  const expectedData = {
    ca: {
      Contribute: '/ca/contribuir',
    },
    en: {
      Contribute: '/contribute',
    },
    es: {
      Contribute: '/es/contribuir',
    },
  };
  expect(data).toMatchObject(expectedData);
});

test('All routes of a page are returned', () => {
  const data = locales.getRoutesByPage(
    'messages',
    nextConfig.i18n.defaultLocale,
    'Contribute'
  );
  const expectedData = {
    ca: '/contribuir',
    en: '/contribute',
    es: '/contribuir',
  };
  expect(data).toMatchObject(expectedData);
});

test('All the pages names are correct', () => {
  expect(
    locales.getPageName(
      'ca',
      'contribuir',
      nextConfig.routes,
      nextConfig.i18n.defaultLocale
    )
  ).toBe('Contribute');
  expect(
    locales.getPageName(
      'en',
      'contribute',
      nextConfig.routes,
      nextConfig.i18n.defaultLocale
    )
  ).toBe('Contribute');
  expect(
    locales.getPageName(
      'es',
      'contribuir',
      nextConfig.routes,
      nextConfig.i18n.defaultLocale
    )
  ).toBe('Contribute');
});
