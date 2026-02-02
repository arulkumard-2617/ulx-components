export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonSizes extends Component {
  <template>
    <div class="flex gap-3 align-items-center flex-wrap">
      <UlxButton @label="Small" @size="small" />
      <UlxButton @label="Normal" />
      <UlxButton @label="Large" @size="large" />
    </div>
  </template>
}

`;
