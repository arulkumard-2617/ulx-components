import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  {
    id: 1,
    name: 'Bamboo Watch',
    category: 'Accessories',
    price: 65,
    status: 'INSTOCK',
  },
  {
    id: 2,
    name: 'Black Watch',
    category: 'Accessories',
    price: 72,
    status: 'INSTOCK',
  },
  {
    id: 3,
    name: 'Blue Band',
    category: 'Fitness',
    price: 79,
    status: 'LOWSTOCK',
  },
  {
    id: 4,
    name: 'Blue T-Shirt',
    category: 'Clothing',
    price: 29,
    status: 'INSTOCK',
  },
  {
    id: 5,
    name: 'Bracelet',
    category: 'Accessories',
    price: 15,
    status: 'INSTOCK',
  },
  {
    id: 6,
    name: 'Brown Purse',
    category: 'Accessories',
    price: 120,
    status: 'OUTOFSTOCK',
  },
  {
    id: 7,
    name: 'Chakra Bracelet',
    category: 'Accessories',
    price: 32,
    status: 'LOWSTOCK',
  },
  {
    id: 8,
    name: 'Galaxy Earrings',
    category: 'Accessories',
    price: 34,
    status: 'INSTOCK',
  },
];

const rowFilterCols = [
  {
    field: 'name',
    header: 'Name',
    filter: true,
    filterPlaceholder: 'Search name',
  },
  {
    field: 'category',
    header: 'Category',
    filter: true,
    filterPlaceholder: 'Search category',
  },
  {
    field: 'price',
    header: 'Price',
    filter: true,
    filterPlaceholder: 'Search price',
  },
  {
    field: 'status',
    header: 'Status',
    filter: true,
    filterPlaceholder: 'Search status',
  },
];

const menuFilterCols = [
  { field: 'name', header: 'Name', filter: true },
  { field: 'category', header: 'Category', filter: true },
  { field: 'price', header: 'Price', filter: true },
  { field: 'status', header: 'Status', filter: true },
];

const globalFilterCols = [
  { field: 'name',     header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price',    header: 'Price' },
  { field: 'status',   header: 'Status' },
];

const globalFilterFields = ['name', 'category', 'price', 'status'];

export default class DemoTableFilter extends Component {
  products = PRODUCTS;
  rowFilterCols = rowFilterCols;
  menuFilterCols = menuFilterCols;
  globalFilterCols = globalFilterCols;
  globalFilterFields = globalFilterFields;

  <template>
    <div>
      <div>
        <h4 class="h5 mb-2">Global Search</h4>
        <p class="text-sm fg-text-secondary mb-2">Use
          <code>@showGlobalFilter</code>
          for a built-in search bar. Provide
          <code>@globalFilterFields</code>
          to scope which fields are searched.</p>
        <UlxTable
          @value={{this.products}}
          @columns={{this.globalFilterCols}}
          @dataKey="id"
          @showGlobalFilter={{true}}
          @globalFilterFields={{this.globalFilterFields}}
          @globalFilterPlaceholder="Search products…"
        />
      </div>
      <div class="mgt3">
        <h4 class="h5 mb-2">Row Filter</h4>
        <p class="text-sm fg-text-secondary mb-2">Filter inputs appear in
          flex-col headers.</p>
        <UlxTable
          @value={{this.products}}
          @columns={{this.rowFilterCols}}
          @dataKey="id"
          @filterDisplay="row"
        />
      </div>
      <div class="mgt3">
        <h4 class="h5 mb-2">Menu Filter</h4>
        <p class="text-sm fg-text-secondary mb-2">Click the filter icon in
          flex-col headers to open filter menu.</p>
        <UlxTable
          @value={{this.products}}
          @columns={{this.menuFilterCols}}
          @dataKey="id"
          @filterDisplay="menu"
        />
      </div>
    </div>
  </template>
}
