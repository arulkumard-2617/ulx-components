import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { schedule } from '@ember/runloop';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { concat, fn, hash } from '@ember/helper';
import { getComponentClass } from '../../../utils/component-config.js';
import { isInvalidState } from '../../../utils/input-util.js';
import { guidFor } from '@ember/object/internals';
import { t } from '../../../utils/i18n.js';
import overlayDismiss from '../../../modifiers/overlay-dismiss.js';
import overlayPortal from '../../../modifiers/overlay-portal.js';
import { getOverlayZIndexAboveMask } from '../../../utils/overlay-helpers.js';
import { buildOverlayCoordinateApi, getBoundaryRectInOverlaySpace, clampOverlayValue, resolveOverlayContext, resolveOverlayBoundary, resolveOverlayScrollContext } from '../../../utils/overlay-context.js';
import { getFocusableElements } from '../../../utils/focus-util.js';
import UlxIcon from '../ulx-icon/index.js';
import UlxProgressSpinner from '../ulx-progressspinner/index.js';
import { or, not, and, eq } from 'ember-truth-helpers';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _UlxDropdown;
let UlxDropdown = (_class = (_UlxDropdown = class UlxDropdown extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "modalStack", _descriptor, this);
    _initializerDefineProperty(this, "overlayVisible", _descriptor2, this);
    _initializerDefineProperty(this, "focusedOptionIndex", _descriptor3, this);
    _initializerDefineProperty(this, "showOptionKeyboardFocusRing", _descriptor4, this);
    _initializerDefineProperty(this, "filterValue", _descriptor5, this);
    _initializerDefineProperty(this, "triggerElement", _descriptor6, this);
    _initializerDefineProperty(this, "panelElement", _descriptor7, this);
    _initializerDefineProperty(this, "panelPosition", _descriptor8, this);
    _defineProperty(this, "positionPanel", modifier((element, [when, triggerEl, setPanelPosition]) => {
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
        const zIndex = typeof this.args.zIndex === "number" ? this.args.zIndex : resolvedContext === document.body ? getOverlayZIndexAboveMask(this.modalStack) : 1;
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
        const spaceBelow = fallbackBoundary.bottom - targetRect.bottom - spacing - viewportPadding;
        const spaceAbove = targetRect.top - fallbackBoundary.top - spacing - viewportPadding;
        const shouldPlaceAbove = top + menuHeight > fallbackBoundary.bottom && spaceAbove > spaceBelow;
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
      return () => {
        window.removeEventListener("resize", onResize);
        shouldTrackScroll && scrollTarget?.removeEventListener?.("scroll", onScroll);
      };
    }));
    _defineProperty(this, "triggerRef", modifier(element => {
      this.triggerElement = element;
      return () => {
        if (this.triggerElement === element) this.triggerElement = null;
      };
    }));
    _defineProperty(this, "panelRef", modifier(element => {
      this.panelElement = element;
      return () => {
        if (this.panelElement === element) this.panelElement = null;
      };
    }));
    _defineProperty(this, "scrollFocusedIntoView", modifier((element, [when, focusedIndex, listId]) => {
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
        if (itemBottom > wrapperScrollTop + wrapperHeight) wrapper.scrollTop = itemBottom - wrapperHeight;
        if (itemTop < wrapperScrollTop) wrapper.scrollTop = itemTop;
      };
      schedule("afterRender", () => {
        requestAnimationFrame(() => runScroll(false));
      });
    }));
  }
  handleFocus(event) {
    const onFocusCallback = this.args.onFocus;
    if (typeof onFocusCallback === "function") onFocusCallback(event);
  }
  handleBlur(event) {
    const onBlurCallback = this.args.onBlur;
    if (typeof onBlurCallback === "function") onBlurCallback(event);
  }
  get triggerId() {
    const {
      id,
      key
    } = this.args;
    if (typeof id === "string" && id.length) return id;
    if (typeof key === "string" && key.length) return key;
    return `ulx-dropdown-${guidFor(this)}`;
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-dropdown";
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
    const invalid = isInvalidState(invalidArg, error);
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
  onTriggerPointerIntent() {
    if (this.isTriggerDisabled) return;
    this.dismissKeyboardOptionFocusRing();
  }
  onOptionPanelPointerIntent() {
    this.dismissKeyboardOptionFocusRing();
  }
  get isInvalid() {
    const {
      invalid,
      error
    } = this.args;
    return isInvalidState(invalid, error);
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
  getOptionLabel(option) {
    if (option == null) return "";
    if (typeof option === "object" && option !== null) {
      const label = this.getResolved(option, this.optionLabelKey);
      return label != null ? String(label) : "";
    }
    return String(option);
  }
  getOptionValue(option) {
    if (option == null) return undefined;
    if (typeof option === "object" && option !== null) {
      return this.getResolved(option, this.optionValueKey);
    }
    return option;
  }
  getOptionImageUrl(option) {
    const imageUrlKey = this.optionImageUrlKey;
    return imageUrlKey && option != null ? this.getResolved(option, imageUrlKey) : undefined;
  }
  getFlagClass(code) {
    return code ? `flag flag-${String(code).toLowerCase()}` : "";
  }
  isOptionDisabled(option) {
    if (option == null) return true;
    const {
      optionDisabled
    } = this.args;
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
    return this.hasGroups ? this.flatOptions : this.args.options ?? [];
  }
  get visibleOptions() {
    const sourceOptionsList = this.unfilteredOptions;
    const normalizedFilterValue = (this.filterValue ?? "").trim().toLowerCase();
    if (!normalizedFilterValue) return sourceOptionsList;
    if (this.hasGroups) {
      return sourceOptionsList.filter(({
        item
      }) => this.getOptionLabel(item).toLowerCase().includes(normalizedFilterValue));
    }
    return sourceOptionsList.filter(option => this.getOptionLabel(option).toLowerCase().includes(normalizedFilterValue));
  }
  get selectedOption() {
    const selectedValue = this.args.value;
    const options = this.args.options ?? [];
    if (this.hasGroups) {
      const flattenedOptions = this.allOptionsFlat;
      return flattenedOptions.find(option => this.valueEquals(this.getOptionValue(option), selectedValue)) ?? null;
    }
    return options.find(option => this.valueEquals(this.getOptionValue(option), selectedValue)) ?? null;
  }
  valueEquals(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (typeof a === "object" && typeof b === "object") return JSON.stringify(a) === JSON.stringify(b);
    return false;
  }
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
    return imageUrlKey && selectedOptionItem != null ? this.getResolved(selectedOptionItem, imageUrlKey) : undefined;
  }
  get placeholderLabel() {
    return this.args.placeholder ?? "";
  }
  get contentPlaceholderClass() {
    return this.selectedLabel == null ? "place-holder" : "";
  }
  get ariaDescribedBy() {
    return this.args.ariaDescribedBy;
  }
  get ariaErrorMessage() {
    return this.args.ariaErrorMessage;
  }
  get isRequired() {
    return !!this.args.required;
  }
  get clearButtonAriaLabel() {
    return t("lbl.clear.selection");
  }
  get openTriggerAriaLabel() {
    return t("aria.dropdown.open");
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
  setPanelPosition(position) {
    this.panelPosition = position;
  }
  /** After click-open, focus may still be on `body`; move it to the combobox so Arrow keys do not scroll the page. */
  ensureComboboxControlFocused() {
    schedule("afterRender", () => {
      if (!this.overlayVisible || this.isTriggerDisabled) return;
      document.getElementById(this.triggerId)?.focus?.({
        preventScroll: true
      });
    });
  }
  get shouldFocusPanelFilterOnOpen() {
    return !!this.args.filter;
  }
  get hasHeaderFocusableControls() {
    return this.getPanelHeaderFocusableElements().length > 0;
  }
  getPanelHeaderFocusableElements() {
    const panelRoot = this.panelElement;
    if (!panelRoot) return [];
    const acc = [];
    const filterInput = panelRoot.querySelector("[data-qa='ulx-dropdown-filter']");
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
  focusFilterInput() {
    const filterInput = this.panelElement?.querySelector("[data-qa='ulx-dropdown-filter']");
    if (!filterInput || filterInput.disabled) return false;
    filterInput.focus?.({
      preventScroll: true
    });
    return true;
  }
  focusFirstAvailablePanelControl() {
    const controls = this.getPanelHeaderFocusableElements();
    if (controls.length <= 0) return false;
    controls[0]?.focus?.({
      preventScroll: true
    });
    return true;
  }
  focusTriggerFallback() {
    if (!this.overlayVisible || this.isTriggerDisabled) return;
    document.getElementById(this.triggerId)?.focus?.({
      preventScroll: true
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
  enterHeaderMode(options = {}) {
    const {
      focusFirst = true
    } = options;
    const controls = this.getPanelHeaderFocusableElements();
    if (!controls.length) return;
    const target = focusFirst ? controls[0] : controls[controls.length - 1];
    target?.focus?.({
      preventScroll: true
    });
  }
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
      controls[fallbackIndex]?.focus?.({
        preventScroll: true
      });
      return;
    }
    const nextIndex = (currentIndex + direction + controls.length) % controls.length;
    controls[nextIndex]?.focus?.({
      preventScroll: true
    });
  }
  closeOverlay() {
    if (!this.overlayVisible) return;
    this.overlayVisible = false;
    this.panelPosition = "below";
    this.dismissKeyboardOptionFocusRing();
    this.args.onHide?.();
  }
  getTriggerFocusableAnchor(options = {}) {
    const {
      backward = false
    } = options;
    const triggerFocusables = getFocusableElements(this.triggerElement);
    if (triggerFocusables.length > 0) {
      return backward ? triggerFocusables[0] : triggerFocusables[triggerFocusables.length - 1];
    }
    return document.getElementById(this.triggerId) ?? this.triggerElement;
  }
  closeOverlayAndMoveFocus(options = {}) {
    const {
      backward = false
    } = options;
    const anchorElement = this.getTriggerFocusableAnchor({
      backward
    });
    const focusableElements = getFocusableElements(document.body).filter(element => !this.panelElement?.contains(element));
    const anchorIndex = anchorElement ? focusableElements.indexOf(anchorElement) : -1;
    const targetIndex = anchorIndex + (backward ? -1 : 1);
    const nextFocusableElement = focusableElements[targetIndex];
    this.closeOverlay();
    if (!nextFocusableElement) return;
    schedule("afterRender", () => {
      requestAnimationFrame(() => {
        nextFocusableElement?.focus?.({
          preventScroll: true
        });
      });
    });
  }
  toggleOverlay() {
    if (this.args.disabled || this.args.loading) return;
    this.overlayVisible = !this.overlayVisible;
    if (this.overlayVisible) {
      this.filterValue = "";
      this.focusedOptionIndex = this.selectedOptionIndex;
      if (this.focusedOptionIndex < 0 && this.visibleOptions.length > 0) this.focusedOptionIndex = 0;
      this.panelPosition = "below";
      this.args.onShow?.();
      this.focusAppropriateControlOnOpen();
    } else {
      this.panelPosition = "below";
      this.dismissKeyboardOptionFocusRing();
      this.args.onHide?.();
    }
  }
  get selectedOptionIndex() {
    const list = this.visibleOptions;
    const selectedValue = this.args.value;
    for (let i = 0; i < list.length; i++) {
      const optionItem = this.hasGroups ? list[i].item ?? list[i] : list[i];
      if (this.valueEquals(this.getOptionValue(optionItem), selectedValue)) return i;
    }
    return -1;
  }
  selectOption(entry, event) {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    const optionItem = entry?.item != null ? entry.item : entry;
    if (this.isOptionDisabled(optionItem)) return;
    const value = this.getOptionValue(optionItem);
    this.overlayVisible = false;
    this.dismissKeyboardOptionFocusRing();
    this.args.onChange?.(value);
    this.args.onHide?.();
  }
  /** Applies Enter/Space selection for the current `focusedOptionIndex` (flat vs grouped row). */
  selectFocusedOptionIfEnabled() {
    const list = this.visibleOptions;
    if (this.focusedOptionIndex < 0) return;
    const focusedEntry = list[this.focusedOptionIndex];
    const optionItem = this.hasGroups && focusedEntry?.item != null ? focusedEntry.item : focusedEntry;
    if (optionItem && !this.isOptionDisabled(optionItem)) this.selectOption(focusedEntry);
  }
  clearSelection(event) {
    event?.stopPropagation?.();
    event?.preventDefault?.();
    if (this.args.disabled) return;
    this.overlayVisible = false;
    this.dismissKeyboardOptionFocusRing();
    this.args.onChange?.(undefined);
    this.args.onFilter?.("");
    this.filterValue = "";
    this.args.onHide?.();
  }
  onClearIconKeydown(event) {
    const keyPressed = event.code || event.key;
    if (keyPressed === "Enter" || keyPressed === "NumpadEnter" || keyPressed === " " || keyPressed === "Space") {
      event.preventDefault();
      this.clearSelection(event);
    }
  }
  onFilterInput(event) {
    const filterInputValue = event.target?.value ?? "";
    this.filterValue = filterInputValue;
    this.focusedOptionIndex = this.visibleOptions.length > 0 ? 0 : -1;
    this.showOptionKeyboardFocusRing = true;
    this.args.onFilter?.(filterInputValue);
  }
  onFilterKeydown(event) {
    const keyPressed = event.code || event.key;
    if (keyPressed === "ArrowDown") {
      event.preventDefault();
      this.moveFocus(1);
      this.focusFocusedItem();
    } else if (keyPressed === "ArrowUp") {
      event.preventDefault();
      this.moveFocus(-1);
      this.focusFocusedItem();
    } else if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
      event.preventDefault();
      this.selectFocusedOptionIfEnabled();
    } else if (keyPressed === "Escape") {
      event.preventDefault();
      this.toggleOverlay();
    } else if (keyPressed === "Tab") {
      event.preventDefault();
      this.closeOverlayAndMoveFocus({
        backward: event.shiftKey
      });
    }
  }
  focusFocusedItem() {
    if (this.focusedOptionIndex < 0) return;
    schedule("afterRender", () => {
      requestAnimationFrame(() => {
        const focusedOptionElement = document.getElementById(`${this.triggerId}-item-${this.focusedOptionIndex}`);
        focusedOptionElement?.focus?.({
          preventScroll: true
        });
      });
    });
  }
  onTriggerKeydown(event) {
    if (this.args.disabled) return;
    const keyPressed = event.code || event.key;
    if (keyPressed === "ArrowDown") {
      event.preventDefault();
      if (!this.overlayVisible) {
        this.showOptionKeyboardFocusRing = true;
        this.toggleOverlay();
      } else {
        this.moveFocus(1);
        this.focusFocusedItem();
      }
      return;
    }
    if (keyPressed === "ArrowUp") {
      event.preventDefault();
      if (this.overlayVisible) {
        this.moveFocus(-1);
        this.focusFocusedItem();
      } else {
        this.showOptionKeyboardFocusRing = true;
        this.toggleOverlay();
      }
      return;
    }
    if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
      event.preventDefault();
      if (this.overlayVisible && this.focusedOptionIndex >= 0) {
        this.selectFocusedOptionIfEnabled();
      } else if (!this.overlayVisible) {
        this.showOptionKeyboardFocusRing = true;
        this.toggleOverlay();
      }
      return;
    }
    if (keyPressed === "Escape") {
      event.preventDefault();
      if (this.overlayVisible) this.toggleOverlay();
      return;
    }
    if (keyPressed === "Tab" && this.overlayVisible) {
      event.preventDefault();
      this.closeOverlayAndMoveFocus({
        backward: event.shiftKey
      });
      return;
    }
  }
  moveFocus(delta) {
    const list = this.visibleOptions;
    if (!list.length) return;
    this.showOptionKeyboardFocusRing = true;
    let nextFocusedIndex = this.focusedOptionIndex + delta;
    if (nextFocusedIndex < 0) nextFocusedIndex = 0;
    if (nextFocusedIndex >= list.length) nextFocusedIndex = list.length - 1;
    this.focusedOptionIndex = nextFocusedIndex;
  }
  onPanelKeydown(event) {
    const keyPressed = event.code || event.key;
    if (keyPressed === "Tab") {
      event.preventDefault();
      this.closeOverlayAndMoveFocus({
        backward: event.shiftKey
      });
      return;
    }
    if (keyPressed === "ArrowDown") {
      event.preventDefault();
      this.moveFocus(1);
      this.focusFocusedItem();
    } else if (keyPressed === "ArrowUp") {
      event.preventDefault();
      this.moveFocus(-1);
      this.focusFocusedItem();
    } else if (keyPressed === "Enter" || keyPressed === "NumpadEnter") {
      event.preventDefault();
      this.selectFocusedOptionIfEnabled();
    }
  }
  get optionList() {
    if (this.hasGroups) return this.visibleOptions;
    return this.visibleOptions.map(option => ({
      item: option
    }));
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
        rows.push({
          type: "group",
          label: groupLabel,
          group: entry?.group ?? null
        });
        lastGroupLabel = groupLabel;
      }
      rows.push({
        type: "option",
        entry,
        flatIndex
      });
    }
    return rows;
  }
  get activeDescendantId() {
    return this.focusedOptionIndex >= 0 ? `${this.triggerId}-item-${this.focusedOptionIndex}` : undefined;
  }
  get scrollHeightValue() {
    return this.args.scrollHeight ?? "232px";
  }
  stopPanelClick(event) {
    event.stopPropagation();
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} role=\"combobox\" aria-haspopup=\"listbox\" aria-expanded={{this.overlayVisible}} aria-controls=\"{{this.triggerId}}-listbox\" aria-invalid={{if (eq this.isInvalid true) \"true\" \"false\"}} aria-required={{this.isRequired}} aria-describedby={{this.ariaDescribedBy}} aria-errormessage={{this.ariaErrorMessage}} {{this.triggerRef}} {{overlayDismiss this.overlayVisible onClose=this.toggleOverlay panel=this.panelElement dismissVariant=\"rootPanel\" defer=true}} {{on \"pointerdown\" this.onTriggerPointerIntent}} {{on \"click\" this.toggleOverlay}} ...attributes>\n\t\t\t<div class=\"dropdown-input {{this.contentPlaceholderClass}}\" tabindex=\"-1\">\n\t\t\t\t{{#if (has-block \"value\")}}\n\t\t\t\t\t<div class=\"flex items-center\">\n\t\t\t\t\t\t{{yield (hash selectedOption=this.selectedOption selectedLabel=this.selectedLabel placeholder=this.placeholderLabel imageUrl=this.selectedOptionImageUrl) to=\"value\"}}\n\t\t\t\t\t</div>\n\t\t\t\t{{else}}\n\t\t\t\t\t{{#if (and this.selectedLabel)}}\n\t\t\t\t\t\t<span class=\"dropdown-item-label\">{{this.selectedLabel}}</span>\n\t\t\t\t\t\t{{#if (has-block \"subtext\")}}\n\t\t\t\t\t\t\t<span>{{yield this.selectedOption to=\"subtext\"}}</span>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<span class=\"dropdown-item-label\">{{this.placeholderLabel}}</span>\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t\t<div class=\"dropdown-trigger {{if this.isTriggerDisabled \"disabled\" \"\"}}\">\n\t\t\t\t{{#if (and @showClear this.selectedOption (not this.isTriggerDisabled))}}\n\t\t\t\t\t<UlxIcon @type=\"font\" @dataQa=\"ulx-dropdown-clear\" @iconName=\"close-stroke-icon-new dropdown-clear-icon\" @componentClass=\"bs-icons1\" @ariaLabel={{this.clearButtonAriaLabel}} role=\"button\" tabindex=\"0\" {{on \"click\" this.clearSelection}} {{on \"keydown\" this.onClearIconKeydown}} />\n\t\t\t\t{{/if}}\n\t\t\t\t{{#if (and @loading)}}\n\t\t\t\t\t<span class=\"dropdown-loading-icon\" id={{this.triggerId}} data-qa=\"ulx-dropdown-trigger\" role=\"button\" aria-disabled=\"true\" tabindex=\"-1\" aria-busy=\"true\">\n\t\t\t\t\t\t<UlxProgressSpinner @size={{this.dropdownSize}} aria-hidden=\"true\" />\n\t\t\t\t\t</span>\n\t\t\t\t{{else}}\n\t\t\t\t\t{{#if (has-block \"icon\")}}\n\t\t\t\t\t\t<span id={{this.triggerId}} data-qa=\"ulx-dropdown-trigger\" role=\"button\" tabindex={{if (not this.isTriggerDisabled) \"0\" \"-1\"}} {{on \"keydown\" this.onTriggerKeydown}} {{on \"focus\" this.handleFocus}} {{on \"blur\" this.handleBlur}}>\n\t\t\t\t\t\t\t{{yield (hash overlayVisible=this.overlayVisible) to=\"icon\"}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<UlxIcon id={{this.triggerId}} @dataQa=\"ulx-dropdown-trigger\" @iconName=\"down-stroke-icon-new dropdown-trigger-icon\" @type=\"font\" @componentClass=\"bs-icons1\" @ariaLabel={{this.openTriggerAriaLabel}} role=\"button\" tabindex={{if (not this.isTriggerDisabled) \"0\" \"-1\"}} {{on \"keydown\" this.onTriggerKeydown}} {{on \"focus\" this.handleFocus}} {{on \"blur\" this.handleBlur}} />\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/if}}\n\t\t\t</div>\n\t\t\t{{#if this.overlayVisible}}\n\t\t\t\t<div id=\"{{this.triggerId}}-listbox\" data-qa=\"ulx-dropdown-panel\" class=\"dropdown-panel {{if (eq this.panelPosition \"above\") \"dropdown-panel-above\"}}\" role=\"listbox\" aria-activedescendant={{this.activeDescendantId}} aria-hidden=\"false\" {{this.panelRef}} {{overlayPortal this.overlayVisible this.resolvedContext}} {{this.positionPanel this.overlayVisible this.triggerElement (fn this.setPanelPosition)}} {{on \"pointerdown\" this.onOptionPanelPointerIntent}} {{on \"keydown\" this.onPanelKeydown}} {{on \"click\" this.stopPanelClick}}>\n\t\t\t\t\t{{#if (and @filter)}}\n\t\t\t\t\t\t<div class=\"dropdown-filter-container\">\n\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName=\"search-icon dropdown-filter-icon\" @componentClass=\"bs-icons1\" @size=\"s18\" aria-hidden=\"true\" />\n\t\t\t\t\t\t\t<input type=\"text\" class=\"dropdown-filter-input\" data-qa=\"ulx-dropdown-filter\" value={{this.filterValue}} placeholder={{@filterPlaceholder}} {{on \"input\" this.onFilterInput}} {{on \"keydown\" this.onFilterKeydown}} />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t\t<div class=\"dropdown-wrapper\" data-qa=\"ulx-dropdown-options-wrapper\" style=\"max-height: {{this.scrollHeightValue}};\" {{this.scrollFocusedIntoView this.overlayVisible this.focusedOptionIndex this.triggerId}}>\n\t\t\t\t\t\t<ul class=\"dropdown-list\" role=\"listbox\" data-qa=\"ulx-dropdown-list\">\n\t\t\t\t\t\t\t{{#if (eq this.visibleOptions.length 0)}}\n\t\t\t\t\t\t\t\t<li class=\"dropdown-empty-message\" role=\"option\" data-qa=\"ulx-dropdown-empty\">\n\t\t\t\t\t\t\t\t\t{{or (and @filter @emptyFilterMessage) @emptyMessage}}\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t{{else if this.hasGroups}}\n\t\t\t\t\t\t\t\t{{#each this.optionListWithGroups as |row|}}\n\t\t\t\t\t\t\t\t\t{{#if (eq row.type \"group\")}}\n\t\t\t\t\t\t\t\t\t\t<li class=\"dropdown-item-group\" role=\"presentation\" aria-hidden=\"true\" data-qa=\"ulx-dropdown-group\">\n\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"group\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{yield (hash label=row.label group=row.group) to=\"group\"}}\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"flex items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{#if row.group.imageUrl}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src={{row.group.imageUrl}} alt={{row.label}} class={{concat \"mr-2 flag \" (this.getFlagClass row.group.code)}} style=\"width: 18px;\" aria-hidden=\"true\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{#if row.group.icon}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName={{row.group.icon}} @componentClass=\"bs-icons1\" @size=\"s24\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>{{row.label}}</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t{{#let row.entry.item as |option|}}\n\t\t\t\t\t\t\t\t\t\t\t<li role=\"option\" id=\"{{this.triggerId}}-item-{{row.flatIndex}}\" data-qa={{concat \"ulx-dropdown-option-\" row.flatIndex}} class=\"dropdown-item grouped\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (and (eq row.flatIndex this.focusedOptionIndex) this.showOptionKeyboardFocusRing) this.focusItemClass \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (and @checkmark (this.isOptionSelected option)) \"checkmark\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\" \"\"}}\" aria-selected={{this.isOptionSelected option}} aria-disabled={{this.isOptionDisabled option}} tabindex=\"-1\" {{on \"click\" (fn this.selectOption row.entry)}}>\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"flex items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{yield (hash option=option label=(this.getOptionLabel option) index=row.flatIndex imageUrl=(this.getOptionImageUrl option)) to=\"item\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{#if (and @checkmark (this.isOptionSelected option))}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName=\"tick-icon-01 dropdown-checkmark\" @componentClass=\"bs-icons1\" aria-hidden=\"true\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"dropdown-item-label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\" \"\"}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{this.getOptionLabel option}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t{{#each this.optionList as |entry index|}}\n\t\t\t\t\t\t\t\t\t{{#let entry.item as |option|}}\n\t\t\t\t\t\t\t\t\t\t<li role=\"option\" id=\"{{this.triggerId}}-item-{{index}}\" data-qa={{concat \"ulx-dropdown-option-\" index}} class=\"dropdown-item\n\t\t\t\t\t\t\t\t\t\t\t\t{{if (and (eq index this.focusedOptionIndex) this.showOptionKeyboardFocusRing) this.focusItemClass \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{if (and @checkmark (this.isOptionSelected option)) \"checkmark\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\" \"\"}}\" aria-selected={{this.isOptionSelected option}} aria-disabled={{this.isOptionDisabled option}} tabindex=\"-1\" {{on \"click\" (fn this.selectOption entry)}}>\n\t\t\t\t\t\t\t\t\t\t\t{{#if (has-block \"item\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"flex items-center\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{yield (hash option=option label=(this.getOptionLabel option) index=index imageUrl=(this.getOptionImageUrl option)) to=\"item\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t{{#if (and @checkmark (this.isOptionSelected option))}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @type=\"font\" @iconName=\"tick-icon-01 dropdown-checkmark\" @componentClass=\"bs-icons1\" aria-hidden=\"true\" />\n\t\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"dropdown-item-label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionSelected option) \"selected\" \"\"}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{if (this.isOptionDisabled option) \"disabled\" \"\"}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{this.getOptionLabel option}}\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t{{#if (has-block \"footer\")}}\n\t\t\t\t\t\t<div class=\"dropdown-panel-footer\" data-qa=\"ulx-dropdown-footer\">\n\t\t\t\t\t\t\t<div class=\"dropdown-panel-footer-content\">\n\t\t\t\t\t\t\t\t{{yield (hash selectedOption=this.selectedOption) to=\"footer\"}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    eq,
    overlayDismiss,
    on,
    hash,
    and,
    not,
    UlxIcon,
    UlxProgressSpinner,
    overlayPortal,
    fn,
    or,
    concat
  })
}), _UlxDropdown), _UlxDropdown), _descriptor = _applyDecoratedDescriptor(_class.prototype, "modalStack", [inject], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "handleFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBlur", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBlur"), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "overlayVisible", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "focusedOptionIndex", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return -1;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "showOptionKeyboardFocusRing", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "filterValue", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "triggerElement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "panelElement", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "panelPosition", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "below";
  }
}), _applyDecoratedDescriptor(_class.prototype, "onTriggerPointerIntent", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onTriggerPointerIntent"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onOptionPanelPointerIntent", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onOptionPanelPointerIntent"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getResolved", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getResolved"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getOptionLabel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getOptionLabel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getOptionValue", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getOptionValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getOptionImageUrl", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getOptionImageUrl"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getFlagClass", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getFlagClass"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isOptionDisabled", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isOptionDisabled"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "valueEquals", [action], Object.getOwnPropertyDescriptor(_class.prototype, "valueEquals"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isOptionSelected", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isOptionSelected"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setPanelPosition", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setPanelPosition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "enterHeaderMode", [action], Object.getOwnPropertyDescriptor(_class.prototype, "enterHeaderMode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cycleHeaderFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "cycleHeaderFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeOverlayAndMoveFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "closeOverlayAndMoveFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleOverlay", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleOverlay"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectOption", [action], Object.getOwnPropertyDescriptor(_class.prototype, "selectOption"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearSelection", [action], Object.getOwnPropertyDescriptor(_class.prototype, "clearSelection"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onClearIconKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onClearIconKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onFilterInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onFilterInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onFilterKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onFilterKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "focusFocusedItem", [action], Object.getOwnPropertyDescriptor(_class.prototype, "focusFocusedItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onTriggerKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onTriggerKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "moveFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "moveFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onPanelKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onPanelKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stopPanelClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "stopPanelClick"), _class.prototype), _class);

export { UlxDropdown as default };
//# sourceMappingURL=index.js.map
