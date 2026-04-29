import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSelectButton, UlxIcon, t } from 'ulx-components';

export default class DemoSelectButtonTemplate extends Component {
  @tracked value = 'left';

  get justifyOptions() {
    return [
      { value: 'left', icon: 'left-align-icon' },
      { value: 'center', icon: 'center-align-icon' },
      { value: 'right', icon: 'right-align-icon' },
    ];
  }

  @action
  onChange(newValue) {
    this.value = newValue;
  }

  <template>
    <UlxSelectButton
      @options={{this.justifyOptions}}
      @value={{this.value}}
      @onChange={{this.onChange}}
      @optionLabel="value"
      @ariaLabel="Alignment"
    >
      <:item as |option|>
        <UlxIcon
          @iconName={{option.icon}}
          @type="font"
          @componentClass="bs-icons1"
          aria-hidden="true"
          @size="s18"
        />
      </:item>
    </UlxSelectButton>
  </template>
}
