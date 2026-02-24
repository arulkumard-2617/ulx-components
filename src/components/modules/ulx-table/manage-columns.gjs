import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import eq from 'ember-truth-helpers/helpers/eq';
import not from 'ember-truth-helpers/helpers/not';
import UlxCheckbox from '../../elements/ulx-checkbox/index.gjs';
import UlxButton from '../../elements/ulx-button/index.gjs';

/**
 * Manage Columns panel for UlxTable.
 * Allows hiding/showing columns and reordering via drag-and-drop.
 * Columns with `manageable: false` are excluded from management.
 *
 * @param {Array} allColumns - full column list (including hidden ones)
 * @param {Array} visibleColumns - currently visible columns
 * @param {Function} onApply - ({ columns }) => void  — called with updated visible columns
 * @param {Function} onClose - () => void
 * @param {Function} onReset - () => void
 */
export default class ManageColumns extends Component {
  @tracked localOrder = null;
  @tracked localVisible = null;
  @tracked dragFromIndex = null;

  get manageableColumns() {
    return this.args.allColumns?.filter((c) => {
      return c.field && !c.selectionMode && !c.expander && !c.rowReorder && !c.rowEditor;
    }) ?? [];
  }

  get orderedColumns() {
    return this.localOrder ?? this.manageableColumns;
  }

  get visibleSet() {
    if (this.localVisible) return this.localVisible;
    const visibleFields = new Set(this.args.visibleColumns?.map((c) => c.field));
    return new Set(this.manageableColumns.filter((c) => visibleFields.has(c.field)).map((c) => c.field));
  }

  @action
  isVisible(col) {
    return this.visibleSet.has(col.field);
  }

  @action
  isLocked(col) {
    return col.manageable === false;
  }

  @action
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

  @action
  handleApply() {
    const orderedVisible = this.orderedColumns.filter((c) => this.visibleSet.has(c.field));
    const lockedCols = this.args.allColumns?.filter((c) => c.manageable === false) ?? [];
    const nonManageableCols = this.args.allColumns?.filter(
      (c) => c.selectionMode || c.expander || c.rowReorder || c.rowEditor
    ) ?? [];
    const result = [...nonManageableCols, ...lockedCols, ...orderedVisible];
    this.args.onApply?.({ columns: result });
    this.args.onClose?.();
  }

  @action
  handleReset() {
    this.localOrder = null;
    this.localVisible = null;
    this.args.onReset?.();
    this.args.onClose?.();
  }

  @action
  handleDragStart(index, event) {
    this.dragFromIndex = index;
    event.dataTransfer.effectAllowed = 'move';
  }

  @action
  handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  @action
  handleDrop(toIndex, event) {
    event.preventDefault();
    const fromIndex = this.dragFromIndex;
    if (fromIndex == null || fromIndex === toIndex) return;
    const cols = [...this.orderedColumns];
    const [moved] = cols.splice(fromIndex, 1);
    cols.splice(toIndex, 0, moved);
    this.localOrder = cols;
    this.dragFromIndex = null;
  }

  <template>
    <div class="datatable-manage-columns-panel" role="dialog" aria-label="Manage columns">
      <div class="datatable-manage-columns-header">
        <span class="datatable-manage-columns-title">Manage Columns</span>
        <button
          type="button"
          class="datatable-manage-columns-close"
          aria-label="Close manage columns"
          {{on "click" @onClose}}
        >
          <i class="bs-icons1 x s16" aria-hidden="true"></i>
        </button>
      </div>

      <ul class="datatable-manage-columns-list" role="list">
        {{#each this.orderedColumns as |col index|}}
          <li
            class="datatable-manage-columns-item {{if (this.isLocked col) 'locked'}}"
            draggable={{if (not (this.isLocked col)) "true"}}
            {{on "dragstart" (fn this.handleDragStart index)}}
            {{on "dragover" this.handleDragOver}}
            {{on "drop" (fn this.handleDrop index)}}
          >
            <span
              class="datatable-manage-columns-drag-handle"
              aria-hidden="true"
            >
              {{#if (not (this.isLocked col))}}
                <i class="bs-icons1 grip-vertical s14" aria-hidden="true"></i>
              {{/if}}
            </span>
            <UlxCheckbox
              @checked={{this.isVisible col}}
              @disabled={{this.isLocked col}}
              @onChange={{fn this.toggleColumn col}}
              aria-label="Toggle column {{col.header}}"
            />
            <span class="datatable-manage-columns-label">{{col.header}}</span>
            {{#if (this.isLocked col)}}
              <span class="datatable-manage-columns-locked-icon" aria-label="Column locked">
                <i class="bs-icons1 lock s12" aria-hidden="true"></i>
              </span>
            {{/if}}
          </li>
        {{/each}}
      </ul>

      <div class="datatable-manage-columns-footer">
        <UlxButton
          @variant="text"
          @label="Reset"
          @onClick={{this.handleReset}}
        />
        <UlxButton
          @variant="primary"
          @label="Apply"
          @onClick={{this.handleApply}}
        />
      </div>
    </div>
  </template>
}
