import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, t } from 'ulx-components';

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
    <div class="ulx-form s-size ulx-grid gap-8 mb-14">
      <UlxMultiSelect
        @options={{this.items}}
        @value={{this.selected}}
        @onChange={{this.setSelected}}
        @selectAll={{true}}
        @filter={{true}}
        @filterPlaceholder={{t "msg.multiselect.filter.placeholder"}}
        @placeholder={{t "msg.multiselect.placeholder.city"}}
        @label={{t "lbl.dropdown.filter"}}
        @fieldClass="col-4"
      />
    </div>
  </template>
}
