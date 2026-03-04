import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxTable } from 'ulx-components';
import { fn } from '@ember/helper';

const PRODUCTS = [
  {
    id: 1,
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    quantity: 24,
    price: 65,
    status: 'INSTOCK',
  },
  {
    id: 2,
    code: 'nvklal433',
    name: 'Black Watch',
    category: 'Accessories',
    quantity: 61,
    price: 72,
    status: 'INSTOCK',
  },
  {
    id: 3,
    code: 'zz21cz3c1',
    name: 'Blue Band',
    category: 'Fitness',
    quantity: 2,
    price: 79,
    status: 'LOWSTOCK',
  },
  {
    id: 4,
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    category: 'Clothing',
    quantity: 25,
    price: 29,
    status: 'INSTOCK',
  },
  {
    id: 5,
    code: 'h456wer53',
    name: 'Bracelet',
    category: 'Accessories',
    quantity: 73,
    price: 15,
    status: 'INSTOCK',
  },
  {
    id: 6,
    code: 'mbvjkgc55',
    name: 'Brown Purse',
    category: 'Accessories',
    quantity: 0,
    price: 120,
    status: 'OUTOFSTOCK',
  },
];

const columns = [
  { field: 'code', header: 'Code', sortable: true },
  { field: 'name', header: 'Name', sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'price', header: 'Price ($)', sortable: true },
  { field: 'status', header: 'Status', sortable: true },
];

const STATUS_VARIANT = {
  INSTOCK: 'success',
  LOWSTOCK: 'warning',
  OUTOFSTOCK: 'danger',
};

function statusVariant(s) {
  return STATUS_VARIANT[s] ?? 'secondary';
}

export default class DemoTableCardView extends Component {
  products = PRODUCTS;
  columns = columns;

  @tracked cardViewColumns = 3;

  @action
  setCardColumns(n) {
    this.cardViewColumns = n;
  }

  <template>
    <p class="text-sm fg-text-secondary mb-2">
      Switch between
      <strong>table</strong>,
      <strong>detailed</strong>
      (list), and
      <strong>card</strong>
      views. Use
      <strong>Options</strong>
      to set card grid columns (passed as
      <code>@cardViewColumns</code>); same options available in all views.
    </p>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @showToggleViews={{true}}
      @defaultView="table"
      @cardViewColumns={{this.cardViewColumns}}
      @showGlobalFilter={{true}}
    >
      <:card as |row|>
        <div
          style="padding: 1rem; border: 1px solid var(--uls-default-border-color, #dee2e6); border-radius: 0.375rem; background: var(--uls-body-bg, #fff);"
        >
          <strong>{{row.name}}</strong>
          <span class="text-sm">{{row.category}} · ${{row.price}}</span>
          <span
            class="uls-tag {{statusVariant row.status}} s-size"
          >{{row.status}}</span>
        </div>
      </:card>

      <:detailed as |row|>
        <div
          class=""
          style="padding: 1rem; border-bottom: 1px solid var(--uls-default-border-color, #dee2e6); flex-direction: row; flex-wrap: wrap;"
        >
          <div class="col-fluid">
            <strong>{{row.name}}</strong>
            <span
              class="uls-tag {{statusVariant row.status}} s-size"
              style="margin-inline-start: 0.5rem;"
            >{{row.status}}</span>
          </div>
          <span class="text-sm">{{row.category}}</span>
          <span class="text-sm">${{row.price}}</span>
          <span class="text-sm">Qty {{row.quantity}}</span>
        </div>
      </:detailed>

      <:customOptions>
        <p class="text-sm fg-text-secondary" style="margin: 0 0 0.5rem 0;">Card
          columns</p>
        <div class="uls-column gap-2">
          <button
            type="button"
            class="uls-button text s-size"
            {{on "click" (fn this.setCardColumns 2)}}
          >2 columns</button>
          <button
            type="button"
            class="uls-button text s-size"
            {{on "click" (fn this.setCardColumns 3)}}
          >3 columns</button>
          <button
            type="button"
            class="uls-button text s-size"
            {{on "click" (fn this.setCardColumns 4)}}
          >4 columns</button>
        </div>
      </:customOptions>
    </UlxTable>
  </template>
}
