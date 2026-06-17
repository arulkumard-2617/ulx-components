export default `
import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const PREMIUMS = [
  {
    id: 1,
    name: 'Corner Booth Premium',
    type: 'Configuration-based',
    price: 144100
  },
  {
    id: 2,
    name: 'Table Premium',
    type: 'Manual',
    price: 245100
  },
  {
    id: 3,
    name: 'VIP Lounge Premium',
    type: 'Configuration-based',
    price: 325000
  },
  {
    id: 4,
    name: 'Stage Side Premium',
    type: 'Manual',
    price: 189500
  },
  {
    id: 5,
    name: 'Exhibitor Premium',
    type: 'Configuration-based',
    price: 98000
  },
  {
    id: 6,
    name: 'Networking Premium',
    type: 'Manual',
    price: 75500
  }
];

function formatInr(value, fractionDigits = 0) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  }).format(value);
}

const PremiumNameCell = <template>
  <span class="semibold-font">{{@value}}</span>
</template>;

const PriceCell = <template>{{formatInr @value}}</template>;

export default class DemoTableFooter extends Component {
  premiums = PREMIUMS;

  get premiumTotal() {
    return this.premiums.reduce((sum, row) => sum + row.price, 0);
  }

  get columns() {
    return [
      {
        field: 'name',
        header: 'Premium',
        body: PremiumNameCell,
        footer: \`Premium Total: \${formatInr(this.premiumTotal, 2)}\`
      },
      { field: 'type', header: 'Type' },
      {
        field: 'price',
        header: 'Price',
        body: PriceCell
      }
    ];
  }

  <template>
    <div class="flex flex-col gap-3">
      <h4 class="h6 mb-0 semibold-font">
        Selected Premium ({{this.premiums.length}})
      </h4>

      <UlxTable
        @value={{this.premiums}}
        @columns={{this.columns}}
        @dataKey="id"
        @size="s-size"
      />
    </div>
  </template>
}

`;
