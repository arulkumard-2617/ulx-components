export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable } from 'ulx-components';

const outerCols = [
  { expander: true },
  { field: 'name',    header: 'Name'    },
  { field: 'country', header: 'Country' },
  { field: 'status',  header: 'Status'  },
];

const innerCols = [
  { field: 'productCode', header: 'Code'   },
  { field: 'amount',      header: 'Amount' },
  { field: 'status',      header: 'Status' },
];

export default class ExpansionDemo extends Component {
  @tracked expandedRows = {};

  @action
  onRowToggle({ data }) {
    this.expandedRows = data;
  }

  <template>
    <UlxTable
      @value={{this.customers}}
      @columns={{outerCols}}
      @dataKey="id"
      @expandedRows={{this.expandedRows}}
      @onRowToggle={{this.onRowToggle}}
    >
      <:rowExpansion as |row|>
        <div class="pd3">
          <UlxTable @value={{row.orders}} @columns={{innerCols}} @dataKey="id" />
        </div>
      </:rowExpansion>
    </UlxTable>
  </template>
}
`;
