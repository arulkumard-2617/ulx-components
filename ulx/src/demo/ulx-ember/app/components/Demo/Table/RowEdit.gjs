import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable, UlxInput } from 'ulx-components';

const initProducts = () => [
  {
    id: 1,
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    price: 65,
  },
  {
    id: 2,
    code: 'nvklal433',
    name: 'Black Watch',
    category: 'Accessories',
    price: 72,
  },
  {
    id: 3,
    code: 'zz21cz3c1',
    name: 'Blue Band',
    category: 'Fitness',
    price: 79,
  },
  {
    id: 4,
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    category: 'Clothing',
    price: 29,
  },
];

class NameEditor extends Component {
  @action
  handleInput(value) {
    const { row, field, onChange } = this.args;
    onChange?.({ row, field, value });
  }
  <template>
    <UlxInput
      @value={{@value}}
      @size="s-size"
      @onInput={{this.handleInput}}
      aria-label="Edit {{@field}}"
    />
  </template>
}

class PriceEditor extends Component {
  @action
  handleInput(inputValue) {
    const { row, field, onChange } = this.args;
    const value = Number(inputValue);
    onChange?.({ row, field, value });
  }
  <template>
    <UlxInput
      @value={{@value}}
      @type="number"
      @size="s-size"
      @onInput={{this.handleInput}}
      aria-label="Edit price"
    />
  </template>
}

export default class DemoTableRowEdit extends Component {
  @tracked products = initProducts();
  @tracked editingRows = [];
  @tracked _originals = {};

  get columns() {
    return [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name', editor: NameEditor },
      { field: 'category', header: 'Category', editor: NameEditor },
      { field: 'price', header: 'Price', editor: PriceEditor },
      { rowEditor: true },
    ];
  }

  @action
  onRowEditInit({ row }) {
    this.editingRows = [...this.editingRows, row];
    this._originals = { ...this._originals, [row.id]: { ...row } };
  }


  @action
  onRowEditSave({ row }) {
    this.editingRows = this.editingRows.filter((r) => r.id !== row.id);
  }

  @action
  onRowEditCancel({ row }) {
    const orig = this._originals?.[row.id];
    if (orig) {
      this.products = this.products.map((p) => (p.id === row.id ? { ...orig } : p));
    }
    this.editingRows = this.editingRows.filter((r) => r.id !== row.id);
  }

  @action
  onCellEditComplete({ row, field, value }) {
    this.products = this.products.map((p) =>
      p === row ? { ...p, [field]: value } : p
    );
  }

  <template>
    <p class="text-sm fg-text-secondary mb-2">
      Click the pencil icon to edit a row. Click the checkmark to save, or X to
      cancel.
    </p>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @editMode="row"
      @editingRows={{this.editingRows}}
      @onRowEditInit={{this.onRowEditInit}}
      @onRowEditSave={{this.onRowEditSave}}
      @onRowEditCancel={{this.onRowEditCancel}}
      @onCellEditComplete={{this.onCellEditComplete}}
    />
  </template>
}
