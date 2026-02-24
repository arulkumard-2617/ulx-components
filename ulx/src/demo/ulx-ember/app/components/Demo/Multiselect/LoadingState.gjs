import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
];

export default class DemoMultiselectLoadingState extends Component {
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
        @loading={{true}}
        @placeholder={{t "msg.multiselect.placeholder.city"}}
        @label={{t "lbl.loading.state"}}
        @fieldClass="col-4"
      />
    </div>
  </template>
}
