const path = require('path');
const fs = require('fs');

/**
 * Take all JSON files inside the 'messages' folder. Read the content of each file
 * to build an object containing the ISO code and the name of each existing language.
 * @return {Object}      An object with the ISO code and the name of a language
 */
exports.getLanguageISOAndNameFromLocaleFiles = (localeDirectory) => {
  let fileNames;
  try {
    fileNames = fs.readdirSync(localeDirectory);
  } catch (e) {
    return [];
  }

  const locales = fileNames.flatMap((fileName) => {
    if (path.extname(fileName) != '.json') {
      return [];
    }

    const locale = fileName.replace(/\.json$/, '');
    const localeFilePath = localeDirectory + '/' + fileName;
    const localeFileContent = fs.readFileSync(localeFilePath, 'utf8');
    let localeContent;

    try {
      localeContent = JSON.parse(localeFileContent);
    } catch (e) {
      return [];
    }

    if (!localeContent.language) {
      return [];
    }

    return {
      iso: locale,
      name: localeContent.language,
    };
  });

  return locales;
};

/**
 * Transform an input object to the array needed by the module next-intl/react-intl
 * @return {Array}      An array with all the supported languages
 */
exports.getI18nLocales = (localeData) => {
  const locales = localeData.map((locale) => {
    return locale.iso;
  });

  return locales;
};

/**
 * Take all JSON files inside the 'messages' folder. Read the content of each file
 * to build an array containing the route of each page defined in the JSON grouped by language
 * @return {Object}      An object with all the page routes
 */
exports.getLocalizedRoutes = (localeDirectory, defaultLocale) => {
  let fileNames;
  try {
    fileNames = fs.readdirSync(localeDirectory);
  } catch (e) {
    return [];
  }

  let localizedRoutes = {};
  fileNames.flatMap((fileName) => {
    if (path.extname(fileName) != '.json') {
      return [];
    }

    const locale = fileName.replace(/\.json$/, '');
    const localeFilePath = localeDirectory + '/' + fileName;
    const localeFileContent = fs.readFileSync(localeFilePath, 'utf8');
    let localeContent;

    // Check if the content of the file is a valid JSON
    try {
      localeContent = JSON.parse(localeFileContent);
    } catch (e) {
      return [];
    }

    // Check if the JSON have the language property
    if (!localeContent.language) {
      return [];
    }

    // Check if the JSON have the Pages property
    if (!localeContent.Pages) {
      return [];
    }

    let pathData = {};
    for (let key in localeContent.Pages) {
      // Skip the root path
      if (localeContent.Pages[key].path === '/') {
        continue;
      }

      // Build all routes
      let pagePath;
      if (locale === defaultLocale) {
        pagePath = '/' + localeContent.Pages[key].path;
      } else {
        pagePath = '/' + locale + '/' + localeContent.Pages[key].path;
      }
      pathData[key] = pagePath;
    }

    localizedRoutes[locale] = pathData;
  });

  return localizedRoutes;
};

/**
 * Take all JSON files inside the 'messages' folder. Read the content of each file
 * to build an array containing the routes of each page defined in the JSON.
 * @return {Array}      An array with all the pages routes
 */
exports.getFlatRoutes = (localeDirectory, defaultLocale) => {
  let fileNames;
  try {
    fileNames = fs.readdirSync(localeDirectory);
  } catch (e) {
    return [];
  }

  let flatRoutes = [];
  fileNames.flatMap((fileName) => {
    if (path.extname(fileName) != '.json') {
      return [];
    }

    const locale = fileName.replace(/\.json$/, '');
    const localeFilePath = localeDirectory + '/' + fileName;
    const localeFileContent = fs.readFileSync(localeFilePath, 'utf8');
    let localeContent;

    // Check if the content of the file is a valid JSON
    try {
      localeContent = JSON.parse(localeFileContent);
    } catch (e) {
      return [];
    }

    // Check if the JSON have the language property
    if (!localeContent.language) {
      return [];
    }

    // Check if the JSON have the Pages property
    if (!localeContent.Pages) {
      return [];
    }

    for (let key in localeContent.Pages) {
      // Skip the root path
      if (localeContent.Pages[key].path === '/') {
        continue;
      }

      // Build all routes
      let pagePath;
      if (locale === defaultLocale) {
        pagePath = '/' + localeContent.Pages[key].path;
      } else {
        pagePath = '/' + locale + '/' + localeContent.Pages[key].path;
      }

      flatRoutes.push(pagePath);
    }
  });

  return flatRoutes;
};

/**
 * Take all JSON files inside the 'messages' folder. Read the content of each JSON file
 * to build an array containing the routes of a desired page.
 * @return {Array}      An array with all the page's routes
 */
exports.getRoutesByPage = (localeDirectory, defaultLocale, pageName) => {
  let fileNames;
  try {
    fileNames = fs.readdirSync(localeDirectory);
  } catch (e) {
    return [];
  }

  let pageRoutes = {};
  fileNames.flatMap((fileName) => {
    if (path.extname(fileName) != '.json') {
      return [];
    }

    const locale = fileName.replace(/\.json$/, '');
    const localeFilePath = localeDirectory + '/' + fileName;
    const localeFileContent = fs.readFileSync(localeFilePath, 'utf8');
    let localeContent;

    // Check if the content of the file is a valid JSON
    try {
      localeContent = JSON.parse(localeFileContent);
    } catch (e) {
      return [];
    }

    // Check if the JSON have the language property
    if (!localeContent.language) {
      return [];
    }

    // Check if the JSON have the Pages property
    if (!localeContent.Pages[pageName]) {
      return [];
    }

    let pathData = {};

    // Skip the root path
    if (localeContent.Pages[pageName].path === '/') {
      return [];
    }

    // Build all routes
    const pagePath = '/' + localeContent.Pages[pageName].path;

    pageRoutes[locale] = pagePath;
  });

  return pageRoutes;
};

/**
 * Take a locale, a path and an object with all pages' routes grouped by language
 * to return the name of the page related to the path.
 * The name is originally set as property in ths JSON files inside the 'messages' folder
 * @return {String}      The name of the page
 */
exports.getPageName = (locale, path, routes, defaultLocale) => {
  const getKey = (obj, val) => Object.keys(obj).find((key) => obj[key] === val);

  let localizedPath = '';
  if (locale === defaultLocale) {
    localizedPath = '/' + path;
  } else {
    localizedPath = '/' + locale + '/' + path;
  }
  return getKey(routes[locale], localizedPath);
};
