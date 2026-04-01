export default `
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

export default class DemoMultiselectFilter extends Component {
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
        @label={{t "lbl.dropdown.filter"}}
        @fieldId="multiselect-filter"
        @fieldClass="col-4"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selected}}
          @onChange={{this.setSelected}}
          @selectAll={{true}}
          @selectAllLabel=""
          @filter={{true}}
          @filterPlaceholder={{t "msg.multiselect.filter.placeholder"}}
          @placeholder={{t "msg.multiselect.placeholder.city"}}
        />
      </UlxField>
    </div>
  </template>
}

`;
