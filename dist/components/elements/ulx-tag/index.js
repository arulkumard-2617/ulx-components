import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getComponentClass } from '../../../utils/component-config.js';
import { joinClassNames } from '../../../utils/class-names.js';
import { resolveRootDataQa, buildDataQa } from '../../../utils/data-qa.js';
import UlxIcon from '../ulx-icon/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxTag;
function buildSurfaceClass(rootClasses, icon, hasIconBlock, hasDefaultBlock) {
  const hasIcon = Boolean(icon) || Boolean(hasIconBlock);
  return joinClassNames(rootClasses, hasIcon ? "with-icon" : "text-only", hasDefaultBlock && "with-template");
}
const TYPE_CLASS_ALIASES = {
  outline: "outlined"
};
function normalizeTypeClass(type) {
  if (!type) return undefined;
  return TYPE_CLASS_ALIASES[type] ?? type;
}
/**
 * Tag element component (ULX).
 *
 * ## Notes
 * - Uses existing ULX classes from `ulx-v2` (`elements/tag.less`).
 * - `@invert` is an ULX extension that maps to the existing `.outlined` style.
 *
 * @class UlxTag
 * @param {string} [value] - Label text shown inside the tag.
 * @param {string} [variant] - Tag color variant class (e.g. "primary", "success", "light-salmon-red", "lt-green").
 * @param {boolean} [rounded=false] - Applies fully rounded tag styling.
 * @param {string} [icon] - Icon name passed to `UlxIcon` as `@iconName`. Renders before the label.
 * @param {string} [iconClass] - Passed to `UlxIcon` as `@componentClass` (e.g. "bs-icons1" for font icons).
 * @param {string} [iconSize] - Passed to `UlxIcon` as `@size` (e.g. "s18").
 *
 * @param {boolean} [invert=false] - ULX extension. When true, applies the existing `.outlined` class.
 *
 * @param {boolean} [disabled=false] - Applies `.disabled` styling (visual + pointer-events none).
 * @param {string} [size] - Size class: "xs-size" | "s-size" | "m-size" | "l-size" | "xl-size".
 * @param {string} [type] - Visual type class: "outlined" | "elevated" | "flat" | "pill" | "rounded" (alias: "outline" => "outlined").
 *
 * @param {string} [iconPosition='left'] - Icon position: "left" | "right".
 * @param {'svg'|'font'} [iconType='svg'] - Passed to `UlxIcon` when `@icon` is used.
 * @param {string} [iconAriaLabel] - Accessible name for meaningful icons (passed to `UlxIcon`).
 *
 * @param {string} [customClass] - Extra CSS classes appended to the root.
 * @param {string} [componentClass] - Override base component class.
 * @param {string} [dataQa] - Optional override for root `data-qa` (default `ulx-tag`).
 */
let UlxTag = (_class = (_UlxTag = class UlxTag extends Component {
  get baseClass() {
    return this.args.componentClass ?? getComponentClass("tag");
  }
  get rootDataQa() {
    return resolveRootDataQa(this.args.dataQa, "tag");
  }
  getDataQa(part) {
    return buildDataQa(this.rootDataQa, part);
  }
  get typeClass() {
    return normalizeTypeClass(this.args.type);
  }
  get rootClasses() {
    const {
      variant,
      size,
      iconPosition = "left",
      rounded = false,
      invert = false,
      disabled = false,
      customClass
    } = this.args;
    const parts = [this.baseClass];
    variant && parts.push(variant);
    size && parts.push(size);
    this.typeClass && parts.push(this.typeClass);
    /* `.icon-right` on root flips flex direction for `@iconPosition="right"`. */
    iconPosition === "right" && parts.push("icon-right");
    rounded && parts.push("rounded");
    invert && parts.push("outlined");
    disabled && parts.push("disabled");
    customClass && parts.push(customClass);
    return joinClassNames(...parts);
  }
  get iconWrapperClass() {
    const {
      iconPosition = "left",
      disabled = false
    } = this.args;
    const position = iconPosition === "right" ? "right" : "left";
    const parts = ["tag-icon", position];
    disabled && parts.push("disabled");
    return joinClassNames(...parts);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t{{#let (has-block \"icon\") (has-block) as |hasIconBlock hasDefaultBlock|}}\n\t\t\t<span class={{buildSurfaceClass this.rootClasses @icon hasIconBlock hasDefaultBlock}} aria-disabled={{if @disabled \"true\"}} data-qa={{this.rootDataQa}} ...attributes>\n\t\t\t\t{{#if hasIconBlock}}\n\t\t\t\t\t<span class={{this.iconWrapperClass}} data-qa={{this.getDataQa \"icon\"}}>\n\t\t\t\t\t\t{{yield to=\"icon\"}}\n\t\t\t\t\t</span>\n\t\t\t\t{{else if @icon}}\n\t\t\t\t\t<span class={{this.iconWrapperClass}} data-qa={{this.getDataQa \"icon\"}}>\n\t\t\t\t\t\t<UlxIcon @componentClass={{@iconClass}} @iconName={{@icon}} @type={{@iconType}} @size={{@iconSize}} @ariaLabel={{@iconAriaLabel}} />\n\t\t\t\t\t</span>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if @value}}\n\t\t\t\t\t<span class=\"tag-label\" data-qa={{this.getDataQa \"label\"}}>{{@value}}</span>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{yield}}\n\t\t\t</span>\n\t\t{{/let}}\n\t", {
  strictMode: true,
  scope: () => ({
    buildSurfaceClass,
    UlxIcon
  })
}), _UlxTag), _UlxTag), _applyDecoratedDescriptor(_class.prototype, "getDataQa", [action], Object.getOwnPropertyDescriptor(_class.prototype, "getDataQa"), _class.prototype), _class);

export { UlxTag as default };
//# sourceMappingURL=index.js.map
