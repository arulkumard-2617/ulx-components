export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonRounded extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @rounded={{true}} />
      <UlxButton @label="Secondary" @rounded={{true}} @variant="secondary" />
      <UlxButton @label="Success" @rounded={{true}} @variant="success" />
      <UlxButton @label="Info" @rounded={{true}} @variant="info" />
      <UlxButton @label="Warning" @rounded={{true}} @variant="warning" />
      <UlxButton @label="Danger" @rounded={{true}} @variant="danger" />
    </div>
  </template>
}

`;
