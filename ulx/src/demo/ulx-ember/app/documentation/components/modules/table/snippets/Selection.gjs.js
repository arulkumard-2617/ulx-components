export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [ /* data array */ ];

const dataCols = [
  { field: 'code',     header: 'Code' },
  { field: 'name',     header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price',    header: 'Price ($)' },
];

const checkboxCols = [{ selectionMode: 'multiple' }, ...dataCols];
const radioCols    = [{ selectionMode: 'single' },   ...dataCols];

export default class DemoTableSelection extends Component {
  products = PRODUCTS;

  @tracked singleSelection    = null;
  @tracked multipleSelection  = [];
  @tracked checkboxSelection  = [];
  @tracked radioSelection     = [];

  dataCols     = dataCols;
  checkboxCols = checkboxCols;
  radioCols    = radioCols;

  @action onSingleSelect(row)       { this.singleSelection = row; }
  @action onMultipleSelect(sel)     { this.multipleSelection = sel; }
  @action onCheckboxSelect(sel)     { this.checkboxSelection = sel; }
  @action onRadioSelect(sel)        { this.radioSelection = Array.isArray(sel) ? sel : [sel]; }

  <template>
    <div>
      <div>
        <h4 class="h5 mb-2">Single Row Selection</h4>
        <UlxTable @value={{this.products}} @columns={{this.dataCols}} @dataKey="id"
          @selectionMode="single" @selection={{this.singleSelection}} @onSelectionChange={{this.onSingleSelect}} />
      </div>

      <div class="mgt3">
        <h4 class="h5 mb-2">Multiple Row Selection</h4>
        <p class="text-sm fg-text-secondary mb-2">Hold Ctrl/Cmd and click to multi-select. Shift-click to range-select.</p>
        <UlxTable @value={{this.products}} @columns={{this.dataCols}} @dataKey="id"
          @selectionMode="multiple" @selection={{this.multipleSelection}} @onSelectionChange={{this.onMultipleSelect}} />
      </div>

      <div class="mgt3">
        <h4 class="h5 mb-2">Checkbox Selection</h4>
        <UlxTable @value={{this.products}} @columns={{this.checkboxCols}} @dataKey="id"
          @selectionMode="checkbox" @selection={{this.checkboxSelection}} @onSelectionChange={{this.onCheckboxSelect}} />
      </div>

      <div class="mgt3">
        <h4 class="h5 mb-2">Radio Button Selection</h4>
        <UlxTable @value={{this.products}} @columns={{this.radioCols}} @dataKey="id"
          @selectionMode="radio" @selection={{this.radioSelection}} @onSelectionChange={{this.onRadioSelect}} />
      </div>
    </div>
  </template>
}
`;
