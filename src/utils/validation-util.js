import Namespace from '@ember/application/namespace';
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
		if (value && value.isSameOrBefore(moment.tz(value.tz()))) {
			return rule;
		}
	},
	isAfter(value, rule, model) {
		if (!value) {
			return;
		}
		const valueToCheck = get(model, rule.prop);
		if (!valueToCheck) {
			//TODO: Decide what to do with if value is undefined
			return;
		}

		if (!value.isAfter(valueToCheck)) {
			return rule.msg;
		}
	}
};

export default Namespace.create({
	validate(model, rules) {
		let errors = {};

		Object.keys(rules).forEach((modelKey) => {
			const rule = rules[modelKey],
				value = get(model, modelKey);

			Object.keys(rule).some((ruleKey) => {
				const errorMessage = validators[ruleKey](value, rule[ruleKey], model);

				if (errorMessage) {
					errors[modelKey] = errorMessage;
				}

				return !!errorMessage;
			});
		});

		return {
			isValid: !Object.keys(errors).length,
			errors
		};
	}
});
