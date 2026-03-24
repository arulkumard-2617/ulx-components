import { _ as _defineProperty, b as _initializerDefineProperty, a as _applyDecoratedDescriptor } from '../../../_rollupPluginBabelHelpers-CQHfKKbY.js';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import not from 'ember-truth-helpers/helpers/not';
import UlxCheckbox from '../../elements/ulx-checkbox/index.js';
import UlxIconButton from '../../elements/ulx-icon-button/index.js';
import UlxIcon from '../../elements/ulx-icon/index.js';
import UlxMessage from '../../collections/ulx-message/index.js';
import { t } from '../../../utils/i18n.js';
import { isSpecialColumn } from './utils.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _ManageColumns;
let ManageColumns = (_class = (_ManageColumns = class ManageColumns extends Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "registerRefModifier", modifier(() => {
      this.args.registerRef?.(this);
      return () => {
        this.args.registerRef?.(null);
      };
    }));
    _initializerDefineProperty(this, "localOrder", _descriptor, this);
    _initializerDefineProperty(this, "localVisible", _descriptor2, this);
    _initializerDefineProperty(this, "dragFromIndex", _descriptor3, this);
    _initializerDefineProperty(this, "liveMessage", _descriptor4, this);
  }
  get manageableColumns() {
    return this.args.allColumns?.filter(c => {
      return c.field && !isSpecialColumn(c);
    }) ?? [];
  }
  get orderedColumns() {
    return this.localOrder ?? this.manageableColumns;
  }
  get visibleSet() {
    if (this.localVisible) return this.localVisible;
    const visibleFields = new Set(this.args.visibleColumns?.map(c => c.field));
    return new Set(this.manageableColumns.filter(c => visibleFields.has(c.field)).map(c => c.field));
  }
  isVisible(col) {
    return this.visibleSet.has(col.field);
  }
  isLocked(col) {
    return col.manageable === false;
  }
  toggleColumn(col) {
    if (this.isLocked(col)) return;
    const updated = new Set(this.visibleSet);
    if (updated.has(col.field)) {
      updated.delete(col.field);
    } else {
      updated.add(col.field);
    }
    this.localVisible = updated;
  }
  handleApply() {
    const orderedVisible = this.orderedColumns.filter(c => this.visibleSet.has(c.field));
    const lockedCols = this.args.allColumns?.filter(c => c.manageable === false) ?? [];
    const nonManageableCols = this.args.allColumns?.filter(c => isSpecialColumn(c)) ?? [];
    const result = [...nonManageableCols, ...lockedCols, ...orderedVisible];
    this.args.onApply?.({
      columns: result
    });
    this.args.onClose?.();
  }
  handleReset() {
    this.localOrder = null;
    this.localVisible = null;
    this.args.onReset?.();
  }
  handleDragStart(index, event) {
    this.dragFromIndex = index;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", String(index));
  }
  handleDragEnter(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }
  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }
  handleDrop(toIndex, event) {
    event.preventDefault();
    const fromIndex = this.dragFromIndex ?? Number(event.dataTransfer.getData("text/plain"));
    if (Number.isNaN(fromIndex) || fromIndex === toIndex) return;
    this.reorderColumns(fromIndex, toIndex);
    this.dragFromIndex = null;
  }
  handleDragEnd() {
    this.dragFromIndex = null;
  }
  canMoveUp(col, index) {
    return !this.isLocked(col) && index > 0;
  }
  canMoveDown(col, index) {
    return !this.isLocked(col) && index < this.orderedColumns.length - 1;
  }
  handleMoveUp(col, index) {
    if (!this.canMoveUp(col, index)) return;
    this.reorderColumns(index, index - 1);
  }
  handleMoveDown(col, index) {
    if (!this.canMoveDown(col, index)) return;
    this.reorderColumns(index, index + 1);
  }
  handleItemKeyDown(col, index, event) {
    if (event.target !== event.currentTarget || this.isLocked(col)) return;
    if (event.key === "ArrowUp") {
      event.preventDefault();
      this.handleMoveUp(col, index);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.handleMoveDown(col, index);
    }
  }
  reorderColumns(fromIndex, toIndex) {
    const cols = [...this.orderedColumns];
    const [moved] = cols.splice(fromIndex, 1);
    cols.splice(toIndex, 0, moved);
    this.localOrder = cols;
    this.liveMessage = t("msg.table.column.moved", {
      header: moved?.header ?? "",
      position: toIndex + 1
    });
  }
}, setComponentTemplate(precompileTemplate("\n\t\t<div class=\"datatable-manage-columns-panel\" {{this.registerRefModifier}}>\n\n\t\t\t{{#if this.liveMessage}}\n\t\t\t\t<UlxMessage @text={{this.liveMessage}} @variant=\"success\" @customClass=\"mx-4 mb-2\" @size=\"s-size\" />\n\t\t\t{{/if}}\n\t\t\t<ul class=\"ulx-drag\" role=\"list\">\n\t\t\t\t{{#each this.orderedColumns as |col index|}}\n\t\t\t\t\t<li class=\"drag-item {{if (this.isLocked col) \"locked\"}}\" draggable={{if (not (this.isLocked col)) \"true\"}} tabindex={{if (not (this.isLocked col)) \"0\" \"-1\"}} {{on \"dragstart\" (fn this.handleDragStart index)}} {{on \"dragenter\" this.handleDragEnter}} {{on \"dragover\" this.handleDragOver}} {{on \"drop\" (fn this.handleDrop index)}} {{on \"dragend\" this.handleDragEnd}} {{on \"keydown\" (fn this.handleItemKeyDown col index)}}>\n\t\t\t\t\t\t<span class=\"drag-handle\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t<UlxIcon @componentClass=\"bs-icons1\" @type=\"font\" @iconName=\"dragdrop-icon1\" @size=\"s14\" />\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<UlxCheckbox @checked={{this.isVisible col}} @disabled={{this.isLocked col}} @itemLabel={{col.header}} @onChange={{fn this.toggleColumn col}} @customClass=\"datatable-manage-columns-label\" aria-label={{t \"aria.table.toggle.column\" header=col.header}} />\n\t\t\t\t\t\t<div class=\"drag-controls\">\n\t\t\t\t\t\t\t{{#if (this.isLocked col)}}\n\t\t\t\t\t\t\t\t<UlxIcon @componentClass=\"bs-icons1\" @type=\"font\" @iconName=\"\tlock-filled-icon\" @size=\"s16\" @customClass=\"me-1\" />\n\t\t\t\t\t\t\t{{/if}}\n\t\t\t\t\t\t\t<UlxIconButton @size=\"xs-size\" @variant=\"primary\" @iconLeft=\"up-stroke-icon-new\" @disabled={{not (this.canMoveUp col index)}} @onClick={{fn this.handleMoveUp col index}} aria-label={{t \"aria.table.move.column.up\" header=col.header}} />\n\t\t\t\t\t\t\t<UlxIconButton @size=\"xs-size\" @variant=\"primary\" @iconLeft=\"down-stroke-icon-new\" @disabled={{not (this.canMoveDown col index)}} @onClick={{fn this.handleMoveDown col index}} aria-label={{t \"aria.table.move.column.down\" header=col.header}} />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t{{/each}}\n\t\t\t</ul>\n\t\t</div>\n\t", {
  strictMode: true,
  scope: () => ({
    UlxMessage,
    not,
    on,
    fn,
    UlxIcon,
    UlxCheckbox,
    t,
    UlxIconButton
  })
}), _ManageColumns), _ManageColumns), _descriptor = _applyDecoratedDescriptor(_class.prototype, "localOrder", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "localVisible", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "dragFromIndex", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "liveMessage", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _applyDecoratedDescriptor(_class.prototype, "isVisible", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isVisible"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isLocked", [action], Object.getOwnPropertyDescriptor(_class.prototype, "isLocked"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleColumn", [action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleColumn"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleApply", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleApply"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleReset", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleReset"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDragStart", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDragStart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDragEnter", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDragEnter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDragOver", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDragOver"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDrop", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDrop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleDragEnd", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDragEnd"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "canMoveUp", [action], Object.getOwnPropertyDescriptor(_class.prototype, "canMoveUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "canMoveDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "canMoveDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMoveUp", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMoveUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleMoveDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleMoveDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleItemKeyDown", [action], Object.getOwnPropertyDescriptor(_class.prototype, "handleItemKeyDown"), _class.prototype), _class);

export { ManageColumns as default };
//# sourceMappingURL=manage-columns.js.map
