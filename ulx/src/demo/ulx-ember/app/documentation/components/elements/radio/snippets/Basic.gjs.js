export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxField, UlxRadio, t } from 'ulx-components';

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
      <UlxField
        @label={{t "lbl.with.label"}}
        @rules={{this.requiredRules}}
        @fieldClass="col-12"
        @id="radio-basic"
      >
        <:control as |field|>
          <UlxRadio
            @key={{field.key}}
            @rules={{this.requiredRules}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @items={{this.items}}
            @onItemChange={{this.handleItemChange}}
          />
        </:control>
      </UlxField>

      <div class="col-12">
        {{t "lbl.selected"}}:
        <strong>{{this.selectedValue}}</strong>
      </div>
    </div>
  </template>
}

`;
