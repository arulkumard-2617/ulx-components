export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxDropdown, UlxField, t } from 'ulx-components';

export default class DemoDropdownVirtualScroll extends Component {
  @tracked selectedOption = null;

  get manyOptions() {
    return Array.from({ length: 1000 }, (_, i) => ({
      label: t('msg.dropdown.option.n', { number: i + 1 }),
      value: \`opt-\${i + 1}\`,
    }));
  }

  @action
  setSelectedOption(value) {
    this.selectedOption = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label={{t "lbl.dropdown.virtual.scroll"}}
        @fieldId="dropdown-virtual"
        @fieldClass="col-4"
        as |field|
      >
        <UlxDropdown
          @field={{field}}
          @options={{this.manyOptions}}
          @value={{this.selectedOption}}
          @onChange={{this.setSelectedOption}}
          @scrollHeight="300px"
          @placeholder={{t "msg.dropdown.select.virtual"}}
        />
      </UlxField>
    </div>
  </template>
}

`;
