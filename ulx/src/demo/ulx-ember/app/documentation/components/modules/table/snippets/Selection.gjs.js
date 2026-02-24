export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable } from 'ulx-components';

const checkboxCols = [
  { selectionMode: 'multiple' },
  { field: 'code',     header: 'Code'     },
  { field: 'name',     header: 'Name'     },
  { field: 'category', header: 'Category' },
];

export default class SelectionDemo extends Component {
  @tracked selection = [];
  checkboxCols = checkboxCols;

  @action
  onSelect(selection) {
    this.selection = selection;
  }

  <template>
    <UlxTable
      @value={{this.products}}
      @columns={{this.checkboxCols}}
      @dataKey="id"
      @selectionMode="checkbox"
      @selection={{this.selection}}
      @onSelectionChange={{this.onSelect}}
    />
  </template>
}
`;
