export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSlider, t } from 'ulx-components';

export default class BasicSliderDemo extends Component {
  @tracked value = 50;

  @action
  handleChange(nextValue) {
    this.value = Number(nextValue);
  }

  <template>
    <UlxSlider
      @value={{this.value}}
      @onChange={{this.handleChange}}
      @size="w-300 s-size"
    />
  </template>
}

`;

