import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonLink extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Link" @href="#" @text={{true}} />
      <UlxButton @label="Navigate" @href="#" @severity="info" />
    </div>
  </template>
}
