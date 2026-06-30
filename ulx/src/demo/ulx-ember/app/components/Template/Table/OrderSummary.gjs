import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable, UlxTag, UlxButton } from 'ulx-components';

const sortOptions = [
  { key: 'orderId', lbl: 'Oder Id' },
  { key: 'amount', lbl: 'Amount' }
];

const filterGroups = [
  {
    key: 'paymentMode',
    heading: 'Payment mode',
    options: [
      { value: 'Online', label: 'Online' },
      { value: 'Offline', label: 'Offline' }
    ]
  }
];

const ORDERS = [
  {
    id: '682000009133007',
    orderId: '682000009133007',
    ticketCount: '2 tickets',
    purchaserName: 'Dexter Morgan',
    purchaserEmail: 'dexter@zylker.com',
    purchasedDate: 'Feb 22, 2024',
    purchasedTime: '08:00 PM',
    amount: 19000,
    currency: 'USD',
    paymentStatus: 'Paid',
    paymentMode: 'Online',
    orderStatus: 'Completed',
    orderedFrom: 'Zoho Backstage',
    orderSource: 'Event website',
    promoCode: '',
    billingAddress:
      'Estancia IT Park, Vallancherry, Plot No. 140 & 151, Great Southern Trunk Rd..'
  },
  {
    id: '682000009133008',
    orderId: '682000009133008',
    ticketCount: '1 ticket',
    purchaserName: 'Debra Morgan',
    purchaserEmail: 'debra.morgan@zylker.com',
    purchasedDate: 'Feb 21, 2024',
    purchasedTime: '02:30 PM',
    amount: 9500,
    currency: 'USD',
    paymentStatus: 'Paid',
    paymentMode: 'Offline',
    orderStatus: 'Completed',
    orderedFrom: 'Zoho Backstage',
    orderSource: 'Box office',
    promoCode: 'EARLY10',
    billingAddress: '4140 Southwest 13th Court, Miami, FL 33134, USA'
  },
  {
    id: '682000009133009',
    orderId: '682000009133009',
    ticketCount: '4 tickets',
    purchaserName: 'Angel Batista',
    purchaserEmail: 'angel.batista@zylker.com',
    purchasedDate: 'Feb 20, 2024',
    purchasedTime: '11:15 AM',
    amount: 38000,
    currency: 'USD',
    paymentStatus: 'Paid',
    paymentMode: 'Online',
    orderStatus: 'Completed',
    orderedFrom: 'Zoho Backstage',
    orderSource: 'Event website',
    promoCode: '',
    billingAddress: '1200 Brickell Bay Dr, Miami, FL 33131, USA'
  },
  {
    id: '682000009133010',
    orderId: '682000009133010',
    ticketCount: '3 tickets',
    purchaserName: 'Maria LaGuerta',
    purchaserEmail: 'maria.laguerta@zylker.com',
    purchasedDate: 'Feb 19, 2024',
    purchasedTime: '06:45 PM',
    amount: 28500,
    currency: 'USD',
    paymentStatus: 'Paid',
    paymentMode: 'Online',
    orderStatus: 'Completed',
    orderedFrom: 'Zoho Backstage',
    orderSource: 'Event website',
    promoCode: 'VIP25',
    billingAddress: '7900 Harbor Island Dr, Miami Beach, FL 33141, USA'
  },
  {
    id: '682000009133011',
    orderId: '682000009133011',
    ticketCount: '2 tickets',
    purchaserName: 'James Doakes',
    purchaserEmail: 'james.doakes@zylker.com',
    purchasedDate: 'Feb 18, 2024',
    purchasedTime: '09:20 AM',
    amount: 19000,
    currency: 'USD',
    paymentStatus: 'Paid',
    paymentMode: 'Offline',
    orderStatus: 'Completed',
    orderedFrom: 'Zoho Backstage',
    orderSource: 'Box office',
    promoCode: '',
    billingAddress: '2550 NW 2nd Ave, Miami, FL 33127, USA'
  }
];

function formatAmount(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

const OrderIdCell = <template>
  <div class="flex flex-col">
    <span class="bold-font">{{@row.orderId}}</span>
    <span class="text-12 fg-secondary">{{@row.ticketCount}}</span>
  </div>
</template>;

const PurchasedByCell = <template>
  <div class="flex flex-col">
    <span class="medium-font">{{@row.purchaserName}}</span>
    <span class="text-13 fg-secondary">{{@row.purchaserEmail}}</span>
  </div>
</template>;

const PurchasedDateCell = <template>
  <div class="flex flex-col">
    <span class="bold-font">{{@row.purchasedDate}}</span>
    <span class="text-12 fg-secondary">{{@row.purchasedTime}}</span>
  </div>
</template>;

const AmountCell = <template>
  <div class="flex items-baseline gap-1">
    <span class="text-16">{{formatAmount @row.amount}}</span>
    <span class="text-12 fg-secondary">{{@row.currency}}</span>
  </div>
</template>;

const PaymentStatusCell = <template>
  <UlxTag
    @value={{@row.paymentStatus}}
    @variant="green"
    @type="pill"
    @size="xxs-size"
  />
</template>;

const PaymentModeCell = <template>
  <span class="text-14">{{@row.paymentMode}}</span>
</template>;

const OrderStatusCell = <template>
  <UlxTag
    @value={{@row.orderStatus}}
    @variant="completed-color"
    @type="pill"
    @size="xxs-size"
  />
</template>;

const OrderedFromCell = <template>
  <div class="flex flex-col">
    <span class="bold-font">{{@row.orderedFrom}}</span>
    <span class="text-13 fg-secondary">{{@row.orderSource}}</span>
  </div>
</template>;

const PromoCodeCell = <template>
  {{#if @row.promoCode}}
    <span>{{@row.promoCode}}</span>
  {{/if}}
</template>;

const BillingAddressCell = <template>
  <span>{{@row.billingAddress}}</span>
</template>;

const columns = [
  { selectionMode: 'multiple', style: 'min-width: 48px' },
  {
    field: 'orderId',
    header: 'Order ID',
    sortable: true,
    body: OrderIdCell,
    style: 'min-width: 160px'
  },
  {
    field: 'purchaserName',
    header: 'Purchased by',
    sortable: true,
    body: PurchasedByCell,
    style: 'min-width: 180px'
  },
  {
    field: 'purchasedDate',
    header: 'Purchased date & time',
    sortable: true,
    body: PurchasedDateCell,
    style: 'min-width: 180px'
  },
  {
    field: 'amount',
    header: 'Amount',
    sortable: true,
    body: AmountCell,
    style: 'min-width: 140px'
  },
  {
    field: 'paymentStatus',
    header: 'Payment status',
    sortable: true,
    body: PaymentStatusCell,
    style: 'min-width: 140px'
  },
  {
    field: 'paymentMode',
    header: 'Payment mode',
    sortable: true,
    body: PaymentModeCell,
    style: 'min-width: 120px'
  },
  {
    field: 'orderStatus',
    header: 'Order status',
    sortable: true,
    body: OrderStatusCell,
    style: 'min-width: 140px'
  },
  {
    field: 'orderedFrom',
    header: 'Ordered from',
    sortable: true,
    body: OrderedFromCell,
    style: 'min-width: 160px'
  },
  {
    field: 'promoCode',
    header: 'Promo code',
    sortable: false,
    body: PromoCodeCell,
    style: 'min-width: 120px'
  },
  {
    field: 'billingAddress',
    header: 'Billing address',
    sortable: false,
    body: BillingAddressCell,
    style: 'min-width: 280px'
  }
];

export default class OrderSummaryTableTemplate extends Component {
  orders = ORDERS;
  columns = columns;
  sortOptions = sortOptions;
  filterGroups = filterGroups;

  @tracked selection = [];

  @action
  onSelectionChange(selection) {
    this.selection = selection;
  }

  <template>
    <div>
      <UlxTable
        @value={{this.orders}}
        @columns={{this.columns}}
        @dataKey="id"
        @selectionMode="checkbox"
        @selection={{this.selection}}
        @onSelectionChange={{this.onSelectionChange}}
        @sortMode="single"
        @scrollable={{true}}
        @sortOptions={{this.sortOptions}}
        @sortBy={{this.sortBy}}
        @onSortByChange={{this.handleSortByChange}}
        @filterGroups={{this.filterGroups}}
        @showManageColumns={{true}}
      >
        <:postRightMenu>
          <UlxButton @label="View as full page" />
        </:postRightMenu>
      </UlxTable>
    </div>
  </template>
}
