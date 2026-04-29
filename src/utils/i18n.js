import { htmlSafe } from '@ember/template';

/**
 * Lightweight i18n utility for ULX components.
 *
 * Features:
 *  - Flat key-value translations (no nesting).
 *  - Host-owned catalog registration via `addTranslations()`.
 *  - Host-owned locale selection via `setLocale()`.
 *  - {param} interpolation: `t("lbl.a11y.more.members", { count: 3 })` -> `"3 more members"`.
 *  - `tSafe()` returns an `htmlSafe` string for rendering trusted HTML.
 *  - Optional one-step bootstrap via `bootstrapTranslations()`.
 *
 * ULX does not auto-load locale files. Consumer apps (e.g. Eventz) must
 * register translations and set locale during boot.
 *
 * @module utils/i18n
 */

/** Registry of loaded locale maps. */
const _locales = {};

/** Currently active locale key. */
let _currentLocale = null;

// ── Public API ──────────────────────────────────────────────

/**
 * Look up a translation key and interpolate parameters.
 *
 * @param {string} key   - Flat translation key (e.g. "label.loading").
 * @param {Object} [params] - Key-value pairs to interpolate into the string.
 * @returns {string} The resolved (interpolated) string, or the raw key if not found.
 *
 * @example
 *   t("label.loading");                                 // "Loading"
 *   t("msg.more.members", { count: 3 });                // "3 more members"
 *   t("unknown.key");                                    // "unknown.key" (fallback)
 */
export function t(key, params) {
	const map = (_currentLocale && _locales[_currentLocale]) ?? {};
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
 *   // Eventz-provided locale at runtime
 *   const eventzLocale = "es";
 *   addTranslations(eventzLocale, esTranslations);
 *   setLocale(eventzLocale);
 */
export function setLocale(locale) {
	const normalizedLocale = _normalizeLocale(locale);
	if (!normalizedLocale) {
		throw new Error('[ulx-i18n] setLocale(locale) requires a non-empty locale string.');
	}
	if (!_locales[normalizedLocale]) {
		throw new Error(
			`[ulx-i18n] Locale "${normalizedLocale}" is not registered. ` +
				`Call addTranslations("${normalizedLocale}", translations) first.`
		);
	}
	_currentLocale = normalizedLocale;
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
 *  - Merge host dictionary:    `addTranslations("en-us", eventzMessages)`
 *
 * @param {string} locale       - Locale code.
 * @param {Object} translations - Flat key-value map.
 *
 * @example
 *   // app/instance-initializers/i18n.js
 *   import { addTranslations } from "ulx-components/utils/i18n";
 *   import eventzMessages from "../message-resources/eventz";
 *   export function initialize() {
 *     addTranslations("en-us", eventzMessages);
 *   }
 */
export function addTranslations(locale, translations) {
	const normalizedLocale = _normalizeLocale(locale);
	if (!normalizedLocale) {
		throw new Error('[ulx-i18n] addTranslations(locale, translations) requires a locale string.');
	}
	if (!translations || typeof translations !== 'object' || Array.isArray(translations)) {
		throw new Error(
			`[ulx-i18n] addTranslations("${normalizedLocale}", translations) requires a plain object map.`
		);
	}

	_locales[normalizedLocale] = { ...(_locales[normalizedLocale] ?? {}), ...translations };
}

/**
 * Convenience helper to register a locale map and activate it in one call.
 * Useful for demo or standalone environments where Eventz is not present.
 *
 * @param {string} locale
 * @param {Object} translations
 */
export function bootstrapTranslations(locale, translations) {
	addTranslations(locale, translations);
	setLocale(locale);
}

/**
 * Check whether a translation key exists for the current locale.
 *
 * @param {string} key
 * @returns {boolean}
 */
export function hasTranslation(key) {
	const map = (_currentLocale && _locales[_currentLocale]) ?? {};
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

/**
 * Normalizes locale strings so Java-style tags (`en_US`) and BCP 47-style
 * tags (`en-us`) resolve to the same registry bucket.
 *
 * @param {string} locale
 * @returns {string | null}
 */
function _normalizeLocale(locale) {
	if (typeof locale !== 'string') {
		return null;
	}
	const value = locale.trim().toLowerCase().replace(/_/g, '-');
	return value || null;
}
