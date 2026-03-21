import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxCheckbox, UlxField } from 'ulx-components';

export default class BasicCheckboxDemo extends Component {
  @tracked items = [{ label: 'All Event Days', checked: true }];

  get requiredRules() {
    return { required: true };
  }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @rules={{this.requiredRules}}
        @fieldClass="col-12"
        @fieldId="checkbox-basic"
      >
        <:control as |field|>
          <UlxCheckbox
            @key={{field.key}}
            @rules={{this.requiredRules}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @items={{this.items}}
            @onItemChange={{this.handleItemChange}}
          />
        </:control>
      </UlxField>
    </div>
  </template>
}
