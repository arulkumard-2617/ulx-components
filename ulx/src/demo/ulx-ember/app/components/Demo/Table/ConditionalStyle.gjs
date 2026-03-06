import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  { id: 1, code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: 24, price: 65 },
  { id: 2, code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: 61, price: 72 },
  { id: 3, code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', quantity: 2, price: 79 },
  { id: 4, code: '244wgerg2', name: 'Blue T-Shirt', category: 'Clothing', quantity: 25, price: 29 },
  { id: 5, code: 'h456wer53', name: 'Bracelet', category: 'Accessories', quantity: 73, price: 15 },
  { id: 6, code: 'mbvjkgc55', name: 'Brown Purse', category: 'Accessories', quantity: 0, price: 120 },
];

class QuantityCell extends Component {
  get style() {
    const qty = this.args.value;
    if (qty === 0) return 'display:inline-block;padding:2px 8px;border-radius:12px;background:var(--red-layer1-bg,#FFF1F0);color:var(--red-fg-color,#CF1322);font-weight:600;';
    if (qty < 10) return 'display:inline-block;padding:2px 8px;border-radius:12px;background:var(--orange-layer1-bg,#FFE7BA);color:var(--orange-fg-color,#FA8C16);font-weight:600;';
    return 'display:inline-block;padding:2px 8px;border-radius:12px;background:var(--green-layer1-bg,#DCFCE7);color:var(--green-fg-color,#16A34A);font-weight:600;';
  }

  <template>
    <span style={{this.style}}>{{@value}}</span>
  </template>
}

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity', body: QuantityCell },
  { field: 'price', header: 'Price ($)' },
];

function rowClass(row) {
  if (row.category === 'Fitness') return 'datatable-row-highlight';
  return '';
}

export default class DemoTableConditionalStyle extends Component {
  products = PRODUCTS;
  columns = columns;
  rowClass = rowClass;

  <template>
    <p class="text-sm fg-text-secondary mb-2">
      Rows in the "Fitness" category are highlighted. The Quantity column is
      color-coded: green = in-stock, orange = low-stock, red = out-of-stock.
    </p>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @rowClassName={{this.rowClass}}
    />
  </template>
}
