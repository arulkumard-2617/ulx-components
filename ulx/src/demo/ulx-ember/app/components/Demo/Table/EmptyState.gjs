import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable, UlxButton, UlxEmptyState, t } from 'ulx-components';

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    category: 'Accessories',
    price: 65,
  },
  {
    id: 2,
    code: 'nvklal433',
    name: 'Black Watch',
    category: 'Accessories',
    price: 72,
  },
  {
    id: 3,
    code: 'zz21cz3c1',
    name: 'Blue Band',
    category: 'Fitness',
    price: 79,
  },
];

const TABLE_COLUMNS = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

export default class DemoTableEmptyState extends Component {
  @tracked products = [];

  columns = TABLE_COLUMNS;

  @action
  clearProducts() {
    this.products = [];
  }

  @action
  resetProducts() {
    this.products = SAMPLE_PRODUCTS;
  }

  <template>
    <div class="mb-2 flex gap-2">
      <UlxButton @label="Reset" @onClick={{this.resetProducts}} />
      <UlxButton
        @label={{t "lbl.clear"}}
        @variant="basic"
        @onClick={{this.clearProducts}}
      />
    </div>

    <UlxTable @value={{this.products}} @columns={{this.columns}} @dataKey="id">
      <:emptyMessage>
        <UlxEmptyState
          @headerText="msg.empty.state.title"
          @subHeaderText="msg.empty.state.subtitle"
          @iconName="event-past-icon"
          @iconSize="s32"
        />
      </:emptyMessage>
    </UlxTable>
  </template>
}
