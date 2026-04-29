import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSlider, t } from 'ulx-components';

export default class StepSliderDemo extends Component {
  @tracked value = 40;

  @action
  handleChange(nextValue) {
    this.value = Number(nextValue);
  }

  <template>
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <span class="text-12 fg-secondary">{{t "lbl.value"}}:</span>
        <span class="text-12 font-semibold">{{this.value}}</span>
        <span class="text-12 fg-secondary">({{t "lbl.step"}}: 10)</span>
      </div>
      <UlxSlider
        @value={{this.value}}
        @onChange={{this.handleChange}}
        @size="w-300 s-size"
        @step={{10}}
        @withSteps={{true}}
      />
    </div>
  </template>
}
