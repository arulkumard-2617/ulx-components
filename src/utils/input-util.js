import { guidFor } from '@ember/object/internals';
import { getComponentClass } from './component-config';

export function normalizeRules(rules) {
	return rules ?? {};
}

export function resolveKey(componentInstance, keyArg) {
	return keyArg ?? guidFor(componentInstance);
}

export function buildInputId(namespace, idArg, key) {
	return idArg ?? `${namespace}-input-${key}`;
}

export function resolveFloatLabelText(floatLabelArg, labelArg) {
	if (typeof floatLabelArg === 'string') {
		return floatLabelArg;
	}
	return labelArg;
}

export function hasText(value) {
	return typeof value === 'string' && value.length > 0;
}

export function getRuleValue(rules, ruleName) {
	return rules?.[ruleName]?.value;
}

export function isInvalidState(invalidArg, errorArg) {
	return !!(invalidArg || errorArg);
}

export function buildFieldClass(fieldClassArg) {
	const parts = ['field'];
	if (fieldClassArg) parts.push(fieldClassArg);
	return parts.filter(Boolean).join(' ');
}

export function buildInputClass({
	isTextarea,
	size,
	filled,
	invalid,
	disabled,
	readonly,
	floatLabel,
	value
}) {
	const parts = isTextarea
		? [getComponentClass('inputtextarea'), getComponentClass('input')]
		: [getComponentClass('input'), getComponentClass('inputtext')];

	if (size) parts.push(size);
	if (filled) parts.push('filled');
	if (invalid) parts.push('invalid');
	if (disabled) parts.push('disabled');
	if (readonly) parts.push('readonly');

	// Float label: add input-filled class if value exists (for initial render)
	if (floatLabel && value) {
		parts.push('input-filled');
	}

	return parts.filter(Boolean).join(' ');
}

export function buildFloatLabelClass({ size, filled, invalid, disabled }) {
	const parts = [getComponentClass('floatlabel')];
	if (size) parts.push(size);
	if (filled) parts.push('filled');
	if (invalid) parts.push('invalid');
	if (disabled) parts.push('disabled');
	return parts.filter(Boolean).join(' ');
}

export function getFloatLabelLabelClass() {
	return getComponentClass('floatlabel-label');
}

export function buildIconFieldClass({
	iconPosition,
	size,
	filled,
	invalid,
	disabled,
	iconFieldClass
}) {
	const position = iconPosition === 'right' ? 'right' : 'left';
	const parts = [
		getComponentClass('iconfield'),
		`icon-${position}`,
		filled ? 'filled' : 'outlined'
	];

	if (size) parts.push(size);
	if (invalid) parts.push('invalid');
	if (disabled) parts.push('disabled');
	if (iconFieldClass) parts.push(iconFieldClass);

	return parts.filter(Boolean).join(' ');
}

export function getInputIconClass() {
	return getComponentClass('input-icon');
}

export function buildInputGroupClass({ size, filled, invalid, disabled }) {
	const parts = [getComponentClass('inputgroup')];
	if (size) parts.push(size);
	parts.push(filled ? 'filled' : 'outlined');
	if (invalid) parts.push('invalid');
	if (disabled) parts.push('disabled');
	return parts.filter(Boolean).join(' ');
}

export function buildAriaDescribedBy(inputId, { helpText, error }) {
	const parts = [];
	if (helpText) parts.push(`${inputId}-help`);
	if (error) parts.push(`${inputId}-error`);
	return parts.length > 0 ? parts.join(' ') : undefined;
}

export function getKeyFilterPattern(keyfilter) {
	if (!keyfilter) return null;

	// If it's a RegExp string (starts with /), parse it
	if (typeof keyfilter === 'string' && keyfilter.startsWith('/')) {
		try {
			const match = keyfilter.match(/^\/(.*)\/([gimuy]*)$/);
			if (match) {
				return new RegExp(match[1], match[2] || '');
			}
		} catch (e) {
			console.warn('Invalid RegExp pattern:', keyfilter);
			return null;
		}
	}

	// Preset patterns
	const patterns = {
		int: /^-?\d*$/,
		float: /^-?\d*\.?\d*$/,
		email: /^[^\s@]*@?[^\s@]*$/,
		url: /^[^\s]*$/,
		phone: /^[\d\s()+-]*$/,
		cpf: /^\d{0,11}$/,
		cnpj: /^\d{0,14}$/,
		hex: /^[0-9A-Fa-f]*$/,
		alpha: /^[a-zA-Z\s]*$/,
		alphanum: /^[a-zA-Z0-9\s]*$/,
		uuid: /^[0-9a-fA-F-]*$/,
		date: /^[\d-]*$/,
		time: /^[\d:]*$/,
		datetime: /^[\d\s:T-]*$/,
		'datetime-local': /^[\d\s:T-]*$/,
		month: /^[\d-]*$/,
		week: /^[\dW-]*$/
	};

	return patterns[keyfilter] || null;
}

export function isSpecialKey(event) {
	const specialKeys = [
		'Backspace',
		'Delete',
		'Tab',
		'Escape',
		'Enter',
		'ArrowLeft',
		'ArrowRight',
		'ArrowUp',
		'ArrowDown',
		'Home',
		'End',
		'PageUp',
		'PageDown',
		'Insert',
		'F1',
		'F2',
		'F3',
		'F4',
		'F5',
		'F6',
		'F7',
		'F8',
		'F9',
		'F10',
		'F11',
		'F12'
	];

	// Allow Ctrl/Cmd + key combinations (for copy, paste, etc.)
	if (event.ctrlKey || event.metaKey) {
		return true;
	}

	return specialKeys.includes(event.key);
}

export function syncFloatLabelFilledClass(target) {
	if (!target) return;
	if (target.value) {
		target.classList.add('input-filled');
	} else {
		target.classList.remove('input-filled');
	}
}
