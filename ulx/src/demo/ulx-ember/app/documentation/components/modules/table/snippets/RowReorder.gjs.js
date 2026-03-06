export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable } from 'ulx-components';

const initProducts = () => [
  { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', price: 65 },
  { id: 2, code: 'nvklal433', name: 'Black Watch', category: 'Accessories', price: 72 },
  { id: 3, code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', price: 79 },
  { id: 4, code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', price: 29 },
  { id: 5, code: 'h456wer53', name: 'Bracelet', category: 'Accessories', price: 15 },
];

const columns = [
  { rowReorder: true },
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

export default class DemoTableRowReorder extends Component {
  @tracked products = initProducts();
  columns = columns;

  @action
  onRowReorder({ value }) {
    this.products = value;
  }

  <template>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @onRowReorder={{this.onRowReorder}}
    />
  </template>
}
`;
