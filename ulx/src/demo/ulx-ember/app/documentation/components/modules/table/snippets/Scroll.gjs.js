export default `
import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const generateRows = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: ['Alice Smith', 'Bob Jones', 'Carol White', 'Dave Brown', 'Eve Davis',
           'Frank Wilson', 'Grace Lee', 'Hank Moore', 'Iris Chen', 'Jake Turner'][i % 10],
    country: ['USA', 'UK', 'DE', 'FR', 'JP', 'AU', 'CA', 'BR', 'IN', 'MX'][i % 10],
    company: \`Company \${String.fromCharCode(65 + (i % 26))}\`,
    representative: ['Amy Elsner', 'Anna Fali', 'Asiya Javayant', 'Bernardo Dominic'][i % 4],
    status: ['Qualified', 'Unqualified', 'New', 'Negotiation', 'Renewal'][i % 5],
    col1: \`Data A\${i + 1}\`,
    col2: \`Data B\${i + 1}\`,
    col3: \`Data C\${i + 1}\`,
    col4: \`Data D\${i + 1}\`,
  }));

const verticalCols = [
  { field: 'name', header: 'Name' },
  { field: 'country', header: 'Country' },
  { field: 'company', header: 'Company' },
  { field: 'representative', header: 'Representative' },
  { field: 'status', header: 'Status' },
];

const horizontalCols = [
  { field: 'id', header: 'Id', style: 'min-width: 80px' },
  { field: 'name', header: 'Name', style: 'min-width: 150px' },
  { field: 'country', header: 'Country', style: 'min-width: 120px' },
  { field: 'company', header: 'Company', style: 'min-width: 180px' },
  { field: 'representative', header: 'Representative', style: 'min-width: 160px' },
  { field: 'status', header: 'Status', style: 'min-width: 120px' },
  { field: 'col1', header: 'Extra 1', style: 'min-width: 120px' },
  { field: 'col2', header: 'Extra 2', style: 'min-width: 120px' },
  { field: 'col3', header: 'Extra 3', style: 'min-width: 120px' },
  { field: 'col4', header: 'Extra 4', style: 'min-width: 120px' },
];

export default class DemoTableScroll extends Component {
  verticalRows = generateRows(20);
  horizontalRows = generateRows(5);
  flexibleRows = generateRows(15);

  verticalCols = verticalCols;
  horizontalCols = horizontalCols;

  <template>
    <div>
      <div>
        <h4 class="h5 mb-2">Vertical Scroll</h4>
        <p class="text-sm fg-text-secondary mb-2">Set
          <code>@scrollable</code>
          and
          <code>@scrollHeight</code>
          to enable a fixed-height scrollable body with a sticky header.</p>
        <UlxTable
          @value={{this.verticalRows}}
          @columns={{this.verticalCols}}
          @dataKey="id"
          @scrollable={{true}}
          @scrollHeight="250px"
        />
      </div>

      <div class="mgt3">
        <h4 class="h5 mb-2">Horizontal Scroll</h4>
        <p class="text-sm fg-text-secondary mb-2">Use
          <code>@scrollable</code>
          with columns that have
          <code>style="min-width: …"</code>
          to enable horizontal scrolling when the total width exceeds the
          container.</p>
        <UlxTable
          @value={{this.horizontalRows}}
          @columns={{this.horizontalCols}}
          @dataKey="id"
          @scrollable={{true}}
        />
      </div>

      <div class="mgt3">
        <h4 class="h5 mb-2">Flexible Scroll</h4>
        <p class="text-sm fg-text-secondary mb-2">Set
          <code>@scrollHeight="flex"</code>
          and wrap the table in a fixed-height container to let the table fill
          available space.</p>
        <div style="height: 300px; display: flex; flex-direction: column;">
          <UlxTable
            @value={{this.flexibleRows}}
            @columns={{this.verticalCols}}
            @dataKey="id"
            @scrollable={{true}}
            @scrollHeight="flex"
          />
        </div>
      </div>
    </div>
  </template>
}

`;
