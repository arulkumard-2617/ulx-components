export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDropdown, UlxFloatLabel, t } from 'ulx-components';

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
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxFloatLabel
        @customClass="col-4"
        @label={{t "lbl.dropdown.float.label.city"}}
        @value={{this.selectedCity}}
      >
        <:default as |fl|>
          <UlxDropdown
            @id="city-float"
            @options={{this.cities}}
            @value={{this.selectedCity}}
            @onChange={{this.setSelectedCity}}
            @placeholder={{t "msg.dropdown.placeholder.city"}}
            @onFocus={{fl.onFocus}}
            @onBlur={{fl.onBlur}}
          />
        </:default>
      </UlxFloatLabel>
    </div>
  </template>
}

`;
