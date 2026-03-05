export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxTable } from 'ulx-components';

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

export default class DemoTableContextMenu extends Component {
  products = [ /* data array */ ];
  columns = columns;

  @tracked menuVisible = false;
  @tracked menuX = 0;
  @tracked menuY = 0;
  @tracked selectedRow = null;

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

  <template>
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
        style="position:fixed;top:{{this.menuY}}px;left:{{this.menuX}}px;z-index:2000;"
      >
        {{!-- menu items --}}
      </div>
      <div style="position:fixed;inset:0;z-index:1999;" role="presentation"
        {{on "click" this.closeMenu}}
      ></div>
    {{/if}}
  </template>
}
`;
