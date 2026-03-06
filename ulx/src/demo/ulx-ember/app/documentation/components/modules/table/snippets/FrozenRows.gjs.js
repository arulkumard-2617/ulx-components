export default `
import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const FROZEN_ROWS = [
  { id: 0, name: 'Average', country: '—', company: '—', status: '—', date: '—' },
];

const DATA_ROWS = [ /* data array */ ];

const columns = [
  { field: 'name', header: 'Name', style: 'min-width: 140px' },
  { field: 'country', header: 'Country', style: 'min-width: 120px' },
  { field: 'company', header: 'Company', style: 'min-width: 200px' },
  { field: 'status', header: 'Status', style: 'min-width: 120px' },
  { field: 'date', header: 'Date', style: 'min-width: 110px' },
];

export default class DemoTableFrozenRows extends Component {
  frozenRows = FROZEN_ROWS;
  dataRows = DATA_ROWS;
  columns = columns;

  <template>
    <UlxTable
      @value={{this.dataRows}}
      @frozenValue={{this.frozenRows}}
      @columns={{this.columns}}
      @dataKey="id"
      @scrollable={{true}}
      @scrollHeight="300px"
    />
  </template>
}
`;
