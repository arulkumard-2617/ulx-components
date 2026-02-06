import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonText extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @text={{true}} />
      <UlxButton @label="Secondary" @text={{true}} @variant="secondary" />
      <UlxButton @label="Success" @text={{true}} @variant="success" />
      <UlxButton @label="Info" @text={{true}} @variant="info" />
      <UlxButton @label="Warning" @text={{true}} @variant="warning" />
      <UlxButton @label="Danger" @text={{true}} @variant="danger" />
    </div>
  </template>
}
