export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import {
  UlxTable,
  UlxTag,
  UlxInput,
  UlxProgressBar,
  UlxTristateCheckbox,
  UlxIcon,
} from 'ulx-components';

const CUSTOMERS = [
  {
    id: 1000,
    name: 'James Butt',
    country: 'Algeria',
    date: '2019-02-15',
    representative: 'Ioni Bowcher',
    status: 'unqualified',
    balance: 70663,
    activity: 17,
    verified: true,
  },
  {
    id: 1001,
    name: 'Josephine Darakjy',
    country: 'Egypt',
    date: '2019-05-20',
    representative: 'Amy Elsner',
    status: 'negotiation',
    balance: 82429,
    activity: 0,
    verified: true,
  },
  {
    id: 1002,
    name: 'Art Venere',
    country: 'Panama',
    date: '2019-09-10',
    representative: 'Asiya Javayant',
    status: 'qualified',
    balance: 28334,
    activity: 63,
    verified: false,
  },
  {
    id: 1003,
    name: 'Lenna Paprocki',
    country: 'Slovenia',
    date: '2019-11-01',
    representative: 'Bernardo Dominic',
    status: 'new',
    balance: 88521,
    activity: 37,
    verified: false,
  },
  {
    id: 1004,
    name: 'Donette Foller',
    country: 'South Africa',
    date: '2020-01-25',
    representative: 'Amy Elsner',
    status: 'renewal',
    balance: 93804,
    activity: 33,
    verified: true,
  },
  {
    id: 1005,
    name: 'Simona Morasca',
    country: 'Egypt',
    date: '2020-03-05',
    representative: 'Ivan Magalhaes',
    status: 'qualified',
    balance: 50041,
    activity: 68,
    verified: true,
  },
  {
    id: 1006,
    name: 'Mitsue Tollner',
    country: 'Paraguay',
    date: '2020-04-18',
    representative: 'Ioni Bowcher',
    status: 'renewal',
    balance: 58706,
    activity: 54,
    verified: false,
  },
  {
    id: 1007,
    name: 'Leota Dilliard',
    country: 'Serbia',
    date: '2020-06-30',
    representative: 'Ivan Magalhaes',
    status: 'renewal',
    balance: 26494,
    activity: 69,
    verified: true,
  },
  {
    id: 1008,
    name: 'Sage Wieser',
    country: 'Egypt',
    date: '2020-08-12',
    representative: 'Amy Elsner',
    status: 'unqualified',
    balance: 65369,
    activity: 76,
    verified: false,
  },
  {
    id: 1009,
    name: 'Kris Marrier',
    country: 'Mexico',
    date: '2020-09-21',
    representative: 'Asiya Javayant',
    status: 'negotiation',
    balance: 63451,
    activity: 7,
    verified: false,
  },
];

const REPRESENTATIVE_OPTIONS = [
  { label: 'Amy Elsner', value: 'Amy Elsner' },
  { label: 'Asiya Javayant', value: 'Asiya Javayant' },
  { label: 'Bernardo Dominic', value: 'Bernardo Dominic' },
  { label: 'Ioni Bowcher', value: 'Ioni Bowcher' },
  { label: 'Ivan Magalhaes', value: 'Ivan Magalhaes' },
];

const STATUS_OPTIONS = [
  { label: 'Unqualified', value: 'unqualified' },
  { label: 'Qualified', value: 'qualified' },
  { label: 'New', value: 'new' },
  { label: 'Negotiation', value: 'negotiation' },
  { label: 'Renewal', value: 'renewal' },
];

const STATUS_VARIANT = {
  unqualified: 'danger',
  qualified: 'success',
  new: 'info',
  negotiation: 'warning',
  renewal: 'secondary',
};

function statusVariant(status) {
  return STATUS_VARIANT[status] ?? 'secondary';
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(value) {
  if (!value) return '';
  const date = new Date(value);
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

const StatusCell = <template>
  <UlxTag @value={{@value}} @variant={{statusVariant @value}} @size="s-size" />
</template>;

const BalanceCell = <template>
  <span>{{formatCurrency @value}}</span>
</template>;

const ActivityCell = <template>
  <UlxProgressBar @value={{@value}} @showValue={{false}} />
</template>;

const DateCell = <template>
  <span>{{formatDate @value}}</span>
</template>;

const VerifiedCell = <template>
  {{#if @value}}
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="check-circle-fill"
      @size="s16"
      aria-hidden="true"
    />
  {{else}}
    <UlxIcon
      @componentClass="bs-icons1"
      @type="font"
      @iconName="x-circle-fill"
      @size="s16"
      aria-hidden="true"
    />
  {{/if}}
</template>;

class BalanceFilterElement extends Component {
  @action
  handleInput(event) {
    const raw = event?.target?.value;
    const numVal = raw !== '' && raw != null ? Number(raw) : null;
    this.args.onChange(numVal);
  }

  <template>
    <UlxInput
      @value={{@value}}
      @placeholder="Enter amount"
      type="number"
      min="0"
      {{on "input" this.handleInput}}
      aria-label="Filter balance"
    />
  </template>
}

class VerifiedFilterElement extends Component {
  @action
  handleChange(val) {
    this.args.onChange(val);
  }

  <template>
    <div class="uls-column gap-2 items-center">
      <span class="text-sm">Verified</span>
      <UlxTristateCheckbox
        @value={{@value}}
        @onValueChange={{this.handleChange}}
        @hideLabel={{true}}
        aria-label="Filter verified"
      />
    </div>
  </template>
}

const BALANCE_MATCH_MODES = [
  { label: 'Equals', value: 'equals' },
  { label: 'Less than', value: 'lt' },
  { label: 'Greater than', value: 'gt' },
  { label: 'Less than or equal to', value: 'lte' },
  { label: 'Greater than or equal to', value: 'gte' },
];

const NAME_MATCH_MODES = [
  { label: 'Starts with', value: 'startsWith' },
  { label: 'Contains', value: 'contains' },
  { label: 'Not contains', value: 'notContains' },
  { label: 'Ends with', value: 'endsWith' },
  { label: 'Equals', value: 'equals' },
  { label: 'Not equals', value: 'notEquals' },
];

const DATE_MATCH_MODES = [
  { label: 'On', value: 'dateIs' },
  { label: 'Before', value: 'dateBefore' },
  { label: 'After', value: 'dateAfter' },
];

class DateFilterElement extends Component {
  @action
  handleInput(event) {
    const value = event?.target?.value;
    this.args.onChange(value || null);
  }

  <template>
    <UlxInput
      @value={{@value}}
      type="date"
      {{on "input" this.handleInput}}
      aria-label="Filter date"
    />
  </template>
}

const columns = [
  {
    field: 'name',
    header: 'Name',
    filter: true,
    filterMatchModeOptions: NAME_MATCH_MODES,
  },
  {
    field: 'country',
    header: 'Country',
    filter: true,
  },
  {
    field: 'representative',
    header: 'Agent',
    filter: true,
    filterType: 'multiselect',
    filterOptions: REPRESENTATIVE_OPTIONS,
  },
  {
    field: 'date',
    header: 'Date',
    filter: true,
    filterElement: DateFilterElement,
    filterMatchModeOptions: DATE_MATCH_MODES,
    body: DateCell,
  },
  {
    field: 'status',
    header: 'Status',
    filter: true,
    filterType: 'multiselect',
    filterOptions: STATUS_OPTIONS,
    body: StatusCell,
  },
  {
    field: 'balance',
    header: 'Balance',
    filter: true,
    filterElement: BalanceFilterElement,
    filterMatchModeOptions: BALANCE_MATCH_MODES,
    body: BalanceCell,
  },
  {
    field: 'activity',
    header: 'Activity',
    body: ActivityCell,
  },
  {
    field: 'verified',
    header: 'Verified',
    filter: true,
    filterElement: VerifiedFilterElement,
    filterMatchModeOptions: false,
    body: VerifiedCell,
  },
];

const globalFilterFields = ['name', 'country', 'representative', 'status'];

export default class DemoTableAdvancedFilter extends Component {
  customers = CUSTOMERS;
  columns = columns;
  globalFilterFields = globalFilterFields;

  <template>
    <div>
      <UlxTable
        @value={{this.customers}}
        @columns={{this.columns}}
        @dataKey="id"
        @filterDisplay="menu"
        @showGlobalFilter={{true}}
        @globalFilterFields={{this.globalFilterFields}}
        @globalFilterPlaceholder="Search customers…"
        @paginator={{true}}
        @rows={{5}}
        @showGridlines={{true}}
      />
    </div>
  </template>
}

`;
