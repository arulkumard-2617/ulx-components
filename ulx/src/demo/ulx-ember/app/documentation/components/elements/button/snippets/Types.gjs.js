export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonTypes extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxButton @label="Primary" @variant="primary" />
      <UlxButton @label="Secondary" @variant="secondary" />
      <UlxButton @label="Success" @variant="success" />
      <UlxButton @label="Info" @variant="info" />
      <UlxButton @label="Warning" @variant="warning" />
      <UlxButton @label="Help" @variant="help" />
      <UlxButton @label="Danger" @variant="danger" />
    </div>
  </template>
}

`;
