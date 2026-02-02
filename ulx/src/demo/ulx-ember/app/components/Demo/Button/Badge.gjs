import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonBadge extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Messages" @badge="2" />
      <UlxButton @label="Updates" @badge="5" @severity="success" />
    </div>
  </template>
}
