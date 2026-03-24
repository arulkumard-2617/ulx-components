import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { getComponentClass } from '../../../utils/component-config.js';
import { t } from '../../../utils/i18n.js';
import UlxIconButton from '../ulx-icon-button/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxProgressBar;
let UlxProgressBar = (_class = (_UlxProgressBar = class UlxProgressBar extends Component {
  get baseClass() {
    return this.args.componentClass ?? getComponentClass("progressbar");
  }
  get rootDataQa() {
    return this.args.dataQa ?? "ulx-progressbar";
  }
  get isIndeterminate() {
    const {
      mode,
      value
    } = this.args;
    if (mode === "indeterminate") return true;
    if (mode === "determinate") return false;
    return value == null || typeof value !== "number";
  }
  get valuePercent() {
    if (this.isIndeterminate) return 0;
    const v = Number(this.args.value);
    if (!Number.isFinite(v)) return 0;
    return Math.min(100, Math.max(0, v));
  }
  get currentValue() {
    const v = Number(this.args.value);
    return Number.isFinite(v) ? v : this.min;
  }
  get fillPercentForControls() {
    if (this.isIndeterminate || !this.showControls) return this.valuePercent;
    const range = this.max - this.min;
    if (range <= 0) return 0;
    const p = (this.currentValue - this.min) / range * 100;
    return Math.max(0, Math.min(100, p));
  }
  get valueStyleWithControls() {
    if (this.isIndeterminate) return undefined;
    return `width: ${this.controlsValuePercent}%`;
  }
  get controlsValuePercent() {
    if (this.isIndeterminate) return 0;
    return Math.round(this.fillPercentForControls);
  }
  get sizeClass() {
    return this.args.size ?? "xxxs-size";
  }
  get showValue() {
    return this.args.showValue !== false;
  }
  get valueVisibilityClass() {
    return this.showValue ? "show-value" : "hide-value";
  }
  get rootClasses() {
    const {
      variant,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    this.isIndeterminate && parts.push("indeterminate");
    parts.push(this.valueVisibilityClass);
    this.sizeClass && parts.push(this.sizeClass);
    variant && parts.push(variant);
    customClass && parts.push(customClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get valueStyle() {
    if (this.isIndeterminate) return undefined;
    return `width: ${this.valuePercent}%`;
  }
  get ariaValueNow() {
    return this.isIndeterminate ? undefined : this.valuePercent;
  }
  get showControls() {
    return Boolean(this.args.showControls);
  }
  get step() {
    const step = Number(this.args.step);
    return Number.isFinite(step) && step > 0 ? step : 1;
  }
  get min() {
    const min = Number(this.args.min);
    return Number.isFinite(min) ? min : 0;
  }
  get max() {
    const max = Number(this.args.max);
    return Number.isFinite(max) ? max : 100;
  }
  get decreaseDisabled() {
    if (!this.showControls) return true;
    return this.currentValue <= this.min;
  }
  get increaseDisabled() {
    if (!this.showControls) return true;
    return this.currentValue >= this.max;
  }
  get barClassesWithControls() {
    const parts = this.rootClasses.split(" ");
    return parts.filter(c => c !== "show-value" && c !== "hide-value").join(" ");
  }
  get withControlsWrapperClass() {
    return `${this.baseClass}-with-controls`;
  }
  get controlsIconSize() {
    return this.args.iconSize;
  }
  handleDecrease() {
    if (this.decreaseDisabled || typeof this.args.onChange !== "function") return;
    const next = Math.max(this.min, this.currentValue - this.step);
    this.args.onChange(next);
  }
  handleIncrease() {
    if (this.increaseDisabled || typeof this.args.onChange !== "function") return;
    const next = Math.min(this.max, this.currentValue + this.step);
    this.args.onChange(next);
  }
  handleBarClick(event) {
    if (!this.showControls || typeof this.args.onChange !== "function") return;
    const element = event.currentTarget;
    if (!element || typeof element.getBoundingClientRect !== "function") return;
    const rect = element.getBoundingClientRect();
    const clientX = typeof event.clientX === "number" ? event.clientX : rect.left + rect.width / 2;
    let ratio = (clientX - rect.left) / rect.width;
    ratio = Math.max(0, Math.min(1, ratio));
    let value = this.min + ratio * (this.max - this.min);
    value = Math.round(value);
    value = Math.max(this.min, Math.min(this.max, value));
    this.args.onChange(value);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t{{#if this.showControls}}\n\t\t\t<div class={{this.withControlsWrapperClass}} data-qa={{this.rootDataQa}}>\n\t\t\t\t<UlxIconButton @iconLeft=\"hr-tag-icon\" @iconSize={{this.controlsIconSize}} @variant=\"outlined\" @iconComponentClass=\"bs-icons1\" @size=\"compact\" @disabled={{this.decreaseDisabled}} @onClick={{this.handleDecrease}} aria-label={{t \"lbl.progress.decrease\"}} />\n\t\t\t\t<div class={{this.barClassesWithControls}} role=\"progressbar\" aria-valuenow={{this.currentValue}} aria-valuemin={{this.min}} aria-valuemax={{this.max}} {{on \"click\" this.handleBarClick}} ...attributes>\n\t\t\t\t\t<div class=\"progressbar-value\" style={{this.valueStyleWithControls}} aria-hidden=\"true\">\n\t\t\t\t\t\t{{#if this.showValue}}\n\t\t\t\t\t\t\t{{#unless this.isIndeterminate}}\n\t\t\t\t\t\t\t\t{{#if (has-block \"content\")}}\n\t\t\t\t\t\t\t\t\t<div class=\"progressbar-label\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t\t{{yield this.controlsValuePercent to=\"content\"}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t<div class=\"progressbar-label\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t\t{{this.controlsValuePercent}}%\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t{{/unless}}\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<UlxIconButton @iconLeft=\"add-icon-01\" @iconSize={{this.controlsIconSize}} @iconComponentClass=\"bs-icons1\" @variant=\"outlined\" @size=\"compact\" @disabled={{this.increaseDisabled}} @onClick={{this.handleIncrease}} aria-label={{t \"lbl.progress.increase\"}} />\n\t\t\t</div>\n\t\t{{else}}\n\t\t\t<div class={{this.rootClasses}} role=\"progressbar\" aria-valuetext={{if this.isIndeterminate (t \"lbl.loading\")}} aria-valuenow={{this.ariaValueNow}} aria-valuemin={{if this.isIndeterminate undefined 0}} aria-valuemax={{if this.isIndeterminate undefined 100}} data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t\t<div class=\"progressbar-value\" style={{this.valueStyle}} aria-hidden=\"true\">\n\t\t\t\t\t{{#unless this.isIndeterminate}}\n\t\t\t\t\t\t{{#if (has-block \"content\")}}\n\t\t\t\t\t\t\t<div class=\"progressbar-label\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t{{yield this.valuePercent to=\"content\"}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<div class=\"progressbar-label\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t{{this.valuePercent}}%\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/unless}}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t{{/if}}\n\t", {
  strictMode: true,
  scope: () => ({
    UlxIconButton,
    t,
    on
  })
}), _UlxProgressBar), _UlxProgressBar), _applyDecoratedDescriptor(_class.prototype, "handleDecrease", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDecrease"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleIncrease", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleIncrease"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleBarClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleBarClick"), _class.prototype), _class);

export { UlxProgressBar as default };
//# sourceMappingURL=index.js.map
