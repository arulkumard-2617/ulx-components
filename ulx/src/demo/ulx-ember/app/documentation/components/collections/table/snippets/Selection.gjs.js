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
];

const dataCols = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

const checkboxCols = [{ selectionMode: 'multiple' }, ...dataCols];

const radioCols = [{ selectionMode: 'single' }, ...dataCols];

export default class DemoTableSelection extends Component {
  products = PRODUCTS;

  @tracked singleSelection = null;
  @tracked multipleSelection = [];
  @tracked checkboxSelection = [];
  @tracked radioSelection = [];

  dataCols = dataCols;
  checkboxCols = checkboxCols;
  radioCols = radioCols;

  @action
  onSingleSelect(row) {
    this.singleSelection = row;
  }

  @action
  onMultipleSelect(selection) {
    this.multipleSelection = selection;
  }

  @action
  onCheckboxSelect(selection) {
    this.checkboxSelection = selection;
  }

  @action
  onRadioSelect(selection) {
    this.radioSelection = Array.isArray(selection) ? selection : [selection];
  }

  <template>
    <div>
      <div>
        <h4 class="h5 mb-2">Single Row Selection</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.dataCols}}
          @dataKey="id"
          @selectionMode="single"
          @selection={{this.singleSelection}}
          @onSelectionChange={{this.onSingleSelect}}
          @showManageColumns={{true}}
        />
        {{#if this.singleSelection}}
          <p class="mt-2 text-sm">Selected:
            <strong>{{this.singleSelection.name}}</strong></p>
        {{/if}}
      </div>

      <div class="mt-8">
        <h4 class="h5 mb-2">Multiple Row Selection</h4>

        <UlxTable
          @value={{this.products}}
          @columns={{this.dataCols}}
          @dataKey="id"
          @selectionMode="multiple"
          @selection={{this.multipleSelection}}
          @onSelectionChange={{this.onMultipleSelect}}
          @showManageColumns={{true}}
        />
        <p class="mgt2 text-sm">Selected:
          <strong>{{this.multipleSelection.length}}</strong>
          row(s)</p>
      </div>

      <div class="mt-8">
        <h4 class="h5 mb-2">Checkbox Selection</h4>

        <UlxTable
          @value={{this.products}}
          @columns={{this.checkboxCols}}
          @dataKey="id"
          @selectionMode="checkbox"
          @selection={{this.checkboxSelection}}
          @onSelectionChange={{this.onCheckboxSelect}}
          @showManageColumns={{true}}
        />
        <p class="mt-2 text-sm">Selected:
          <strong>{{this.checkboxSelection.length}}</strong>
          row(s)</p>
      </div>

      <div class="mt-8">
        <h4 class="h5 mb-2">Radio Button Selection</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.radioCols}}
          @dataKey="id"
          @selectionMode="radio"
          @selection={{this.radioSelection}}
          @onSelectionChange={{this.onRadioSelect}}
          @showManageColumns={{true}}
        />
        {{#if this.radioSelection.length}}
          <p class="mgt2 text-sm">Selected:
            <strong>{{this.radioSelection.[0].name}}</strong></p>
        {{/if}}
      </div>
    </div>
  </template>
}

`;
