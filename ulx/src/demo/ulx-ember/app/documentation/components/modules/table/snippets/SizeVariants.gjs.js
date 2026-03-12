export default `
import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  { id: 1, name: 'Bamboo Watch', category: 'Accessories', price: 65 },
  { id: 2, name: 'Black Watch', category: 'Accessories', price: 72 },
  { id: 3, name: 'Blue Band', category: 'Fitness', price: 79 },
];

const columns = [
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

export default class DemoTableSizeVariants extends Component {
  products = PRODUCTS;
  columns = columns;

  <template>
    <div>
      <div>
        <h4 class="h5 mb-2">Extra Small (xs-size)</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.columns}}
          @dataKey="id"
          @size="xs-size"
        />
      </div>
      <div>
        <h4 class="h5 mb-2">Small — default (s-size)</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.columns}}
          @dataKey="id"
          @size="s-size"
        />
      </div>
      <div>
        <h4 class="h5 mb-2">Medium (m-size)</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.columns}}
          @dataKey="id"
          @size="m-size"
        />
      </div>
      <div>
        <h4 class="h5 mb-2">Large (l-size)</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.columns}}
          @dataKey="id"
          @size="l-size"
        />
      </div>
    </div>
  </template>
}

`;
