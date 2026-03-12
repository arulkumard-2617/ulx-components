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

export default class DemoDropdownAccessibility extends Component {
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
        id="a11y-dropdown"
        @options={{this.cities}}
        @value={{this.selectedCity}}
        @onChange={{this.setSelectedCity}}
        @placeholder={{t "msg.dropdown.placeholder.city"}}
        @label={{t "lbl.dropdown.accessible"}}
        @fieldClass="col-4"
        aria-label={{t "msg.dropdown.choose.city"}}
      />
    </div>
  </template>
}

`;
