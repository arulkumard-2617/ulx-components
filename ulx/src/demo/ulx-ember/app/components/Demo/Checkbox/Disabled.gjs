import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxCheckbox } from 'uls-components';

export default class WithlabelDemoComponent extends Component {
  @tracked items = [
    { label: 'All Event Days', checked: false, disabled: true },
    { label: 'Single Event Days', checked: false },
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
        @label="With Label"
        @rules={{this.requiredRules}}
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText="Help text"
      />
    </div>
  </template>
}
