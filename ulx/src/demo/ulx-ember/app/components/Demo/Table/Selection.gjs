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
];

const singleCols = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

const checkboxCols = [
  { selectionMode: 'multiple' },
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

export default class DemoTableSelection extends Component {
  products = PRODUCTS;

  @tracked singleSelection = null;
  @tracked multiSelection = [];

  singleCols = singleCols;
  checkboxCols = checkboxCols;

  @action
  onSingleSelect(row) {
    this.singleSelection = row;
  }

  @action
  onMultiSelect(selection) {
    this.multiSelection = selection;
  }

  <template>
    <div class="ulx-grid cols-1 gap-3">
      <div>
        <h4 class="h5 mb-2">Single Row Selection</h4>
        <p class="text-sm fg-text-secondary mb-2">Click a row to select it.</p>
        <UlxTable
          @value={{this.products}}
          @columns={{this.singleCols}}
          @dataKey="id"
          @selectionMode="single"
          @selection={{this.singleSelection}}
          @onSelectionChange={{this.onSingleSelect}}
        />
        {{#if this.singleSelection}}
          <p class="mgt2 text-sm">Selected:
            <strong>{{this.singleSelection.name}}</strong></p>
        {{/if}}
      </div>

      <div class="mgt3">
        <h4 class="h5 mb-2">Checkbox Selection</h4>
        <p class="text-sm fg-text-secondary mb-2">Use checkboxes to select
          multiple rows.</p>
        <UlxTable
          @value={{this.products}}
          @columns={{this.checkboxCols}}
          @dataKey="id"
          @selectionMode="checkbox"
          @selection={{this.multiSelection}}
          @onSelectionChange={{this.onMultiSelect}}
        />
        <p class="mgt2 text-sm">Selected:
          <strong>{{this.multiSelection.length}}</strong>
          row(s)</p>
      </div>
    </div>
  </template>
}
