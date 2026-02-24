export default `
import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

const columns = [
  { field: 'code',     header: 'Code',     sortable: true },
  { field: 'name',     header: 'Name',     sortable: true },
  { field: 'category', header: 'Category', sortable: true },
  { field: 'price',    header: 'Price',    sortable: true },
];

export default class SortTableDemo extends Component {
  products = [...];
  columns = columns;

  <template>
    {{! Single sort }}
    <UlxTable @value={{this.products}} @columns={{this.columns}} @dataKey="id" @sortMode="single" @removableSort={{true}} />

    {{! Multi sort - hold Ctrl/Cmd and click }}
    <UlxTable @value={{this.products}} @columns={{this.columns}} @dataKey="id" @sortMode="multiple" />
  </template>
}
`;
