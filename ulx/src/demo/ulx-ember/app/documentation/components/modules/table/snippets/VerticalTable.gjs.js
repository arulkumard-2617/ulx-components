export default `import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const products = [
  { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', price: '$65.00', status: 'In Stock' },
  { id: 2, code: 'nvklal433', name: 'Black Watch',  category: 'Accessories', price: '$72.00', status: 'In Stock' },
  { id: 3, code: 'zz21cz3c1', name: 'Blue Band',    category: 'Fitness',     price: '$79.00', status: 'Low Stock' },
];

const columns = [
  { field: 'code',     header: 'Code' },
  { field: 'name',     header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price',    header: 'Price' },
  { field: 'status',   header: 'Status' },
];

export default class DemoTableVertical extends Component {
  products = products;
  columns  = columns;

  <template>
    {{! Basic vertical table — no column headers }}
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @layout="vertical"
    />

    {{! With column headers driven by a data field }}
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @layout="vertical"
      @verticalLabelField="name"
    />
  </template>
}
`;
