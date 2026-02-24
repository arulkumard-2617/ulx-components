import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDropdown, t } from 'ulx-components';

export default class DemoDropdownVirtualScroll extends Component {
  @tracked selectedOption = null;

  get manyOptions() {
    return Array.from({ length: 1000 }, (_, i) => ({
      label: t('msg.dropdown.option.n', { number: i + 1 }),
      value: `opt-${i + 1}`,
    }));
  }

  @action
  setSelectedOption(value) {
    this.selectedOption = value;
  }

  <template>
    <div class="ulx-form s-size ulx-grid gap-8 mb-14">
      <UlxDropdown
        @options={{this.manyOptions}}
        @value={{this.selectedOption}}
        @onChange={{this.setSelectedOption}}
        @scrollHeight="300px"
        @placeholder={{t "msg.dropdown.select.virtual"}}
        @label={{t "lbl.dropdown.virtual.scroll"}}
        @fieldClass="col-4"
      />
    </div>
  </template>
}
