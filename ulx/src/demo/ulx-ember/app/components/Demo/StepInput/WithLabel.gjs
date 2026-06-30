import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxStepInput } from 'ulx-components';

export default class DemoStepInputWithLabel extends Component {
  @tracked hours = 2;

  hourMin = 0;
  hourMax = 23;

  get hourRules() {
    return {
      min: { value: this.hourMin },
      max: { value: this.hourMax }
    };
  }

  @action
  updateHours(value) {
    this.hours = value;
  }

  <template>
    <UlxStepInput
      @size="m-size"
      @value={{this.hours}}
      @rules={{this.hourRules}}
      @onChange={{this.updateHours}}
      @label="hr"
      @inputCustomClass="w-60"
      aria-label="Hours"
    />
  </template>
}
