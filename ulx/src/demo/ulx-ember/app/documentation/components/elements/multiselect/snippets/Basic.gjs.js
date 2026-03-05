export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

const CITIES_20 = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
  { label: 'Tokyo', value: 'TKY' },
  { label: 'Sydney', value: 'SYD' },
  { label: 'Dubai', value: 'DXB' },
  { label: 'Singapore', value: 'SGP' },
  { label: 'Toronto', value: 'TOR' },
  { label: 'Berlin', value: 'BER' },
  { label: 'Madrid', value: 'MAD' },
  { label: 'Barcelona', value: 'BCN' },
  { label: 'Amsterdam', value: 'AMS' },
  { label: 'Lisbon', value: 'LIS' },
  { label: 'Zurich', value: 'ZRH' },
  { label: 'Stockholm', value: 'STO' },
  { label: 'Copenhagen', value: 'CPH' },
  { label: 'Vienna', value: 'VIE' },
  { label: 'Prague', value: 'PRG' },
];

export default class DemoMultiselectBasic extends Component {
  @tracked selected = [];
  @tracked selectedSearch = [];

  get items() {
    return CITIES;
  }

  get items20() {
    return CITIES_20;
  }

  @action
  setSelected(value) {
    this.selected = value;
  }

  @action
  setSelectedSearch(value) {
    this.selectedSearch = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-12 mb-14">
      <UlxMultiSelect
        id="multiselect-basic"
        @options={{this.items}}
        @value={{this.selected}}
        @onChange={{this.setSelected}}
        @showClear={{true}}
        @placeholder={{t "msg.multiselect.placeholder.city"}}
        @label={{t "lbl.multiselect.basic"}}
        @fieldClass="col-6"
      />

      <UlxMultiSelect
        id="multiselect-basic-search"
        @options={{this.items20}}
        @value={{this.selectedSearch}}
        @onChange={{this.setSelectedSearch}}
        @selectAll={{true}}
        @filter={{true}}
        @showClear={{true}}
        @placeholder={{t "msg.multiselect.placeholder.city"}}
        @label="Basic with Search (20 items)"
        @fieldClass="col-6"
      />
    </div>
  </template>
}

`;
