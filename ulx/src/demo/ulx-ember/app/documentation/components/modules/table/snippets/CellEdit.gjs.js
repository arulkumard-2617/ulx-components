export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxTable } from 'ulx-components';

const initProducts = () => [
  { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', price: 65 },
  { id: 2, code: 'nvklal433', name: 'Black Watch', category: 'Accessories', price: 72 },
  { id: 3, code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', price: 79 },
  { id: 4, code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', price: 29 },
  { id: 5, code: 'h456wer53', name: 'Bracelet', category: 'Accessories', price: 15 },
];

class TextEditor extends Component {
  @action
  handleInput(event) {
    this.args.onChange?.({ row: this.args.row, field: this.args.field, value: event.target.value });
  }
  <template>
    <input
      type="text"
      class="uls-input s-size w-100"
      value={{@value}}
      {{on "input" this.handleInput}}
      aria-label="Edit {{@field}}"
    />
  </template>
}

class PriceEditor extends Component {
  @action
  handleInput(event) {
    this.args.onChange?.({ row: this.args.row, field: this.args.field, value: Number(event.target.value) });
  }
  <template>
    <input
      type="number"
      class="uls-input s-size"
      value={{@value}}
      {{on "input" this.handleInput}}
      aria-label="Edit price"
      style="width: 90px"
    />
  </template>
}

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name', editor: TextEditor },
  { field: 'category', header: 'Category', editor: TextEditor },
  { field: 'price', header: 'Price ($)', editor: PriceEditor },
];

export default class DemoTableCellEdit extends Component {
  columns = columns;

  @tracked products = initProducts();

  @action
  onCellEditComplete({ row, field, value }) {
    row[field] = value;
    this.products = [...this.products];
  }

  <template>
    <p class="text-sm fg-text-secondary mb-2">
      Click any editable cell to activate inline editing. Press
      <kbd>Enter</kbd>
      or click outside to save,
      <kbd>Escape</kbd>
      to cancel.
    </p>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @editMode="cell"
      @onCellEditComplete={{this.onCellEditComplete}}
    />
  </template>
}

`;
