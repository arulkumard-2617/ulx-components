import { _ as _defineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import eq from 'ember-truth-helpers/helpers/eq';
import and from 'ember-truth-helpers/helpers/and';
import or from 'ember-truth-helpers/helpers/or';
import not from 'ember-truth-helpers/helpers/not';
import UlxTristateCheckbox from '../../elements/ulx-tristate-checkbox/index.js';
import UlxInput from '../../elements/ulx-input/index.js';
import UlxMultiSelect from '../../elements/ulx-multi-select/index.js';
import UlxIconButton from '../../elements/ulx-icon-button/index.js';
import UlxIcon from '../../elements/ulx-icon/index.js';
import { t } from '../../../utils/i18n.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _TableHeader;
let TableHeader = (_class = (_TableHeader = class TableHeader extends Component {
  constructor(...args) {
    super(...args);
    // ─── Debounce timer for row filter inputs ─────────────────────────────────
    _defineProperty(this, "_rowFilterTimer", null);
    // ─── Pure computation helpers — arrow properties preserve `this` binding ──
    // when invoked from the template as {{this.method arg}}.
    _defineProperty(this, "sortOrderFor", field => {
      const {
        sortMode,
        sortField,
        sortOrder,
        multiSortMeta
      } = this.args;
      if (sortMode === "multiple") {
        const meta = multiSortMeta?.find(m => m.field === field);
        return meta ? meta.order : 0;
      }
      return sortField === field ? sortOrder ?? 0 : 0;
    });
    _defineProperty(this, "sortBadgeFor", field => {
      const {
        sortMode,
        multiSortMeta
      } = this.args;
      if (sortMode !== "multiple") return null;
      const idx = multiSortMeta?.findIndex(m => m.field === field) ?? -1;
      return idx >= 0 ? idx + 1 : null;
    });
    _defineProperty(this, "sortIconClass", field => {
      const order = this.sortOrderFor(field);
      if (order === 1) return "asc";
      if (order === -1) return "desc";
      return "";
    });
    _defineProperty(this, "ariaSort", field => {
      const order = this.sortOrderFor(field);
      if (order === 1) return "ascending";
      if (order === -1) return "descending";
      return "none";
    });
    _defineProperty(this, "filterValueFor", field => {
      return this.args.filters?.[field]?.value ?? "";
    });
    _defineProperty(this, "isFilterActive", field => {
      const v = this.filterValueFor(field);
      return v != null && v !== "";
    });
    _defineProperty(this, "headerCellClass", col => {
      const base = "column-header-cell";
      if (!col) return base;
      const parts = [base];
      const field = col.sortField ?? col.field;
      col.sortable && parts.push("sort");
      if (this.sortOrderFor(field) !== 0) parts.push("sorted");
      col.filter && this.args.filterDisplay === "menu" && parts.push("filterable");
      this.args.resizableColumns && col.resizable !== false && !col.selectionMode && !col.expander && parts.push("resizable");
      col.frozen && parts.push(`frozen-${col.alignFrozen ?? "left"}`);
      col.headerClassName && parts.push(col.headerClassName);
      return parts.filter(Boolean).join(" ");
    });
    _defineProperty(this, "headerCellStyle", col => {
      if (!col) return undefined;
      const parts = [];
      col.headerStyle && parts.push(col.headerStyle);
      if (col.frozen) {
        const side = col.alignFrozen ?? "left";
        parts.push(`${side}: ${col.frozenOffset ?? "0px"}`);
      }
      if (col.style) parts.push(col.style);
      const width = this.args.columnWidths?.[col.field];
      if (typeof width === "number") {
        parts.push(`min-width: ${width}px`);
        parts.push(`width: ${width}px`);
      }
      return parts.join("; ") || undefined;
    });
    _defineProperty(this, "isMultiSelectionMode", col => {
      return col.selectionMode === "multiple" || this.args.selectionMode === "checkbox";
    });
    _defineProperty(this, "filterButtonClass", col => {
      const field = col?.filterField ?? col?.field;
      const active = this.isFilterActive(field);
      return `datatable-filter-menu-button${active ? " active" : ""}`;
    });
    _defineProperty(this, "filterClearButtonClass", col => {
      const field = col?.filterField ?? col?.field;
      const active = this.isFilterActive(field);
      return `datatable-header-filter-clear-button${active ? " active" : ""}`;
    });
    _defineProperty(this, "isFilterMenuOpen", col => {
      const field = col?.filterField ?? col?.field;
      return this.args.filterOverlayField === field;
    });
  }
  willDestroy() {
    super.willDestroy(...arguments);
    clearTimeout(this._rowFilterTimer);
  }
  // ─── State getters ────────────────────────────────────────────────────────
  get headerCheckboxValue() {
    if (this.args.allSelected) return true;
    if (this.args.someSelected) return null;
    return false;
  }
  // ─── Event handlers ───────────────────────────────────────────────────────
  handleSort(col, event) {
    if (!col.sortable) return;
    if (event?.target?.closest?.(".datatable-column-filter")) return;
    this.args.onSort?.(col.sortField ?? col.field, col);
  }
  handleSortKeydown(col, event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.handleSort(col, event);
    }
  }
  handleHeaderCheckbox(nextValue) {
    this.args.onHeaderCheckboxChange?.(nextValue === true);
  }
  handleFilterInput(field, event) {
    const value = typeof event === "string" ? event : event?.target?.value ?? "";
    clearTimeout(this._rowFilterTimer);
    this._rowFilterTimer = setTimeout(() => {
      this.args.onFilterChange?.(field, value, "contains");
    }, 300);
  }
  handleMultiSelectFilter(field, value) {
    this.args.onFilterChange?.(field, value, "in");
  }
  handleFilterMenuOpen(col, event) {
    event?.stopPropagation?.();
    this.args.onFilterMenuOpen?.(event, col);
  }
  handleRowFilterClear(col, event) {
    event?.stopPropagation?.();
    const field = col?.filterField ?? col?.field;
    this.args.onFilterChange?.(field, "", "contains");
  }
  handleResizeStart(colIndex, event) {
    this.args.onColumnResizeStart?.(event, colIndex);
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<thead class=\"datatable-header\">\n\t\t\t{{!-- Column title row --}}\n\t\t\t<tr class=\"datatable-header-row\">\n\t\t\t\t{{#each @columns as |col index|}}\n\t\t\t\t\t{{#if (not col)}}\n\t\t\t\t\t\t{{!-- skip undefined column entries --}}\n\t\t\t\t\t{{else if col.selectionMode}}\n\t\t\t\t\t\t<th class=\"column-header-cell selection\" scope=\"col\" style=\"width: 3rem\">\n\t\t\t\t\t\t\t{{#if (this.isMultiSelectionMode col)}}\n\t\t\t\t\t\t\t\t<UlxTristateCheckbox @value={{this.headerCheckboxValue}} @onValueChange={{this.handleHeaderCheckbox}} @hideLabel={{true}} aria-label={{t \"aria.table.select.all\"}} />\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t</th>\n\t\t\t\t\t{{else if col.expander}}\n\t\t\t\t\t\t<th class=\"column-header-cell\" scope=\"col\" style=\"width: 3rem\"></th>\n\t\t\t\t\t{{else if col.rowReorder}}\n\t\t\t\t\t\t<th class=\"column-header-cell\" scope=\"col\" style=\"width: 3rem\"></th>\n\t\t\t\t\t{{else if col.rowEditor}}\n\t\t\t\t\t\t<th class=\"column-header-cell\" scope=\"col\" style=\"width: 6rem\"></th>\n\t\t\t\t\t{{else}}\n\t\t\t\t\t\t<th class={{this.headerCellClass col}} style={{this.headerCellStyle col}} scope=\"col\" tabindex={{if col.sortable \"0\"}} aria-sort={{if col.sortable (this.ariaSort (or col.sortField col.field))}} {{on \"click\" (fn this.handleSort col)}} {{on \"keydown\" (fn this.handleSortKeydown col)}}>\n\t\t\t\t\t\t\t<div class=\"column-header-content\">\n\t\t\t\t\t\t\t\t{{#if col.headerTemplate}}\n\t\t\t\t\t\t\t\t\t<col.headerTemplate @col={{col}} />\n\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t<span class=\"column-header-title\">{{col.header}}</span>\n\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t{{#if col.sortable}}\n\t\t\t\t\t\t\t\t\t<span class=\"datatable-column-sort-icon\n\t\t\t\t\t\t\t\t\t\t\t{{this.sortIconClass (or col.sortField col.field)}}\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t\t\t\t{{#let (this.sortOrderFor (or col.sortField col.field)) as |order|}}\n\t\t\t\t\t\t\t\t\t\t\t{{#if (eq order 1)}}\n\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @componentClass=\"bs-icons1\" @type=\"font\" @iconName=\"ascending-icon\" @size=\"s16\" />\n\t\t\t\t\t\t\t\t\t\t\t{{else if (eq order -1)}}\n\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @componentClass=\"bs-icons1\" @type=\"font\" @iconName=\"descending-icon\" @size=\"s16\" />\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t<UlxIcon @componentClass=\"bs-icons1\" @type=\"font\" @iconName=\"sort-icon\" @size=\"s16\" />\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t{{#let (this.sortBadgeFor (or col.sortField col.field)) as |badge|}}\n\t\t\t\t\t\t\t\t\t\t{{#if badge}}\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"datatable-sort-badge\">{{badge}}</span>\n\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t{{/let}}\n\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t{{#if (and col.filter (eq @filterDisplay \"menu\"))}}\n\t\t\t\t\t\t\t\t\t<UlxIconButton @text={{true}} @variant=\"secondary\" @iconLeft=\"filter-icon\" @customClass={{this.filterButtonClass col}} @onClick={{fn this.handleFilterMenuOpen col}} aria-label={{t \"aria.table.filter.column\" header=col.header}} />\n\t\t\t\t\t\t\t\t{{/if}}\n\n\t\t\t\t\t\t\t\t{{#if (and @resizableColumns (not (eq col.resizable false)))}}\n\t\t\t\t\t\t\t\t\t{{#if (and (not col.selectionMode) (not col.expander))}}\n\t\t\t\t\t\t\t\t\t\t<span class=\"datatable-column-resizer\" {{on \"mousedown\" (fn this.handleResizeStart index)}}></span>\n\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t{{/if}}\n\t\t\t\t{{/each}}\n\n\t\t\t\t{{#if @hasOptionCell}}\n\t\t\t\t\t<th class=\"column-header-cell\" scope=\"col\" style=\"width: 6rem\"></th>\n\t\t\t\t{{/if}}\n\n\t\t\t</tr>\n\n\t\t\t{{!-- Separate filter row \u2014 rendered below header row when filterDisplay=\"row\" --}}\n\t\t\t{{#if (eq @filterDisplay \"row\")}}\n\t\t\t\t<tr class=\"datatable-header-row\">\n\t\t\t\t\t{{#each @columns as |col|}}\n\t\t\t\t\t\t{{#if (not col)}}\n\t\t\t\t\t\t\t{{!-- skip undefined column entries --}}\n\t\t\t\t\t\t{{else if col.selectionMode}}\n\t\t\t\t\t\t\t<th class=\"column-header-cell selection\" scope=\"col\" style=\"width: 3rem\"></th>\n\t\t\t\t\t\t{{else if col.expander}}\n\t\t\t\t\t\t\t<th class=\"column-header-cell\" scope=\"col\" style=\"width: 3rem\"></th>\n\t\t\t\t\t\t{{else if col.rowReorder}}\n\t\t\t\t\t\t\t<th class=\"column-header-cell\" scope=\"col\" style=\"width: 3rem\"></th>\n\t\t\t\t\t\t{{else if col.rowEditor}}\n\t\t\t\t\t\t\t<th class=\"column-header-cell\" scope=\"col\" style=\"width: 6rem\"></th>\n\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t<th class=\"column-header-cell\" scope=\"col\">\n\t\t\t\t\t\t\t\t{{#if col.filter}}\n\t\t\t\t\t\t\t\t\t<div class=\"datatable-column-filter\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"datatable-filter-input\">\n\t\t\t\t\t\t\t\t\t\t\t{{#if col.filterElement}}\n\t\t\t\t\t\t\t\t\t\t\t\t<col.filterElement @field={{or col.filterField col.field}} @value={{this.filterValueFor (or col.filterField col.field)}} @onChange={{fn this.handleFilterInput (or col.filterField col.field)}} />\n\t\t\t\t\t\t\t\t\t\t\t{{else if (eq col.filterType \"multiselect\")}}\n\t\t\t\t\t\t\t\t\t\t\t\t<UlxMultiSelect @value={{this.filterValueFor (or col.filterField col.field)}} @options={{col.filterOptions}} @optionLabel=\"label\" @optionValue=\"value\" @placeholder={{or col.filterPlaceholder (t \"lbl.select\")}} @filter={{true}} @onChange={{fn this.handleMultiSelectFilter (or col.filterField col.field)}} aria-label={{t \"aria.table.filter.column\" header=col.header}} />\n\t\t\t\t\t\t\t\t\t\t\t{{else}}\n\t\t\t\t\t\t\t\t\t\t\t\t<UlxInput @value={{this.filterValueFor (or col.filterField col.field)}} @placeholder={{or col.filterPlaceholder (t \"lbl.search\")}} {{on \"input\" (fn this.handleFilterInput (or col.filterField col.field))}} aria-label={{t \"aria.table.filter.column\" header=col.header}} />\n\t\t\t\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<UlxIconButton @variant=\"secondary\" @text={{true}} @iconLeft=\"filter-icon\" @customClass=\"datatable-filter-menu-button\" @onClick={{fn this.handleFilterMenuOpen col}} aria-haspopup=\"true\" aria-expanded={{this.isFilterMenuOpen col}} aria-label={{t \"aria.table.show.filter.menu\"}} />\n\t\t\t\t\t\t\t\t\t\t<UlxIconButton @variant=\"secondary\" @text={{true}} @iconLeft=\"close-icon-01\" @customClass={{this.filterClearButtonClass col}} @onClick={{fn this.handleRowFilterClear col}} aria-label={{t \"lbl.clear\"}} />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t{{/each}}\n\t\t\t\t\t{{#if @hasOptionCell}}\n\t\t\t\t\t\t<th class=\"column-header-cell\" scope=\"col\" style=\"width: 6rem\"></th>\n\t\t\t\t\t{{/if}}\n\t\t\t\t</tr>\n\t\t\t{{/if}}\n\t\t</thead>\n\t", {
  strictMode: true,
  scope: () => ({
    not,
    UlxTristateCheckbox,
    t,
    or,
    on,
    fn,
    eq,
    UlxIcon,
    and,
    UlxIconButton,
    UlxMultiSelect,
    UlxInput
  })
}), _TableHeader), _TableHeader), _applyDecoratedDescriptor(_class.prototype, "handleSort", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleSort"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleSortKeydown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleSortKeydown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleHeaderCheckbox", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleHeaderCheckbox"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFilterInput", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFilterInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMultiSelectFilter", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMultiSelectFilter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleFilterMenuOpen", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleFilterMenuOpen"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleRowFilterClear", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleRowFilterClear"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleResizeStart", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleResizeStart"), _class.prototype), _class);

export { TableHeader as default };
//# sourceMappingURL=table-header.js.map
