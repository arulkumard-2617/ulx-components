export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonOutlined extends Component {
  <template>
    <div class="flex flex-col items-start gap-4">
      <div class="flex gap-3 align-items-center flex-wrap">
        <UlxButton @label="Primary" @outlined={{true}} />
        <UlxButton @label="Secondary" @outlined={{true}} @variant="secondary" />
        <UlxButton @label="Success" @outlined={{true}} @variant="success" />
        <UlxButton @label="Danger" @outlined={{true}} @variant="danger" />
      </div>
      <div class="bg-primary p-4 rounded">
        <UlxButton @label="White" @outlined={{true}} @variant="white" />
      </div>
    </div>
  </template>
}

`;
