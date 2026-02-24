export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonRaised extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @raised={{true}} />
      <UlxButton @label="Secondary" @raised={{true}} @variant="secondary" />
      <UlxButton @label="Success" @raised={{true}} @variant="success" />
      <UlxButton @label="Info" @raised={{true}} @variant="info" />
      <UlxButton @label="Warning" @raised={{true}} @variant="warning" />
      <UlxButton @label="help" @raised={{true}} @variant="help-button" />
      <UlxButton @label="Danger" @raised={{true}} @variant="danger" />
    </div>
  </template>
}

`;
