import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, UlxField, t } from 'ulx-components';

const CITIES = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
];

export default class DemoMultiselectAccessibility extends Component {
  @tracked selected = [];
  @tracked cities = CITIES;

  get items() {
    return this.cities;
  }

  @action
  setSelected(value) {
    this.selected = value;
  }

  @action
  addCity(label) {
    const nextLabel = (label ?? "").trim();
    if (!nextLabel) return;
    const normalized = nextLabel.toLowerCase();
    const exists = this.cities.some((city) => city.label.toLowerCase() === normalized);
    if (exists) return;
    const nextValue = nextLabel.toUpperCase().replace(/\s+/g, "_");
    this.cities = [...this.cities, { label: nextLabel, value: nextValue }];
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="Accessible MultiSelect"
        @fieldId="a11y-multiselect"
        @fieldClass="col-4"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.items}}
          @value={{this.selected}}
          @onChange={{this.setSelected}}
          @filter={{true}}
          @selectAll={{true}}
          @allowAddition={{true}}
          @showClose={{true}}
          @onAddItem={{this.addCity}}
          @placeholder="Select cities"
          aria-label={{"Choose items"}}
        />
      </UlxField>
    </div>
  </template>
}
