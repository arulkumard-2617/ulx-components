/**
 * Join CSS class tokens: drop falsy values, dedupe, single space.
 * @param {...(string|undefined|null|false)} parts
 * @returns {string}
 */
function joinClassNames(...parts) {
  return [...new Set(parts.filter(Boolean))].join(" ");
}

export { joinClassNames };
//# sourceMappingURL=class-names.js.map
