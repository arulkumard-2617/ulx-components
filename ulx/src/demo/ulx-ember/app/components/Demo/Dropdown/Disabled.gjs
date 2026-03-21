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
        @label={{t "lbl.dropdown.disabled"}}
        @fieldId="dropdown-disabled"
        @fieldClass="col-4"
      >
        <:control as |field|>
          <UlxDropdown
            @key={{field.key}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @options={{this.cities}}
            @value="NY"
            @disabled={{true}}
            @placeholder={{t "msg.dropdown.placeholder.city"}}
          />
        </:control>
      </UlxField>
    </div>
  </template>
}
