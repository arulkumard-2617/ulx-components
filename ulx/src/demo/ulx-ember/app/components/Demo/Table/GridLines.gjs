import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable, UlxSelectButton } from 'ulx-components';

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

  viewOptions = [
    { label: 'Striped rows', value: 'striped' },
    { label: 'Grid lines', value: 'grid' },
    { label: 'Striped + Grid lines', value: 'striped-grid' },
  ];

  @tracked selectedView = 'striped';

  get isStriped() {
    return this.selectedView === 'striped' || this.selectedView === 'striped-grid';
  }

  get isGridlines() {
    return this.selectedView === 'grid' || this.selectedView === 'striped-grid';
  }

  @action
  handleViewChange(value) {
    this.selectedView = value;
  }

  <template>
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <h4 class="h5 mb-0">Row and gridline styles</h4>
        <UlxSelectButton
          @options={{this.viewOptions}}
          @value={{this.selectedView}}
          @onChange={{this.handleViewChange}}
          @size="s-size"
          @variant="secondary"
        />
      </div>

      <UlxTable
        @value={{this.products}}
        @columns={{this.columns}}
        @dataKey="id"
        @stripedRows={{this.isStriped}}
        @showGridlines={{this.isGridlines}}
      />
    </div>
  </template>
}
