import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonTypes extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxButton @label="Primary" @variant="primary" />
      <UlxButton
        @label="Primary"
        @variant="primary"
        @pilled={{true}}
      />
    </div>
  </template>
}
