import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSelectButton, t } from 'ulx-components';

export default class DemoSelectButtonInvalid extends Component {
  @tracked value = null;

  get options() {
    return [
      { label: 'Off', value: 'off' },
      { label: 'On', value: 'on' },
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
      @invalid={{true}}
      @ariaLabel={{t "demo.selectbutton.choose.option"}}
    />
  </template>
}
