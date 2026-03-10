import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxRadio } from 'ulx-components';

export default class BasicRadioDemo extends Component {
  @tracked items = [{ label: 'Item 1', value: 'item1', checked: false }];

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
      <UlxRadio
        @rules={{this.requiredRules}}
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
      />

      <div class="col-12">
        Selected:
        <strong>{{this.selectedValue}}</strong>
      </div>
    </div>
  </template>
}
