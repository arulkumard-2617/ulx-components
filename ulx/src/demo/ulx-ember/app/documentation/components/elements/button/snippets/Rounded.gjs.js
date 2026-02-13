export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonRounded extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label={{t "lbl.primary"}} @rounded={{true}} />
      <UlxButton @label={{t "lbl.secondary"}} @rounded={{true}} @variant="secondary" />
      <UlxButton @label={{t "lbl.success"}} @rounded={{true}} @variant="success" />
      <UlxButton @label={{t "lbl.info"}} @rounded={{true}} @variant="info" />
      <UlxButton @label={{t "lbl.warning"}} @rounded={{true}} @variant="warning" />
      <UlxButton @label={{t "lbl.danger"}} @rounded={{true}} @variant="danger" />
    </div>
  </template>
}

`;
