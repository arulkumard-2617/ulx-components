export default `
import Component from '@glimmer/component';
import { UlxStepInput } from 'ulx-components';

export default class DemoStepInputDisabled extends Component {
  <template>
    <UlxStepInput
      @value={{12}}
      @disabled={{true}}
      @label="px"
      @inputCustomClass="w-60"
      aria-label="Padding"
    />
  </template>
}

`;
