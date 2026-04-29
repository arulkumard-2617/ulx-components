export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, UlxField, t } from 'ulx-components';

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
      <UlxField
        @label="Basic"
        @fieldId="multiselect-basic"
        @fieldClass="col-6"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selected}}
          @onChange={{this.setSelected}}
          @showClear={{true}}
          @placeholder="Select cities"
        />
      </UlxField>

      <UlxField
        @label="Basic with Search (20 items)"
        @fieldId="multiselect-basic-search"
        @fieldClass="col-6"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items20}}
          @value={{this.selectedSearch}}
          @onChange={{this.setSelectedSearch}}
          @selectAll={{true}}
          @filter={{true}}
          @showClear={{true}}
          @placeholder="Select cities"
        />
      </UlxField>
    </div>
  </template>
}

`;
