import { getConstraintValue } from './input-util.js';

/**
 * @param {unknown} value
 * @param {{ with?: RegExp, allowBlank?: boolean, msg?: string }} [formatRule]
 * @returns {string|undefined}
 */
function validateFormat(value, formatRule) {
	if (!formatRule?.with || !(formatRule.with instanceof RegExp)) return;

	const str = value == null ? '' : String(value);
	const trimmed = str.trim();
	const allowBlank = formatRule.allowBlank !== false;

	if (allowBlank && trimmed === '') return;

	if (!formatRule.with.test(str)) {
		return typeof formatRule.msg === 'string' && formatRule.msg.length > 0
			? formatRule.msg
			: 'Invalid value';
	}
}

/**
 * Validates `context` properties against editor-style rules (see `primary-contact-selection` / BsInput).
 *
 * @param {object} context - Object with keys matching `validations` (e.g. component with `@tracked` fields).
 * @param {object} validations - Map of field key → `{ required?, format?, maxLength?, minLength? }`.
 * @returns {{ isValid: boolean, errors: Record<string, string> }}
 *
 * Use **`novalidate` on `<form>`** when inputs use the native `required` attribute but you show
 * messages from this helper; otherwise the browser may block submit and show its own tooltip first.
 */
export function validate(context, validations) {
	const errors = {};

	for (const key of Object.keys(validations ?? {})) {
		const rules = validations[key];
		if (!rules || typeof rules !== 'object') continue;

		const raw = context[key];
		const str = raw == null ? '' : String(raw);
		const trimmed = str.trim();

		if (rules.required != null && rules.required !== false) {
			if (trimmed === '') {
				errors[key] =
					typeof rules.required === 'string' && rules.required.length > 0
						? rules.required
						: 'Required';
				continue;
			}
		}

		const formatMsg = validateFormat(raw, rules.format);
		if (formatMsg) {
			errors[key] = formatMsg;
			continue;
		}

		const maxLen = getConstraintValue(rules, 'maxLength');
		if (typeof maxLen === 'number' && str.length > maxLen) {
			errors[key] =
				typeof rules.maxLength?.msg === 'string' && rules.maxLength.msg.length > 0
					? rules.maxLength.msg
					: `Maximum ${maxLen} characters allowed`;
			continue;
		}

		const minLen = getConstraintValue(rules, 'minLength');
		if (typeof minLen === 'number' && str.length < minLen) {
			errors[key] =
				typeof rules.minLength?.msg === 'string' && rules.minLength.msg.length > 0
					? rules.minLength.msg
					: `Minimum ${minLen} characters required`;
		}
	}

	return {
		isValid: Object.keys(errors).length === 0,
		errors
	};
}
