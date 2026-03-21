import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDropdown, UlxField, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

export default class DemoDropdownEditable extends Component {
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
      <UlxField
        @label={{t "lbl.dropdown.editable"}}
        @fieldId="dropdown-editable"
        @fieldClass="col-4"
      >
        <:control as |field|>
          <UlxDropdown
            @key={{field.key}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @options={{this.cities}}
            @value={{this.selectedCity}}
            @onChange={{this.setSelectedCity}}
            @editable={{true}}
            @placeholder={{t "msg.dropdown.select.or.type"}}
          />

        </:control>
      </UlxField>
    </div>
  </template>
}
