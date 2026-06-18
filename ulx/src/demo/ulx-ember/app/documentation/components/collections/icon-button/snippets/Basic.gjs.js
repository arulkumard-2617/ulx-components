export default `
import Component from '@glimmer/component';
import { UlxIconButton } from 'ulx-components';

export default class DemoIconButtonBasic extends Component {
  <template>
    <UlxIconButton @label="Save" @iconLeft="ls-tick-icon" />
  </template>
}

`;
