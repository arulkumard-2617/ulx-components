import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonOutlined extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @outlined={{true}} />
      <UlxButton @label="Secondary" @outlined={{true}} @variant="secondary" />
      <UlxButton @label="Success" @outlined={{true}} @variant="success" />
      <UlxButton @label="Info" @outlined={{true}} @variant="info" />
      <UlxButton @label="Warning" @outlined={{true}} @variant="warning" />
      <UlxButton @label="Danger" @outlined={{true}} @variant="danger" />
    </div>
  </template>
}
