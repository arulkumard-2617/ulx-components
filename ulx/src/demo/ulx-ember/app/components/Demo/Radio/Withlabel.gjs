import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxField, UlxRadio, t } from 'ulx-components';

export default class BasicRadioDemo extends Component {
  @tracked items = [
    { label: 'Item 1', value: 'item1', checked: false },
    { label: 'Item 2', value: 'item2', checked: false },
    { label: 'Item 3', value: 'item3', checked: false },
  ];

  get requiredRules() {
    return { required: true };
  }

  get selectedValue() {
    return this.items.find((i) => i.checked)?.value;
  }

  @action
  handleItemChange(item, checked) {
    // Radios are single-select: when one is checked, the rest must be unchecked.
    if (!checked) return;
    this.items = this.items.map((i) => ({ ...i, checked: i === item }));
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="With Label"
        @labelFor={{false}}
        @rules={{this.requiredRules}}
        @helpText="Help text"
        @fieldClass="col-12"
        @fieldId="radio-with-label"
        as |field|
      >
        <UlxRadio
          @field={{field}}
          @items={{this.items}}
          @onItemChange={{this.handleItemChange}}
        />
      </UlxField>

      <div class="col-12">
        {{"Selected:"}}:
        <strong>{{this.selectedValue}}</strong>
      </div>
    </div>
  </template>
}
