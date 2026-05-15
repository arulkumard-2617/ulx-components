import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  {
    id: 1,
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    price: 65,
    quantity: 24,
  },
  {
    id: 2,
    code: 'nvklal433',
    name: 'Black Watch',
    category: 'Accessories',
    price: 72,
    quantity: 61,
  },
  {
    id: 3,
    code: 'zz21cz3c1',
    name: 'Blue Band',
    category: 'Fitness',
    price: 79,
    quantity: 2,
  },
  {
    id: 4,
    code: '244wgerg2',
    name: 'Blue T-Shirt',
    category: 'Clothing',
    price: 29,
    quantity: 25,
  },
  {
    id: 5,
    code: 'h456wer53',
    name: 'Bracelet',
    category: 'Accessories',
    price: 15,
    quantity: 73,
  },
  {
    id: 6,
    code: 'av2231fwg',
    name: 'Brown Purse',
    category: 'Accessories',
    price: 120,
    quantity: 0,
  },
];

const columns = [
  { field: 'code', header: 'Code', sortable: true },
  { field: 'name', header: 'Name', sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'price', header: 'Price', sortable: true },
  { field: 'quantity', header: 'Qty', sortable: true },
];

const multiColumns = [
  { field: 'code', header: 'Code', sortable: true },
  { field: 'name', header: 'Name', sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'price', header: 'Price', sortable: true },
  { field: 'quantity', header: 'Qty', sortable: true },
];

const CATEGORY_PRIORITY = {
  Accessories: 1,
  Clothing: 2,
  Fitness: 3,
};

export default class DemoTableSort extends Component {
  products = PRODUCTS;
  columns = columns;
  multiColumns = multiColumns;

  @action
  customSort(a, b, { field, order, getFieldValue, compareValues }) {
    const valueA = getFieldValue(a, field);
    const valueB = getFieldValue(b, field);

    if (field === 'category') {
      const categoryRankA = CATEGORY_PRIORITY[valueA] ?? Number.MAX_SAFE_INTEGER;
      const categoryRankB = CATEGORY_PRIORITY[valueB] ?? Number.MAX_SAFE_INTEGER;
      return compareValues(categoryRankA, categoryRankB) * order;
    }

    if (field === 'quantity') {
      const isOutOfStockA = valueA === 0;
      const isOutOfStockB = valueB === 0;

      if (isOutOfStockA !== isOutOfStockB) {
        return isOutOfStockA ? 1 : -1;
      }
    }

    return compareValues(valueA, valueB) * order;
  }

  <template>
    <div>
      <div>
        <h4 class="h5 mb-2">Single Sort</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.columns}}
          @dataKey="id"
          @sortMode="single"
          @removableSort={{true}}
        />
      </div>

      <div class="mt-8">
        <h4 class="h5 mb-2">Multi Sort</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.multiColumns}}
          @dataKey="id"
          @sortMode="multiple"
          @removableSort={{true}}
        />
      </div>

      <div class="mt-8">
        <h4 class="h5 mb-2">Custom Sort Function</h4>
        <UlxTable
          @value={{this.products}}
          @columns={{this.columns}}
          @dataKey="id"
          @sortMode="single"
          @removableSort={{true}}
          @sortFunction={{this.customSort}}
        />
      </div>
    </div>
  </template>
}
