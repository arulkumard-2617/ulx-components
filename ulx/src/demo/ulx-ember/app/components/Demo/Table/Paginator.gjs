import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable } from 'ulx-components';

const generateProducts = () =>
  Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    code: `PROD${String(i + 1).padStart(4, '0')}`,
    name: `Product ${i + 1}`,
    category: ['Accessories', 'Fitness', 'Clothing', 'Electronics'][i % 4],
    price: Math.round(Math.random() * 200 + 10),
    quantity: Math.floor(Math.random() * 100),
  }));

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
  { field: 'quantity', header: 'Qty' },
];

export default class DemoTablePaginator extends Component {
  products = generateProducts();
  columns = columns;
  rowsPerPageOptions = [10, 25, 50];

  <template>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @paginator={{true}}
      @rowsPerPageOptions={{this.rowsPerPageOptions}}
      @sortMode="single"
    />
  </template>
}
