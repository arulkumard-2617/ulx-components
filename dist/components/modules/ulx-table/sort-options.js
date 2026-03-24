import { a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import not from 'ember-truth-helpers/helpers/not';
import UlxRadio from '../../elements/ulx-radio/index.js';
import UlxIconButton from '../../elements/ulx-icon-button/index.js';
import UlxDivider from '../../elements/ulx-divider/index.js';
import { t } from '../../../utils/i18n.js';
import { getComponentClass } from '../../../utils/component-config.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _SortOptions;
let SortOptions = (_class = (_SortOptions = class SortOptions extends Component {
  get sortByKey() {
    const sortBy = this.args.sortBy;
    if (!sortBy || typeof sortBy !== "string") return "";
    const [key] = sortBy.split(":");
    return key ?? "";
  }
  get sortByOrder() {
    const sortBy = this.args.sortBy;
    if (!sortBy || typeof sortBy !== "string") return "asc";
    const [, order] = sortBy.split(":");
    return order === "desc" ? "desc" : "asc";
  }
  get isAsc() {
    return this.sortByOrder === "asc";
  }
  get radioItems() {
    const options = this.args.sortOptions ?? [];
    const currentKey = this.sortByKey;
    return options.map(opt => ({
      label: opt.lbl,
      value: opt.key,
      checked: opt.key === currentKey
    }));
  }
  get ulxSortClass() {
    return getComponentClass("sort");
  }
  onSortCriterionChange(item, checked) {
    if (!checked || !this.args.onChange) return;
    this.args.onChange(`${item.value}:${this.sortByOrder}`);
  }
  updateOrderBy(orderBy) {
    if (!this.args.onChange) return;
    this.args.onChange(`${this.sortByKey}:${orderBy}`);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class=\"{{this.ulxSortClass}} flex flex-col gp4 mgt1\" role=\"dialog\" aria-label={{t \"lbl.sort\"}}>\n\t\t\t<UlxRadio @items={{this.radioItems}} @onItemChange={{this.onSortCriterionChange}} @groupClass=\"nmg-default\" />\n\t\t\t<UlxDivider />\n\t\t\t<div class=\"flex flex-col items-start gap-3\">\n\t\t\t\t<UlxIconButton @label={{t \"lbl.ascending\"}} @iconLeft=\"ascending-icon\" @iconComponentClass=\"bs-icons1\" @iconSize=\"s14\" @size=\"compact\" @variant=\"secondary\" @text={{true}} @customClass={{if this.isAsc \"fg-primary\" \"\"}} aria-pressed={{this.isAsc}} @onClick={{fn this.updateOrderBy \"asc\"}} />\n\n\t\t\t\t<UlxIconButton @label={{t \"lbl.descending\"}} @iconLeft=\"descending-icon\" @iconComponentClass=\"bs-icons1\" @iconSize=\"s14\" @text={{true}} @size=\"compact\" @variant=\"secondary\" @customClass={{if this.isAsc \"\" \"fg-primary\"}} aria-pressed={{not this.isAsc}} @onClick={{fn this.updateOrderBy \"desc\"}} />\n\t\t\t</div>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    t,
    UlxRadio,
    UlxDivider,
    UlxIconButton,
    fn,
    not
  })
}), _SortOptions), _SortOptions), _applyDecoratedDescriptor(_class.prototype, "onSortCriterionChange", [action], Object.getOwnPropertyDescriptor(_class.prototype, "onSortCriterionChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "updateOrderBy", [action], Object.getOwnPropertyDescriptor(_class.prototype, "updateOrderBy"), _class.prototype), _class);

export { SortOptions as default };
//# sourceMappingURL=sort-options.js.map
