export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxStepInput } from 'ulx-components';

export default class DemoStepInputMinMax extends Component {
  @tracked value = 10;

  min = 0;
  max = 100;
  step = 5;

  @action
  handleChange(nextValue) {
    this.value = nextValue;
  }

  <template>
    <div class="flex flex-col gap-2">
      <UlxStepInput
        @value={{this.value}}
        @min={{this.min}}
        @max={{this.max}}
        @step={{this.step}}
        @onChange={{this.handleChange}}
        @inputCustomClass="w-80"
        aria-label="Percentage"
      />
      <span class="text-12 fg-secondary">Min {{this.min}}, max {{this.max}}, step {{this.step}}</span>
    </div>
  </template>
}

`;
