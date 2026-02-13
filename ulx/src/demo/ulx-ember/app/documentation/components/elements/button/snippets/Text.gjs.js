export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonText extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label={{t "lbl.primary"}} @text={{true}} />
      <UlxButton @label={{t "lbl.secondary"}} @text={{true}} @variant="secondary" />
      <UlxButton @label={{t "lbl.success"}} @text={{true}} @variant="success" />
      <UlxButton @label={{t "lbl.info"}} @text={{true}} @variant="info" />
      <UlxButton @label={{t "lbl.warning"}} @text={{true}} @variant="warning" />
      <UlxButton @label={{t "lbl.danger"}} @text={{true}} @variant="danger" />
    </div>
  </template>
}

`;
