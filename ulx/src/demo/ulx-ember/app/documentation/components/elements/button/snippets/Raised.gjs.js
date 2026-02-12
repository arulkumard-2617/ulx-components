export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonRaised extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label={{t "lbl.primary"}} @raised={{true}} />
      <UlxButton @label={{t "lbl.secondary"}} @raised={{true}} @variant="secondary" />
      <UlxButton @label={{t "lbl.success"}} @raised={{true}} @variant="success" />
      <UlxButton @label={{t "lbl.info"}} @raised={{true}} @variant="info" />
      <UlxButton @label={{t "lbl.warning"}} @raised={{true}} @variant="warning" />
      <UlxButton @label={{t "lbl.help"}} @raised={{true}} @variant="help" />
      <UlxButton @label={{t "lbl.danger"}} @raised={{true}} @variant="danger" />
    </div>
  </template>
}

`;
