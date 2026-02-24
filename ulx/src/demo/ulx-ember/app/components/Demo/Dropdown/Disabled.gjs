import Component from '@glimmer/component';
import { UlxDropdown, t } from 'ulx-components';

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
    <div class="ulx-form s-size ulx-grid gap-8 mb-14">
      <UlxDropdown
        @options={{this.cities}}
        @value="NY"
        @disabled={{true}}
        @placeholder={{t "msg.dropdown.placeholder.city"}}
        @label={{t "lbl.dropdown.disabled"}}
        @fieldClass="col-4"
      />
    </div>
  </template>
}
