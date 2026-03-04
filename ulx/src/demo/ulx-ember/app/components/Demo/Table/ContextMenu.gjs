import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', price: 65 },
  { id: 2, code: 'nvklal433', name: 'Black Watch', category: 'Accessories', price: 72 },
  { id: 3, code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', price: 79 },
  { id: 4, code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', price: 29 },
  { id: 5, code: 'h456wer53', name: 'Bracelet', category: 'Accessories', price: 15 },
];

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

export default class DemoTableContextMenu extends Component {
  products = PRODUCTS;
  columns = columns;

  @tracked menuVisible = false;
  @tracked menuX = 0;
  @tracked menuY = 0;
  @tracked selectedRow = null;
  @tracked lastAction = null;

  get menuStyle() {
    return `position:fixed;top:${this.menuY}px;left:${this.menuX}px;z-index:2000;min-width:160px;background:var(--uls-overlay-bg-white,#fff);border:1px solid var(--uls-default-border-color,#e2e8f0);border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,0.12);padding:4px 0;`;
  }

  @action
  onContextMenu({ row, originalEvent }) {
    originalEvent?.preventDefault?.();
    this.selectedRow = row;
    this.menuX = originalEvent?.clientX ?? 0;
    this.menuY = originalEvent?.clientY ?? 0;
    this.menuVisible = true;
  }

  @action
  closeMenu() {
    this.menuVisible = false;
  }

  @action
  handleView() {
    this.lastAction = `View: ${this.selectedRow?.name}`;
    this.menuVisible = false;
  }

  @action
  handleEdit() {
    this.lastAction = `Edit: ${this.selectedRow?.name}`;
    this.menuVisible = false;
  }

  @action
  handleDelete() {
    this.lastAction = `Delete: ${this.selectedRow?.name}`;
    this.menuVisible = false;
  }

  <template>
    <p class="text-sm fg-text-secondary mb-2">
      Right-click on any row to open a context menu.
    </p>
    {{#if this.lastAction}}
      <p class="mgt1 mgb2 text-sm">Last action:
        <strong>{{this.lastAction}}</strong></p>
    {{/if}}

    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @onContextMenu={{this.onContextMenu}}
    />

    {{#if this.menuVisible}}
      <div
        class="datatable-context-menu"
        role="menu"
        aria-label="Row actions"
        style={{this.menuStyle}}
      >
        <button
          type="button"
          role="menuitem"
          style="display:flex;align-items:center;gap:8px;width:100%;padding:8px 16px;background:none;border:none;cursor:pointer;font-size:0.875rem;color:inherit;"
          {{on "click" this.handleView}}
        >
          <i class="bs-icons1 eye s14" aria-hidden="true"></i>
          View
        </button>
        <button
          type="button"
          role="menuitem"
          style="display:flex;align-items:center;gap:8px;width:100%;padding:8px 16px;background:none;border:none;cursor:pointer;font-size:0.875rem;color:inherit;"
          {{on "click" this.handleEdit}}
        >
          <i class="bs-icons1 pencil s14" aria-hidden="true"></i>
          Edit
        </button>
        <hr style="margin:4px 0;border:none;border-top:1px solid var(--uls-default-border-color,#e2e8f0);" />
        <button
          type="button"
          role="menuitem"
          style="display:flex;align-items:center;gap:8px;width:100%;padding:8px 16px;background:none;border:none;cursor:pointer;font-size:0.875rem;color:var(--red-fg-color,#CF1322);"
          {{on "click" this.handleDelete}}
        >
          <i class="bs-icons1 trash s14" aria-hidden="true"></i>
          Delete
        </button>
      </div>
      <div
        style="position:fixed;inset:0;z-index:1999;"
        role="presentation"
        {{on "click" this.closeMenu}}
      ></div>
    {{/if}}
  </template>
}
