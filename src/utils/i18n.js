import { htmlSafe } from "@ember/template";
import enUs from "../locales/en-us";

/**
 * Lightweight i18n utility for ULX components.
 *
 * Features:
 *  - Flat key-value translations (no nesting).
 *  - {param} interpolation: `t("aria.more.members", { count: 3 })` → `"3 more members"`.
 *  - `tSafe()` returns an `htmlSafe` string for rendering trusted HTML.
 *  - Locale switching at runtime via `setLocale()` / `getLocale()`.
 *  - `addTranslations()` lets consuming apps merge or override keys.
 *
 * @module utils/i18n
 */

/** Registry of loaded locale maps. */
const _locales = {
	"en-us": enUs
};

/** Currently active locale key. */
let _currentLocale = "en-us";

// ── Public API ──────────────────────────────────────────────

/**
 * Look up a translation key and interpolate parameters.
 *
 * @param {string} key   - Flat translation key (e.g. "lbl.loading").
 * @param {Object} [params] - Key-value pairs to interpolate into the string.
 * @returns {string} The resolved (interpolated) string, or the raw key if not found.
 *
 * @example
 *   t("lbl.loading");                                   // "Loading"
 *   t("msg.more.members", { count: 3 });                // "3 more members"
 *   t("unknown.key");                                    // "unknown.key" (fallback)
 */
export function t(key, params) {
	const map = _locales[_currentLocale] ?? _locales["en-us"] ?? {};
	const template = map[key];

	if (template === undefined) {
		return key; // graceful fallback — returns the key itself
	}

	return params ? _interpolate(template, params) : template;
}

/**
 * Same as `t()` but wraps the result in Ember's `htmlSafe`, so it can
 * render trusted HTML content in templates without escaping.
 *
 * **Only use this for strings you control** (translation files).
 * Never pass user input through `tSafe`.
 *
 * @param {string} key
 * @param {Object} [params]
 * @returns {import('@ember/template').SafeString}
 *
 * @example
 *   get bannerHtml() {
 *     return tSafe("msg.welcome.html", { name: "Ada" });
 *   }
 */
export function tSafe(key, params) {
	return htmlSafe(t(key, params));
}

/**
 * Set the active locale.
 *
 * @param {string} locale - Locale code (must already be registered via `addTranslations`).
 * @throws {Error} If the locale has not been registered.
 *
 * @example
 *   addTranslations("es", esTranslations);
 *   setLocale("es");
 */
export function setLocale(locale) {
	if (!_locales[locale]) {
		throw new Error(
			`[ulx-i18n] Locale "${locale}" is not registered. ` +
				`Call addTranslations("${locale}", translations) first.`
		);
	}
	_currentLocale = locale;
}

/**
 * Return the currently active locale code.
 *
 * @returns {string}
 */
export function getLocale() {
	return _currentLocale;
}

/**
 * Register or merge translations for a locale.
 * New keys are added; existing keys are overwritten.
 *
 * This is the primary extension point for consuming apps:
 *  - Add a new language:       `addTranslations("es", esMap)`
 *  - Override addon defaults:  `addTranslations("en-us", { "lbl.loading": "Please wait…" })`
 *
 * @param {string} locale       - Locale code.
 * @param {Object} translations - Flat key-value map.
 *
 * @example
 *   // app/instance-initializers/i18n.js
 *   import { addTranslations } from "ulx-components/utils/i18n";
 *   import es from "../locales/es";
 *   export function initialize() {
 *     addTranslations("es", es);
 *   }
 */
export function addTranslations(locale, translations) {
	_locales[locale] = { ...(_locales[locale] ?? {}), ...translations };
}

/**
 * Check whether a translation key exists for the current locale.
 *
 * @param {string} key
 * @returns {boolean}
 */
export function hasTranslation(key) {
	const map = _locales[_currentLocale] ?? _locales["en-us"] ?? {};
	return key in map;
}

// ── Internal ────────────────────────────────────────────────

/**
 * Replace `{param}` tokens in a template string with values from `params`.
 * Unmatched tokens are left as-is.
 *
 * @param {string} template
 * @param {Object} params
 * @returns {string}
 */
function _interpolate(template, params) {
	return template.replace(/\{(\w+)\}/g, (match, name) => {
		return name in params ? String(params[name]) : match;
	});
}
