export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonVariants extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxButton @label="Basic" @variant="basic" />
      <UlxButton @label={{t "lbl.primary"}} @variant="primary" />
      <UlxButton @label={{t "lbl.secondary"}} @variant="secondary" />
      <UlxButton @label={{t "lbl.success"}} @variant="success" />
      <UlxButton @label={{t "lbl.info"}} @variant="info" />
      <UlxButton @label={{t "lbl.warning"}} @variant="warning" />
      <UlxButton @label={{t "lbl.help"}} @variant="help-button" />
      <UlxButton @label={{t "lbl.danger"}} @variant="danger" />
    </div>
  </template>
}

`;
