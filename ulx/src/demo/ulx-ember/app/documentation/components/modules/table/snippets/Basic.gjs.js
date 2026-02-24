export default `
import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch',  category: 'Accessories', price: 65 },
  { id: 2, code: 'nvklal433', name: 'Black Watch',    category: 'Accessories', price: 72 },
  { id: 3, code: 'zz21cz3c1', name: 'Blue Band',      category: 'Fitness',     price: 79 },
];

const columns = [
  { field: 'code',     header: 'Code'      },
  { field: 'name',     header: 'Name'      },
  { field: 'category', header: 'Category'  },
  { field: 'price',    header: 'Price ($)' },
];

export default class BasicTableDemo extends Component {
  products = PRODUCTS;
  columns = columns;

  <template>
    <UlxTable @value={{this.products}} @columns={{this.columns}} @dataKey="id" />
  </template>
}
`;
