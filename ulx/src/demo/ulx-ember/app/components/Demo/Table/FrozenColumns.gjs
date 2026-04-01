import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const generateRows = () =>
  Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: [
      'Alice Smith',
      'Bob Jones',
      'Carol White',
      'Dave Brown',
      'Eve Davis',
      'Frank Wilson',
      'Grace Lee',
      'Hank Moore',
    ][i],
    company: `Company ${String.fromCharCode(65 + i)}`,
    country: ['USA', 'UK', 'DE', 'FR', 'JP', 'AU', 'CA', 'BR'][i],
    col1: `Data A${i}`,
    col2: `Data B${i}`,
    col3: `Data C${i}`,
    col4: `Data D${i}`,
    balance: Math.floor(Math.random() * 10000),
  }));

const columns = [
  {
    field: 'name',
    header: 'Name',
    frozen: true,
    alignFrozen: 'left',
    frozenOffset: '0px',
    style: 'min-width: 150px',
  },
  { field: 'company', header: 'Company', style: 'min-width: 130px' },
  { field: 'country', header: 'Country', style: 'min-width: 100px' },
  { field: 'col1', header: 'flex-col 1', style: 'min-width: 120px' },
  { field: 'col2', header: 'flex-col 2', style: 'min-width: 120px' },
  { field: 'col3', header: 'flex-col 3', style: 'min-width: 120px' },
  { field: 'col4', header: 'flex-col 4', style: 'min-width: 120px' },
  {
    field: 'balance',
    header: 'Balance',
    frozen: true,
    alignFrozen: 'right',
    frozenOffset: '0px',
    style: 'min-width: 100px',
  },
];

export default class DemoTableFrozenColumns extends Component {
  data = generateRows();
  columns = columns;

  <template>
    <p class="text-sm fg-text-secondary mb-2">
      The "Name" flex-col is frozen on the left and "Balance" on the right.
      Scroll horizontally to see.
    </p>
    <UlxTable
      @value={{this.data}}
      @columns={{this.columns}}
      @dataKey="id"
      @scrollable={{true}}
      @scrollHeight="300px"
    />
  </template>
}
