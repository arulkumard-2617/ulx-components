export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMultiSelect, UlxField, t } from 'ulx-components';

export default class DemoMultiselectVirtualScroll extends Component {
  @tracked selected = [];

  get manyOptions() {
    return Array.from({ length: 1000 }, (_, i) => ({
      label: t('msg.dropdown.option.n', { number: i + 1 }),
      value: \`opt-\${i + 1}\`,
    }));
  }

  @action
  setSelected(value) {
    this.selected = value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-8 mb-14">
      <UlxField
        @label="Virtual Scroll"
        @fieldId="multiselect-virtual-scroll"
        @fieldClass="col-4"
        as |field|
      >
        <UlxMultiSelect
          @field={{field}}
          @options={{this.manyOptions}}
          @value={{this.selected}}
          @onChange={{this.setSelected}}
          @scrollHeight="300px"
          @selectAll={{true}}
          @placeholder="Select (virtual scroll)"
        />
      </UlxField>
    </div>
  </template>
}

`;
