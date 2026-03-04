export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable } from 'ulx-components';

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

export default class DemoTableCellSelection extends Component {
  products = [ /* data array */ ];
  columns = columns;

  @tracked selectedCell = null;

  @action
  onSelectionChange(cell) {
    this.selectedCell = cell;
  }

  <template>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @selectionMode="cell"
      @selection={{this.selectedCell}}
      @onSelectionChange={{this.onSelectionChange}}
    />
  </template>
}
`;
