export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
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
  {
    id: 5,
    code: 'h456wer53',
    name: 'Bracelet',
    category: 'Accessories',
    price: 15,
  },
  {
    id: 6,
    code: 'mbvjkgc55',
    name: 'Brown Purse',
    category: 'Accessories',
    price: 120,
  },
];

const columns = [
  { field: 'code', header: 'Code', sortable: true },
  { field: 'name', header: 'Name', sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'price', header: 'Price ($)', sortable: true },
];

export default class DemoTablePreSort extends Component {
  products = PRODUCTS;
  columns = columns;

  @tracked sortField = 'price';
  @tracked sortOrder = 'desc';

  @action
  handleSort({ field, order }) {
    if (field != null && order != null) {
      this.sortField = field;
      this.sortOrder = order;
    } else {
      this.sortField = null;
      this.sortOrder = 'asc';
    }
  }

  <template>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @sortField={{this.sortField}}
      @sortOrder={{this.sortOrder}}
      @onSort={{this.handleSort}}
    />
  </template>
}

`;
