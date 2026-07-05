export default `
import Component from '@glimmer/component';
import { UlxTable, UlxIcon } from 'ulx-components';

const PACKAGE = [
  {
    id: 1,
    collaterals: '15',
    videos: '5',
    complimentaryTickets: '2',
    leadScan: true,
    promotionalBanner: true,
    enquiries: true
  }
];

const ValueCell = <template>
  <span class="semibold-font">{{@value}}</span>
</template>;

const IncludedCell = <template>
  <UlxIcon
    @type="font"
    @iconName="ls-tick-filled-icon"
    @size="s18"
    @customClass="fg-green"
    aria-label="Included"
  />
</template>;

const COLUMNS = [
  { field: 'collaterals', header: 'Collaterals', body: ValueCell },
  { field: 'videos', header: 'Videos', body: ValueCell },
  {
    field: 'complimentaryTickets',
    header: 'Complimentary Tickets',
    body: ValueCell
  },
  { field: 'leadScan', header: 'Lead scan', body: IncludedCell },
  { field: 'promotionalBanner', header: 'Promotional Banner', body: IncludedCell },
  { field: 'enquiries', header: 'Enquiries', body: IncludedCell }
];

export default class VerticalTableDemo extends Component {
  value = PACKAGE;
  columns = COLUMNS;

  <template>
    <UlxTable
      @value={{this.value}}
      @columns={{this.columns}}
      @dataKey="id"
      @layout="vertical"
      @showGridlines={{true}}
      @customClass="variant-yellow"
    />
  </template>
}

`;
