import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, UlxField, t } from 'ulx-components';

export default class DemoMultiselectVirtualScroll extends Component {
  @tracked selected = [];

  get manyOptions() {
    return Array.from({ length: 1000 }, (_, i) => ({
      label: t('msg.dropdown.option.n', { number: i + 1 }),
      value: `opt-${i + 1}`,
    }));
  }

  @action
  setSelected(value) {
    this.selected = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label={{t "lbl.dropdown.virtual.scroll"}}
        @fieldId="multiselect-virtual-scroll"
        @fieldClass="col-4"
      >
        <:control as |field|>
          <UlxMultiSelect
            @key={{field.key}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @options={{this.manyOptions}}
            @value={{this.selected}}
            @onChange={{this.setSelected}}
            @scrollHeight="300px"
            @selectAll={{true}}
            @placeholder={{t "msg.dropdown.select.virtual"}}
          />
        </:control>
      </UlxField>
    </div>
  </template>
}
