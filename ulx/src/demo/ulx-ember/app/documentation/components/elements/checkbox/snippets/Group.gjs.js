export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxCheckbox, t } from 'ulx-components';

export default class GroupDemoComponent extends Component {
  @tracked items = [
    { label: 'Item 1', checked: true },
    { label: 'Item 2', checked: false },
    { label: 'Item 3 (disabled)', checked: false, disabled: true },
  ];

  get error() {
    // Example validation: require at least one item to be checked.
    const hasAtLeastOneChecked = this.items.some((i) => i.checked);
    return hasAtLeastOneChecked ? undefined : t('msg.select.at.least.one');
  }

  @action
  handleItemChange(item, checked) {
    this.items = this.items.map((i) => (i === item ? { ...i, checked } : i));
  }

  <template>
    <div class="ulx-form s-size ulx-grid gap-8 mb-14">
      <UlxCheckbox
        @label={{t "lbl.group"}}
        @items={{this.items}}
        @onItemChange={{this.handleItemChange}}
        @helpText={{t "lbl.help.text"}}
        @fieldClass="col-12"
        @groupClass="horizontal"
        @error={{this.error}}
      />
    </div>
  </template>
}

`;
