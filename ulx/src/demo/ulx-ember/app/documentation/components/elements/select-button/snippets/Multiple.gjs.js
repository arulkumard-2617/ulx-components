export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSelectButton, t } from 'ulx-components';

export default class DemoSelectButtonMultiple extends Component {
  @tracked value = [];

  get options() {
    return [
      { name: 'Option 1', value: 'opt1' },
      { name: 'Option 2', value: 'opt2' },
      { name: 'Option 3', value: 'opt3' },
    ];
  }

  @action
  onChange(newValue) {
    this.value = newValue;
  }

  <template>
    <UlxSelectButton
      @options={{this.options}}
      @value={{this.value}}
      @onChange={{this.onChange}}
      @optionLabel="name"
      @optionValue="value"
      @multiple={{true}}
      @ariaLabel={{this.options}}
    />
  </template>
}

`;
