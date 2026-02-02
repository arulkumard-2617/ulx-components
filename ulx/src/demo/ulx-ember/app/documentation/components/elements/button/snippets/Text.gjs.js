export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonText extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @text={{true}} />
      <UlxButton @label="Secondary" @text={{true}} @severity="secondary" />
      <UlxButton @label="Success" @text={{true}} @severity="success" />
      <UlxButton @label="Info" @text={{true}} @severity="info" />
      <UlxButton @label="Warning" @text={{true}} @severity="warning" />
      <UlxButton @label="Danger" @text={{true}} @severity="danger" />
    </div>
  </template>
}

`;
