import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { concat } from '@ember/helper';
import { UlxTable, UlxTag, UlxToggle } from 'ulx-components';

const PAYMENTS = [
  {
    id: 'offline-pay-1',
    paymentMode: 'Pay at the venue',
    setupName: 'Pay at the event',
    country: 'IN',
    active: true,
    statusLabel: 'Active'
  },
  {
    id: 'offline-pay-2',
    paymentMode: 'Pay at the venue',
    setupName: 'Cash at venue',
    country: 'US',
    active: true,
    statusLabel: 'Active'
  },
  {
    id: 'offline-pay-3',
    paymentMode: 'Pay at the venue',
    setupName: 'On-site card payment',
    country: 'UK',
    active: false,
    statusLabel: 'Inactive'
  },
  {
    id: 'offline-pay-4',
    paymentMode: 'Pay at the venue',
    setupName: 'Counter payment',
    country: 'AE',
    active: true,
    statusLabel: 'Active'
  },
  {
    id: 'offline-pay-5',
    paymentMode: 'Pay at the venue',
    setupName: 'Pay at the event',
    country: 'AU',
    active: true,
    statusLabel: 'Active'
  }
];

const PaymentModeCell = <template>
  <UlxTag
    @value={{@row.paymentMode}}
    @variant="lt-gold"
    @type="pill"
    @size="xs-size"
  />
</template>;

const SetupNameCell = <template>
  <span>{{@row.setupName}}</span>
</template>;

const CountryCell = <template>
  <span class="bold-font">{{@row.country}}</span>
</template>;

const StatusCell = <template>
  <div class="flex items-center gap-3">
    <UlxToggle
      @checked={{@row.active}}
      @onCheckedChange={{@row.onStatusChange}}
      @variant="green"
      aria-label={{concat "Toggle status for " @row.setupName}}
    />
    <UlxTag
      @value={{@row.statusLabel}}
      @variant="green"
      @type="pill"
      @size="xs-size"
    />
  </div>
</template>;

const columns = [
  {
    field: 'paymentMode',
    header: 'Payment mode',
    sortable: true,
    body: PaymentModeCell,
    style: 'min-width: 180px'
  },
  {
    field: 'setupName',
    header: 'Payment setup name',
    sortable: true,
    body: SetupNameCell,
    style: 'min-width: 220px'
  },
  {
    field: 'country',
    header: 'Country',
    sortable: true,
    body: CountryCell,
    style: 'min-width: 100px'
  },
  {
    field: 'active',
    header: 'Status',
    sortable: false,
    body: StatusCell,
    style: 'min-width: 180px'
  }
];

export default class OfflinePaymentTableTemplate extends Component {
  @tracked payments = PAYMENTS.map((payment) => ({ ...payment }));

  columns = columns;

  get paymentRows() {
    return this.payments.map((payment) => ({
      ...payment,
      onStatusChange: (checked) => this.updateStatus(payment.id, checked)
    }));
  }

  @action
  updateStatus(id, checked) {
    this.payments = this.payments.map((payment) =>
      payment.id === id
        ? {
            ...payment,
            active: checked,
            statusLabel: checked ? 'Active' : 'Inactive'
          }
        : payment
    );
  }

  <template>
    <UlxTable
      @value={{this.paymentRows}}
      @columns={{this.columns}}
      @dataKey="id"
      @scrollable={{true}}
      @sortMode="single"
    />
  </template>
}
