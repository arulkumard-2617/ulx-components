export default `
import Component from '@glimmer/component';
import { UlxButton } from 'uls-components';

export default class DemoButtonRounded extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @rounded={{true}} />
      <UlxButton @label="Secondary" @rounded={{true}} @severity="secondary" />
      <UlxButton @label="Success" @rounded={{true}} @severity="success" />
      <UlxButton @label="Info" @rounded={{true}} @severity="info" />
      <UlxButton @label="Warning" @rounded={{true}} @severity="warning" />
      <UlxButton @label="Danger" @rounded={{true}} @severity="danger" />
    </div>
  </template>
}

`;
