import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const PRODUCTS = [
  {
    id: 1,
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    quantity: 24,
    price: '$65.00',
    status: 'In Stock'
  },
  {
    id: 2,
    code: 'nvklal433',
    name: 'Black Watch',
    category: 'Accessories',
    quantity: 61,
    price: '$72.00',
    status: 'In Stock'
  },
  {
    id: 3,
    code: 'zz21cz3c1',
    name: 'Blue Band',
    category: 'Fitness',
    quantity: 2,
    price: '$79.00',
    status: 'Low Stock'
  }
];

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price' },
  { field: 'quantity', header: 'Qty in Stock' },
  { field: 'status', header: 'Status' }
];

const ExhibitorCategoryHeader = <template>
  <div class="line-clamp-1">Exhibitor Category details long content</div>
</template>;

const columnsWithHeaderTemplate = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  {
    field: 'category',
    headerTemplate: ExhibitorCategoryHeader
  },
  { field: 'price', header: 'Price' },
  { field: 'quantity', header: 'Qty in Stock' },
  { field: 'status', header: 'Status' }
];

export default class DemoTableVertical extends Component {
  products = PRODUCTS;
  columns = columns;
  columnsWithHeaderTemplate = columnsWithHeaderTemplate;

  <template>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @layout="vertical"
      @showGridlines={{true}}
    />

    <h4 class="text-sm mb-1" style="margin-top: 2rem; font-weight: 600;">
      Vertical table with
      <code>@verticalLabelField="name"</code>
    </h4>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @layout="vertical"
      @verticalLabelField="name"
      @showGridlines={{true}}
    />

    <h4 class="text-sm mb-1" style="margin-top: 2rem; font-weight: 600;">
      Vertical table with custom row header templates
    </h4>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columnsWithHeaderTemplate}}
      @dataKey="id"
      @layout="vertical"
      @showGridlines={{true}}
    />
  </template>
}
