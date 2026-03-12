export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { UlxTable, UlxButton } from 'ulx-components';

const PRODUCTS = [
  { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', price: 65, quantity: 24, status: 'INSTOCK' },
  { id: 2, code: 'nvklal433', name: 'Black Watch', category: 'Accessories', price: 72, quantity: 61, status: 'INSTOCK' },
  { id: 3, code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', price: 79, quantity: 2, status: 'LOWSTOCK' },
  { id: 4, code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', price: 29, quantity: 25, status: 'INSTOCK' },
  { id: 5, code: 'h456wer53', name: 'Bracelet', category: 'Accessories', price: 15, quantity: 73, status: 'INSTOCK' },
  { id: 6, code: 'av2231fwg', name: 'Brown Purse', category: 'Accessories', price: 120, quantity: 0, status: 'OUTOFSTOCK' },
];

const ALL_COLUMNS = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
  { field: 'quantity', header: 'Qty' },
  { field: 'status', header: 'Status' },
];

export default class DemoTableDynamicColumns extends Component {
  products = PRODUCTS;
  allColumns = ALL_COLUMNS;

  @tracked selectedFields = ['code', 'name', 'category', 'quantity'];

  get selectedFieldsList() {
    return Array.isArray(this.selectedFields) ? this.selectedFields : [];
  }

  get columns() {
    return this.allColumns.filter((c) => this.selectedFieldsList.includes(c.field));
  }

  @action
  isFieldSelected(field) {
    return this.selectedFieldsList.indexOf(field) !== -1;
  }

  @action
  toggleField(field) {
    const fields = this.selectedFieldsList.slice();
    const idx = fields.indexOf(field);
    if (idx === -1) {
      fields.push(field);
    } else {
      fields.splice(idx, 1);
    }
    this.selectedFields = fields;
  }

  <template>
    <div class="uls-column row gp2 mgb2" style="flex-wrap: wrap;">
      {{#each this.allColumns as |col|}}
        <UlxButton
          @label={{col.header}}
          @variant={{if (this.isFieldSelected col.field) "primary" "secondary"}}
          @size="s-size"
          @onClick={{fn this.toggleField col.field}}
        />
      {{/each}}
    </div>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
    />
  </template>
}

`;
