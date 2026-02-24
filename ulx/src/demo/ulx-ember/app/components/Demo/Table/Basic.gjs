import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: 24, price: 65, status: 'INSTOCK' },
  { id: 2, code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: 61, price: 72, status: 'INSTOCK' },
  { id: 3, code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', quantity: 2, price: 79, status: 'LOWSTOCK' },
  { id: 4, code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', quantity: 25, price: 29, status: 'INSTOCK' },
  { id: 5, code: 'h456wer53', name: 'Bracelet', category: 'Accessories', quantity: 73, price: 15, status: 'INSTOCK' },
];

const columns = [
  { field: 'code',     header: 'Code' },
  { field: 'name',     header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Qty' },
  { field: 'price',    header: 'Price ($)' },
  { field: 'status',   header: 'Status' },
];

export default class DemoTableBasic extends Component {
  products = PRODUCTS;
  columns = columns;

  <template>
    <UlxTable @value={{this.products}} @columns={{this.columns}} @dataKey="id" />
  </template>
}
