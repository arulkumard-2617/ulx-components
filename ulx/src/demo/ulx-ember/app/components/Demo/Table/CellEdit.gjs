import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable, UlxInput } from 'ulx-components';

const initProducts = () => [
  { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', price: 65 },
  { id: 2, code: 'nvklal433', name: 'Black Watch', category: 'Accessories', price: 72 },
  { id: 3, code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', price: 79 },
  { id: 4, code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', price: 29 },
  { id: 5, code: 'h456wer53', name: 'Bracelet', category: 'Accessories', price: 15 },
];

class TextEditor extends Component {
  @tracked localValue = null;

  get displayValue() {
    if (this.localValue !== null) return this.localValue;
    return this.args.value ?? '';
  }

  @action
  handleInput(event) {
    this.localValue = event.target.value;
  }

  @action
  commitEdit() {
    const value = this.localValue !== null ? this.localValue : (this.args.value ?? '');
    this.localValue = null;
    this.args.onChange?.({ row: this.args.row, field: this.args.field, value });
  }

  @action
  handleKeydown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.commitEdit();
    }
    if (event.key === 'Escape') {
      this.localValue = null;
      event.target.blur();
    }
  }
  <template>
    <UlxInput
      @value={{this.displayValue}}
      @size="s-size"
      @onInput={{this.handleInput}}
      @onBlur={{this.commitEdit}}
      @onKeydown={{this.handleKeydown}}
      aria-label="Edit {{@field}}"
    />
  </template>
}

class PriceEditor extends Component {
  @tracked localValue = null;

  get displayValue() {
    if (this.localValue !== null) return this.localValue;
    const v = this.args.value;
    return v !== undefined && v !== null ? String(v) : '';
  }

  @action
  handleInput(event) {
    this.localValue = event.target.value;
  }

  @action
  commitEdit() {
    const raw = this.localValue !== null ? this.localValue : (this.args.value ?? '');
    this.localValue = null;
    const value = raw === '' ? 0 : Number(raw);
    this.args.onChange?.({ row: this.args.row, field: this.args.field, value });
  }

  @action
  handleKeydown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.commitEdit();
    }
    if (event.key === 'Escape') {
      this.localValue = null;
      event.target.blur();
    }
  }
  <template>
    <UlxInput
      @value={{this.displayValue}}
      @type="number"
      @size="s-size"
      @onInput={{this.handleInput}}
      @onBlur={{this.commitEdit}}
      @onKeydown={{this.handleKeydown}}
      aria-label="Edit price"
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
    this.products = this.products.map((p) =>
      p === row ? { ...p, [field]: value } : p
    );
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
