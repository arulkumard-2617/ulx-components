import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDropdown, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
];

export default class DemoDropdownClearIcon extends Component {
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
        @showClear={{true}}
        @placeholder={{t "msg.dropdown.placeholder.city"}}
        @label={{t "lbl.dropdown.clear.icon"}}
        @fieldClass="col-4"
      />
    </div>
  </template>
}
