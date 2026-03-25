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

export default class DemoMultiselectAllowAddition extends Component {
  @tracked selected = [];
  @tracked addedOptions = [];

  get items() {
    return [...CITIES, ...this.addedOptions];
  }

  @action
  setSelected(value) {
    this.selected = value;
  }

  @action
  handleAddItem(filterValue) {
    const trimmed = (filterValue ?? '').trim();
    if (!trimmed) return;
    const newOption = { label: trimmed, value: trimmed };
    this.addedOptions = [...this.addedOptions, newOption];
    this.selected = [...this.selected, trimmed];
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label={{t "lbl.multiselect.tags"}}
        @helpText={{t "msg.multiselect.tags.help"}}
        @fieldId="multiselect-allow-addition"
        @fieldClass="col-8"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selected}}
          @onChange={{this.setSelected}}
          @filter={{true}}
          @allowAddition={{true}}
          @onAddItem={{this.handleAddItem}}
          @filterPlaceholder={{t "msg.multiselect.filter.placeholder"}}
          @placeholder={{t "msg.multiselect.filter.placeholder"}}
        />
      </UlxField>
    </div>
  </template>
}
