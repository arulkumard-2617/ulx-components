import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable } from 'ulx-components';

const ORDERS = [
  {
    id: 1000, name: 'James Butt',    country: { name: 'Algeria'   }, date: '2020-09-13', status: 'Unqualified',
    orders: [
      { id: 1000, productCode: 'f230fh0g3', date: '2019-01-01', amount: 65,  qty: 3, status: 'DELIVERED' },
      { id: 1001, productCode: 'nvklal433', date: '2019-01-05', amount: 72,  qty: 1, status: 'PENDING'   },
    ],
  },
  {
    id: 1001, name: 'Josephine Darakjy', country: { name: 'Egypt' }, date: '2020-09-13', status: 'Proposal',
    orders: [
      { id: 1002, productCode: 'zz21cz3c1', date: '2019-01-02', amount: 79,  qty: 4, status: 'DELIVERED' },
    ],
  },
  {
    id: 1002, name: 'Art Venere', country: { name: 'Panama' }, date: '2020-10-04', status: 'Qualified',
    orders: [
      { id: 1003, productCode: '244wgerg2', date: '2019-01-05', amount: 29,  qty: 2, status: 'CANCELLED' },
      { id: 1004, productCode: 'h456wer53', date: '2019-01-07', amount: 15,  qty: 1, status: 'PENDING'   },
    ],
  },
];

const outerOrderCols = [
  { expander: true },
  { field: 'name',           header: 'Name'    },
  { field: 'country.name',   header: 'Country' },
  { field: 'date',           header: 'Date'    },
  { field: 'status',         header: 'Status'  },
];

const innerOrderCols = [
  { field: 'id',          header: 'Id'      },
  { field: 'productCode', header: 'Code'    },
  { field: 'date',        header: 'Date'    },
  { field: 'amount',      header: 'Amount'  },
  { field: 'qty',         header: 'Qty'     },
  { field: 'status',      header: 'Status'  },
];

export default class DemoTableExpansion extends Component {
  customers = ORDERS;
  outerOrderCols = outerOrderCols;
  innerOrderCols = innerOrderCols;

  @tracked expandedRows = {};

  @action
  onRowToggle({ data }) {
    this.expandedRows = data;
  }

  <template>
    <UlxTable
      @value={{this.customers}}
      @columns={{this.outerOrderCols}}
      @dataKey="id"
      @expandedRows={{this.expandedRows}}
      @onRowToggle={{this.onRowToggle}}
    >
      <:rowExpansion as |row|>
        <div class="pd3">
          <h5 class="h6 mgb2">Orders for {{row.name}}</h5>
          <UlxTable @value={{row.orders}} @columns={{this.innerOrderCols}} @dataKey="id" />
        </div>
      </:rowExpansion>
    </UlxTable>
  </template>
}
