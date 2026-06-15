import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import { schedule } from "@ember/runloop";
import { on } from "@ember/modifier";
import { modifier } from "ember-modifier";
import { fn } from "@ember/helper";
import { getComponentClass } from "../../utils/component-config";
import { isInvalidState, isRulesRequired, normalizeRules } from "../../utils/input-util";
import { guidFor } from "@ember/object/internals";
import { t } from "../../utils/i18n";
import overlayDismiss from "../../modifiers/overlay-dismiss";
import overlayPortal from "../../modifiers/overlay-portal";
import { getOverlayZIndexAboveMask } from "../../utils/overlay-helpers";
import {
	buildOverlayCoordinateApi,
	clampOverlayValue,
	getBoundaryRectInOverlaySpace,
	resolveOverlayBoundary,
	resolveOverlayContext,
	resolveOverlayScrollContext
} from "../../utils/overlay-context";
import { getAdjacentFocusableInDocument, getFocusableElements } from "../../utils/focus-util";
import UlxIcon from "../ulx-icon/index.gjs";
import UlxProgressSpinner from "../ulx-progressspinner/index.gjs";
import { eq, and, not, or } from "ember-truth-helpers";
import { hash, concat } from "@ember/helper";

const MIN_FILTER_OPTION_COUNT = 5;
const DROPDOWN_PANEL_POSITION_AUTO = "auto";
const DROPDOWN_PANEL_POSITION_TOP = "top";
const DROPDOWN_PANEL_POSITION_BOTTOM = "bottom";

/**
 * Dropdown select: single selection from a list with optional filter, groups, templates.
 * Supports: basic, checkmark, group, template, filter, clear icon, loading, invalid, disabled.
 * Use `UlxField` for labels, help, and errors; use `UlxFloatLabel` for floating labels.
 * Pass `@field={{field}}` from `UlxField` (or `@key`, `@ariaDescribedBy`, `@ariaErrorMessage` from the yield hash).
 * Accessible: combobox + listbox roles, keyboard nav, ARIA.
 *
 * @class UlxDropdown
 * @param {any} [value] - Selected value (controlled).
 * @param {Array} [options=[]] - List of options (objects or scalars). Use optionLabel/optionValue for object shape.
 * @param {string} [optionLabel='label'] - Property name or path for option display text.
 * @param {string} [optionValue='value'] - Property name or path for option value.
 * @param {string} [optionImageUrl] - Property name or path for option image URL (e.g. for value/item templates). When set, yielded hash includes imageUrl.
 * @param {string} [optionGroupLabel] - When set, options are groups; this is the group label key.
 * @param {string} [optionGroupChildren='items'] - When optionGroupLabel is set, key for group children.
 * Group objects may include optional imageUrl (string) and icon (icon name string) for default header rendering.
 * Named block <:group> - When provided, custom content for each group header. Receives (hash label group).
 * Named block <:value> - When provided, custom content for the selected value in the trigger. Receives (hash selectedOption selectedLabel placeholder). Show placeholder when selectedOption is null.
 * Named block <:item> - When provided, custom content for each option in the list. Receives (hash option label index).
 * Named block <:footer> - When provided, custom content for the panel footer (e.g. selected summary). Receives (hash selectedOption).
 * Named block <:icon> - When provided, custom dropdown trigger icon. Receives (hash overlayVisible) so icon can change when open/closed.
 * @param {string} [placeholder] - Placeholder when nothing selected.
 * @param {boolean} [disabled=false] - Disables the dropdown.
 * @param {boolean} [loading=false] - Shows progress spinner instead of dropdown icon.
 * @param {boolean} [invalid=false] - Invalid state styling.
 * @param {unknown} [error] - When truthy, treated like invalid for styling (same as `UlxInput`); message is not rendered here.
 * @param {boolean} [filter=false] - Show filter input in panel when there are at least 5 options.
 * @param {boolean} [showClear=false] - Show clear icon when value is set.
 * @param {boolean} [checkmark=false] - Show checkmark on selected item.
 * @param {string} [filterPlaceholder] - Placeholder for filter input.
 * @param {string} [filterAriaLabel] - Accessible name for the panel filter input (defaults to `lbl.a11y.dropdown.filter`).
 * @param {string} [emptyMessage] - Message when options list is empty.
 * @param {string} [emptyFilterMessage] - Message when filter has no results.
 * @param {string} [scrollHeight='232px'] - Max height of option list (CSS value).
 * @param {'self'|'body'|HTMLElement|Function|string} [context='self'] - Where the overlay panel is created.
 *   - `"self"` keeps the panel in-place after the dropdown markup (default).
 *   - `"body"` appends the panel to `<body>`.
 *   - `HTMLElement`: append to that element.
 *   - `Function`: called to resolve the destination element.
 *   - `string`: a CSS selector resolved with `document.querySelector()`.
 * @param {'window'|HTMLElement|Function|string} [boundary='window'] - Boundary used for flip/clamp calculations.
 * @param {'window'|HTMLElement|Function|string} [scrollContext='window'] - Scroll target that closes the overlay immediately.
 * @param {'auto'|'top'|'bottom'} [position='auto'] - Panel placement relative to the trigger. `auto` picks above/below on first open and keeps that side until the overlay closes (filtering does not re-flip); `top` always opens above; `bottom` always opens below.
 * @param {string} [dataQa] - Root `data-qa` override for automation (default `ulx-dropdown`).
 * @param {string} [filterDataQa] - `data-qa` on the panel filter input when `@filter` is true (default `ulx-dropdown-filter`).
 * @param {object} [field] - Yield hash from `UlxField` (`key`, `describedBy`, `errorId`, `rules`, `error`). Supplies defaults when `@key`, `@ariaDescribedBy`, and `@ariaErrorMessage` are omitted.
 * @param {string} [id] - Id for the trigger (for label `for` / ARIA).
 * @param {string} [key] - When `@id` is omitted, used as the trigger id (e.g. `@key={{field.key}}` with `UlxField`).
 * @param {string} [ariaDescribedBy] - `aria-describedby` ids (e.g. from `UlxField` control hash).
 * @param {string} [ariaErrorMessage] - `aria-errormessage` id (e.g. `field.errorId`).
 * @param {boolean} [required=false] - `aria-required` on the combobox.
 * @param {Function} [onChange] - (value) => void when selection changes.
 * @param {Function} [onFocus] - Focus callback.
 * @param {Function} [onBlur] - Blur callback.
 * @param {Function} [onFilter] - (filterValue) => void when filter input changes.
 * @param {Function} [onShow] - When overlay opens.
 * @param {Function} [onHide] - When overlay closes.
 * @param {Function} [optionDisabled] - (option) => boolean or property key to disable options.
 * @param {number} [zIndex] - Overlay panel z-index (e.g. when rendered above other overlays).
 */
export default class UlxDropdown extends Component {
	@service modalStack;

	@action
	handleFocus(event) {
		const onFocusCallback = this.args.onFocus;
		if (typeof onFocusCallback === "function") onFocusCallback(event);
	}

	@action
	handleBlur(event) {
		const onBlurCallback = this.args.onBlur;
		if (typeof onBlurCallback === "function") onBlurCallback(event);
	}

	@tracked overlayVisible = false;
	@tracked focusedOptionIndex = -1;
	@tracked showOptionKeyboardFocusRing = false;
	@tracked filterValue = "";
	@tracked triggerElement = null;
	@tracked panelElement = null;
	@tracked panelPosition = "below";
	/** When `@position` is `auto`, locks above/below for the current open overlay session. */
	lockedAutoPanelPlacement = null;

	get fieldContext() {
		const { field } = this.args;
		return field && typeof field === "object" ? field : null;
	}

	get triggerId() {
		const { id, key } = this.args;
		if (typeof id === "string" && id.length) return id;
		if (typeof key === "string" && key.length) return key;
		const fieldKey = this.fieldContext?.key;
		if (typeof fieldKey === "string" && fieldKey.length) return fieldKey;
		return `ulx-dropdown-${guidFor(this)}`;
	}

	get listboxId() {
		return `${this.triggerId}-listbox`;
	}

	get rootDataQa() {
		return this.args.dataQa ?? "ulx-dropdown";
	}

	get filterInputDataQa() {
		const { filterDataQa } = this.args;

		if (typeof filterDataQa === "string" && filterDataQa.length) {
			return filterDataQa;
		}

		return "ulx-dropdown-filter";
	}

	get baseClass() {
		return getComponentClass("dropdown");
	}

	get rootClasses() {
		const {
			disabled = false,
			invalid: invalidArg = false,
			error,
			loading = false,
			size = "m-size",
			customClass
		} = this.args;
		const invalid = isInvalidState(invalidArg, error ?? this.fieldContext?.error);
		const parts = [this.baseClass];
		size && parts.push(size);
		(disabled || loading) && parts.push("disabled");
		invalid && parts.push("invalid");
		loading && parts.push("loading");
		this.overlayVisible && parts.push("open");
		customClass && parts.push(customClass);
		return [...new Set(parts.filter(Boolean))].join(" ");
	}

	get isTriggerDisabled() {
		return !!this.args.disabled || !!this.args.loading;
	}

	get dropdownSize() {
		return this.args.size ?? "m-size";
	}

	get focusItemClass() {
		return getComponentClass("focus");
	}

	dismissKeyboardOptionFocusRing() {
		this.showOptionKeyboardFocusRing = false;
	}

	@action
	onTriggerPointerIntent() {
		if (this.isTriggerDisabled) return;
		this.dismissKeyboardOptionFocusRing();
	}

	@action
	onOptionPanelPointerIntent() {
		this.dismissKeyboardOptionFocusRing();
	}

	get isInvalid() {
		const { invalid, error } = this.args;
		return isInvalidState(invalid, error ?? this.fieldContext?.error);
	}

	get optionLabelKey() {
		return this.args.optionLabel ?? "label";
	}

	get optionValueKey() {
		return this.args.optionValue ?? "value";
	}

	get optionImageUrlKey() {
		return this.args.optionImageUrl ?? null;
	}

	get optionGroupChildrenKey() {
		return this.args.optionGroupChildren ?? "items";
	}

	get hasGroups() {
		return !!this.args.optionGroupLabel;
	}

	get groupLabelKey() {
		return this.args.optionGroupLabel ?? "label";
	}

	@action
	getResolved(option, key) {
		if (option == null) return undefined;
		const propertyPath = key ?? this.optionLabelKey;
		const pathSegments = propertyPath.split(".");
		let currentValue = option;
		for (const segment of pathSegments) {
			currentValue = currentValue?.[segment];
		}
		return currentValue;
	}

	@action
	getOptionLabel(option) {
		if (option == null) return "";
		if (typeof option === "object" && option !== null) {
			const label = this.getResolved(option, this.optionLabelKey);
			return label != null ? String(label) : "";
		}
		return String(option);
	}

	@action
	getOptionValue(option) {
		if (option == null) return undefined;
		if (typeof option === "object" && option !== null) {
			return this.getResolved(option, this.optionValueKey);
		}
		return option;
	}

	@action
	getOptionImageUrl(option) {
		const imageUrlKey = this.optionImageUrlKey;
		return imageUrlKey && option != null ? this.getResolved(option, imageUrlKey) : undefined;
	}

	@action
	getOptionDataQa(option, index) {
		const optionDataQa =
			option && typeof option === "object" ? this.getResolved(option, "dataQa") : null;
		return optionDataQa || `ulx-dropdown-option-${index}`;
	}

	@action
	getFlagClass(code) {
		return code ? `flag flag-${String(code).toLowerCase()}` : "";
	}

	@action
	isOptionDisabled(option) {
		if (option == null) return true;
		const { optionDisabled } = this.args;
		if (typeof optionDisabled === "function") return optionDisabled(option);
		if (typeof optionDisabled === "string") return !!this.getResolved(option, optionDisabled);
		return !!option.disabled;
	}

	get flatOptions() {
		const options = this.args.options ?? [];
		if (!this.hasGroups) return options;
		const flatOptionsWithGroup = [];
		const groupLabelKey = this.groupLabelKey;
		const childrenKey = this.optionGroupChildrenKey;
		for (const group of options) {
			const groupChildren = group?.[childrenKey] ?? [];
			for (const item of groupChildren) {
				flatOptionsWithGroup.push({
					item,
					groupLabel: this.getResolved(group, groupLabelKey),
					group
				});
			}
		}
		return flatOptionsWithGroup;
	}

	get allOptionsFlat() {
		const options = this.args.options ?? [];
		if (!this.hasGroups) return options;
		const flattenedOptions = [];
		const childrenKey = this.optionGroupChildrenKey;
		for (const group of options) {
			const groupChildren = group?.[childrenKey] ?? [];
			flattenedOptions.push(...groupChildren);
		}
		return flattenedOptions;
	}

	get unfilteredOptions() {
		return this.hasGroups ? this.flatOptions : (this.args.options ?? []);
	}

	get shouldShowFilter() {
		return this.args.filter === true && this.unfilteredOptions.length >= MIN_FILTER_OPTION_COUNT;
	}

	get visibleOptions() {
		const sourceOptionsList = this.unfilteredOptions;
		const normalizedFilterValue = this.shouldShowFilter
			? (this.filterValue ?? "").trim().toLowerCase()
			: "";
		if (!normalizedFilterValue) return sourceOptionsList;

		if (this.hasGroups) {
			return sourceOptionsList.filter(({ item }) =>
				this.getOptionLabel(item).toLowerCase().includes(normalizedFilterValue)
			);
		}
		return sourceOptionsList.filter((option) =>
			this.getOptionLabel(option).toLowerCase().includes(normalizedFilterValue)
		);
	}

	get selectedOption() {
		const selectedValue = this.args.value;
		const options = this.args.options ?? [];
		if (this.hasGroups) {
			const flattenedOptions = this.allOptionsFlat;
			return (
				flattenedOptions.find((option) =>
					this.valueEquals(this.getOptionValue(option), selectedValue)
				) ?? null
			);
		}
		return (
			options.find((option) => this.valueEquals(this.getOptionValue(option), selectedValue)) ?? null
		);
	}

	@action
	valueEquals(a, b) {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (typeof a === "object" && typeof b === "object") {
			return JSON.stringify(a) === JSON.stringify(b);
		}
		return false;
	}

	@action
	isOptionSelected(option) {
		if (option == null) return false;
		return this.valueEquals(this.getOptionValue(option), this.args.value);
	}

	get selectedLabel() {
		const selectedOptionItem = this.selectedOption;
		return selectedOptionItem != null ? this.getOptionLabel(selectedOptionItem) : null;
	}

	get selectedOptionImageUrl() {
		const imageUrlKey = this.optionImageUrlKey;
		const selectedOptionItem = this.selectedOption;
		return imageUrlKey && selectedOptionItem != null
			? this.getResolved(selectedOptionItem, imageUrlKey)
			: undefined;
	}

	get placeholderLabel() {
		return this.args.placeholder ?? "";
	}

	get contentPlaceholderClass() {
		return this.selectedLabel == null ? "place-holder" : "";
	}

	get ariaDescribedBy() {
		const { ariaDescribedBy } = this.args;
		return ariaDescribedBy ?? this.fieldContext?.describedBy;
	}

	get ariaErrorMessage() {
		const { ariaErrorMessage } = this.args;
		return ariaErrorMessage ?? this.fieldContext?.errorId;
	}

	get rules() {
		const { rules: rulesArg } = this.args;
		return normalizeRules(rulesArg ?? this.fieldContext?.rules);
	}

	get isRequired() {
		return !!this.args.required || isRulesRequired(this.rules);
	}

	get clearButtonAriaLabel() {
		return t("lbl.clear.selection");
	}

	get filterInputAriaLabel() {
		const { filterAriaLabel } = this.args;
		if (typeof filterAriaLabel === "string" && filterAriaLabel.length) {
			return filterAriaLabel;
		}
		return t("lbl.a11y.dropdown.filter");
	}

	get resolvedContext() {
		return resolveOverlayContext(this.args.context ?? "self");
	}

	get resolvedBoundary() {
		return resolveOverlayBoundary(this.args.boundary ?? "window");
	}

	get resolvedScrollContext() {
		return resolveOverlayScrollContext(this.args.scrollContext ?? "window");
	}

	get resolvedPanelPosition() {
		const { position = DROPDOWN_PANEL_POSITION_AUTO } = this.args;
		const normalizedPosition =
			typeof position === "string" ? position.trim().toLowerCase() : DROPDOWN_PANEL_POSITION_AUTO;

		if (normalizedPosition === DROPDOWN_PANEL_POSITION_TOP || normalizedPosition === "above") {
			return DROPDOWN_PANEL_POSITION_TOP;
		}

		if (normalizedPosition === DROPDOWN_PANEL_POSITION_BOTTOM || normalizedPosition === "below") {
			return DROPDOWN_PANEL_POSITION_BOTTOM;
		}

		return DROPDOWN_PANEL_POSITION_AUTO;
	}

	get filterPlaceholderLabel() {
		return this.args.filterPlaceholder ?? t("label.search");
	}

	clearLockedAutoPanelPlacement() {
		this.lockedAutoPanelPlacement = null;
	}

	resolveShouldPlaceAbove({
		panelPositionPreference,
		targetRect,
		menuHeight,
		fallbackBoundary,
		spacing,
		viewportPadding
	}) {
		if (panelPositionPreference === DROPDOWN_PANEL_POSITION_TOP) {
			return true;
		}

		if (panelPositionPreference === DROPDOWN_PANEL_POSITION_BOTTOM) {
			return false;
		}

		if (this.lockedAutoPanelPlacement != null) {
			return this.lockedAutoPanelPlacement === DROPDOWN_PANEL_POSITION_TOP;
		}

		const initialTop = targetRect.bottom + spacing;
		const spaceBelow = fallbackBoundary.bottom - targetRect.bottom - spacing - viewportPadding;
		const spaceAbove = targetRect.top - fallbackBoundary.top - spacing - viewportPadding;
		const shouldPlaceAbove =
			initialTop + menuHeight > fallbackBoundary.bottom && spaceAbove > spaceBelow;

		this.lockedAutoPanelPlacement = shouldPlaceAbove
			? DROPDOWN_PANEL_POSITION_TOP
			: DROPDOWN_PANEL_POSITION_BOTTOM;

		return shouldPlaceAbove;
	}

	positionPanel = modifier(
		(element, [when, triggerEl, panelPositionPreference, setPanelPosition]) => {
			if (!when || !element) return;

			const alignPanelToTrigger = () => {
				const trigger = this.triggerElement ?? triggerEl;
				if (!trigger) return;

				const resolvedContext = this.resolvedContext;
				const triggerRect = trigger.getBoundingClientRect();
				const coordinateApi = buildOverlayCoordinateApi(resolvedContext, element);
				const targetRect = coordinateApi.fromViewportRect(triggerRect);
				const boundaryRect = getBoundaryRectInOverlaySpace(this.resolvedBoundary, coordinateApi);
				const spacing = 2;
				const viewportPadding = 10;

				coordinateApi.applyPosition(element, targetRect.bottom + spacing, targetRect.left);
				element.style.width = `${triggerRect.width}px`;
				element.style.minWidth = `${triggerRect.width}px`;
				element.style.maxWidth = `${triggerRect.width}px`;
				const zIndex =
					typeof this.args.zIndex === "number"
						? this.args.zIndex
						: resolvedContext === document.body
							? getOverlayZIndexAboveMask(this.modalStack)
							: 2;
				element.style.setProperty("z-index", `${zIndex}`, "important");
				element.style.margin = "0";
				element.style.padding = "0";

				const menuWidth = element.offsetWidth || triggerRect.width;
				const menuHeight = element.offsetHeight || 200;
				const fallbackBoundary = boundaryRect ?? {
					top: 0,
					left: 0,
					right: targetRect.left + menuWidth + viewportPadding,
					bottom: targetRect.bottom + menuHeight + viewportPadding
				};

				let top = targetRect.bottom + spacing;
				let left = targetRect.left;
				const leftPosition = targetRect.right - menuWidth;
				const minLeft = fallbackBoundary.left + viewportPadding;
				const maxLeft = fallbackBoundary.right - menuWidth - viewportPadding;

				if (left + menuWidth > fallbackBoundary.right - viewportPadding) {
					left = leftPosition >= minLeft ? leftPosition : maxLeft;
				}
				left = clampOverlayValue(left, minLeft, Math.max(minLeft, maxLeft));

				const shouldPlaceAbove = this.resolveShouldPlaceAbove({
					panelPositionPreference,
					targetRect,
					menuHeight,
					fallbackBoundary,
					spacing,
					viewportPadding
				});

				if (shouldPlaceAbove) {
					top = targetRect.top - menuHeight - spacing;
					typeof setPanelPosition === "function" && setPanelPosition("above");
				} else {
					typeof setPanelPosition === "function" && setPanelPosition("below");
				}

				let minTop = fallbackBoundary.top + viewportPadding;
				let maxTop = fallbackBoundary.bottom - menuHeight - viewportPadding;

				const triggerOutTop = targetRect.bottom < fallbackBoundary.top + viewportPadding;
				const triggerOutBottom = targetRect.top > fallbackBoundary.bottom - viewportPadding;

				triggerOutTop && (minTop = Math.min(minTop, top));
				triggerOutBottom && (maxTop = Math.max(maxTop, top));

				// When the panel is portaled to body, let it move with the trigger instead of
				// sticking to the viewport boundary once the trigger scrolls out of view.
				if (coordinateApi.usesDocumentCoordinates) {
					minTop = Math.min(minTop, -menuHeight);
				}

				top = clampOverlayValue(top, minTop, Math.max(minTop, maxTop));

				coordinateApi.applyPosition(element, top, left);
			};

			schedule("afterRender", () => {
				alignPanelToTrigger();
				requestAnimationFrame(alignPanelToTrigger);
			});

			const onResize = () => {
				if (this.overlayVisible) alignPanelToTrigger();
			};
			const shouldTrackScroll = this.resolvedContext != null;
			const scrollTarget = this.resolvedScrollContext;
			const onScroll = () => {
				if (this.overlayVisible) alignPanelToTrigger();
			};
			window.addEventListener("resize", onResize);
			shouldTrackScroll && scrollTarget?.addEventListener?.("scroll", onScroll);

			const resizeObserver =
				typeof ResizeObserver !== "undefined"
					? new ResizeObserver(() => {
							if (!this.overlayVisible) return;
							requestAnimationFrame(alignPanelToTrigger);
						})
					: null;

			resizeObserver?.observe(element);

			return () => {
				window.removeEventListener("resize", onResize);
				shouldTrackScroll && scrollTarget?.removeEventListener?.("scroll", onScroll);
				resizeObserver?.disconnect();
			};
		}
	);

	triggerRef = modifier((element) => {
		this.triggerElement = element;
		return () => {
			if (this.triggerElement === element) this.triggerElement = null;
		};
	});

	panelRef = modifier((element) => {
		this.panelElement = element;
		return () => {
			if (this.panelElement === element) this.panelElement = null;
		};
	});

	scrollFocusedIntoView = modifier((element, [when, focusedIndex, listId]) => {
		if (!when || focusedIndex < 0 || !element) return;
		const runScroll = (retry = false) => {
			const wrapper = element;
			const id = listId ? `${listId}-item-${focusedIndex}` : null;
			if (!id) return;
			const item = document.getElementById(id);
			if (!item) {
				if (!retry) requestAnimationFrame(() => runScroll(true));
				return;
			}
			const itemTop = item.offsetTop;
			const itemBottom = itemTop + item.offsetHeight;
			const wrapperScrollTop = wrapper.scrollTop;
			const wrapperHeight = wrapper.clientHeight;
			if (itemBottom > wrapperScrollTop + wrapperHeight) {
				wrapper.scrollTop = itemBottom - wrapperHeight;
			}
			if (itemTop < wrapperScrollTop) wrapper.scrollTop = itemTop;
		};
		schedule("afterRender", () => {
			requestAnimationFrame(() => runScroll(false));
		});
	});

	@action
	setPanelPosition(position) {
		this.panelPosition = position;
	}

	/** After click-open, focus may still be on `body`; move it to the combobox so Arrow keys do not scroll the page. */
	ensureComboboxControlFocused() {
		schedule("afterRender", () => {
			if (!this.overlayVisible || this.isTriggerDisabled) return;
			document.getElementById(this.triggerId)?.focus?.({ preventScroll: true });
		});
	}

	get shouldFocusPanelFilterOnOpen() {
		return this.shouldShowFilter;
	}

	get hasHeaderFocusableControls() {
		return this.getPanelHeaderFocusableElements().length > 0;
	}

	getPanelHeaderFocusableElements() {
		const panelRoot = this.panelElement;
		if (!panelRoot) return [];
		const acc = [];
		const filterInput = panelRoot.querySelector(".dropdown-filter-input");
		if (filterInput && !filterInput.disabled && filterInput.offsetParent !== null) {
			acc.push(filterInput);
		}
		const footer = panelRoot.querySelector("[data-qa='ulx-dropdown-footer']");
		if (footer) {
			for (const el of getFocusableElements(footer)) {
				if (!acc.includes(el)) acc.push(el);
			}
		}
		return acc;
	}

	getFocusedOptionElement() {
		if (this.focusedOptionIndex < 0) return null;
		return document.getElementById(`${this.triggerId}-item-${this.focusedOptionIndex}`);
	}

	getOptionIndexFromElement(optionElement) {
		const optionId = optionElement?.id ?? "";
		const idPrefix = `${this.triggerId}-item-`;
		if (!optionId.startsWith(idPrefix)) return -1;
		return Number.parseInt(optionId.slice(idPrefix.length), 10);
	}

	getOptionItemForElement(element) {
		return element?.closest?.('li[role="option"]') ?? null;
	}

	getOptionActionButtons(optionElement = this.getFocusedOptionElement()) {
		if (!optionElement) return [];
		const actionsContainer = optionElement.querySelector(".dropdown-item-actions");
		if (!actionsContainer) return [];

		return Array.from(actionsContainer.querySelectorAll("button, a[href]")).filter((element) => {
			if (element.disabled || element.getAttribute("aria-disabled") === "true") return false;
			if (element.getAttribute("aria-hidden") === "true") return false;
			return element.tabIndex >= 0;
		});
	}

	resolveActiveActionControl(activeElement = document.activeElement) {
		const actionsContainer = activeElement?.closest?.(".dropdown-item-actions");
		if (!actionsContainer) return null;
		const optionElement = actionsContainer.closest('li[role="option"]');
		const actionButtons = this.getOptionActionButtons(optionElement);
		const directMatch = actionButtons.find(
			(button) => button === activeElement || button.contains(activeElement)
		);
		return directMatch ?? null;
	}

	isFocusInOptionActions() {
		return !!this.resolveActiveActionControl();
	}

	/** Panel buttons/inputs (item actions, footer controls) must keep native Enter/Space activation. */
	isFocusInInteractivePanelControl() {
		const activeElement = document.activeElement;
		const panel = this.panelElement;
		if (!activeElement || !panel?.contains(activeElement)) return false;
		if (this.isFocusInOptionActions()) return true;

		return !!activeElement.matches?.(
			"button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [role='button']:not([aria-disabled='true'])"
		);
	}

	isComboboxFocused() {
		if (this.isFocusInOptionActions()) return false;
		const triggerElement = document.getElementById(this.triggerId);
		const activeElement = document.activeElement;
		return (
			!!triggerElement &&
			(activeElement === triggerElement || triggerElement.contains(activeElement))
		);
	}

	shouldSkipTriggerArrowNavigation() {
		if (this.isFocusInOptionActions()) return true;
		const activeElement = document.activeElement;
		const triggerElement = document.getElementById(this.triggerId);
		if (!activeElement || !triggerElement || !this.panelElement) return false;
		if (activeElement === triggerElement) return false;
		return this.panelElement.contains(activeElement);
	}

	syncFocusedOptionIndexFromElement(optionElement) {
		const optionIndex = this.getOptionIndexFromElement(optionElement);
		if (optionIndex >= 0) {
			this.focusedOptionIndex = optionIndex;
			this.showOptionKeyboardFocusRing = true;
		}
	}

	@action
	tryFocusOptionActions(options = {}) {
		const { forward = true, fromElement = document.activeElement } = options;
		let optionElement = this.getOptionItemForElement(fromElement);
		if (!optionElement) optionElement = this.getFocusedOptionElement();
		const actionButtons = this.getOptionActionButtons(optionElement);
		if (!actionButtons.length) return false;
		this.syncFocusedOptionIndexFromElement(optionElement);
		this.showOptionKeyboardFocusRing = true;
		const targetButton = forward ? actionButtons[0] : actionButtons[actionButtons.length - 1];
		targetButton?.focus?.({ preventScroll: true });
		return true;
	}

	@action
	handleItemActionTab(event) {
		const activeElement = document.activeElement;
		const activeAction = this.resolveActiveActionControl(activeElement);

		if (activeAction) {
			const optionElement = this.getOptionItemForElement(activeAction);
			const actionButtons = this.getOptionActionButtons(optionElement);
			const actionButtonIndex = actionButtons.indexOf(activeAction);
			if (actionButtonIndex < 0) return false;

			this.syncFocusedOptionIndexFromElement(optionElement);
			event.preventDefault();

			if (event.shiftKey) {
				if (actionButtonIndex === 0) {
					this.ensureComboboxControlFocused();
				} else {
					actionButtons[actionButtonIndex - 1]?.focus?.({ preventScroll: true });
				}
				return true;
			}

			if (actionButtonIndex < actionButtons.length - 1) {
				actionButtons[actionButtonIndex + 1]?.focus?.({ preventScroll: true });
				return true;
			}

			this.closeOverlayAndMoveFocus({ backward: false, anchorElement: activeAction });
			return true;
		}

		if (this.isComboboxFocused() && this.focusedOptionIndex >= 0) {
			const actionButtons = this.getOptionActionButtons(this.getFocusedOptionElement());
			if (!actionButtons.length) return false;
			if (event.shiftKey) return false;

			event.preventDefault();
			this.showOptionKeyboardFocusRing = true;
			actionButtons[0]?.focus?.({ preventScroll: true });
			return true;
		}

		return false;
	}

	@action
	handleItemActionHorizontalNavigation(event) {
		const keyPressed = event.code || event.key;
		const activeElement = document.activeElement;
		const activeAction = this.resolveActiveActionControl(activeElement);
		const optionElement =
			this.getOptionItemForElement(activeAction) ?? this.getFocusedOptionElement();
		const actionButtons = this.getOptionActionButtons(optionElement);
		const actionButtonIndex = activeAction ? actionButtons.indexOf(activeAction) : -1;

		if (keyPressed === "ArrowRight") {
			if (actionButtonIndex >= 0 && actionButtonIndex < actionButtons.length - 1) {
				event.preventDefault();
				actionButtons[actionButtonIndex + 1]?.focus?.({ preventScroll: true });
				return true;
			}
			if (actionButtonIndex < 0 && this.tryFocusOptionActions({ fromElement: activeElement })) {
				event.preventDefault();
				return true;
			}
		}

		if (keyPressed === "ArrowLeft") {
			if (actionButtonIndex > 0) {
				event.preventDefault();
				actionButtons[actionButtonIndex - 1]?.focus?.({ preventScroll: true });
				return true;
			}
			if (actionButtonIndex === 0) {
				event.preventDefault();
				this.syncFocusedOptionIndexFromElement(optionElement);
				this.ensureComboboxControlFocused();
				return true;
			}
		}

		return false;
	}

	@action
	navigateOptionFocus(delta) {
		const activeAction = this.resolveActiveActionControl();
		if (activeAction) {
			this.syncFocusedOptionIndexFromElement(this.getOptionItemForElement(activeAction));
		}
		this.moveFocus(delta);
		this.showOptionKeyboardFocusRing = true;
		this.ensureComboboxControlFocused();
	}

	focusFilterInput() {
		const filterInput = this.panelElement?.querySelector(".dropdown-filter-input");
		if (!filterInput || filterInput.disabled) return false;
		filterInput.focus?.({ preventScroll: true });
		return true;
	}

	focusFirstAvailablePanelControl() {
		const controls = this.getPanelHeaderFocusableElements();
		if (controls.length <= 0) return false;
		controls[0]?.focus?.({ preventScroll: true });
		return true;
	}

	focusTriggerFallback() {
		if (!this.overlayVisible || this.isTriggerDisabled) return;
		document.getElementById(this.triggerId)?.focus?.({ preventScroll: true });
	}

	/** Return focus to the combobox trigger after the overlay closes (any `@context`). */
	restoreTriggerFocusAfterClose() {
		if (this.isTriggerDisabled) return;
		schedule("afterRender", () => {
			requestAnimationFrame(() => {
				this.getTriggerFocusableAnchor()?.focus?.({ preventScroll: true });
			});
		});
	}

	focusPanelInputOnOpen() {
		schedule("afterRender", () => {
			if (!this.overlayVisible) return;
			const tryFocus = (attempt = 0) => {
				if (!this.overlayVisible) return;
				if (this.focusFilterInput()) return;
				if (this.focusFirstAvailablePanelControl()) return;
				if (attempt < 2) {
					requestAnimationFrame(() => tryFocus(attempt + 1));
					return;
				}
				this.focusTriggerFallback();
			};
			requestAnimationFrame(() => tryFocus(0));
		});
	}

	/** When the panel filter should receive focus (portaled panel), or else the combobox trigger. */
	focusAppropriateControlOnOpen() {
		if (this.shouldFocusPanelFilterOnOpen) {
			this.focusPanelInputOnOpen();
			return;
		}
		this.ensureComboboxControlFocused();
	}

	@action
	enterHeaderMode(options = {}) {
		const { focusFirst = true } = options;
		const controls = this.getPanelHeaderFocusableElements();
		if (!controls.length) return;
		const target = focusFirst ? controls[0] : controls[controls.length - 1];
		target?.focus?.({ preventScroll: true });
	}

	@action
	cycleHeaderFocus(direction = 1) {
		const controls = this.getPanelHeaderFocusableElements();
		if (!controls.length) {
			this.focusTriggerFallback();
			return;
		}
		const activeElement = document.activeElement;
		const currentIndex = controls.indexOf(activeElement);
		if (currentIndex === -1) {
			const fallbackIndex = direction < 0 ? controls.length - 1 : 0;
			controls[fallbackIndex]?.focus?.({ preventScroll: true });
			return;
		}
		const nextIndex = (currentIndex + direction + controls.length) % controls.length;
		controls[nextIndex]?.focus?.({ preventScroll: true });
	}

	closeOverlay() {
		if (!this.overlayVisible) return;
		this.overlayVisible = false;
		this.panelPosition = "below";
		this.clearLockedAutoPanelPlacement();
		this.dismissKeyboardOptionFocusRing();
		this.args.onHide?.();
	}

	getTriggerFocusableAnchor(options = {}) {
		const { backward = false } = options;
		const triggerFocusables = getFocusableElements(this.triggerElement);
		if (triggerFocusables.length > 0) {
			return backward ? triggerFocusables[0] : triggerFocusables[triggerFocusables.length - 1];
		}
		return document.getElementById(this.triggerId) ?? this.triggerElement;
	}

	getNextFocusableOutsidePanel(anchorElement, options = {}) {
		const { backward = false } = options;
		if (!anchorElement) return null;

		const panelRoot = this.panelElement;
		const allFocusables = getFocusableElements(document.body);
		const anchorIndex = allFocusables.indexOf(anchorElement);

		if (anchorIndex >= 0) {
			const delta = backward ? -1 : 1;
			for (
				let index = anchorIndex + delta;
				index >= 0 && index < allFocusables.length;
				index += delta
			) {
				const candidate = allFocusables[index];
				if (!panelRoot?.contains(candidate)) return candidate;
			}
		}

		return getAdjacentFocusableInDocument(this.getTriggerFocusableAnchor({ backward }), {
			backward,
			excludeContaining: panelRoot ?? undefined
		});
	}

	@action
	closeOverlayAndMoveFocus(options = {}) {
		const { backward = false, anchorElement = null } = options;
		const focusAnchor = anchorElement ?? this.getTriggerFocusableAnchor({ backward });
		const nextFocusableElement = anchorElement
			? this.getNextFocusableOutsidePanel(focusAnchor, { backward })
			: getAdjacentFocusableInDocument(focusAnchor, {
					backward,
					excludeContaining: this.panelElement ?? undefined
				});

		this.closeOverlay();

		schedule("afterRender", () => {
			requestAnimationFrame(() => {
				if (nextFocusableElement) {
					nextFocusableElement.focus?.({ preventScroll: true });
					return;
				}
				this.getTriggerFocusableAnchor({ backward })?.focus?.({ preventScroll: true });
			});
		});
	}

	@action
	toggleOverlay() {
		if (this.args.disabled || this.args.loading) return;
		this.overlayVisible = !this.overlayVisible;
		if (this.overlayVisible) {
			this.filterValue = "";
			this.focusedOptionIndex = this.selectedOptionIndex;
			if (this.focusedOptionIndex < 0 && this.visibleOptions.length > 0) {
				this.focusedOptionIndex = 0;
			}
			this.panelPosition = "below";
			this.clearLockedAutoPanelPlacement();
			this.args.onShow?.();
			this.focusAppropriateControlOnOpen();
		} else {
			this.panelPosition = "below";
			this.clearLockedAutoPanelPlacement();
			this.dismissKeyboardOptionFocusRing();
			this.args.onHide?.();
			this.restoreTriggerFocusAfterClose();
		}
	}

	get selectedOptionIndex() {
		const list = this.visibleOptions;
		const selectedValue = this.args.value;
		for (let i = 0; i < list.length; i++) {
			const optionItem = this.hasGroups ? (list[i].item ?? list[i]) : list[i];
			if (this.valueEquals(this.getOptionValue(optionItem), selectedValue)) return i;
		}
		return -1;
	}

	@action
	selectOption(entry, event) {
		event?.preventDefault?.();
		event?.stopPropagation?.();
		const optionItem = entry?.item != null ? entry.item : entry;
		if (this.isOptionDisabled(optionItem)) return;
		const value = this.getOptionValue(optionItem);
		this.overlayVisible = false;
		this.panelPosition = "below";
		this.clearLockedAutoPanelPlacement();
		this.dismissKeyboardOptionFocusRing();
		this.args.onChange?.(value);
		this.args.onHide?.();
		this.restoreTriggerFocusAfterClose();
	}

	/** Applies Enter/Space selection for the current `focusedOptionIndex` (flat vs grouped row). */
	selectFocusedOptionIfEnabled() {
		const list = this.visibleOptions;
		if (this.focusedOptionIndex < 0) return;
		const focusedEntry = list[this.focusedOptionIndex];
		const optionItem =
			this.hasGroups && focusedEntry?.item != null ? focusedEntry.item : focusedEntry;
		if (optionItem && !this.isOptionDisabled(optionItem)) this.selectOption(focusedEntry);
	}

	@action
	clearSelection(event) {
		event?.stopPropagation?.();
		event?.preventDefault?.();
		if (this.args.disabled) return;
		this.overlayVisible = false;
		this.panelPosition = "below";
		this.clearLockedAutoPanelPlacement();
		this.dismissKeyboardOptionFocusRing();
		this.args.onChange?.(undefined);
		this.args.onFilter?.("");
		this.filterValue = "";
		this.args.onHide?.();
		this.restoreTriggerFocusAfterClose();
	}

	@action
	onClearIconKeydown(event) {
		const keyPressed = event.code || event.key;
		if (
			keyPressed === "Enter" ||
			keyPressed === "NumpadEnter" ||
			keyPressed === " " ||
			keyPressed === "Space"
		) {
			event.preventDefault();
			event.stopPropagation();
			this.clearSelection(event);
		}
	}

	@action
	onFilterInput(event) {
		const filterInputValue = event.target?.value ?? "";
		this.filterValue = filterInputValue;
		this.focusedOptionIndex = this.visibleOptions.length > 0 ? 0 : -1;
		this.showOptionKeyboardFocusRing = true;
		this.args.onFilter?.(filterInputValue);
	}

	@action
	stopFilterKeyEventPropagation(event) {
		event.stopPropagation();
	}

	@action
	onFilterKeydown(event) {
		event.stopPropagation();
		const keyPressed = event.code || event.key;
		if (keyPressed === "ArrowDown") {
			event.preventDefault();
			this.navigateOptionFocus(1);
		} else if (keyPressed === "ArrowUp") {
			event.preventDefault();
			this.navigateOptionFocus(-1);
		} else if (keyPressed === "ArrowRight" || keyPressed === "ArrowLeft") {
			if (this.handleItemActionHorizontalNavigation(event)) return;
		} else if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
			if (this.isFocusInOptionActions()) return;
			event.preventDefault();
			this.selectFocusedOptionIfEnabled();
		} else if (keyPressed === "Escape") {
			event.preventDefault();
			this.toggleOverlay();
		} else if (keyPressed === "Tab") {
			if (this.handleItemActionTab(event)) {
				event.stopPropagation();
				return;
			}
			event.preventDefault();
			this.closeOverlayAndMoveFocus({ backward: event.shiftKey });
		}
	}

	@action
	onTriggerKeydown(event) {
		if (this.isTriggerDisabled) return;
		const keyPressed = event.code || event.key;
		if (keyPressed === "ArrowDown") {
			if (this.shouldSkipTriggerArrowNavigation()) return;
			event.preventDefault();
			if (!this.overlayVisible) {
				this.showOptionKeyboardFocusRing = true;
				this.toggleOverlay();
			} else {
				this.navigateOptionFocus(1);
			}
			return;
		}
		if (keyPressed === "ArrowUp") {
			if (this.shouldSkipTriggerArrowNavigation()) return;
			event.preventDefault();
			if (this.overlayVisible) {
				this.navigateOptionFocus(-1);
			} else {
				this.showOptionKeyboardFocusRing = true;
				this.toggleOverlay();
			}
			return;
		}
		if (keyPressed === "ArrowRight" || keyPressed === "ArrowLeft") {
			if (this.shouldSkipTriggerArrowNavigation()) return;
			if (this.overlayVisible && this.handleItemActionHorizontalNavigation(event)) return;
		}
		if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
			if (this.isFocusInInteractivePanelControl()) return;
			event.preventDefault();
			if (this.overlayVisible && this.focusedOptionIndex >= 0) {
				this.selectFocusedOptionIfEnabled();
			} else if (!this.overlayVisible) {
				this.showOptionKeyboardFocusRing = true;
				this.toggleOverlay();
			}
			return;
		}
		if (keyPressed === " " || keyPressed === "Space") {
			if (this.isFocusInInteractivePanelControl()) return;
			event.preventDefault();
			if (!this.overlayVisible) {
				this.showOptionKeyboardFocusRing = true;
			}
			this.toggleOverlay();
			return;
		}
		if (keyPressed === "Escape") {
			event.preventDefault();
			if (this.overlayVisible) this.toggleOverlay();
			return;
		}
		if (keyPressed === "Tab" && this.overlayVisible) {
			if (this.handleItemActionTab(event)) {
				event.stopPropagation();
				return;
			}
			event.preventDefault();
			this.closeOverlayAndMoveFocus({ backward: event.shiftKey });
			return;
		}
	}

	@action
	moveFocus(delta) {
		const list = this.visibleOptions;
		if (!list.length) return;
		this.showOptionKeyboardFocusRing = true;
		let nextFocusedIndex = this.focusedOptionIndex + delta;
		if (nextFocusedIndex < 0) nextFocusedIndex = 0;
		if (nextFocusedIndex >= list.length) nextFocusedIndex = list.length - 1;
		this.focusedOptionIndex = nextFocusedIndex;
	}

	@action
	onPanelKeydown(event) {
		const keyPressed = event.code || event.key;
		if (keyPressed === "Tab") {
			if (this.handleItemActionTab(event)) {
				event.stopPropagation();
				return;
			}
			event.preventDefault();
			this.closeOverlayAndMoveFocus({ backward: event.shiftKey });
			return;
		}
		if (keyPressed === "ArrowDown") {
			event.preventDefault();
			event.stopPropagation();
			this.navigateOptionFocus(1);
		} else if (keyPressed === "ArrowUp") {
			event.preventDefault();
			event.stopPropagation();
			this.navigateOptionFocus(-1);
		} else if (keyPressed === "ArrowRight" || keyPressed === "ArrowLeft") {
			if (this.handleItemActionHorizontalNavigation(event)) {
				event.stopPropagation();
				return;
			}
		} else if (keyPressed === "Escape") {
			event.preventDefault();
			this.toggleOverlay();
		} else if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
			if (this.isFocusInOptionActions()) return;
			event.preventDefault();
			this.selectFocusedOptionIfEnabled();
		}
	}

	get optionList() {
		if (this.hasGroups) return this.visibleOptions;
		return this.visibleOptions.map((option) => ({ item: option }));
	}

	get optionListWithGroups() {
		if (!this.hasGroups) return [];
		const list = this.visibleOptions;
		const rows = [];
		let lastGroupLabel = null;
		for (let flatIndex = 0; flatIndex < list.length; flatIndex++) {
			const entry = list[flatIndex];
			const groupLabel = entry?.groupLabel ?? "";
			if (groupLabel !== lastGroupLabel) {
				rows.push({ type: "group", label: groupLabel, group: entry?.group ?? null });
				lastGroupLabel = groupLabel;
			}
			rows.push({ type: "option", entry, flatIndex });
		}
		return rows;
	}

	get ariaControls() {
		return this.overlayVisible ? this.listboxId : undefined;
	}

	get activeDescendantId() {
		if (!this.overlayVisible || this.focusedOptionIndex < 0) return undefined;
		return `${this.triggerId}-item-${this.focusedOptionIndex}`;
	}

	get scrollHeightValue() {
		return this.args.scrollHeight ?? "232px";
	}

	@action
	stopPanelClick(event) {
		event.stopPropagation();
	}

	<template>
		<div
			id={{this.triggerId}}
			class={{this.rootClasses}}
			data-qa={{this.rootDataQa}}
			role="combobox"
			aria-haspopup="listbox"
			aria-expanded={{this.overlayVisible}}
			aria-controls={{this.ariaControls}}
			aria-activedescendant={{this.activeDescendantId}}
			aria-invalid={{if (eq this.isInvalid true) "true" "false"}}
			aria-required={{this.isRequired}}
			aria-describedby={{this.ariaDescribedBy}}
			aria-errormessage={{this.ariaErrorMessage}}
			aria-disabled="{{this.isTriggerDisabled}}"
			tabindex={{if (not this.isTriggerDisabled) "0" "-1"}}
			{{this.triggerRef}}
			{{overlayDismiss
				this.overlayVisible
				onClose=this.toggleOverlay
				panel=this.panelElement
				dismissVariant="rootPanel"
				defer=true
			}}
			{{on "pointerdown" this.onTriggerPointerIntent}}
			{{on "click" this.toggleOverlay}}
			{{on "keydown" this.onTriggerKeydown}}
			{{on "focus" this.handleFocus}}
			{{on "blur" this.handleBlur}}
			...attributes
		>
			<div class="dropdown-input {{this.contentPlaceholderClass}}" tabindex="-1">
				{{#if (has-block "value")}}
					<div class="flex items-center">
						{{yield
							(hash
								selectedOption=this.selectedOption
								selectedLabel=this.selectedLabel
								placeholder=this.placeholderLabel
								imageUrl=this.selectedOptionImageUrl
							)
							to="value"
						}}
					</div>
				{{else}}
					{{#if (and this.selectedLabel)}}
						<span class="dropdown-item-label">{{this.selectedLabel}}</span>
						{{#if (has-block "subtext")}}
							<span>{{yield this.selectedOption to="subtext"}}</span>
						{{/if}}
					{{else}}
						<span class="dropdown-item-label">{{this.placeholderLabel}}</span>
					{{/if}}
				{{/if}}
			</div>
			<div
				class="dropdown-trigger {{if this.isTriggerDisabled 'disabled' ''}}"
				data-qa="ulx-dropdown-trigger"
				tabindex="-1"
			>
				{{#if (and @showClear this.selectedOption (not this.isTriggerDisabled))}}
					<UlxIcon
						@type="font"
						@dataQa="ulx-dropdown-clear"
						@iconName="close-stroke-icon-new dropdown-clear-icon"
						@componentClass="bs-icons1"
						@ariaLabel={{this.clearButtonAriaLabel}}
						role="button"
						tabindex="0"
						{{on "click" this.clearSelection}}
						{{on "keydown" this.onClearIconKeydown}}
					/>
				{{/if}}
				{{#if (and @loading)}}
					<span class="dropdown-loading-icon" aria-hidden="true" aria-busy="true">
						<UlxProgressSpinner @size={{this.dropdownSize}} aria-hidden="true" />
					</span>
				{{else}}
					{{#if (has-block "icon")}}
						<span tabindex="-1">
							{{yield (hash overlayVisible=this.overlayVisible) to="icon"}}
						</span>
					{{else}}
						<UlxIcon
							@iconName="down-stroke-icon-new dropdown-trigger-icon"
							@type="font"
							@componentClass="bs-icons1"
							aria-hidden="true"
						/>
					{{/if}}
				{{/if}}
			</div>
			{{#if this.overlayVisible}}
				<div
					id={{this.listboxId}}
					data-qa="ulx-dropdown-panel"
					class="dropdown-panel {{if (eq this.panelPosition 'above') 'dropdown-panel-above'}}"
					aria-hidden="false"
					{{this.panelRef}}
					{{overlayPortal this.overlayVisible this.resolvedContext}}
					{{this.positionPanel
						this.overlayVisible
						this.triggerElement
						this.resolvedPanelPosition
						(fn this.setPanelPosition)
					}}
					{{on "pointerdown" this.onOptionPanelPointerIntent}}
					{{on "keydown" this.onPanelKeydown capture=true}}
					{{on "click" this.stopPanelClick}}
				>
					{{#if this.shouldShowFilter}}
						<div class="dropdown-filter-container">
							<UlxIcon
								@type="font"
								@iconName="search-icon dropdown-filter-icon"
								@componentClass="bs-icons1"
								@size="s18"
								aria-hidden="true"
							/>
							<input
								type="text"
								class="dropdown-filter-input"
								data-qa={{this.filterInputDataQa}}
								value={{this.filterValue}}
								placeholder={{this.filterPlaceholderLabel}}
								aria-label={{this.filterInputAriaLabel}}
								{{on "input" this.onFilterInput}}
								{{on "keydown" this.onFilterKeydown}}
								{{on "keypress" this.stopFilterKeyEventPropagation}}
								{{on "keyup" this.stopFilterKeyEventPropagation}}
							/>
						</div>
					{{/if}}
					<div
						class="dropdown-wrapper"
						data-qa="ulx-dropdown-options-wrapper"
						style="max-height: {{this.scrollHeightValue}};"
						{{this.scrollFocusedIntoView
							this.overlayVisible
							this.focusedOptionIndex
							this.triggerId
						}}
					>
						<ul class="dropdown-list" role="listbox" data-qa="ulx-dropdown-list">
							{{#if (eq this.visibleOptions.length 0)}}
								<li class="dropdown-empty-message" role="presentation" data-qa="ulx-dropdown-empty">
									<span role="status">
										{{or
											(and this.shouldShowFilter @emptyFilterMessage)
											@emptyMessage
											(t "label.no.results.found")
										}}
									</span>
								</li>
							{{else if this.hasGroups}}
								{{#each this.optionListWithGroups as |row|}}
									{{#if (eq row.type "group")}}
										{{#if (or row.label row.group.imageUrl row.group.icon (has-block "group"))}}
											<li
												class="dropdown-item-header"
												role="presentation"
												aria-hidden="true"
												data-qa="ulx-dropdown-group"
											>
												{{#if (has-block "group")}}
													{{yield (hash label=row.label group=row.group) to="group"}}
												{{else}}
													<div class="dropdown-group-title">
														{{#if row.group.imageUrl}}
															<img
																src={{row.group.imageUrl}}
																alt={{row.label}}
																class={{concat "mr-2 flag " (this.getFlagClass row.group.code)}}
																aria-hidden="true"
															/>
														{{/if}}
														{{#if row.group.icon}}
															<span aria-hidden="true">
																<UlxIcon
																	@type="font"
																	@iconName={{row.group.icon}}
																	@componentClass="bs-icons1"
																	@size="s24"
																/>
															</span>
														{{/if}}
														<span>{{row.label}}</span>
													</div>
												{{/if}}
											</li>
										{{/if}}
									{{else}}
										{{#let row.entry.item as |option|}}
											<li
												role="option"
												id="{{this.triggerId}}-item-{{row.flatIndex}}"
												data-qa={{this.getOptionDataQa option row.flatIndex}}
												class="dropdown-item grouped
													{{if
														(and
															(eq row.flatIndex this.focusedOptionIndex)
															this.showOptionKeyboardFocusRing
														)
														this.focusItemClass
														''
													}}
													{{if (this.isOptionSelected option) 'selected' ''}}
													{{if (and @checkmark (this.isOptionSelected option)) 'checkmark' ''}}
													{{if (this.isOptionDisabled option) 'disabled' ''}}"
												aria-selected={{this.isOptionSelected option}}
												aria-disabled={{this.isOptionDisabled option}}
												tabindex="-1"
												{{on "click" (fn this.selectOption row.entry)}}
											>
												{{#if (has-block "item")}}
													<div class="flex items-center">
														{{yield
															(hash
																option=option
																label=(this.getOptionLabel option)
																index=row.flatIndex
																imageUrl=(this.getOptionImageUrl option)
															)
															to="item"
														}}
													</div>
												{{else}}
													<span
														class="dropdown-item-label
															{{if (this.isOptionSelected option) 'selected' ''}}
															{{if (this.isOptionDisabled option) 'disabled' ''}}"
													>
														{{this.getOptionLabel option}}
													</span>
													{{#if (and @checkmark (this.isOptionSelected option))}}
														<UlxIcon
															@type="font"
															@iconName="tick-icon-01 dropdown-checkmark"
															@componentClass="bs-icons1"
															aria-hidden="true"
														/>
													{{/if}}
												{{/if}}
											</li>
										{{/let}}
									{{/if}}
								{{/each}}
							{{else}}
								{{#each this.optionList as |entry index|}}
									{{#let entry.item as |option|}}
										<li
											role="option"
											id="{{this.triggerId}}-item-{{index}}"
											data-qa={{this.getOptionDataQa option index}}
											class="dropdown-item
												{{if
													(and (eq index this.focusedOptionIndex) this.showOptionKeyboardFocusRing)
													this.focusItemClass
													''
												}}
												{{if (this.isOptionSelected option) 'selected' ''}}
												{{if (and @checkmark (this.isOptionSelected option)) 'checkmark' ''}}
												{{if (this.isOptionDisabled option) 'disabled' ''}}"
											aria-selected={{this.isOptionSelected option}}
											aria-disabled={{this.isOptionDisabled option}}
											tabindex="-1"
											{{on "click" (fn this.selectOption entry)}}
										>
											{{#if (has-block "item")}}
												<div class="flex items-center w-full">
													{{yield
														(hash
															option=option
															label=(this.getOptionLabel option)
															index=index
															imageUrl=(this.getOptionImageUrl option)
														)
														to="item"
													}}
												</div>
											{{else}}
												<span
													class="dropdown-item-label
														{{if (this.isOptionSelected option) 'selected' ''}}
														{{if (this.isOptionDisabled option) 'disabled' ''}}"
												>
													{{this.getOptionLabel option}}
												</span>
												{{#if (and @checkmark (this.isOptionSelected option))}}
													<UlxIcon
														@type="font"
														@iconName="tick-icon-01 dropdown-checkmark"
														@componentClass="bs-icons1"
														aria-hidden="true"
													/>
												{{/if}}
											{{/if}}
										</li>
									{{/let}}
								{{/each}}
							{{/if}}
						</ul>
					</div>
					{{#if (has-block "footer")}}
						<div class="dropdown-panel-footer" data-qa="ulx-dropdown-footer">
							<div class="dropdown-panel-footer-content">
								{{yield (hash selectedOption=this.selectedOption) to="footer"}}
							</div>
						</div>
					{{/if}}
				</div>
			{{/if}}
		</div>
	</template>
}
