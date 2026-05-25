export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, UlxField } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Chicago', value: 'CHI' },
  { label: 'Los Angeles', value: 'LA' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' }
];

export default class DemoMultiselectChips extends Component {
  /** Pre-filled for narrow layout to show single-line truncation vs wrapping. */
  @tracked selectedTruncated = ['NY', 'CHI', 'LA', 'RM', 'LDN'];

  @tracked selectedWrap = ['NY', 'CHI', 'LA', 'RM', 'LDN'];

  get items() {
    return CITIES;
  }

  @action
  setSelectedTruncated(value) {
    this.selectedTruncated = value;
  }

  @action
  setSelectedWrap(value) {
    this.selectedWrap = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid">
      <UlxField
        @label="Chips (single line, ellipsis when full)"
        @fieldId="multiselect-chips-truncate"
        @fieldClass="col-12"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selectedTruncated}}
          @onChange={{this.setSelectedTruncated}}
          @selectAll={{true}}
          @display="chip"
          @placeholder="Select cities"
        />
      </UlxField>
      <UlxField
        @label="Chips (wrap when full)"
        @fieldId="multiselect-chips-wrap"
        @fieldClass="col-6"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selectedWrap}}
          @onChange={{this.setSelectedWrap}}
          @selectAll={{true}}
          @display="chip"
          @chipWrap={{true}}
          @placeholder="Select cities"
        />
      </UlxField>
    </div>
  </template>
}

`;
