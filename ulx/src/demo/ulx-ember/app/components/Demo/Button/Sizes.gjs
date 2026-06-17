import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonSizes extends Component {
  <template>
    <div class="flex items-center gap-3">
      <UlxButton @label="Small" @size="s-size" />
      <UlxButton @label="Normal" />
      <UlxButton @label="Large" @size="l-size" />
      <UlxButton @label="Extra Large" @size="xl-size" />
    </div>
  </template>
}
