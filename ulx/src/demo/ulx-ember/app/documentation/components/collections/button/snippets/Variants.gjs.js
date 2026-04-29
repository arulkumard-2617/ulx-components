export default `
import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonVariants extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxButton @label="Basic" @variant="basic" />
      <UlxButton @label="Primary" @variant="primary" />
      <UlxButton @label="Secondary" @variant="secondary" />
      <UlxButton @label="Success" @variant="success" />
      <UlxButton @label="Info" @variant="info" />
      <UlxButton @label="Warning" @variant="warning" />
      <UlxButton @label="Help" @variant="help-button" />
      <UlxButton @label="Danger" @variant="danger" />
    </div>
  </template>
}

`;
