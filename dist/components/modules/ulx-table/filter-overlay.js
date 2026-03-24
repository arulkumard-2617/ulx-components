import { b as _initializerDefineProperty, _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import not from 'ember-truth-helpers/helpers/not';
import and from 'ember-truth-helpers/helpers/and';
import or from 'ember-truth-helpers/helpers/or';
import gt from 'ember-truth-helpers/helpers/gt';
import UlxButton from '../../elements/ulx-button/index.js';
import UlxIconButton from '../../elements/ulx-icon-button/index.js';
import UlxDropdown from '../../elements/ulx-dropdown/index.js';
import UlxInput from '../../elements/ulx-input/index.js';
import UlxMultiSelect from '../../elements/ulx-multi-select/index.js';
import { t } from '../../../utils/i18n.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _descriptor3, _FilterOverlay;
let FilterOverlay = (_class = (_FilterOverlay = class FilterOverlay extends Component {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "localConstraints", _descriptor, this);
    _initializerDefineProperty(this, "localOperator", _descriptor2, this);
    _initializerDefineProperty(this, "showValidation", _descriptor3, this);
    _defineProperty(this, "isConstraintValueEmpty", constraint => {
      const {
        value
      } = constraint;
      if (Array.isArray(value)) return value.length === 0;
      return value == null || String(value).trim() === "";
    });
  }
  get field() {
    return this.args.column?.filterField ?? this.args.column?.field;
  }
  get isMultiSelect() {
    return this.args.column?.filterType === "multiselect";
  }
  get hasMatchModes() {
    return this.args.column?.filterMatchModeOptions !== false;
  }
  get matchModeOptions() {
    const textOptions = [{
      label: t("lbl.filter.contains"),
      value: "contains"
    }, {
      label: t("lbl.filter.not.contains"),
      value: "notContains"
    }, {
      label: t("lbl.filter.starts.with"),
      value: "startsWith"
    }, {
      label: t("lbl.filter.ends.with"),
      value: "endsWith"
    }, {
      label: t("lbl.filter.equals"),
      value: "equals"
    }, {
      label: t("lbl.filter.not.equals"),
      value: "notEquals"
    }];
    const multiselectOptions = [{
      label: t("lbl.filter.in"),
      value: "in"
    }, {
      label: t("lbl.filter.not.in"),
      value: "notIn"
    }];
    if (this.isMultiSelect) {
      return this.args.column?.filterMatchModeOptions ?? multiselectOptions;
    }
    return this.args.column?.filterMatchModeOptions ?? textOptions;
  }
  get operatorOptions() {
    return [{
      label: t("lbl.filter.and"),
      value: "and"
    }, {
      label: t("lbl.filter.or"),
      value: "or"
    }];
  }
  get filterOptions() {
    return this.args.column?.filterOptions ?? [];
  }
  get defaultMatchMode() {
    return this.isMultiSelect ? "in" : "contains";
  }
  get defaultValue() {
    return this.isMultiSelect ? [] : "";
  }
  get constraints() {
    if (this.localConstraints) return this.localConstraints;
    const meta = this.args.filterMeta;
    if (meta?.constraints) return meta.constraints;
    return [{
      value: meta?.value ?? this.defaultValue,
      matchMode: meta?.matchMode ?? this.defaultMatchMode
    }];
  }
  get operator() {
    return this.localOperator ?? this.args.filterMeta?.operator ?? "and";
  }
  get canAddRule() {
    return !this.isMultiSelect;
  }
  get isValid() {
    return this.constraints.every(c => {
      const {
        value
      } = c;
      if (Array.isArray(value)) return value.length > 0;
      return value != null && String(value).trim() !== "";
    });
  }
  updateConstraint(index, key, value) {
    const updated = this.constraints.map((c, i) => i === index ? {
      ...c,
      [key]: value
    } : c);
    this.localConstraints = updated;
  }
  updateConstraintFromInput(index, event) {
    const value = typeof event === "string" ? event : event?.target?.value ?? "";
    this.updateConstraint(index, "value", value);
  }
  addConstraint() {
    if (!this.canAddRule) return;
    this.localConstraints = [...this.constraints, {
      value: this.defaultValue,
      matchMode: this.defaultMatchMode
    }];
  }
  removeConstraint(index) {
    if (this.constraints.length <= 1) return;
    this.localConstraints = this.constraints.filter((_, i) => i !== index);
  }
  setOperator(value) {
    this.localOperator = value;
  }
  handleApply() {
    this.showValidation = true;
    if (!this.isValid) return;
    const singleConstraint = this.constraints.length === 1;
    const meta = singleConstraint ? {
      value: this.constraints[0].value,
      matchMode: this.constraints[0].matchMode
    } : {
      operator: this.operator,
      constraints: this.constraints
    };
    this.args.onApply?.(this.field, meta);
    this.args.onClose?.();
  }
  handleClear() {
    this.localConstraints = null;
    this.localOperator = null;
    this.showValidation = false;
    this.args.onClear?.(this.field);
    this.args.onClose?.();
  }
  handleOverlayKeydown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.args.onClose?.();
    }
  }
  handleFilterValueKeydown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.addConstraint();
    }
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class=\"ulx-datatable-filter-overlay menu-display\" role=\"dialog\" aria-label={{t \"aria.table.column.filter\"}} {{on \"keydown\" this.handleOverlayKeydown}}>\n\t\t\t<div class=\"filter-overlay-header\">\n\t\t\t\t<span class=\"filter-overlay-title\">{{or @column.header this.field}}</span>\n\t\t\t\t<UlxIconButton @variant=\"secondary\" @text={{true}} @size=\"s-size\" @iconLeft=\"close-icon-01\" @iconComponentClass=\"bs-icons1\" @iconSize=\"s18\" @onClick={{@onClose}} aria-label={{t \"lbl.close\"}} />\n\t\t\t</div>\n\t\t\t{{#if this.hasMatchModes}}\n\t\t\t\t<div class=\"filter-operator\">\n\t\t\t\t\t<UlxDropdown @value={{this.operator}} @options={{this.operatorOptions}} @optionLabel=\"label\" @optionValue=\"value\" @onChange={{this.setOperator}} aria-label={{t \"aria.table.filter.operator\"}} />\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t<div class=\"filter-constraints\">\n\t\t\t\t{{#each this.constraints key=\"@index\" as |constraint index|}}\n\t\t\t\t\t<div class=\"filter-constraint\">\n\t\t\t\t\t\t{{#if this.hasMatchModes}}\n\t\t\t\t\t\t\t<UlxDropdown @value={{constraint.matchMode}} @options={{this.matchModeOptions}} @optionLabel=\"label\" @optionValue=\"value\" @onChange={{fn this.updateConstraint index \"matchMode\"}} aria-label={{t \"aria.table.filter.match.mode\"}} />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if @column.filterElement}}\n\t\t\t\t\t\t\t<@column.filterElement @field={{this.field}} @value={{constraint.value}} @onChange={{fn this.updateConstraint index \"value\"}} />\n\t\t\t\t\t\t{{else if this.isMultiSelect}}\n\t\t\t\t\t\t\t<UlxMultiSelect @value={{constraint.value}} @options={{this.filterOptions}} @optionLabel=\"label\" @optionValue=\"value\" @placeholder={{t \"msg.table.select.values\"}} @filter={{true}} @invalid={{and this.showValidation (not constraint.value.length)}} @onChange={{fn this.updateConstraint index \"value\"}} aria-label={{t \"aria.table.filter.values\"}} />\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<UlxInput @value={{constraint.value}} @placeholder={{t \"msg.table.enter.filter.value\"}} @invalid={{and this.showValidation (this.isConstraintValueEmpty constraint)}} @onKeydown={{this.handleFilterValueKeydown}} {{on \"input\" (fn this.updateConstraintFromInput index)}} aria-label={{t \"aria.table.filter.value\"}} />\n\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t{{#if (gt index 0)}}\n\t\t\t\t\t\t\t<UlxIconButton @variant=\"text\" @iconLeft=\"dash-circle\" @iconComponentClass=\"bs-icons1\" @iconSize=\"s14\" @customClass=\"filter-remove\" @onClick={{fn this.removeConstraint index}} aria-label={{t \"aria.table.remove.filter.rule\"}} />\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t</div>\n\t\t\t\t{{/each}}\n\t\t\t</div>\n\n\t\t\t{{#if this.canAddRule}}\n\t\t\t\t<div class=\"filter-add-rule\">\n\t\t\t\t\t<UlxIconButton @outlined={{true}} @variant=\"primary\" @label={{t \"lbl.add.filter.rule\"}} @iconLeft=\"add-icon-01\" @size=\"s-size\" @onClick={{this.addConstraint}} />\n\t\t\t\t</div>\n\t\t\t{{/if}}\n\n\t\t\t<div class=\"filter-buttonbar\">\n\t\t\t\t<UlxButton @variant=\"basic\" @label={{t \"lbl.clear\"}} @onClick={{this.handleClear}} />\n\t\t\t\t<UlxButton @variant=\"primary\" @label={{t \"lbl.apply.filter\"}} @onClick={{this.handleApply}} />\n\t\t\t</div>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    t,
    on,
    or,
    UlxIconButton,
    UlxDropdown,
    fn,
    UlxMultiSelect,
    and,
    not,
    UlxInput,
    gt,
    UlxButton
  })
}), _FilterOverlay), _FilterOverlay), _descriptor = _applyDecoratedDescriptor(_class.prototype, "localConstraints", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "localOperator", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "showValidation", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "updateConstraint", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateConstraint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateConstraintFromInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateConstraintFromInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addConstraint", [action], Object.getOwnPropertyDescriptor(_class.prototype, "addConstraint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeConstraint", [action], Object.getOwnPropertyDescriptor(_class.prototype, "removeConstraint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setOperator", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setOperator"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleApply", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleApply"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleClear", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleClear"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleOverlayKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleOverlayKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFilterValueKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFilterValueKeydown"), _class.prototype), _class);

export { FilterOverlay as default };
//# sourceMappingURL=filter-overlay.js.map
