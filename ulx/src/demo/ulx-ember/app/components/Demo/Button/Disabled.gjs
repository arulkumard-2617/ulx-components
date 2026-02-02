import Component from '@glimmer/component';
import { UlxButton } from 'uls-components';

export default class DemoButtonDisabled extends Component {
  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButton @label="Submit" @disabled={{true}} />
    </div>
  </template>
}
