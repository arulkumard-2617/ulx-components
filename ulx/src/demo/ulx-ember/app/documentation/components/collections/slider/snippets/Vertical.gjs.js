export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSlider, t } from 'ulx-components';

export default class VerticalSliderDemo extends Component {
  @tracked value = 60;

  @action
  handleValueChange(nextValue) {
    this.value = Number(nextValue);
  }

  <template>
    <UlxSlider
      @orientation="vertical"
      @value={{this.value}}
      @onChange={{this.handleValueChange}}
      @size="h-300 s-size"
    />
  </template>
}

`;
