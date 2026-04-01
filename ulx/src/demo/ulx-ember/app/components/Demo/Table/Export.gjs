import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxTable, UlxButton } from 'ulx-components';

const PRODUCTS = [
  {
    id: 1,
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    quantity: 24,
    price: 65,
  },
  {
    id: 2,
    code: 'nvklal433',
    name: 'Black Watch',
    category: 'Accessories',
    quantity: 61,
    price: 72,
  },
  {
    id: 3,
    code: 'zz21cz3c1',
    name: 'Blue Band',
    category: 'Fitness',
    quantity: 2,
    price: 79,
  },
  {
    id: 4,
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    category: 'Clothing',
    quantity: 25,
    price: 29,
  },
  {
    id: 5,
    code: 'h456wer53',
    name: 'Bracelet',
    category: 'Accessories',
    quantity: 73,
    price: 15,
  },
];

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Qty' },
  { field: 'price', header: 'Price ($)' },
];

function doExportCSV(cols, data, filename = 'export.csv') {
  const exportCols = cols.filter((c) => c.field);
  const headers = exportCols.map((c) =>
    JSON.stringify(String(c.header ?? c.field ?? '')),
  );
  const rows = data.map((row) =>
    exportCols.map((c) => JSON.stringify(String(row[c.field] ?? ''))).join(','),
  );
  const csv = [headers.join(','), ...rows].join('\n');
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
  products = PRODUCTS;
  columns = columns;

  @action
  exportCSV() {
    doExportCSV(this.columns, this.products, 'products.csv');
  }

  <template>
    <UlxTable @value={{this.products}} @columns={{this.columns}} @dataKey="id">
      <:header>
        <div class="uls-column row justify-end pd2">
          <UlxButton
            @label="Export CSV"
            @icon="export-icon"
            @onClick={{this.exportCSV}}
          />
        </div>
      </:header>
    </UlxTable>
  </template>
}
