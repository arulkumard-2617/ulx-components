import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { modifier } from 'ember-modifier';
import { htmlSafe } from '@ember/template';
import { getComponentClass, NAMESPACE } from '../../../utils/component-config.js';
import { resolveKey, buildInputId } from '../../../utils/input-util.js';
import { t } from '../../../utils/i18n.js';
import { fn } from '@ember/helper';
import { not, and } from 'ember-truth-helpers';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _UlxSlider;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const toNumber = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
};
/**
 * Slider is a drag-based numeric input with support for:
 * - horizontal and vertical orientations
 * - single and range selection
 * - pointer (mouse/touch) interactions
 * - keyboard interactions (Arrow keys, Home/End, PageUp/PageDown)
 *
 * Uses existing ULS slider styles from `slider.less` (no new styles).
 *
 * @class UlxSlider
 * @param {string} [id] - Unique ID for the hidden input element. Auto-generated if not provided.
 * @param {string} [key] - Stable key used for auto-generated IDs (when `@id` is not provided).
 *
 * @param {number|number[]} value - Controlled value. Single: number. Range: [minValue, maxValue].
 * @param {Function} onChange - Called with next value on change: (value) => void.
 * @param {Function} [onSlideEnd] - Called when sliding ends: (value) => void.
 *
 * @param {number} [min=0] - Minimum value.
 * @param {number} [max=100] - Maximum value.
 * @param {number} [step=1] - Step increment.
 *
 * @param {boolean} [range=false] - Enables range selection (two handles).
 * @param {"horizontal"|"vertical"} [orientation="horizontal"] - Slider orientation.
 * @param {string} [size="s-size"] - Size: xs-size, s-size, m-size, l-size, xl-size.
 * @param {"filled"|"elevated"|"flat"} [variant] - Visual variant class.
 * @param {boolean} [withSteps=false] - Applies `with-steps` tick styling.
 *
 * @param {boolean} [disabled=false] - Disables interaction.
 * @param {boolean} [readonly=false] - Prevents changes but keeps the component visible.
 * @param {string} [customClass] - Additional root classes.
 * @param {string} [ariaLabel] - Accessible name override (defaults to i18n).
 * @param {string} [dataQa] - Override for root element data-qa (default: "ulx-slider").
 */
let UlxSlider = (_class = (_UlxSlider = class UlxSlider extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "isDragging", _descriptor, this);
    _initializerDefineProperty(this, "activeHandleIndex", _descriptor2, this);
    _defineProperty(this, "rootElement", null);
    _defineProperty(this, "_lastInteractionValue", null);
    _defineProperty(this, "_windowMoveListener", null);
    _defineProperty(this, "_windowUpListener", null);
    _defineProperty(this, "rootRef", modifier(element => {
      this.rootElement = element;
      return () => {
        if (this.rootElement === element) this.rootElement = null;
        this.teardownDragging();
      };
    }));
  }
  get baseClass() {
    return getComponentClass("slider");
  }
  get trackClass() {
    return getComponentClass("slider-track");
  }
  get rangeClass() {
    return getComponentClass("slider-range");
  }
  get handleClass() {
    return getComponentClass("slider-handle");
  }
  get inputClass() {
    return getComponentClass("slider-input");
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-slider";
  }
  get key() {
    return resolveKey(this, this.args.key);
  }
  get inputId() {
    return buildInputId(NAMESPACE, this.args.id, this.key);
  }
  get isDisabled() {
    return !!this.args.disabled;
  }
  get isReadonly() {
    return !!this.args.readonly;
  }
  get isInteractive() {
    return !this.isDisabled && !this.isReadonly;
  }
  get isRange() {
    return !!this.args.range;
  }
  get orientation() {
    return this.args.orientation === "vertical" ? "vertical" : "horizontal";
  }
  get ariaLabelText() {
    return this.args.ariaLabel ?? t("lbl.slider");
  }
  get minValue() {
    return toNumber(this.args.min, 0);
  }
  get maxValue() {
    return toNumber(this.args.max, 100);
  }
  get stepValue() {
    const step = toNumber(this.args.step, 1);
    return step > 0 ? step : 1;
  }
  get normalizedBounds() {
    let min = this.minValue;
    let max = this.maxValue;
    if (!Number.isFinite(min)) min = 0;
    if (!Number.isFinite(max)) max = 100;
    if (min === max) max = min + this.stepValue;
    if (min > max) [min, max] = [max, min];
    return {
      min,
      max
    };
  }
  get sizeClass() {
    return this.args.size ?? "s-size";
  }
  get rootClasses() {
    const {
      variant,
      withSteps = false,
      disabled = false,
      readonly = false,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(this.sizeClass);
    parts.push(this.orientation);
    parts.push(this.isRange ? "range" : "single");
    variant && parts.push(variant);
    withSteps && parts.push("with-steps");
    disabled && parts.push("disabled");
    readonly && parts.push("readonly");
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get snappedValue() {
    const {
      min,
      max
    } = this.normalizedBounds;
    const step = this.stepValue;
    const v = toNumber(this.args.value, min);
    const clampedValue = clamp(v, min, max);
    const snapped = min + Math.round((clampedValue - min) / step) * step;
    return clamp(Number(snapped.toFixed(12)), min, max);
  }
  get snappedRange() {
    const {
      min,
      max
    } = this.normalizedBounds;
    const step = this.stepValue;
    const raw = Array.isArray(this.args.value) ? this.args.value : [min, max];
    const rawStart = toNumber(raw[0], min);
    const rawEnd = toNumber(raw[1], max);
    const startClamped = clamp(rawStart, min, max);
    const endClamped = clamp(rawEnd, min, max);
    const snap = val => {
      const snapped = min + Math.round((val - min) / step) * step;
      return clamp(Number(snapped.toFixed(12)), min, max);
    };
    let start = snap(startClamped);
    let end = snap(endClamped);
    if (start > end) [start, end] = [end, start];
    return [start, end];
  }
  get modelValue() {
    return this.isRange ? this.snappedRange : this.snappedValue;
  }
  valueToPercent(value) {
    const {
      min,
      max
    } = this.normalizedBounds;
    const denom = max - min;
    if (denom <= 0) return 0;
    return (value - min) / denom * 100;
  }
  percentToValue(percent) {
    const {
      min,
      max
    } = this.normalizedBounds;
    const denom = max - min;
    const p = clamp(percent, 0, 100);
    if (denom <= 0) return min;
    return min + p / 100 * denom;
  }
  get isVertical() {
    return this.orientation === "vertical";
  }
  get rangeStyle() {
    const value = this.modelValue;
    if (this.isRange) {
      const [start, end] = value;
      const startPercent = this.valueToPercent(start);
      const endPercent = this.valueToPercent(end);
      const delta = Math.max(0, endPercent - startPercent);
      return this.isVertical ? htmlSafe(`bottom: ${startPercent}%; height: ${delta}%;`) : htmlSafe(`left: ${startPercent}%; width: ${delta}%;`);
    }
    const single = value;
    const percent = this.valueToPercent(single);
    return this.isVertical ? htmlSafe(`bottom: 0; height: ${percent}%;`) : htmlSafe(`left: 0; width: ${percent}%;`);
  }
  get handleStyles() {
    const value = this.modelValue;
    if (this.isRange) {
      const [start, end] = value;
      const startPercent = this.valueToPercent(start);
      const endPercent = this.valueToPercent(end);
      return [this.isVertical ? htmlSafe(`bottom: ${startPercent}%;`) : htmlSafe(`left: ${startPercent}%;`), this.isVertical ? htmlSafe(`bottom: ${endPercent}%;`) : htmlSafe(`left: ${endPercent}%;`)];
    }
    const percent = this.valueToPercent(value);
    return [this.isVertical ? htmlSafe(`bottom: ${percent}%;`) : htmlSafe(`left: ${percent}%;`)];
  }
  get serializedValue() {
    const value = this.modelValue;
    return this.isRange ? `${value[0]},${value[1]}` : `${value}`;
  }
  get handleValues() {
    const value = this.modelValue;
    return this.isRange ? value : [value];
  }
  get activeValueNow() {
    const values = this.handleValues;
    const idx = clamp(this.activeHandleIndex, 0, values.length - 1);
    return values[idx];
  }
  get ariaValueText() {
    const value = this.modelValue;
    return this.isRange ? `${value[0]} - ${value[1]}` : `${value}`;
  }
  getHandleAriaMin(index) {
    const {
      min
    } = this.normalizedBounds;
    if (!this.isRange) return min;
    const [start] = this.snappedRange;
    return index === 1 ? start : min;
  }
  getHandleAriaMax(index) {
    const {
      max
    } = this.normalizedBounds;
    if (!this.isRange) return max;
    const [, end] = this.snappedRange;
    return index === 0 ? end : max;
  }
  getHandleValue(index) {
    return this.handleValues[index];
  }
  getHandleAriaLabel(index) {
    if (!this.isRange) return this.ariaLabelText;
    return index === 0 ? t("lbl.slider.handleStart") : t("lbl.slider.handleEnd");
  }
  teardownDragging() {
    if (this._windowMoveListener) {
      window.removeEventListener("pointermove", this._windowMoveListener, true);
      this._windowMoveListener = null;
    }
    if (this._windowUpListener) {
      window.removeEventListener("pointerup", this._windowUpListener, true);
      this._windowUpListener = null;
    }
    this.isDragging = false;
    this._lastInteractionValue = null;
  }
  getPercentFromPointerEvent(event) {
    const root = this.rootElement;
    if (!root) return 0;
    const rect = root.getBoundingClientRect();
    if (this.isVertical) {
      const y = clamp(event.clientY, rect.top, rect.bottom);
      const fromBottom = rect.bottom - y;
      return rect.height > 0 ? fromBottom / rect.height * 100 : 0;
    }
    const x = clamp(event.clientX, rect.left, rect.right);
    const fromLeft = x - rect.left;
    return rect.width > 0 ? fromLeft / rect.width * 100 : 0;
  }
  chooseClosestHandleIndex(targetValue) {
    if (!this.isRange) return 0;
    const [start, end] = this.snappedRange;
    const distStart = Math.abs(targetValue - start);
    const distEnd = Math.abs(targetValue - end);
    return distStart <= distEnd ? 0 : 1;
  }
  applyInteractionValue(targetValue, {
    commit
  }) {
    const {
      min,
      max
    } = this.normalizedBounds;
    const step = this.stepValue;
    const clampToStep = val => {
      const clampedValue = clamp(val, min, max);
      const snapped = min + Math.round((clampedValue - min) / step) * step;
      return clamp(Number(snapped.toFixed(12)), min, max);
    };
    if (!this.isRange) {
      const next = clampToStep(targetValue);
      this._lastInteractionValue = next;
      this.args.onChange?.(next);
      if (commit) this.args.onSlideEnd?.(next);
      return;
    }
    const [start, end] = this.snappedRange;
    const idx = this.activeHandleIndex === 1 ? 1 : 0;
    const nextVal = clampToStep(targetValue);
    let nextRange;
    if (idx === 0) {
      nextRange = [Math.min(nextVal, end), end];
    } else {
      nextRange = [start, Math.max(nextVal, start)];
    }
    this._lastInteractionValue = nextRange;
    this.args.onChange?.(nextRange);
    if (commit) this.args.onSlideEnd?.(nextRange);
  }
  handleTrackPointerDown(event) {
    if (!this.isInteractive) return;
    if (event.button != null && event.button !== 0) return;
    event.preventDefault();
    const percent = this.getPercentFromPointerEvent(event);
    const targetValue = this.percentToValue(percent);
    this.activeHandleIndex = this.chooseClosestHandleIndex(targetValue);
    this.isDragging = true;
    this.applyInteractionValue(targetValue, {
      commit: false
    });
    this._windowMoveListener = e => this.handlePointerMove(e);
    this._windowUpListener = e => this.handlePointerUp(e);
    window.addEventListener("pointermove", this._windowMoveListener, true);
    window.addEventListener("pointerup", this._windowUpListener, true);
  }
  handleHandlePointerDown(index, event) {
    if (!this.isInteractive) return;
    if (event.button != null && event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    this.activeHandleIndex = index;
    this.isDragging = true;
    const percent = this.getPercentFromPointerEvent(event);
    const targetValue = this.percentToValue(percent);
    this.applyInteractionValue(targetValue, {
      commit: false
    });
    this._windowMoveListener = e => this.handlePointerMove(e);
    this._windowUpListener = e => this.handlePointerUp(e);
    window.addEventListener("pointermove", this._windowMoveListener, true);
    window.addEventListener("pointerup", this._windowUpListener, true);
  }
  handlePointerMove(event) {
    if (!this.isDragging) return;
    event.preventDefault();
    const percent = this.getPercentFromPointerEvent(event);
    const targetValue = this.percentToValue(percent);
    this.applyInteractionValue(targetValue, {
      commit: false
    });
  }
  handlePointerUp(event) {
    if (!this.isDragging) return;
    event.preventDefault();
    const percent = this.getPercentFromPointerEvent(event);
    const targetValue = this.percentToValue(percent);
    this.applyInteractionValue(targetValue, {
      commit: true
    });
    this.teardownDragging();
  }
  handleHandleFocus(index) {
    this.activeHandleIndex = index;
  }
  handleHandleKeydown(index, event) {
    if (!this.isInteractive) return;
    const {
      min,
      max
    } = this.normalizedBounds;
    const step = this.stepValue;
    const key = event.key;
    const current = this.handleValues[index] ?? this.activeValueNow;
    let next = null;
    if (key === "ArrowRight" || key === "ArrowUp") next = current + step;else if (key === "ArrowLeft" || key === "ArrowDown") next = current - step;else if (key === "PageUp") next = current + step * 10;else if (key === "PageDown") next = current - step * 10;else if (key === "Home") next = min;else if (key === "End") next = max;else return;
    event.preventDefault();
    this.activeHandleIndex = index;
    this.applyInteractionValue(next, {
      commit: true
    });
  }
  handleRootKeydown(event) {
    if (this.isRange) return;
    this.handleHandleKeydown(0, event);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} data-qa={{this.rootDataQa}} role={{if this.isRange \"group\" \"slider\"}} aria-label={{this.ariaLabelText}} aria-orientation={{if this.isRange undefined this.orientation}} aria-disabled={{if this.isRange undefined (if this.isDisabled \"true\" \"false\")}} aria-valuemin={{if this.isRange undefined this.normalizedBounds.min}} aria-valuemax={{if this.isRange undefined this.normalizedBounds.max}} aria-valuenow={{if this.isRange undefined this.snappedValue}} aria-valuetext={{if this.isRange undefined this.ariaValueText}} tabindex={{if (and (not this.isRange) this.isInteractive) \"0\" \"-1\"}} {{on \"pointerdown\" this.handleTrackPointerDown}} {{on \"keydown\" this.handleRootKeydown}} {{this.rootRef}} ...attributes>\n\t\t\t<div class={{this.rangeClass}} style={{this.rangeStyle}} aria-hidden=\"true\" data-qa=\"ulx-slider-range\"></div>\n\n\t\t\t{{#each this.handleStyles as |handleStyle index|}}\n\t\t\t\t<span class={{this.handleClass}} style={{handleStyle}} role={{if this.isRange \"slider\" undefined}} tabindex={{if this.isRange (if this.isInteractive \"0\" \"-1\") \"-1\"}} aria-label={{if this.isRange (this.getHandleAriaLabel index) undefined}} data-qa=\"ulx-slider-handle\" aria-orientation={{if this.isRange this.orientation undefined}} aria-disabled={{if this.isRange (if this.isDisabled \"true\" \"false\") undefined}} aria-valuemin={{if this.isRange (this.getHandleAriaMin index) undefined}} aria-valuemax={{if this.isRange (this.getHandleAriaMax index) undefined}} aria-valuenow={{if this.isRange (this.getHandleValue index) undefined}} aria-valuetext={{if this.isRange this.ariaValueText undefined}} aria-hidden={{if this.isRange \"false\" \"true\"}} {{on \"pointerdown\" (fn this.handleHandlePointerDown index)}} {{on \"focus\" (fn this.handleHandleFocus index)}} {{on \"keydown\" (fn this.handleHandleKeydown index)}}></span>\n\t\t\t{{/each}}\n\n\t\t\t<input id={{this.inputId}} type=\"hidden\" class={{this.inputClass}} value={{this.serializedValue}} aria-hidden=\"true\" data-qa=\"ulx-slider-input\" />\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    and,
    not,
    on,
    fn
  })
}), _UlxSlider), _UlxSlider), _descriptor = _applyDecoratedDescriptor(_class.prototype, "isDragging", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "activeHandleIndex", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _applyDecoratedDescriptor(_class.prototype, "getHandleAriaMin", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getHandleAriaMin"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getHandleAriaMax", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getHandleAriaMax"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getHandleValue", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getHandleValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getHandleAriaLabel", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getHandleAriaLabel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "teardownDragging", [action], Object.getOwnPropertyDescriptor(_class.prototype, "teardownDragging"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getPercentFromPointerEvent", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getPercentFromPointerEvent"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "chooseClosestHandleIndex", [action], Object.getOwnPropertyDescriptor(_class.prototype, "chooseClosestHandleIndex"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "applyInteractionValue", [action], Object.getOwnPropertyDescriptor(_class.prototype, "applyInteractionValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTrackPointerDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleTrackPointerDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleHandlePointerDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleHandlePointerDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handlePointerMove", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handlePointerMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handlePointerUp", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handlePointerUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleHandleFocus", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleHandleFocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleHandleKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleHandleKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRootKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRootKeydown"), _class.prototype), _class);

export { UlxSlider as default };
//# sourceMappingURL=index.js.map
