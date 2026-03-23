export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxCheckbox, UlxField, t } from 'ulx-components';

export default class WithlabelDemoComponent extends Component {
  @tracked items = [
    { label: 'All Event Days', checked: true },
    { label: 'Single Event Days', checked: true },
    { label: 'Multi Event Days', checked: true },
  ];

  get requiredRules() {
    return { required: true };
  }

  // get error() {
  //   // \`UlxCheckbox\` expects a *field-level* string error message (not per-item).
  //   // Example validation: require at least one item to be checked.
  //   const hasAtLeastOneChecked = this.items.some((i) => i.checked);
  //   return hasAtLeastOneChecked ? undefined : 'Select at least one option.';
  // }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label={{t "lbl.with.label"}}
        @rules={{this.requiredRules}}
        @helpText={{t "lbl.help.text"}}
        @fieldClass="col-12"
        @fieldId="checkbox-with-label"
      >
        <:default as |field|>
          <UlxCheckbox
            @key={{field.key}}
            @rules={{this.requiredRules}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @items={{this.items}}
            @onItemChange={{this.handleItemChange}}
          />
        </:default>
      </UlxField>
    </div>
  </template>
}

`;
