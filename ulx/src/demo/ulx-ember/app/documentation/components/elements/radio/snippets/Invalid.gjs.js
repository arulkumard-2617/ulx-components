export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxRadio, t } from 'ulx-components';

export default class InvalidRadioDemo extends Component {
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

  get error() {
    // \`UlxCheckbox\` expects a *field-level* string error message (not per-item).
    // Example validation: require at least one item to be checked.
    const hasAtLeastOneChecked = this.items.some((i) => i.checked);
    return hasAtLeastOneChecked ? undefined : t('msg.select.at.least.one');
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
        @label={{t "lbl.with.label"}}
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText={{t "lbl.help.text"}}
        @error={{this.error}}
      />

      <div class="col-12">
        {{t "lbl.selected"}}:
        <strong>{{this.selectedValue}}</strong>
      </div>
    </div>
  </template>
}

`;
