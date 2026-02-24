import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  {
    id: 1,
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    price: 65,
    quantity: 24,
    status: 'INSTOCK',
  },
  {
    id: 2,
    code: 'nvklal433',
    name: 'Black Watch',
    category: 'Accessories',
    price: 72,
    quantity: 61,
    status: 'INSTOCK',
  },
  {
    id: 3,
    code: 'zz21cz3c1',
    name: 'Blue Band',
    category: 'Fitness',
    price: 79,
    quantity: 2,
    status: 'LOWSTOCK',
  },
  {
    id: 4,
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    category: 'Clothing',
    price: 29,
    quantity: 25,
    status: 'INSTOCK',
  },
  {
    id: 5,
    code: 'h456wer53',
    name: 'Bracelet',
    category: 'Accessories',
    price: 15,
    quantity: 73,
    status: 'INSTOCK',
  },
];

const columns = [
  { field: 'code', header: 'Code', manageable: false },
  { field: 'name', header: 'Name', sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'price', header: 'Price', sortable: true },
  { field: 'quantity', header: 'Qty', sortable: true },
  { field: 'status', header: 'Status', sortable: true },
];

export default class DemoTableManageColumns extends Component {
  products = PRODUCTS;
  columns = columns;

  <template>
    <p class="text-sm fg-text-secondary mb-2">
      Click the settings icon in the top-right of the table header to manage
      columns. The "Code" flex-col is locked and cannot be hidden or reordered.
    </p>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @showManageColumns={{true}}
      @sortMode="single"
    />
  </template>
}
