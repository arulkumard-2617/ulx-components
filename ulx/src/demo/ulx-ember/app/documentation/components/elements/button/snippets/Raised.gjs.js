export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonRaised extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @raised={{true}} />
      <UlxButton @label="Secondary" @raised={{true}} @severity="secondary" />
      <UlxButton @label="Success" @raised={{true}} @severity="success" />
      <UlxButton @label="Info" @raised={{true}} @severity="info" />
      <UlxButton @label="Warning" @raised={{true}} @severity="warning" />
      <UlxButton @label="Help" @raised={{true}} @severity="help" />
      <UlxButton @label="Danger" @raised={{true}} @severity="danger" />
    </div>
  </template>
}

`;
