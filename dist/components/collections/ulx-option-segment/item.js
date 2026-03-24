import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { on } from '@ember/modifier';
import { optionSegmentRowKey } from '../../../utils/input-util.js';
import UlxRadio from '../../elements/ulx-radio/index.js';
import UlxCheckbox from '../../elements/ulx-checkbox/index.js';
import UlxTristateCheckbox from '../../elements/ulx-tristate-checkbox/index.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _UlxOptionSegmentItem;
let UlxOptionSegmentItem = (_class = (_UlxOptionSegmentItem = class UlxOptionSegmentItem extends Component {
  get type() {
    return this.args.type ?? "radio";
  }
  get isRadioType() {
    return this.type === "radio";
  }
  get isCheckboxType() {
    return this.type === "checkbox";
  }
  get isTristateType() {
    return this.type === "tristate";
  }
  get item() {
    return this.args.item ?? {};
  }
  /**
  * Stable id for the native radio/checkbox input — identical to the parent `rowKey`
  * so `{{#each key="rowKey"}}` and the input `id` never diverge.
  */
  get stableControlId() {
    const {
      controlId
    } = this.args;
    if (typeof controlId === "string" && controlId.length > 0) {
      return controlId;
    }
    const fromKey = optionSegmentRowKey(this.item, this.args.itemIndex ?? 0, this.args.segmentIdBase);
    if (typeof fromKey === "string" && fromKey.length > 0) {
      return fromKey;
    }
    return `ulx-option-segment-control-${guidFor(this)}`;
  }
  get hasVisibleTitle() {
    return this.hasTitleBlock || typeof this.title === "string" && this.title.length > 0;
  }
  get hasVisibleDescription() {
    return this.hasDescriptionBlock || typeof this.description === "string" && this.description.length > 0;
  }
  get optionTitleId() {
    return this.hasVisibleTitle ? `${this.stableControlId}-title` : undefined;
  }
  get optionDescriptionId() {
    return this.hasVisibleDescription ? `${this.stableControlId}-description` : undefined;
  }
  /** When there is no title region, expose a minimal inline label (e.g. string value). */
  get fallbackItemLabel() {
    if (this.hasVisibleTitle) {
      return "";
    }
    const v = this.value;
    return typeof v === "string" && v.length > 0 ? v : "";
  }
  get value() {
    return this.item.value;
  }
  get isSelected() {
    return Boolean(this.item.selected);
  }
  get isDisabled() {
    return Boolean(this.args.disabled) || Boolean(this.item.disabled);
  }
  get isCompact() {
    if (typeof this.item.compact === "boolean") {
      return this.item.compact;
    }
    return Boolean(this.args.compact);
  }
  get itemClasses() {
    const {
      itemClass
    } = this.item;
    const parts = ["option-item"];
    // Visual state on the individual option card
    this.isSelected && parts.push("is-selected");
    this.isDisabled && parts.push("disabled");
    this.isCompact && parts.push("compact");
    // Custom per-item class (not the group-level customClass)
    itemClass && parts.push(itemClass);
    return [...new Set(parts.filter(Boolean))].join(" ");
  }
  get itemRole() {
    if (this.usesBuiltInToggleControl) {
      return undefined;
    }
    if (this.isCheckboxType || this.isTristateType) {
      return "checkbox";
    }
    if (this.isRadioType) {
      return "radio";
    }
    return "radio";
  }
  get isToggleRole() {
    if (this.usesBuiltInToggleControl) {
      return false;
    }
    const role = this.itemRole;
    return role === "radio" || role === "checkbox";
  }
  get tabIndex() {
    if (this.usesBuiltInToggleControl) {
      return undefined;
    }
    if (this.isDisabled) {
      return -1;
    }
    return this.isToggleRole ? 0 : undefined;
  }
  get ariaChecked() {
    if (this.usesBuiltInToggleControl) {
      return undefined;
    }
    if (!this.isToggleRole) {
      return undefined;
    }
    // Tristate uses its own value for aria-checked
    if (this.isTristateType) {
      const v = this.tristateValue;
      if (v === null) return "mixed";
      return v ? "true" : "false";
    }
    return this.isSelected ? "true" : "false";
  }
  get ariaDisabled() {
    if (this.usesBuiltInToggleControl) {
      return undefined;
    }
    return this.isDisabled ? "true" : undefined;
  }
  get title() {
    return this.item.title;
  }
  get description() {
    return this.item.description;
  }
  get hasNestedItems() {
    return Array.isArray(this.item.nestedItems) && this.item.nestedItems.length > 0;
  }
  get nestedItems() {
    return this.hasNestedItems ? this.item.nestedItems : [];
  }
  get hasControlBlock() {
    return Boolean(this.args.hasControlBlock);
  }
  get hasTitleBlock() {
    return Boolean(this.args.hasTitleBlock);
  }
  get hasContentBlock() {
    return Boolean(this.args.hasContentBlock);
  }
  get hasDescriptionBlock() {
    return Boolean(this.args.hasDescriptionBlock);
  }
  get hasNestedBlock() {
    if (!this.args.hasNestedBlock) {
      return false;
    }
    const item = this.item;
    // When the consumer explicitly controls nesting via `item.hasNested`,
    // only render the nested section when that flag is truthy.
    if (item && Object.prototype.hasOwnProperty.call(item, "hasNested")) {
      return Boolean(item.hasNested);
    }
    // Backwards-compatible default: when no `hasNested` flag is present,
    // keep rendering the nested block whenever it exists.
    return true;
  }
  get hasControlSection() {
    return this.hasControlBlock || this.isRadioType || this.isCheckboxType || this.isTristateType;
  }
  /**
  * When true, the native control handles focus and keyboard; the card must not be
  * a second tab stop or ARIA toggle (avoids focus traps and double-toggle on Space/click).
  */
  get usesBuiltInToggleControl() {
    return this.hasControlSection && !this.hasControlBlock && (this.isRadioType || this.isCheckboxType || this.isTristateType);
  }
  get tristateValue() {
    return this.item.tristateValue;
  }
  handleControlCheckedChange(checked, event) {
    if (this.isDisabled) {
      return;
    }
    if (typeof this.args.onSelect === "function") {
      this.args.onSelect(checked, this.value, event, this.item);
    }
  }
  handleTristateValueChange(nextValue, event) {
    if (this.isDisabled) {
      return;
    }
    const callback = this.item?.onTristateChange;
    if (typeof callback === "function") {
      callback(nextValue, event, this.item);
    }
  }
  handleSelect(event) {
    if (this.isDisabled) {
      return;
    }
    if (typeof this.args.onSelect === "function") {
      let nextSelected;
      if (this.isCheckboxType) {
        nextSelected = !this.isSelected;
      } else if (this.isRadioType) {
        nextSelected = true;
      } else {
        nextSelected = !this.isSelected;
      }
      this.args.onSelect(nextSelected, this.value, event, this.item);
    }
  }
  handleClick(event) {
    if (this.isDisabled) {
      return;
    }
    // Built-in control: native input/label already toggles; ignore bubbled clicks from `.option-control`.
    if (this.usesBuiltInToggleControl) {
      const controlRoot = event.currentTarget?.querySelector?.(".option-control");
      if (controlRoot?.contains(event.target)) {
        return;
      }
    }
    this.handleSelect(event);
  }
  handleKeyDown(event) {
    if (!this.isToggleRole || this.isDisabled) {
      return;
    }
    // Activate on Space or Enter for keyboard users
    if (event.key === " " || event.key === "Spacebar" || event.key === "Enter") {
      event.preventDefault();
      this.handleSelect(event);
    }
  }
  stopNestedClickPropagation(event) {
    event.stopPropagation();
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class={{this.itemClasses}} role={{this.itemRole}} tabindex={{this.tabIndex}} aria-checked={{this.ariaChecked}} aria-disabled={{this.ariaDisabled}} {{on \"click\" this.handleClick}} {{on \"keydown\" this.handleKeyDown}} ...attributes>\n\t\t\t{{#if this.hasControlSection}}\n\t\t\t\t<div class=\"option-control\">\n\t\t\t\t\t{{#if this.hasControlBlock}}\n\t\t\t\t\t\t{{yield this.item to=\"control\"}}\n\t\t\t\t\t{{else if this.isRadioType}}\n\t\t\t\t\t\t<UlxRadio @id={{this.stableControlId}} @checked={{this.isSelected}} @disabled={{this.isDisabled}} @itemLabel={{this.fallbackItemLabel}} @customClass=\"option-control-radio\" @onCheckedChange={{this.handleControlCheckedChange}} @ariaDescribedBy={{this.optionDescriptionId}} aria-labelledby={{if this.optionTitleId this.optionTitleId}} />\n\t\t\t\t\t{{else if this.isCheckboxType}}\n\t\t\t\t\t\t<UlxCheckbox @id={{this.stableControlId}} @checked={{this.isSelected}} @disabled={{this.isDisabled}} @itemLabel={{this.fallbackItemLabel}} @hideLabel={{this.hasVisibleTitle}} @customClass=\"option-control-checkbox\" @onCheckedChange={{this.handleControlCheckedChange}} @ariaDescribedBy={{this.optionDescriptionId}} aria-labelledby={{if this.optionTitleId this.optionTitleId}} />\n\t\t\t\t\t{{else if this.isTristateType}}\n\t\t\t\t\t\t<UlxTristateCheckbox @id={{this.stableControlId}} @value={{this.tristateValue}} @disabled={{this.isDisabled}} @itemLabel={{this.fallbackItemLabel}} @hideLabel={{this.hasVisibleTitle}} @customClass=\"option-control-checkbox\" @onValueChange={{this.handleTristateValueChange}} @ariaDescribedBy={{this.optionDescriptionId}} aria-labelledby={{if this.optionTitleId this.optionTitleId}} {{on \"click\" this.stopNestedClickPropagation}} />\n\t\t\t\t\t{{/if}}\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t<div class=\"option-content\">\n\t\t\t\t{{#if this.hasContentBlock}}\n\t\t\t\t\t{{yield this.item to=\"content\"}}\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if this.hasTitleBlock}}\n\t\t\t\t\t<div class=\"option-title\" id={{this.optionTitleId}}>\n\t\t\t\t\t\t{{yield this.item to=\"title\"}}\n\t\t\t\t\t</div>\n\t\t\t\t{{else if this.title}}\n\t\t\t\t\t<div class=\"option-title\" id={{this.optionTitleId}}>\n\t\t\t\t\t\t{{this.title}}\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if this.hasDescriptionBlock}}\n\t\t\t\t\t<div class=\"option-description\" id={{this.optionDescriptionId}}>\n\t\t\t\t\t\t{{yield this.item to=\"description\"}}\n\t\t\t\t\t</div>\n\t\t\t\t{{else if this.description}}\n\t\t\t\t\t<div class=\"option-description\" id={{this.optionDescriptionId}}>\n\t\t\t\t\t\t{{this.description}}\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{#if this.hasNestedBlock}}\n\t\t\t\t\t<div class=\"option-nested\" {{on \"click\" this.stopNestedClickPropagation}}>\n\t\t\t\t\t\t{{yield this.item to=\"nested\"}}\n\t\t\t\t\t</div>\n\t\t\t\t{{else if this.hasNestedItems}}\n\t\t\t\t\t<div class=\"option-nested\" {{on \"click\" this.stopNestedClickPropagation}}>\n\t\t\t\t\t\t{{#each this.nestedItems as |nestedItem|}}\n\t\t\t\t\t\t\t<div class=\"option-nested-item\">\n\t\t\t\t\t\t\t\t{{nestedItem.label}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t{{/each}}\n\t\t\t\t\t</div>\n\t\t\t\t{{/if}}\n\n\t\t\t\t{{yield this.item}}\n\t\t\t</div>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    on,
    UlxRadio,
    UlxCheckbox,
    UlxTristateCheckbox
  })
}), _UlxOptionSegmentItem), _UlxOptionSegmentItem), _applyDecoratedDescriptor(_class.prototype, "handleControlCheckedChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleControlCheckedChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleTristateValueChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleTristateValueChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleSelect", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleSelect"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleClick", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleKeyDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stopNestedClickPropagation", [action], Object.getOwnPropertyDescriptor(_class.prototype, "stopNestedClickPropagation"), _class.prototype), _class);

export { UlxOptionSegmentItem as default };
//# sourceMappingURL=item.js.map
