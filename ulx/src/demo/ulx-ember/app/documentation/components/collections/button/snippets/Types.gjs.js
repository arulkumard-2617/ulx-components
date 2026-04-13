export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonTypes extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxButton @label={{t "lbl.primary"}} @variant="primary" />
      <UlxButton
        @label={{t "lbl.primary"}}
        @variant="primary"
        @pilled={{true}}
      />
    </div>
  </template>
}

`;
