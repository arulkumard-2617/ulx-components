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
    <div class="ulx-flex ulx-flex-col gap-2">
      <div class="ulx-flex ulx-items-center gap-2">
        <span class="text-12 fg-secondary">{{t 'lbl.value'}}:</span>
        <span class="text-12 font-semibold">{{this.value}}</span>
        <span class="text-12 fg-secondary">({{t 'lbl.step'}}: 10)</span>
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

