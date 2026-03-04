export default `
import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const rows = [ /* array of row objects */ ];

const verticalCols = [
  { field: 'name',           header: 'Name' },
  { field: 'country',        header: 'Country' },
  { field: 'company',        header: 'Company' },
  { field: 'representative', header: 'Representative' },
  { field: 'status',         header: 'Status' },
];

const horizontalCols = [
  { field: 'id',             header: 'Id',             style: 'min-width: 80px' },
  { field: 'name',           header: 'Name',           style: 'min-width: 150px' },
  { field: 'country',        header: 'Country',        style: 'min-width: 120px' },
  { field: 'company',        header: 'Company',        style: 'min-width: 180px' },
  { field: 'representative', header: 'Representative', style: 'min-width: 160px' },
  { field: 'col1',           header: 'Extra 1',        style: 'min-width: 120px' },
  { field: 'col2',           header: 'Extra 2',        style: 'min-width: 120px' },
];

export default class DemoTableScroll extends Component {
  verticalRows   = rows;
  horizontalRows = rows;
  flexibleRows   = rows;
  verticalCols   = verticalCols;
  horizontalCols = horizontalCols;

  <template>
    {{! Vertical scroll }}
    <UlxTable
      @value={{this.verticalRows}}
      @columns={{this.verticalCols}}
      @dataKey="id"
      @scrollable={{true}}
      @scrollHeight="250px"
    />

    {{! Horizontal scroll }}
    <UlxTable
      @value={{this.horizontalRows}}
      @columns={{this.horizontalCols}}
      @dataKey="id"
      @scrollable={{true}}
    />

    {{! Flexible scroll - fill parent container height }}
    <div style="height: 300px; display: flex; flex-direction: column;">
      <UlxTable
        @value={{this.flexibleRows}}
        @columns={{this.verticalCols}}
        @dataKey="id"
        @scrollable={{true}}
        @scrollHeight="flex"
      />
    </div>
  </template>
}
`;
