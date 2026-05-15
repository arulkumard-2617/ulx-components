import ClassBasedModifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import Flatpickr from 'flatpickr';
import { normalizeSelectedDates, selectedDatesEqual } from '../utils/flatpickr-helpers';
import { FLATPICKR_SETTABLE_KEYS } from '../utils/flatpickr-options';
import { t } from '../utils/i18n';

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
 * @param {unknown} currentValue
 * @param {unknown} previousValue
 * @returns {boolean}
 */
function pickrOptionValuesEqual(currentValue, previousValue) {
	if (Object.is(currentValue, previousValue)) return true;
	if (currentValue === null || previousValue === null) return currentValue === previousValue;
	if (currentValue instanceof Date && previousValue instanceof Date) {
		return currentValue.getTime() === previousValue.getTime();
	}
	if (typeof currentValue === 'function' && typeof previousValue === 'function') {
		return currentValue === previousValue;
	}
	if (Array.isArray(currentValue) && Array.isArray(previousValue)) {
		if (currentValue.length !== previousValue.length) return false;
		for (let i = 0; i < currentValue.length; i++) {
			if (!pickrOptionValuesEqual(currentValue[i], previousValue[i])) return false;
		}
		return true;
	}
	if (
		typeof currentValue === 'object' &&
		typeof previousValue === 'object' &&
		currentValue !== null &&
		previousValue !== null
	) {
		const currentKeys = Object.keys(currentValue);
		const previousKeys = Object.keys(previousValue);
		if (currentKeys.length !== previousKeys.length) return false;
		for (const key of currentKeys) {
			if (!Object.prototype.hasOwnProperty.call(previousValue, key)) return false;
			if (!pickrOptionValuesEqual(currentValue[key], previousValue[key])) return false;
		}
		return true;
	}
	return false;
}

/** @param {FlatpickrModifier} modifier */
function cleanupFlatpickrEnhancements(modifier) {
	modifier._focusTrapCleanup?.();
	modifier._focusTrapCleanup = null;
}

/** @param {FlatpickrModifier} modifier */
function destroyPicker(modifier) {
	cleanupFlatpickrEnhancements(modifier);
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
	const optionsSnapshot = {};
	for (const key of FLATPICKR_SETTABLE_KEYS) {
		if (key === 'defaultDate') continue;
		if (!Object.prototype.hasOwnProperty.call(restSpread, key)) continue;
		const optionValue = restSpread[key];
		if (optionValue !== undefined) optionsSnapshot[key] = optionValue;
	}
	return optionsSnapshot;
}

/**
 * Flatpickr sets enabled days to tabindex -1; put them in tab order for WCAG.
 * Fires on every day cell build (including month changes).
 * Signature matches flatpickr `onDayCreate` (dateObj, dateStr, instance, dayElem); only `dayElem` is used.
 *
 * @param {...unknown} hookArgs
 */
function handleDayCreate(...hookArgs) {
	const dayElem = hookArgs[3];
	if (!(dayElem instanceof HTMLElement)) {
		return;
	}
	if (dayElem.classList.contains('flatpickr-disabled') || dayElem.classList.contains('hidden')) {
		return;
	}
	dayElem.tabIndex = 0;
	dayElem.setAttribute('role', 'gridcell');
}

/**
 * Puts year input(s) in sequential tab order (flatpickr defaults to tabindex -1).
 *
 * @param {import('flatpickr').Instance | null | undefined} fpInstance
 */
function applyYearTabIndex(fpInstance) {
	const years = fpInstance?.yearElements?.length
		? fpInstance.yearElements
		: fpInstance?.currentYearElement
			? [fpInstance.currentYearElement]
			: [];
	for (const yearElement of years) {
		if (yearElement && !yearElement.disabled) {
			yearElement.tabIndex = 0;
		}
	}
}

/**
 * When the popup opens, move focus into the grid so arrow keys and Tab work without discovery.
 * Inline mode skips this so focus is not stolen on page load.
 * Signature matches flatpickr `onOpen` (selectedDates, dateStr, instance); only `instance` is used.
 *
 * @param {...unknown} hookArgs
 */
function handleCalendarA11yOpen(...hookArgs) {
	const pickerInstance = /** @type {import('flatpickr').Instance} */ (hookArgs[2]);
	if (pickerInstance.config.inline || pickerInstance.config.noCalendar || pickerInstance.isMobile) {
		return;
	}
	setTimeout(() => {
		if (!pickerInstance.isOpen) {
			return;
		}
		const target =
			pickerInstance.selectedDateElem ??
			pickerInstance.todayDateElem ??
			pickerInstance.calendarContainer?.querySelector(
				'.flatpickr-day:not(.flatpickr-disabled):not(.hidden)'
			);
		target?.focus?.();
	}, 0);
}

/**
 * True when keyboard routing should apply: open popup, or always-visible inline calendar.
 *
 * @param {import('flatpickr').Instance} pickerInstance
 */
function isCalendarKeyboardActive(pickerInstance) {
	if (pickerInstance.config.noCalendar || pickerInstance.isMobile) {
		return false;
	}
	return Boolean(pickerInstance.isOpen || pickerInstance.config.inline);
}

/**
 * Cycles Tab between day grid and month header (prev → month → year → next → days).
 * Capture phase runs before flatpickr's handler so Tab does not escape to the document.
 *
 * @param {import('flatpickr').Instance} pickerInstance
 * @returns {() => void}
 */
function installFocusTrap(pickerInstance) {
	const container = pickerInstance.calendarContainer;
	if (!container) {
		return () => {};
	}

	function getDayTarget() {
		const days = pickerInstance.daysContainer;
		if (!days) {
			return null;
		}
		const selectedDayElement = pickerInstance.selectedDateElem;
		if (
			selectedDayElement &&
			days.contains(selectedDayElement) &&
			selectedDayElement.classList.contains('flatpickr-day') &&
			!selectedDayElement.classList.contains('flatpickr-disabled') &&
			!selectedDayElement.classList.contains('hidden')
		) {
			return selectedDayElement;
		}
		return days.querySelector('.flatpickr-day:not(.flatpickr-disabled):not(.hidden)');
	}

	/** @param {KeyboardEvent} event */
	function onKeydown(event) {
		if (event.key !== 'Tab' || !isCalendarKeyboardActive(pickerInstance)) {
			return;
		}
		const target = event.target;
		if (!(target instanceof Node) || !container.contains(target)) {
			return;
		}

		const isDay =
			target instanceof HTMLElement &&
			target.classList.contains('flatpickr-day') &&
			!target.classList.contains('flatpickr-disabled');

		const prevMonthButton = container.querySelector('.flatpickr-prev-month');
		const nextMonthButton = container.querySelector('.flatpickr-next-month');

		if (!event.shiftKey && isDay) {
			event.preventDefault();
			event.stopImmediatePropagation();
			prevMonthButton?.focus?.();
			return;
		}
		if (!event.shiftKey && target === nextMonthButton) {
			event.preventDefault();
			event.stopImmediatePropagation();
			getDayTarget()?.focus?.();
			return;
		}
		if (event.shiftKey && target === prevMonthButton) {
			event.preventDefault();
			event.stopImmediatePropagation();
			getDayTarget()?.focus?.();
			return;
		}
		if (event.shiftKey && isDay) {
			event.preventDefault();
			event.stopImmediatePropagation();
			nextMonthButton?.focus?.();
			return;
		}
	}

	container.addEventListener('keydown', onKeydown, true);
	return () => {
		container.removeEventListener('keydown', onKeydown, true);
	};
}

/**
 * Makes prev/next month controls keyboard-focusable and activates them on Enter/Space.
 * Does not set tabindex on the calendar root (avoids an extra confusing tab stop).
 *
 * @param {import('flatpickr').Instance | null | undefined} fpInstance
 */
function enhanceNavKeyboardAccess(fpInstance) {
	const container = fpInstance?.calendarContainer;
	if (!container) return;

	const prevMonthButton = container.querySelector('.flatpickr-prev-month');
	const nextMonthButton = container.querySelector('.flatpickr-next-month');

	[
		{ navElement: prevMonthButton, labelKey: 'lbl.a11y.datepicker.previousMonth' },
		{ navElement: nextMonthButton, labelKey: 'lbl.a11y.datepicker.nextMonth' }
	]
		.filter(({ navElement }) => navElement)
		.forEach(({ navElement, labelKey }) => {
			navElement.setAttribute('role', 'button');
			navElement.setAttribute('aria-label', t(labelKey));
			navElement.setAttribute('tabindex', '0');
			navElement.addEventListener('keydown', (event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					event.preventDefault();
					navElement.click();
				}
			});
		});
}

/**
 * @param {FlatpickrModifier} modifier
 * @param {import('flatpickr').Instance} fpInstance
 */
function applyFlatpickrA11yEnhancements(modifier, fpInstance) {
	enhanceNavKeyboardAccess(fpInstance);
	applyYearTabIndex(fpInstance);
	modifier._focusTrapCleanup?.();
	modifier._focusTrapCleanup = installFocusTrap(fpInstance);
}

/**
 * Normalizes user-provided onDayCreate (function or array) into a flat list of hooks.
 *
 * @param {unknown} userOnDayCreate
 * @returns {import('flatpickr').Hook[]}
 */
function normalizeDayCreateHooks(userOnDayCreate) {
	if (userOnDayCreate == null) {
		return [];
	}
	const raw = Array.isArray(userOnDayCreate) ? userOnDayCreate : [userOnDayCreate];
	return /** @type {import('flatpickr').Hook[]} */ (
		raw.flat().filter((hook) => typeof hook === 'function')
	);
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
 * - `calendarSurfaceClass` — optional string added to `instance.calendarContainer` after init/update (e.g. from `getComponentClass('calendar')` in ULX)
 */
export default class FlatpickrModifier extends ClassBasedModifier {
	_flatpickrInstance = null;
	_lastElement = null;
	/** @type {Record<string, unknown> | null} */
	_lastSettableOptions = null;
	/** @type {(() => void) | null} */
	_focusTrapCleanup = null;

	constructor(owner, args) {
		super(owner, args);
		registerDestructor(this, destroyPicker);
	}

	modify(element, _positional, named) {
		const safeNamed = named ?? {};
		const {
			options: userOptions = {},
			values,
			disabled = false,
			readOnlyInput,
			calendarSurfaceClass
		} = safeNamed;

		const {
			onChange: userOnChange,
			onOpen: userOnOpen,
			onClose: userOnClose,
			onReady: userOnReady,
			onDayCreate: userOnDayCreate,
			...rawRest
		} = userOptions;
		const restSpread = omitUndefinedKeys(rawRest);

		const dayCreateHooks = normalizeDayCreateHooks(userOnDayCreate);

		const config = {
			...restSpread,
			onDayCreate: [...dayCreateHooks, handleDayCreate],
			onChange: (selectedDates, dateStr, fpInst) => {
				userOnChange?.(selectedDates, dateStr, fpInst);
				safeNamed.onDatesChange?.(selectedDates, dateStr, fpInst);
			},
			onOpen: (selectedDates, dateStr, fpInst) => {
				userOnOpen?.(selectedDates, dateStr, fpInst);
				applyYearTabIndex(fpInst);
				handleCalendarA11yOpen(selectedDates, dateStr, fpInst);
			},
			onClose: userOnClose,
			onReady: (selectedDates, dateStr, fpInst) => {
				userOnReady?.(selectedDates, dateStr, fpInst);
				applyYearTabIndex(fpInst);
			}
		};

		if (readOnlyInput !== undefined) {
			config.allowInput = !readOnlyInput;
		}

		const mode = config.mode ?? 'single';
		const wrapNext = Boolean(restSpread.wrap);
		const normalized = normalizeSelectedDates(values, mode);

		const previousInstance = this._flatpickrInstance;
		const previousInstanceMode = previousInstance?.config?.mode ?? 'single';
		const previousInstanceWrap = Boolean(previousInstance?.config?.wrap);

		const needsRecreate =
			!previousInstance ||
			this._lastElement !== element ||
			previousInstanceMode !== mode ||
			previousInstanceWrap !== wrapNext;

		if (needsRecreate) {
			cleanupFlatpickrEnhancements(this);
			previousInstance?.destroy();
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
			applyFlatpickrA11yEnhancements(this, this._flatpickrInstance);
			this._lastElement = element;
			this._lastSettableOptions = snapshotSettableOptions(restSpread);
		} else {
			const optionsSnapshot = this._lastSettableOptions ?? {};
			for (const key of FLATPICKR_SETTABLE_KEYS) {
				if (key === 'defaultDate') continue;
				if (!Object.prototype.hasOwnProperty.call(restSpread, key)) continue;
				const optionValue = restSpread[key];
				if (optionValue === undefined) continue;
				if (pickrOptionValuesEqual(optionValue, optionsSnapshot[key])) continue;
				try {
					this._flatpickrInstance.set(key, optionValue);
					optionsSnapshot[key] = optionValue;
				} catch {
					/* not all keys accept set() every release */
				}
			}
			this._lastSettableOptions = optionsSnapshot;
			const currentSelectedDates = this._flatpickrInstance.selectedDates;
			if (!selectedDatesEqual(currentSelectedDates, normalized, mode)) {
				this._flatpickrInstance.setDate(normalized.length ? normalized : null, false);
			}
		}

		const pickerInstance = this._flatpickrInstance;
		if (pickerInstance?.input) pickerInstance.input.disabled = Boolean(disabled);
		if (pickerInstance?.altInput) pickerInstance.altInput.disabled = Boolean(disabled);

		if (
			typeof calendarSurfaceClass === 'string' &&
			calendarSurfaceClass.trim() !== '' &&
			pickerInstance?.calendarContainer
		) {
			pickerInstance.calendarContainer.classList.add(calendarSurfaceClass.trim());
		}
	}
}
