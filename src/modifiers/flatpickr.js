import ClassBasedModifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import Flatpickr from 'flatpickr';
import { normalizeSelectedDates, selectedDatesEqual } from '../utils/flatpickr-helpers';
import { FLATPICKR_SETTABLE_KEYS } from '../utils/flatpickr-options';

/**
 * Flatpickr assigns `disable` / `enable` via setters that call `parseDateRules(arr)`,
 * which uses `arr.slice()`. Passing `disable: undefined` or `enable: undefined`
 * (common when spreading optional component args) throws.
 *
 * @param {Record<string, unknown>} obj
 * @returns {Record<string, unknown>}
 */
function omitUndefinedKeys(obj) {
	const out = {};
	for (const key of Object.keys(obj)) {
		const val = obj[key];
		if (val !== undefined) {
			out[key] = val;
		}
	}
	return out;
}

/**
 * Compare option values so we skip redundant `fp.set()` calls (each `set()` runs redraw/updateValue).
 *
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function pickrOptionValuesEqual(a, b) {
	if (Object.is(a, b)) return true;
	if (a === null || b === null) return a === b;
	if (a instanceof Date && b instanceof Date) {
		return a.getTime() === b.getTime();
	}
	if (typeof a === 'function' && typeof b === 'function') {
		return a === b;
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) {
			if (!pickrOptionValuesEqual(a[i], b[i])) return false;
		}
		return true;
	}
	if (typeof a === 'object' && typeof b === 'object' && a !== null && b !== null) {
		const aKeys = Object.keys(a);
		const bKeys = Object.keys(b);
		if (aKeys.length !== bKeys.length) return false;
		for (const k of aKeys) {
			if (!Object.prototype.hasOwnProperty.call(b, k)) return false;
			if (!pickrOptionValuesEqual(a[k], b[k])) return false;
		}
		return true;
	}
	return false;
}

/** @param {FlatpickrModifier} modifier */
function destroyPicker(modifier) {
	modifier._flatpickrInstance?.destroy();
	modifier._flatpickrInstance = null;
	modifier._lastElement = null;
	modifier._lastSettableOptions = null;
}

/**
 * @param {Record<string, unknown>} restSpread
 * @returns {Record<string, unknown>}
 */
function snapshotSettableOptions(restSpread) {
	/** @type {Record<string, unknown>} */
	const snap = {};
	for (const key of FLATPICKR_SETTABLE_KEYS) {
		if (key === 'defaultDate') continue;
		if (!Object.prototype.hasOwnProperty.call(restSpread, key)) continue;
		const v = restSpread[key];
		if (v !== undefined) snap[key] = v;
	}
	return snap;
}

/**
 * Initializes or updates flatpickr on an `<input>` or a `wrap` container element.
 *
 * Named args:
 * - `options` — flatpickr config (merged into instance); `onChange` is wrapped to also call `onDatesChange`
 * - `values` — bound value(s) synced via setDate (Date, string, or array by mode)
 * - `onDatesChange(selectedDates, dateStr, instance)` — Ember-friendly change callback
 * - `disabled` — disables the visible input(s)
 * - `readOnlyInput` — when true, sets `allowInput: false` (overrides options.allowInput)
 */
export default class FlatpickrModifier extends ClassBasedModifier {
	_flatpickrInstance = null;
	_lastElement = null;
	/** @type {Record<string, unknown> | null} */
	_lastSettableOptions = null;

	constructor(owner, args) {
		super(owner, args);
		registerDestructor(this, destroyPicker);
	}

	modify(element, _positional, named) {
		const safeNamed = named ?? {};
		const { options: userOptions = {}, values, disabled = false, readOnlyInput } = safeNamed;

		const { onChange: userOnChange, onOpen, onClose, onReady, ...rawRest } = userOptions;
		const restSpread = omitUndefinedKeys(rawRest);

		const config = {
			...restSpread,
			onChange: (selectedDates, dateStr, fpInst) => {
				userOnChange?.(selectedDates, dateStr, fpInst);
				safeNamed.onDatesChange?.(selectedDates, dateStr, fpInst);
			},
			onOpen,
			onClose,
			onReady
		};

		if (readOnlyInput !== undefined) {
			config.allowInput = !readOnlyInput;
		}

		const mode = config.mode ?? 'single';
		const wrapNext = Boolean(restSpread.wrap);
		const normalized = normalizeSelectedDates(values, mode);

		const prev = this._flatpickrInstance;
		const prevMode = prev?.config?.mode ?? 'single';
		const prevWrap = Boolean(prev?.config?.wrap);

		const needsRecreate =
			!prev || this._lastElement !== element || prevMode !== mode || prevWrap !== wrapNext;

		if (needsRecreate) {
			prev?.destroy();
			this._flatpickrInstance = null;

			const createCfg = { ...config };
			if (normalized.length && createCfg.defaultDate == null) {
				createCfg.defaultDate = mode === 'single' ? normalized[0] : normalized;
			}

			const isInline = Boolean(createCfg.inline);
			const isStatic = Boolean(createCfg.static);
			if (typeof document !== 'undefined' && !isInline && !isStatic) {
				createCfg.appendTo = createCfg.appendTo ?? document.body;
			}

			this._flatpickrInstance = Flatpickr(element, createCfg);
			this._lastElement = element;
			this._lastSettableOptions = snapshotSettableOptions(restSpread);
		} else {
			const snap = this._lastSettableOptions ?? {};
			for (const key of FLATPICKR_SETTABLE_KEYS) {
				if (key === 'defaultDate') continue;
				if (!Object.prototype.hasOwnProperty.call(restSpread, key)) continue;
				const v = restSpread[key];
				if (v === undefined) continue;
				if (pickrOptionValuesEqual(v, snap[key])) continue;
				try {
					this._flatpickrInstance.set(key, v);
					snap[key] = v;
				} catch {
					/* not all keys accept set() every release */
				}
			}
			this._lastSettableOptions = snap;
			const sel = this._flatpickrInstance.selectedDates;
			if (!selectedDatesEqual(sel, normalized, mode)) {
				this._flatpickrInstance.setDate(normalized.length ? normalized : null, false);
			}
		}

		const fp = this._flatpickrInstance;
		if (fp?.input) fp.input.disabled = Boolean(disabled);
		if (fp?.altInput) fp.altInput.disabled = Boolean(disabled);
	}
}
