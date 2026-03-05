export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxTable, UlxButton } from 'ulx-components';

function doExportCSV(cols, data, filename = 'export.csv') {
  const exportCols = cols.filter((c) => c.field);
  const headers = exportCols.map((c) => JSON.stringify(String(c.header ?? c.field ?? '')));
  const rows = data.map((row) =>
    exportCols.map((c) => JSON.stringify(String(row[c.field] ?? ''))).join(',')
  );
  const csv = [headers.join(','), ...rows].join('\\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default class DemoTableExport extends Component {
  products = [ /* data array */ ];
  columns = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Qty' },
    { field: 'price', header: 'Price ($)' },
  ];

  @action
  exportCSV() {
    doExportCSV(this.columns, this.products, 'products.csv');
  }

  <template>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
    >
      <:header>
        <div class="uls-column row justify-end pd2">
          <UlxButton
            @label="Export CSV"
            @icon="download"
            @iconComponentClass="bs-icons1"
            @variant="secondary"
            @size="s-size"
            @onClick={{this.exportCSV}}
          />
        </div>
      </:header>
    </UlxTable>
  </template>
}
`;
