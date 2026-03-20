export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxCheckbox, UlxField, t } from 'ulx-components';

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
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label={{t "lbl.group"}}
        @helpText={{t "lbl.help.text"}}
        @error={{this.error}}
        @fieldClass="col-12"
        @id="checkbox-group"
      >
        <:control as |field|>
          <UlxCheckbox
            @id={{field.id}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @items={{this.items}}
            @onItemChange={{this.handleItemChange}}
            @groupClass="horizontal"
            @error={{this.error}}
          />
        </:control>
      </UlxField>
    </div>
  </template>
}

`;
