/** @type {import('next').NextConfig} */
const path = require('path');
const locales = require('./lib/locales');

const localeDirectory = './messages';
const localeData = locales.getLocaleDataFromLocaleFiles(localeDirectory);
const i18nLocales = locales.getI18nLocales(localeData);

const nextConfig = {
  webpack: { fs: 'empty' },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: i18nLocales,
    defaultLocale: 'en',
  },
  env: {
    languages: localeData,
  },
};

module.exports = nextConfig;
