import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxCheckbox, UlxField, t } from 'ulx-components';

export default class WithlabelDemoComponent extends Component {
  @tracked items = [
    { label: 'All Event Days', checked: false },
    { label: 'Single Event Days', checked: false },
  ];

  get requiredRules() {
    return { required: true };
  }

  get error() {
    // `UlxCheckbox` expects a *field-level* string error message (not per-item).
    // Example validation: require at least one item to be checked.
    const hasAtLeastOneChecked = this.items.some((i) => i.checked);
    return hasAtLeastOneChecked ? undefined : "Select at least one option.";
  }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="With Label"
        @rules={{this.requiredRules}}
        @helpText="Help text"
        @error={{this.error}}
        @fieldClass="col-12"
        @fieldId="checkbox-invalid"
        as |field|
      >
        <UlxCheckbox
          @field={{field}}
          @items={{this.items}}
          @onItemChange={{this.handleItemChange}}
        />
      </UlxField>
    </div>
  </template>
}
