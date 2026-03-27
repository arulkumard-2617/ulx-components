export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonPilled extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxButton @label="Primary" @pilled={{true}} />
      <UlxButton @label="Secondary" @pilled={{true}} @variant="secondary" />
      <UlxButton @label="Success" @pilled={{true}} @variant="success" />
      <UlxButton @label="Info" @pilled={{true}} @variant="info" />
      <UlxButton @label="Warning" @pilled={{true}} @variant="warning" />
      <UlxButton @label="Danger" @pilled={{true}} @variant="danger" />
    </div>
  </template>
}

`;
