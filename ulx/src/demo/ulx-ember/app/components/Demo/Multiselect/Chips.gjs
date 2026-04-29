import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, UlxField, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
];

export default class DemoMultiselectChips extends Component {
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
      <UlxField
        @label="Chips"
        @fieldId="multiselect-chips"
        @fieldClass="col-6"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selected}}
          @onChange={{this.setSelected}}
          @selectAll={{true}}
          @display="chip"
          @placeholder="Select cities"
        />
      </UlxField>
    </div>
  </template>
}
