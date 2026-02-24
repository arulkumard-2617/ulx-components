export default `
import Component from '@glimmer/component';
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
];

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

export default class DemoTableGridLines extends Component {
  products = PRODUCTS;
  columns = columns;

  <template>
    <div class="ulx-grid cols-1 gap-3">
      <div>
        <h4 class="h5 mb-2">Striped Rows</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.columns}}
          @dataKey="id"
          @stripedRows={{true}}
        />
      </div>
      <div class="mgt3">
        <h4 class="h5 mb-2">Grid Lines</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.columns}}
          @dataKey="id"
          @showGridlines={{true}}
        />
      </div>
      <div class="mgt3">
        <h4 class="h5 mb-2">Striped + Grid Lines</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.columns}}
          @dataKey="id"
          @stripedRows={{true}}
          @showGridlines={{true}}
        />
      </div>
    </div>
  </template>
}

`;
