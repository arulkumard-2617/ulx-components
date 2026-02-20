import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDropdown, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PAR' },
];

export default class DemoDropdownFloatLabel extends Component {
  @tracked selectedCity = null;

  get cities() {
    return CITIES;
  }

  @action
  setSelectedCity(value) {
    this.selectedCity = value;
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxDropdown
        @options={{this.cities}}
        @value={{this.selectedCity}}
        @onChange={{this.setSelectedCity}}
        @floatLabel={{true}}
        @placeholder={{t "msg.dropdown.placeholder.city"}}
        @label={{t "lbl.dropdown.float.label.city"}}
        @fieldClass="col-4"
      />
    </div>
  </template>
}
