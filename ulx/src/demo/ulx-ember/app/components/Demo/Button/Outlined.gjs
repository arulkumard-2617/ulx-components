import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonOutlined extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Primary" @outlined={{true}} />
      <UlxButton @label="Secondary" @outlined={{true}} @severity="secondary" />
      <UlxButton @label="Success" @outlined={{true}} @severity="success" />
      <UlxButton @label="Info" @outlined={{true}} @severity="info" />
      <UlxButton @label="Warning" @outlined={{true}} @severity="warning" />
      <UlxButton @label="Danger" @outlined={{true}} @severity="danger" />
    </div>
  </template>
}
