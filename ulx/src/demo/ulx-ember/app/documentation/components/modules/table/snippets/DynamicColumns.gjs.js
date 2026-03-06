export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { UlxTable, UlxButton } from 'ulx-components';

const ALL_COLUMNS = [
  { field: 'code',     header: 'Code' },
  { field: 'name',     header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price',    header: 'Price ($)' },
  { field: 'quantity', header: 'Qty' },
  { field: 'status',   header: 'Status' },
];

export default class DemoTableDynamicColumns extends Component {
  products   = [ /* data */ ];
  allColumns = ALL_COLUMNS;

  @tracked selectedFields = ['code', 'name', 'category', 'quantity'];

  get selectedFieldsList() {
    return Array.isArray(this.selectedFields) ? this.selectedFields : [];
  }

  get columns() {
    return this.allColumns.filter((c) => this.selectedFieldsList.includes(c.field));
  }

  @action
  isFieldSelected(field) {
    return this.selectedFieldsList.indexOf(field) !== -1;
  }

  @action
  toggleField(field) {
    const fields = this.selectedFieldsList.slice();
    const idx = fields.indexOf(field);
    if (idx === -1) {
      fields.push(field);
    } else {
      fields.splice(idx, 1);
    }
    this.selectedFields = fields;
  }

  <template>
    <div class="uls-column row gp2 mgb2" style="flex-wrap: wrap;">
      {{#each this.allColumns as |col|}}
        <UlxButton
          @label={{col.header}}
          @variant={{if (this.isFieldSelected col.field) "primary" "secondary"}}
          @size="s-size"
          @onClick={{fn this.toggleField col.field}}
        />
      {{/each}}
    </div>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
    />
  </template>
}
`;
