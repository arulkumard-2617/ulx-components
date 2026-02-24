import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxTable } from 'ulx-components';

const initProducts = () => [
  { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch',  category: 'Accessories', price: 65  },
  { id: 2, code: 'nvklal433', name: 'Black Watch',    category: 'Accessories', price: 72  },
  { id: 3, code: 'zz21cz3c1', name: 'Blue Band',      category: 'Fitness',     price: 79  },
  { id: 4, code: '244wgerg2', name: 'Blue T-Shirt',   category: 'Clothing',    price: 29  },
];

class NameEditor extends Component {
  @action
  handleInput(event) {
    const { row, field, onChange } = this.args;
    onChange?.({ row, field, value: event.target.value });
  }
  <template>
    <input
      type="text"
      class="uls-input s-size"
      value={{@value}}
      {{on "input" this.handleInput}}
      aria-label="Edit {{@field}}"
    />
  </template>
}

class PriceEditor extends Component {
  @action
  handleInput(event) {
    const { row, field, onChange } = this.args;
    const value = Number(event.target.value);
    onChange?.({ row, field, value });
  }
  <template>
    <input
      type="number"
      class="uls-input s-size"
      value={{@value}}
      {{on "input" this.handleInput}}
      aria-label="Edit price"
      style="width: 80px"
    />
  </template>
}

export default class DemoTableRowEdit extends Component {
  @tracked products = initProducts();
  @tracked editingRows = [];

  get columns() {
    return [
      { field: 'code',     header: 'Code'      },
      { field: 'name',     header: 'Name',     editor: NameEditor  },
      { field: 'category', header: 'Category', editor: NameEditor  },
      { field: 'price',    header: 'Price',    editor: PriceEditor },
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
    if (orig) Object.assign(row, orig);
    this.editingRows = this.editingRows.filter((r) => r.id !== row.id);
  }

  @action
  onCellEditComplete({ row, field, value }) {
    row[field] = value;
    this.products = [...this.products];
  }

  <template>
    <p class="text-sm fg-text-secondary mgb2">
      Click the pencil icon to edit a row. Click the checkmark to save, or X to cancel.
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
