export default `
import Component from '@glimmer/component';
import { UlxButton } from 'uls-components';

export default class DemoButtonBasic extends Component {
  <template>
    <div class="flex gap-3 align-items-center">
      <UlxButton @label="Click Me" />
      <UlxButton @label="Submit" @severity="success" />
      <UlxButton @label="Delete" @severity="danger" />
    </div>
  </template>
}

`;
