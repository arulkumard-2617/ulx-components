import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import { t } from '../../../utils/i18n.js';
import { not, eq, lte } from 'ember-truth-helpers';
import { fn } from '@ember/helper';
import UlxIcon from '../ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxRating;
let UlxRating = (_class = (_UlxRating = class UlxRating extends Component {
  get baseClass() {
    return getComponentClass("rating");
  }
  get rootDataQa() {
    return this.args.dataQa ?? this.baseClass;
  }
  get iconClass() {
    return "rating-icon";
  }
  get rootClasses() {
    const {
      size = "xxs-size",
      variant,
      disabled = false,
      readOnly = false,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    parts.push(size);
    variant && parts.push(variant);
    disabled && parts.push("disabled");
    readOnly && parts.push("readonly");
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get starsCount() {
    const {
      stars = 5
    } = this.args;
    return Math.max(1, Math.min(Number(stars) || 5, 100));
  }
  get currentValue() {
    const v = Number(this.args.value);
    if (Number.isNaN(v) || v < 0) return 0;
    return Math.min(v, this.starsCount);
  }
  get isInteractive() {
    const {
      disabled = false,
      readOnly = false
    } = this.args;
    return !disabled && !readOnly;
  }
  get showCancel() {
    return this.args.cancel !== false && this.isInteractive;
  }
  get ariaLabelText() {
    return this.args.ariaLabel ?? t("lbl.rating");
  }
  get starIndices() {
    return Array.from({
      length: this.starsCount
    }, (_, i) => i + 1);
  }
  setValue(newValue) {
    if (!this.isInteractive) return;
    const {
      onChange
    } = this.args;
    const clamped = Math.max(0, Math.min(Number(newValue), this.starsCount));
    onChange?.(clamped);
  }
  handleStarClick(value) {
    this.setValue(value);
  }
  handleCancelClick() {
    this.setValue(0);
  }
  handleKeydown(type, value, event) {
    if (!this.isInteractive) return;
    const {
      key,
      code
    } = event;
    if (type === "star") {
      if (key === "ArrowRight" || key === "ArrowDown") {
        event.preventDefault();
        const newVal = Math.min(value + 1, this.starsCount);
        this.setValue(newVal);
        this.focusStarByValue(event.currentTarget, newVal);
      } else if (key === "ArrowLeft" || key === "ArrowUp") {
        event.preventDefault();
        const newVal = Math.max(value - 1, 0);
        this.setValue(newVal);
        this.focusStarByValue(event.currentTarget, newVal === 0 ? 1 : newVal);
      } else if (key === " " || key === "Enter" || code === "NumpadEnter" || code === "Space") {
        event.preventDefault();
        this.setValue(value);
      }
    } else if (type === "cancel" && (key === " " || key === "Enter" || code === "NumpadEnter" || code === "Space")) {
      event.preventDefault();
      this.setValue(0);
    }
  }
  focusStarByValue(fromElement, starValue) {
    const root = fromElement?.closest?.('[role="radiogroup"]');
    const star = root?.querySelector?.(`[aria-posinset="${starValue}"]`);
    star?.focus?.();
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.rootClasses}} role=\"radiogroup\" aria-label={{this.ariaLabelText}} data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t{{#if this.showCancel}}\n\t\t\t\t{{#if (has-block \"cancelIcon\")}}\n\t\t\t\t\t<span role=\"button\" tabindex=\"0\" class=\"{{this.iconClass}} cancelicon\" aria-label={{t \"lbl.rating.cancel\"}} data-qa=\"ulx-rating-cancel\" {{on \"click\" this.handleCancelClick}} {{on \"keydown\" (fn this.handleKeydown \"cancel\" 0)}}>\n\t\t\t\t\t\t{{yield to=\"cancelIcon\"}}\n\t\t\t\t\t</span>\n\t\t\t\t{{else}}\n\t\t\t\t\t<UlxIcon @type=\"font\" @iconName=\"taken-icon\" @componentClass=\"bs-icons1\" @customClass=\"{{this.iconClass}} cancelicon\" role=\"button\" tabindex=\"0\" aria-label={{t \"lbl.rating.cancel\"}} data-qa=\"ulx-rating-cancel\" {{on \"click\" this.handleCancelClick}} {{on \"keydown\" (fn this.handleKeydown \"cancel\" 0)}} />\n\t\t\t\t{{/if}}\n\t\t\t{{/if}}\n\t\t\t{{#each this.starIndices as |starValue|}}\n\t\t\t\t{{#if (has-block \"onIcon\")}}\n\t\t\t\t\t<span class=\"{{this.iconClass}} {{if (lte starValue this.currentValue) \"onicon\" \"\"}}\" role=\"radio\" aria-checked={{eq starValue this.currentValue}} aria-posinset={{starValue}} aria-setsize={{this.starsCount}} aria-disabled={{not this.isInteractive}} tabindex=\"0\" data-qa=\"ulx-rating-star\" {{on \"click\" (fn this.handleStarClick starValue)}} {{on \"keydown\" (fn this.handleKeydown \"star\" starValue)}}>\n\t\t\t\t\t\t{{#if (lte starValue this.currentValue)}}\n\t\t\t\t\t\t\t{{yield to=\"onIcon\"}}\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t{{yield to=\"offIcon\"}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</span>\n\t\t\t\t{{else}}\n\t\t\t\t\t<UlxIcon @type=\"font\" @iconName={{if (lte starValue this.currentValue) \"ls-star-filled-icon\" \"ls-star-stroke-icon\"}} @componentClass=\"bs-icons1\" @customClass=\"{{this.iconClass}} {{if (lte starValue this.currentValue) \"onicon\" \"\"}}\" role=\"radio\" aria-checked={{eq starValue this.currentValue}} aria-posinset={{starValue}} aria-setsize={{this.starsCount}} aria-disabled={{not this.isInteractive}} tabindex=\"0\" data-qa=\"ulx-rating-star\" {{on \"click\" (fn this.handleStarClick starValue)}} {{on \"keydown\" (fn this.handleKeydown \"star\" starValue)}} />\n\t\t\t\t{{/if}}\n\t\t\t{{/each}}\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    t,
    on,
    fn,
    UlxIcon,
    lte,
    eq,
    not
  })
}), _UlxRating), _UlxRating), _applyDecoratedDescriptor(_class.prototype, "setValue", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setValue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleStarClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleStarClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleCancelClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleCancelClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "focusStarByValue", [action], Object.getOwnPropertyDescriptor(_class.prototype, "focusStarByValue"), _class.prototype), _class);

export { UlxRating as default };
//# sourceMappingURL=index.js.map
