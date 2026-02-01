import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxCheckbox } from 'uls-components';

export default class BasicCheckboxDemo extends Component {
  @tracked items = [
    { label: 'All Event Days', checked: true },
    { label: 'Selected Event Days', checked: false },
    { label: 'Custom Dates', checked: false },
  ];

  get requiredRules() {
    return { required: true };
  }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gp8 mgb14">
      <UlxCheckbox
        @label="Event Day"
        @rules={{this.requiredRules}}
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
      />
    </div>
  </template>
}
