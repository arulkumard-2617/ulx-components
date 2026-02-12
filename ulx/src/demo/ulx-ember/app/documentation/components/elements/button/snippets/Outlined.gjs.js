export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonOutlined extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label={{t "lbl.primary"}} @outlined={{true}} />
      <UlxButton @label={{t "lbl.secondary"}} @outlined={{true}} @variant="secondary" />
      <UlxButton @label={{t "lbl.success"}} @outlined={{true}} @variant="success" />
      <UlxButton @label={{t "lbl.info"}} @outlined={{true}} @variant="info" />
      <UlxButton @label={{t "lbl.warning"}} @outlined={{true}} @variant="warning" />
      <UlxButton @label={{t "lbl.danger"}} @outlined={{true}} @variant="danger" />
    </div>
  </template>
}

`;
