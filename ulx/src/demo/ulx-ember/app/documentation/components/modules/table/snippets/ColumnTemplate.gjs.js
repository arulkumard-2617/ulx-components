export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  {
    id: 1,
    name: 'Bamboo Watch',
    category: 'Accessories',
    price: 65,
    quantity: 24,
    status: 'INSTOCK',
  },
  {
    id: 2,
    name: 'Black Watch',
    category: 'Accessories',
    price: 72,
    quantity: 61,
    status: 'INSTOCK',
  },
  {
    id: 3,
    name: 'Blue Band',
    category: 'Fitness',
    price: 79,
    quantity: 2,
    status: 'LOWSTOCK',
  },
  {
    id: 4,
    name: 'Blue T-Shirt',
    category: 'Clothing',
    price: 29,
    quantity: 25,
    status: 'INSTOCK',
  },
  {
    id: 5,
    name: 'Bracelet',
    category: 'Accessories',
    price: 15,
    quantity: 73,
    status: 'INSTOCK',
  },
  {
    id: 6,
    name: 'Brown Purse',
    category: 'Accessories',
    price: 120,
    quantity: 0,
    status: 'OUTOFSTOCK',
  },
];

const STATUS_VARIANT = {
  INSTOCK: 'success',
  LOWSTOCK: 'warning',
  OUTOFSTOCK: 'danger',
};

function statusVariant(status) {
  return STATUS_VARIANT[status] ?? 'secondary';
}

const PriceCell = <template>
  <strong>\${{@value}}</strong>
</template>;

const StatusCell = <template>
  <span class="uls-tag {{statusVariant @value}} s-size">{{@value}}</span>
</template>;

const ActionsCell = <template>
  <div class="flex items-start gap-2">
    <button
      type="button"
      class="uls-button text primary xs-size"
      aria-label="View {{@row.name}}"
    >
      <i class="bs-icons1 eye s14" aria-hidden="true"></i>
    </button>
    <button
      type="button"
      class="uls-button text warning xs-size"
      aria-label="Edit {{@row.name}}"
    >
      <i class="bs-icons1 pencil s14" aria-hidden="true"></i>
    </button>
    <button
      type="button"
      class="uls-button text danger xs-size"
      aria-label="Delete {{@row.name}}"
    >
      <i class="bs-icons1 trash s14" aria-hidden="true"></i>
    </button>
  </div>
</template>;

const columns = [
  { field: 'name', header: 'Name', sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'price', header: 'Price', sortable: true, body: PriceCell },
  { field: 'quantity', header: 'Qty', sortable: true },
  { field: 'status', header: 'Status', sortable: true, body: StatusCell },
  { header: 'Actions', body: ActionsCell },
];

export default class DemoTableColumnTemplate extends Component {
  products = PRODUCTS;
  columns = columns;

  <template>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @sortMode="single"
    />
  </template>
}

`;
