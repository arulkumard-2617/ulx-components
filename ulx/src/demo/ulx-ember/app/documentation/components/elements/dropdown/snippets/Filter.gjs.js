export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDropdown, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

export default class DemoDropdownFilter extends Component {
  @tracked selectedCity = null;

  get cities() {
    return CITIES;
  }

  @action
  setSelectedCity(value) {
    this.selectedCity = value;
  }

  <template>
    <div class="ulx-form s-size ulx-grid gap-8 mb-14">
      <UlxDropdown
        @options={{this.cities}}
        @value={{this.selectedCity}}
        @onChange={{this.setSelectedCity}}
        @filter={{true}}
        @filterPlaceholder={{t "msg.dropdown.search.cities"}}
        @placeholder={{t "msg.dropdown.placeholder.city"}}
        @label={{t "lbl.dropdown.filter"}}
        @fieldClass="col-4"
      />
    </div>
  </template>
}

`;
