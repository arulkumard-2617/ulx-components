import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSelectButton, t } from 'ulx-components';

export default class DemoSelectButtonDisabled extends Component {
  @tracked value = 'on';
  @tracked value2 = 'opt1';

  get options2() {
    return [
      { name: 'Option 1', value: 'opt1', disabled: false },
      { name: 'Option 2', value: 'opt2', disabled: true },
    ];
  }

  @action
  onChange(newValue) {
    this.value = newValue;
  }

  @action
  onChange2(newValue) {
    this.value2 = newValue;
  }

  <template>
    <div class="flex flex-col gap-3">
      <UlxSelectButton
        @options={{this.options2}}
        @value={{this.value2}}
        @onChange={{this.onChange2}}
        @optionLabel="name"
        @ariaLabel={{t "demo.selectbutton.aria.secondGroup"}}
      />
    </div>
  </template>
}
