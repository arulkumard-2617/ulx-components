import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable, UlxSelectButton } from 'ulx-components';

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
  sizeOptions = [
    { label: 'Extra Small', value: 'xs-size' },
    { label: 'Small', value: 's-size' },
    { label: 'Medium', value: 'm-size' },
    { label: 'Large', value: 'l-size' },
  ];

  @tracked selectedSize = 's-size';

  @action
  handleSizeChange(value) {
    this.selectedSize = value;
  }

  <template>
    <div class="flex flex-col gap-5">
      <UlxSelectButton
        @options={{this.sizeOptions}}
        @value={{this.selectedSize}}
        @onChange={{this.handleSizeChange}}
        @size="m-size"
        @variant="secondary"
      />

      <UlxTable
        @value={{this.products}}
        @columns={{this.columns}}
        @dataKey="id"
        @size={{this.selectedSize}}
      />
    </div>
  </template>
}
