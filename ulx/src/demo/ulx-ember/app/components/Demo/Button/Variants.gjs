import Component from '@glimmer/component';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonVariants extends Component {
  <template>
    <div class="flex gap-5 align-items-center flex-wrap">
      <UlxButton @label="Basic" @variant="basic" />
      <UlxButton @label="Primary" @variant="primary" />
      <UlxButton @label="Secondary" @variant="secondary" />
      <UlxButton @label="Success" @variant="success" />
      <UlxButton @label="Danger" @variant="danger" />
    </div>
  </template>
}
