export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonDisabled extends Component {
  <template>
    <div class="flex items-center wrap gap-md">
      <UlxButton @label="Submit" @disabled={{true}} />
    </div>
  </template>
}

`;
