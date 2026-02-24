export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxCheckbox, t } from 'ulx-components';

export default class WithlabelDemoComponent extends Component {
  @tracked items = [
    { label: 'All Event Days', checked: true },
    { label: 'Single Event Days', checked: true },
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
    <div class="ulx-form s-size ulx-grid gap-8 mb-14">
      <UlxCheckbox
        @label={{t "lbl.with.label"}}
        @rules={{this.requiredRules}}
        @size="s-size"
        @fieldClass="col-12"
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText={{t "lbl.help.text"}}
        {{!-- @error={{this.error}} --}}
      />
    </div>
  </template>
}

`;
