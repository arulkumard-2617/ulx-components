export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonBasic extends Component {
  <template>
    <div class="flex gap-3 align-items-center">
      <UlxButton @label={{t "lbl.click.me"}} />
      <UlxButton @label={{t "lbl.submit"}} @variant="success" />
      <UlxButton @label={{t "lbl.delete"}} @variant="danger" />
    </div>
  </template>
}

`;
