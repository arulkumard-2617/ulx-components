import Component from '@glimmer/component';
import { UlxDropdown, UlxField, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
];

export default class DemoDropdownDisabled extends Component {
  get cities() {
    return CITIES;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="Disabled"
        @fieldId="dropdown-disabled"
        @fieldClass="col-4"
        as |field|
      >
        <UlxDropdown
          @field={{field}}
          @options={{this.cities}}
          @value="NY"
          @disabled={{true}}
          @placeholder="Select a city"
        />
      </UlxField>
    </div>
  </template>
}
