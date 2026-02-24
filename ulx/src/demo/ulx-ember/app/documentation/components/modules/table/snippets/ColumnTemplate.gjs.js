export default `
import Component from '@glimmer/component';
import { UlxTable } from 'ulx-components';

// Inline GJS component — defined in same file, receives @row, @value, @index
const PriceCell = <template>
  <strong>\${{@value}}</strong>
</template>;

const StatusCell = <template>
  <span class="uls-tag {{statusMap[@value]}} s-size">{{@value}}</span>
</template>;

const ActionsCell = <template>
  <button type="button" class="uls-button text primary xs-size" aria-label="View {{@row.name}}">
    <i class="bs-icons1 eye s14" aria-hidden="true"></i>
  </button>
</template>;

const columns = [
  { field: 'name',   header: 'Name',   sortable: true },
  { field: 'price',  header: 'Price',  sortable: true, body: PriceCell  },
  { field: 'status', header: 'Status', sortable: true, body: StatusCell },
  { header: 'Actions', body: ActionsCell },
];

export default class ColumnTemplateDemo extends Component {
  products = [...];
  columns = columns;

  <template>
    <UlxTable @value={{this.products}} @columns={{this.columns}} @dataKey="id" />
  </template>
}
`;
