export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, UlxField, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
];

export default class DemoMultiselectFloatLabel extends Component {
  @tracked selected = [];

  get items() {
    return CITIES;
  }

  @action
  setSelected(value) {
    this.selected = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField @fieldId="multiselect-float-label" @fieldClass="col-6">
        <:control as |field|>
          <UlxMultiSelect
            @key={{field.key}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @options={{this.items}}
            @value={{this.selected}}
            @onChange={{this.setSelected}}
            @selectAll={{true}}
            @floatLabel={{true}}
            @placeholder={{t "msg.multiselect.placeholder.city"}}
            @label={{t "lbl.dropdown.float.label.city"}}
          />
        </:control>
      </UlxField>
    </div>
  </template>
}

`;
