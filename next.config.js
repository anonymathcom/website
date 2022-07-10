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

let deployPath = 'http://localhost:3000';
if (process.env.NETLIFY === 'true') {
  deployPath = process.env.URL;
  if (
    process.env.CONTEXT === 'deploy-preview' ||
    process.env.CONTEXT === 'staging'
  ) {
    deployPath = process.env.DEPLOY_PRIME_URL;
  }
}

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
  deployPath: deployPath,
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;
