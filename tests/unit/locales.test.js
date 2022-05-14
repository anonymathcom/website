const locales = require('../../lib/locales');

test('Empty array is returned when directory not exists', () => {
  const data = locales.getLocaleDataFromLocaleFiles('/notexists/folder');
  expect(data).toHaveLength(0);
});

test('Only JSON files with the "language" key set are recognized', () => {
  const data = locales.getLocaleDataFromLocaleFiles('tests/unit/messages');
  expect(data).toHaveLength(3);
  const expectedData = [
    { iso: 'ca', name: 'Català' },
    { iso: 'en', name: 'English' },
    { iso: 'es', name: 'Español' },
  ];
  expect(data).toMatchObject(expectedData);
});

test('The array expected by i18n module is returned', () => {
  const localeData = locales.getLocaleDataFromLocaleFiles(
    'tests/unit/messages'
  );
  const data = locales.getI18nLocales(localeData);
  const expectedData = ['ca', 'en', 'es'];
  expect(data).toMatchObject(expectedData);
});
