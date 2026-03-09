export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDropdown, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
];

export default class DemoDropdownFilled extends Component {
  @tracked selectedCity = null;

  get cities() {
    return CITIES;
  }

  @action
  setSelectedCity(value) {
    this.selectedCity = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxDropdown
        @options={{this.cities}}
        @value={{this.selectedCity}}
        @onChange={{this.setSelectedCity}}
        @filled={{true}}
        @placeholder={{t "msg.dropdown.placeholder.city"}}
        @label={{t "lbl.dropdown.filled"}}
        @fieldClass="col-4"
      />
    </div>
  </template>
}

`;
