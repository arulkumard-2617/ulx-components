export default `
import Component from '@glimmer/component';
import { UlxButton } from 'uls-components';

export default class DemoButtonSeverities extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxButton @label="Primary" @severity="primary" />
      <UlxButton @label="Secondary" @severity="secondary" />
      <UlxButton @label="Success" @severity="success" />
      <UlxButton @label="Info" @severity="info" />
      <UlxButton @label="Warning" @severity="warning" />
      <UlxButton @label="Help" @severity="help" />
      <UlxButton @label="Danger" @severity="danger" />
    </div>
  </template>
}

`;
