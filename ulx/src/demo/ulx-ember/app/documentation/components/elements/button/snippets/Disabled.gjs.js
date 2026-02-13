export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonDisabled extends Component {
  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButton @label={{t "lbl.submit"}} @disabled={{true}} />
    </div>
  </template>
}

`;
