import Component from '@glimmer/component';
import { UlxTable, UlxSkeleton } from 'ulx-components';

const ITEMS = Array.from({ length: 5 }, (_, i) => ({ id: i }));

const COLUMNS = [
  { field: 'code', header: 'Code', style: 'width: 25%', body: UlxSkeleton },
  { field: 'name', header: 'Name', style: 'width: 25%', body: UlxSkeleton },
  { field: 'category', header: 'Category', style: 'width: 25%', body: UlxSkeleton },
  { field: 'quantity', header: 'Quantity', style: 'width: 25%', body: UlxSkeleton },
];

export default class DemoSkeletonDataTable extends Component {
  items = ITEMS;
  columns = COLUMNS;

  <template>
    <UlxTable
      @value={{this.items}}
      @columns={{this.columns}}
      @dataKey="id"
      @stripedRows={{true}}
    />
  </template>
}
