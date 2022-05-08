const path = require('path');
const fs = require('fs');

/**
 * Take all JSON files inside the 'messages' folder. Read the content of each file
 * to build an object containing the ISO code and the name of each existing language.
 * @return {Object}      An object with the ISO code and the name of a language
 */
exports.getLocaleDataFromLocaleFiles = (localeDirectory) => {
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
