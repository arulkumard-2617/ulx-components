'use strict';

function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Convert a demo component import path to the generated demo-sources module path.
 *
 * @param {string} demoImportPath e.g. ../../../components/Demo/Chip/Basic
 * @returns {string|null} e.g. ../../../demo-sources/demo/chip/basic
 */
function demoImportPathToSourceModule(demoImportPath) {
  const match = demoImportPath.match(/components\/(Demo|Template)\/(.+)$/);
  if (!match) {
    return null;
  }

  const [, kind, rest] = match;
  const parts = rest.split('/');
  const fileBase = parts.pop();
  const slugParts = parts.map(toKebabCase);
  const category = kind.toLowerCase();

  return `../../../demo-sources/${category}/${[...slugParts, toKebabCase(fileBase)].join('/')}`;
}

module.exports = {
  toKebabCase,
  demoImportPathToSourceModule
};
