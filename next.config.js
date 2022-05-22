/** @type {import('next').NextConfig} */
const path = require('path');
const locales = require('./lib/locales');

const localeDirectory = './messages';
const defaultLocale = 'en';
const languageData =
  locales.getLanguageISOAndNameFromLocaleFiles(localeDirectory);
const i18nLocales = locales.getI18nLocales(languageData);
const routes = locales.getLocalizedRoutes(localeDirectory, defaultLocale);
const flatRoutes = locales.getFlatRoutes(localeDirectory, defaultLocale);

const nextConfig = {
  webpack: { fs: 'empty' },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: i18nLocales,
    defaultLocale: defaultLocale,
  },
  env: {
    languages: languageData,
  },
  routes: routes,
  flatRoutes: flatRoutes,
};

module.exports = nextConfig;
