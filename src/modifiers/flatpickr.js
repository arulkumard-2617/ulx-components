import ClassBasedModifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';
import Flatpickr from 'flatpickr';
import {
	normalizeSelectedDates,
	selectedDatesEqual,
	ensureFlatpickrAppendContainerPosition,
	resolveFlatpickrScrollTargets,
	resolveFlatpickrLayout,
	createFlatpickrScrollPinnedPosition,
	debounceFlatpickr
} from '../utils/flatpickr-helpers';
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
function cleanupSuppressOpenOnFocus(modifier) {
	modifier._suppressOpenOnFocusCleanup?.();
	modifier._suppressOpenOnFocusCleanup = null;
}

/**
 * When `clickOpens` is false flatpickr does not open on pointer click; when we also suppressed
 * the default focus→open pairing, reattach pointer open so mice still open the picker.
 * When `allowInput` is false, Enter opens via flatpickr. When typing is enabled, Enter commits
 * the field value instead, so ArrowDown opens the calendar while closed (combobox pattern).
 *
 * @param {FlatpickrModifier} modifier
 * @param {import('flatpickr').Instance} fpInstance
 */
function installSuppressOpenOnFocus(modifier, fpInstance) {
	cleanupSuppressOpenOnFocus(modifier);

	if (
		fpInstance.config.inline ||
		fpInstance.config.static ||
		fpInstance.isMobile ||
		fpInstance.config.clickOpens
	) {
		return;
	}

	const input = fpInstance._input;
	if (!(input instanceof HTMLElement)) {
		return;
	}

	const openFromPointer = () => {
		fpInstance.open();
	};

	/** @param {KeyboardEvent} event */
	const openFromArrowDownEditableClosed = (event) => {
		if (!fpInstance.config.allowInput || fpInstance.isOpen) return;

		const key = event.key;
		if (key !== 'ArrowDown' && key !== 'Down') return;

		event.preventDefault();
		fpInstance.open();
	};

	input.addEventListener('click', openFromPointer);
	input.addEventListener('keydown', openFromArrowDownEditableClosed);

	modifier._suppressOpenOnFocusCleanup = () => {
		input.removeEventListener('click', openFromPointer);
		input.removeEventListener('keydown', openFromArrowDownEditableClosed);
	};
}

/** @param {FlatpickrModifier} modifier */
function cleanupFlatpickrEnhancements(modifier) {
	cleanupSuppressOpenOnFocus(modifier);
	modifier._focusTrapCleanup?.();
	modifier._focusTrapCleanup = null;
	cleanupHeaderFieldArrowKeyGuards(modifier);
}

/**
 * @param {import('flatpickr').Instance | null | undefined} fpInstance
 * @returns {HTMLElement[]}
 */
function collectFlatpickrHeaderFields(fpInstance) {
	if (!fpInstance?.calendarContainer) {
		return [];
	}

	/** @type {HTMLElement[]} */
	const fields = [];
	const seen = new Set();

	const addField = (field) => {
		if (!(field instanceof HTMLElement) || seen.has(field)) {
			return;
		}
		seen.add(field);
		fields.push(field);
	};

	addField(fpInstance.currentYearElement);
	for (const yearElement of fpInstance.yearElements ?? []) {
		addField(yearElement);
	}
	for (const monthElement of fpInstance.monthElements ?? []) {
		addField(monthElement);
	}

	const monthRegion = fpInstance.calendarContainer.querySelector('.flatpickr-months');
	if (monthRegion) {
		for (const input of monthRegion.querySelectorAll('input, select')) {
			addField(input);
		}
	}

	return fields;
}

/**
 * @param {import('flatpickr').Instance | null | undefined} fpInstance
 * @returns {HTMLElement[]}
 */
function collectFlatpickrTimeFields(fpInstance) {
	if (!fpInstance?.config.enableTime) {
		return [];
	}

	/** @type {HTMLElement[]} */
	const fields = [];
	const seen = new Set();

	const addField = (field) => {
		if (!(field instanceof HTMLElement) || seen.has(field)) {
			return;
		}
		seen.add(field);
		fields.push(field);
	};

	addField(fpInstance.hourElement);
	addField(fpInstance.minuteElement);
	addField(fpInstance.secondElement);
	addField(fpInstance.amPM);

	return fields;
}

/** @param {FlatpickrModifier} modifier */
function cleanupHeaderFieldArrowKeyGuards(modifier) {
	for (const { field, handler } of modifier._headerArrowKeyBindings) {
		field.removeEventListener('keydown', handler);
	}
	modifier._headerArrowKeyBindings = [];
}

/**
 * Stops flatpickr calendar keydown from handling Left/Right in header/year inputs and time
 * spinners (flatpickr otherwise moves focus to the day grid or forces focus on the hour field).
 *
 * @param {FlatpickrModifier} modifier
 * @param {import('flatpickr').Instance | null | undefined} fpInstance
 */
function installHeaderFieldArrowKeyGuards(modifier, fpInstance) {
	cleanupHeaderFieldArrowKeyGuards(modifier);

	if (!fpInstance || fpInstance.isMobile) {
		return;
	}

	/** @type {HTMLElement[]} */
	const fields = [];
	const seen = new Set();

	const addFields = (/** @type {HTMLElement[]} */ nextFields) => {
		for (const field of nextFields) {
			if (seen.has(field)) {
				continue;
			}
			seen.add(field);
			fields.push(field);
		}
	};

	if (!fpInstance.config.noCalendar) {
		addFields(collectFlatpickrHeaderFields(fpInstance));
	}

	if (fpInstance.config.enableTime) {
		addFields(collectFlatpickrTimeFields(fpInstance));
	}

	if (!fields.length) {
		return;
	}

	for (const field of fields) {
		/** @param {KeyboardEvent} event */
		const handler = (event) => {
			const keyPressed = event.key;
			if (keyPressed !== 'ArrowLeft' && keyPressed !== 'ArrowRight') {
				return;
			}
			event.stopPropagation();
		};

		field.addEventListener('keydown', handler);
		modifier._headerArrowKeyBindings.push({ field, handler });
	}
}

/** @param {FlatpickrModifier} modifier */
function cleanupFlatpickrScrollReposition(modifier) {
	modifier._scrollRepositionCleanup?.();
	modifier._scrollRepositionCleanup = null;
}

/**
 * Flatpickr positions with document coordinates but only listens to window resize.
 * Reposition on scroll while portaled to `body` (document coordinates). Not used in scroll-pinned mode.
 *
 * @param {FlatpickrModifier} modifier
 * @param {import('flatpickr').Instance} pickerInstance
 * @param {HTMLElement} hostElement
 * @param {'window'|HTMLElement|Function|string|undefined|null} scrollContext
 * @returns {() => void}
 */
function installFlatpickrScrollReposition(modifier, pickerInstance, hostElement, scrollContext) {
	if (modifier._scrollPinned) {
		return () => {};
	}
	if (pickerInstance.config.inline || pickerInstance.config.static || pickerInstance.isMobile) {
		return () => {};
	}

	const scrollTargets = resolveFlatpickrScrollTargets(scrollContext, hostElement);
	const reposition = debounceFlatpickr(() => {
		if (!pickerInstance.isOpen) {
			return;
		}
		pickerInstance._positionCalendar?.();
	}, 16);

	for (const scrollTarget of scrollTargets) {
		scrollTarget?.addEventListener?.('scroll', reposition, { capture: true, passive: true });
	}

	return () => {
		for (const scrollTarget of scrollTargets) {
			scrollTarget?.removeEventListener?.('scroll', reposition, { capture: true });
		}
	};
}

/** @param {FlatpickrModifier} modifier */
function destroyPicker(modifier) {
	cleanupFlatpickrEnhancements(modifier);
	cleanupFlatpickrScrollReposition(modifier);
	modifier._appendPositionRestore?.();
	modifier._appendPositionRestore = null;
	modifier._flatpickrInstance?.destroy();
	modifier._flatpickrInstance = null;
	modifier._lastElement = null;
	modifier._lastSettableOptions = null;
	modifier._resolvedAppendTo = null;
	modifier._scrollPinned = false;
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
	installHeaderFieldArrowKeyGuards(modifier, fpInstance);
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
 * Applies an optional component-provided display formatter after flatpickr updates its input.
 *
 * @param {import('flatpickr').Instance | null | undefined} fpInstance
 * @param {unknown} formatDisplayValue
 */
function applyFormattedDisplayValue(fpInstance, formatDisplayValue) {
	if (!fpInstance || typeof formatDisplayValue !== 'function') return;
	const nextDisplayValue = formatDisplayValue(fpInstance.selectedDates, fpInstance);
	if (nextDisplayValue == null) return;
	const displayValue = String(nextDisplayValue);
	if (fpInstance.input) fpInstance.input.value = displayValue;
	if (fpInstance.altInput) fpInstance.altInput.value = displayValue;
}

/**
 * Initializes or updates flatpickr on an `<input>` or a `wrap` container element.
 *
 * Named args:
 * - `options` — flatpickr config (merged into instance); `onChange` is wrapped to also call `onDatesChange`
 * - `values` — bound value(s) synced via setDate (Date, string, or array by mode)
 * - `onDatesChange(selectedDates, dateStr, instance)` — Ember-friendly change callback
 * - `formatDisplayValue(selectedDates, instance)` — optional display-only input value formatter
 * - `disabled` — disables the visible input(s)
 * - `readOnlyInput` — when true, sets `allowInput: false` (overrides options.allowInput)
 * - `calendarSurfaceClass` — optional string added to `instance.calendarContainer` after init/update (e.g. from `getComponentClass('calendar')` in ULX)
 * - `scrollContext` — scroll container for scroll-pinned layout (default: nearest `.editor-sc-parent` or scrollable ancestor)
 * - `suppressOpenOnFocus` — when true and options do not explicitly set `clickOpens: true`, forces `clickOpens: false` and opens on pointer click on the input; Tab focus no longer opens by default. Enter opens when `allowInput` is false; when typing is enabled, ArrowDown opens while the popup is closed.
 */
export default class FlatpickrModifier extends ClassBasedModifier {
	_flatpickrInstance = null;
	_lastElement = null;
	/** @type {Record<string, unknown> | null} */
	_lastSettableOptions = null;
	/** @type {HTMLElement | null} */
	_resolvedAppendTo = null;
	/** @type {(() => void) | null} */
	_appendPositionRestore = null;
	/** @type {(() => void) | null} */
	_focusTrapCleanup = null;
	/** @type {Array<{ field: HTMLElement; handler: (event: KeyboardEvent) => void }>} */
	_headerArrowKeyBindings = [];
	/** @type {(() => void) | null} */
	_scrollRepositionCleanup = null;
	/** @type {boolean} */
	_scrollPinned = false;
	/** @type {(() => void) | null} */
	_suppressOpenOnFocusCleanup = null;

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
			calendarSurfaceClass,
			formatDisplayValue,
			scrollContext,
			suppressOpenOnFocus = false
		} = safeNamed;

		const {
			onChange: userOnChange,
			onOpen: userOnOpen,
			onClose: userOnClose,
			onReady: userOnReady,
			onMonthChange: userOnMonthChange,
			onYearChange: userOnYearChange,
			onDayCreate: userOnDayCreate,
			...rawRest
		} = userOptions;
		const restSpread = omitUndefinedKeys(rawRest);
		if (
			suppressOpenOnFocus &&
			!restSpread.inline &&
			!restSpread.static &&
			restSpread.clickOpens !== true
		) {
			restSpread.clickOpens = false;
		}

		const dayCreateHooks = normalizeDayCreateHooks(userOnDayCreate);

		const config = {
			...restSpread,
			onDayCreate: [...dayCreateHooks, handleDayCreate],
			onChange: (selectedDates, dateStr, fpInst) => {
				userOnChange?.(selectedDates, dateStr, fpInst);
				safeNamed.onDatesChange?.(selectedDates, dateStr, fpInst);
				applyFormattedDisplayValue(fpInst, formatDisplayValue);
			},
			onOpen: (selectedDates, dateStr, fpInst) => {
				userOnOpen?.(selectedDates, dateStr, fpInst);
				applyYearTabIndex(fpInst);
				installHeaderFieldArrowKeyGuards(this, fpInst);
				handleCalendarA11yOpen(selectedDates, dateStr, fpInst);
				cleanupFlatpickrScrollReposition(this);
				this._scrollRepositionCleanup = installFlatpickrScrollReposition(
					this,
					fpInst,
					element,
					scrollContext
				);
			},
			onClose: (selectedDates, dateStr, fpInst) => {
				cleanupFlatpickrScrollReposition(this);
				userOnClose?.(selectedDates, dateStr, fpInst);
			},
			onReady: (selectedDates, dateStr, fpInst) => {
				userOnReady?.(selectedDates, dateStr, fpInst);
				applyYearTabIndex(fpInst);
				installHeaderFieldArrowKeyGuards(this, fpInst);
				applyFormattedDisplayValue(fpInst, formatDisplayValue);
			},
			onMonthChange: (selectedDates, dateStr, fpInst) => {
				userOnMonthChange?.(selectedDates, dateStr, fpInst);
				applyYearTabIndex(fpInst);
				installHeaderFieldArrowKeyGuards(this, fpInst);
			},
			onYearChange: (selectedDates, dateStr, fpInst) => {
				userOnYearChange?.(selectedDates, dateStr, fpInst);
				applyYearTabIndex(fpInst);
				installHeaderFieldArrowKeyGuards(this, fpInst);
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

		const { resolvedAppendTo, scrollPinned } = resolveFlatpickrLayout(
			config.appendTo,
			scrollContext,
			element
		);
		const userPosition = restSpread.position;

		const needsRecreate =
			!previousInstance ||
			this._lastElement !== element ||
			previousInstanceMode !== mode ||
			previousInstanceWrap !== wrapNext ||
			this._resolvedAppendTo !== resolvedAppendTo ||
			this._scrollPinned !== scrollPinned;

		if (needsRecreate) {
			cleanupFlatpickrEnhancements(this);
			this._appendPositionRestore?.();
			this._appendPositionRestore = null;
			previousInstance?.destroy();
			this._flatpickrInstance = null;

			const createCfg = { ...config };
			if (normalized.length && createCfg.defaultDate == null) {
				createCfg.defaultDate = mode === 'single' ? normalized[0] : normalized;
			}

			const isInline = Boolean(createCfg.inline);
			const isStatic = Boolean(createCfg.static);
			if (typeof document !== 'undefined' && !isInline && !isStatic) {
				createCfg.appendTo = resolvedAppendTo ?? document.body;
				this._appendPositionRestore = ensureFlatpickrAppendContainerPosition(createCfg.appendTo);
				if (scrollPinned && typeof userPosition !== 'function') {
					createCfg.position = createFlatpickrScrollPinnedPosition(createCfg.appendTo);
				}
			}

			this._resolvedAppendTo = resolvedAppendTo;
			this._scrollPinned = scrollPinned;
			this._flatpickrInstance = Flatpickr(element, createCfg);
			applyFlatpickrA11yEnhancements(this, this._flatpickrInstance);
			if (
				suppressOpenOnFocus &&
				!createCfg.inline &&
				!createCfg.static &&
				createCfg.clickOpens === false
			) {
				installSuppressOpenOnFocus(this, this._flatpickrInstance);
			}
			applyFormattedDisplayValue(this._flatpickrInstance, formatDisplayValue);
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
			applyFormattedDisplayValue(this._flatpickrInstance, formatDisplayValue);
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