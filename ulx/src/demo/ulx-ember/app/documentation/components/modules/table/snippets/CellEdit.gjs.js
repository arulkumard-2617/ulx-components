export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxTable } from 'ulx-components';

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
  { field: 'code',     header: 'Code' },
  { field: 'name',     header: 'Name',      editor: TextEditor },
  { field: 'category', header: 'Category',  editor: TextEditor },
  { field: 'price',    header: 'Price ($)', editor: PriceEditor },
];

export default class DemoTableCellEdit extends Component {
  columns = columns;
  @tracked products = [ /* data */ ];

  @action
  onCellEditComplete({ row, field, value }) {
    row[field] = value;
    this.products = [...this.products];
  }

  <template>
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
