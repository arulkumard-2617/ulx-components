export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable, UlxButton } from 'ulx-components';

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
];

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

export default class DemoTableLoading extends Component {
  products = PRODUCTS;
  columns = columns;

  @tracked isLoading = false;

  @action
  toggleLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  <template>
    <div class="mb-2">
      <UlxButton
        @label="Simulate Load"
        @variant="primary"
        @onClick={{this.toggleLoading}}
      />
    </div>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @loading={{this.isLoading}}
    />
  </template>
}

`;
