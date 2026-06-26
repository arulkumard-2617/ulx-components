export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxStepInput } from 'ulx-components';

export default class DemoStepInputBasic extends Component {
  @tracked value = 4;

  @action
  handleChange(nextValue) {
    this.value = nextValue;
  }

  <template>
    <UlxStepInput
      @value={{this.value}}
      @onChange={{this.handleChange}}
      @inputCustomClass="w-60"
      aria-label="Quantity"
    />
  </template>
}

`;
