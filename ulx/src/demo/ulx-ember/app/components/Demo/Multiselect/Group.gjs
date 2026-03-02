import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, t } from 'ulx-components';

const GROUPED_CITIES = [
  {
    label: 'USA',
    items: [
      { label: 'New York', value: 'NY' },
      { label: 'Chicago', value: 'CHI' },
      { label: 'Los Angeles', value: 'LA' },
    ],
  },
  {
    label: 'France',
    items: [
      { label: 'Paris', value: 'PRS' },
      { label: 'Lyon', value: 'LYN' },
      { label: 'Marseille', value: 'MRS' },
    ],
  },
  {
    label: 'Germany',
    items: [
      { label: 'Berlin', value: 'BER' },
      { label: 'Munich', value: 'MUC' },
    ],
  },
];

export default class DemoMultiselectGroup extends Component {
  @tracked selected = [];
  @tracked groupedCities = GROUPED_CITIES;

  @action
  setSelected(value) {
    this.selected = value;
  }

  <template>
    <div class="ulx-form s-size ulx-grid gap-8 mb-14">
      <UlxMultiSelect
        @options={{this.groupedCities}}
        @optionGroupLabel="label"
        @optionGroupChildren="items"
        @value={{this.selected}}
        @display="chip"
        @onChange={{this.setSelected}}
        @selectAll={{true}}
        @placeholder={{t "msg.multiselect.placeholder.city"}}
        @label={{t "lbl.group"}}
        @fieldClass="col-4"
      />
    </div>
  </template>
}
