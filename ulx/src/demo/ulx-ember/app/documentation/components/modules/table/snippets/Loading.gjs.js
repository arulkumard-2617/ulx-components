export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTable, UlxButton } from 'ulx-components';

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'price', header: 'Price ($)' },
];

export default class DemoTableLoading extends Component {
  products = [ /* data array */ ];
  columns = columns;

  @tracked isLoading = false;

  @action
  toggleLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  <template>
    <div class="mb-2">
      <UlxButton
        @label="Simulate Load"
        @icon="arrow-clockwise"
        @iconComponentClass="bs-icons1"
        @variant="secondary"
        @size="s-size"
        @onClick={{this.toggleLoading}}
      />
    </div>
    <UlxTable
      @value={{this.products}}
      @columns={{this.columns}}
      @dataKey="id"
      @loading={{this.isLoading}}
    />
  </template>
}
`;
