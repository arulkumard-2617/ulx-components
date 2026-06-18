export default `
import Component from '@glimmer/component';
import { UlxButton } from 'ulx-components';

export default class DemoButtonBasic extends Component {
  <template>
    <UlxButton @label="Click Me" />
  </template>
}

`;
