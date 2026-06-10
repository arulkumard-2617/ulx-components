import { get } from '@ember/object';
import { isBlank } from '@ember/utils';

const validators = {
	required(value, rule) {
		if (typeof value === 'number' && !value) {
			return rule;
		} else if (isBlank(value)) {
			return rule;
		}
	},
	format(value, rule) {
		if (rule.allowEmpty && !value) {
			return;
		}
		if (!rule.with.test(value)) {
			return rule.msg;
		}
	},
	custom(value, rule, model) {
		return rule(value, model);
	},
	maxLength(value, rule) {
		if (!value) {
			return;
		}

		if (value.length > rule.value) {
			return rule.msg;
		}
	},
	minLength(value, rule) {
		if (rule.allowEmpty && !value) {
			return;
		}
		if (value.length < rule.value) {
			return rule.msg;
		}
	},
	min(value, rule) {
		if (value < rule.value) {
			return rule.msg;
		}
	},
	max(value, rule) {
		if (value > rule.value) {
			return rule.msg;
		}
	},
	isSameOrBeforeNow(value, rule) {
		const momentLib = globalThis?.moment,
			momentValue = momentLib(value);

		if (momentValue && momentLib && momentValue.isSameOrBefore(momentLib.tz(momentValue.tz()))) {
			return rule;
		}
	},
	isAfter(value, rule, model) {
		if (!value) {
			return;
		}
		const valueToCheck = get(model, rule.prop);
		if (!valueToCheck) {
			return;
		}

		const momentLib = globalThis?.moment;
		if (momentLib) {
			if (!momentLib(value).isAfter(momentLib(valueToCheck))) {
				return rule.msg;
			}
		} else if (!(new Date(value) > new Date(valueToCheck))) {
			return rule.msg;
		}
	}
};

/**
 * Transform flat dot-notation error keys to nested object structure.
 * @param {Object} flatErrors - Object with keys like "userProfile.name"
 * @returns {Object} Nested object like { userProfile: { name: "error" } }
 */
function normalizeErrorMessage(errorValue) {
	return Array.isArray(errorValue) ? errorValue[0] : errorValue;
}

export function transformErrorsToNested(flatErrors) {
	const nestedErrors = {};
	Object.keys(flatErrors ?? {}).forEach(key => {
		const parts = key.split('.');
		let current = nestedErrors;
		for (let i = 0; i < parts.length - 1; i++) {
			if (!current[parts[i]]) {
				current[parts[i]] = {};
			}
			current = current[parts[i]];
		}
		current[parts[parts.length - 1]] = normalizeErrorMessage(flatErrors[key]);
	});
	return nestedErrors;
}

/**
 * Validates `context` properties against editor-style rules (see `primary-contact-selection` / BsInput).
 *
 * @param {object} context - Object with keys matching `validations` (e.g. component with `@tracked` fields).
 * @param {object} validations - Map of field key → `{ required?, format?, maxLength?, minLength? }`.
 * @returns {{ isValid: boolean, errors: Record<string, string> }}
 *
 * @example
 * const context = {
 *   email: 'foo@bar.com',
 *   displayName: 'Fo',
 *   bio: 'About me'
 * };
 *
 * const validations = {
 *   email: {
 *     required: 'Email is required',
 *     format: {
 *       with: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
 *       allowBlank: false,
 *       msg: 'Enter a valid email'
 *     }
 *   },
 *   displayName: {
 *     required: true,
 *     minLength: { value: 3, msg: 'At least 3 characters required' },
 *     maxLength: 30
 *   },
 *   bio: {
 *     maxLength: { value: 160, msg: 'Maximum 160 characters allowed' }
 *   }
 * };
 *
 * const result = validate(context, validations);
 * // result => { isValid: false, errors: { displayName: 'At least 3 characters required' } }
 *
 * Use **`novalidate` on `<form>`** when inputs use the native `required` attribute but you show
 * messages from this helper; otherwise the browser may block submit and show its own tooltip first.
 */
export function validate(context, validations) {
	let errors = {};

	Object.keys(validations ?? {}).forEach((key) => {
		const rule = validations[key];
		const value = get(context, key);

		Object.keys(rule ?? {}).some((ruleKey) => {
			const validateRule = validators[ruleKey];
			if (typeof validateRule !== 'function') {
				return false;
			}

			const errorMessage = validateRule(value, rule[ruleKey], context);
			if (errorMessage) {
				errors[key] = errorMessage;
			}
			return !!errorMessage;
		});
	});

	return { isValid: !Object.keys(errors).length, errors };
}
