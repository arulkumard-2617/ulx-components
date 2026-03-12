import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const FROZEN_ROWS = [
  { id: 0, name: 'Average', country: '—', company: '—', status: '—', date: '—', isFrozen: true },
];

const DATA_ROWS = [
  { id: 1, name: 'James Butt', country: 'Algeria', company: 'Benton, John B Jr', status: 'Unqualified', date: '2015-09-13' },
  { id: 2, name: 'Josephine Darakjy', country: 'Egypt', company: 'Chanay, Jeffrey A Esq', status: 'Proposal', date: '2019-11-18' },
  { id: 3, name: 'Art Venere', country: 'Panama', company: 'Chemel, James L Cpa', status: 'Qualified', date: '2017-05-13' },
  { id: 4, name: 'Lenna Paprocki', country: 'Slovenia', company: 'Feltz Printing Service', status: 'New', date: '2020-09-15' },
  { id: 5, name: 'Donette Foller', country: 'South Africa', company: 'Printing Dimensions', status: 'Proposal', date: '2016-05-20' },
  { id: 6, name: 'Simona Morasca', country: 'Egypt', company: 'Chapman, Ross E Esq', status: 'Qualified', date: '2018-02-16' },
];

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
    <p class="text-sm fg-text-secondary mb-2">
      The first row is frozen and always visible while the rest scroll. Frozen
      rows are ideal for totals or summary rows.
    </p>
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
