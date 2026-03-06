import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
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

export default class DemoTableCellSelection extends Component {
  products = PRODUCTS;
  columns = columns;

  @tracked selectedCell = null;

  @action
  onSelectionChange(cell) {
    this.selectedCell = cell;
  }

  get selectionDisplay() {
    if (!this.selectedCell) return null;
    const { row, field } = this.selectedCell;
    return `${field}: ${row[field]}`;
  }

  <template>
    <p class="text-sm fg-text-secondary mb-2">
      Click any cell to select it. Use
      <code>@selectionMode="cell"</code>
      to enable cell-level selection.
    </p>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @selectionMode="cell"
      @selection={{this.selectedCell}}
      @onSelectionChange={{this.onSelectionChange}}
    />
    {{#if this.selectionDisplay}}
      <p class="mgt2 text-sm">Selected cell —
        <strong>{{this.selectionDisplay}}</strong></p>
    {{/if}}
  </template>
}
