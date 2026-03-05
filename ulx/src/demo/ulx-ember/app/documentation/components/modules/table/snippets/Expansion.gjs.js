export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable, UlxButton } from 'ulx-components';

const ORDER_STATUS_STYLE = {
  DELIVERED: 'background:var(--green-layer1-bg,#DCFCE7);color:var(--green-fg-color,#16A34A);',
  PENDING:   'background:var(--orange-layer1-bg,#FFE7BA);color:var(--orange-fg-color,#FA8C16);',
  CANCELLED: 'background:var(--red-layer1-bg,#FFF1F0);color:var(--red-fg-color,#CF1322);',
};

class OrderStatusCell extends Component {
  get style() {
    return \`display:inline-block;padding:2px 10px;border-radius:12px;font-size:0.8125rem;font-weight:600;\${ORDER_STATUS_STYLE[this.args.value] ?? ''}\`;
  }
  <template>
    <span style={{this.style}}>{{@value}}</span>
  </template>
}

const CUSTOMERS = [ /* data array */ ];

const outerCols = [
  { expander: true },
  { field: 'name',    header: 'Name' },
  { field: 'country', header: 'Country' },
  { field: 'date',    header: 'Date' },
  { field: 'status',  header: 'Status' },
];

const innerCols = [
  { field: 'id',          header: 'Id' },
  { field: 'productCode', header: 'Code' },
  { field: 'date',        header: 'Date' },
  { field: 'amount',      header: 'Amount ($)' },
  { field: 'qty',         header: 'Qty' },
  { field: 'status',      header: 'Status', body: OrderStatusCell },
];

export default class DemoTableExpansion extends Component {
  customers = CUSTOMERS;
  outerCols = outerCols;
  innerCols = innerCols;

  @tracked expandedRows = {};

  @action
  onRowToggle({ data }) {
    this.expandedRows = data;
  }

  @action
  expandAll() {
    const all = {};
    this.customers.forEach((c) => (all[String(c.id)] = true));
    this.expandedRows = all;
  }

  @action
  collapseAll() {
    this.expandedRows = {};
  }

  <template>
    <UlxTable
      @value={{this.customers}}
      @columns={{this.outerCols}}
      @dataKey="id"
      @expandedRows={{this.expandedRows}}
      @onRowToggle={{this.onRowToggle}}
    >
      <:header>
        <div class="uls-column row align-center justify-end pd2 gp2">
          <UlxButton @label="Expand All"   @variant="secondary" @size="s-size" @onClick={{this.expandAll}} />
          <UlxButton @label="Collapse All" @variant="secondary" @size="s-size" @onClick={{this.collapseAll}} />
        </div>
      </:header>

      <:rowExpansion as |row|>
        <div class="pd3">
          <h5 class="h6 mb-2">Orders for <strong>{{row.name}}</strong></h5>
          <UlxTable @value={{row.orders}} @columns={{this.innerCols}} @dataKey="id" />
        </div>
      </:rowExpansion>
    </UlxTable>
  </template>
}
`;
