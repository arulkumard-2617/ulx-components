export default `
import Component from '@glimmer/component';
import { UlxProgressSpinner } from 'uls-components';

export default class DemoProgressSpinnerBasic extends Component {
  <template>
    <UlxProgressSpinner @size="xl" @ariaLabel="Loading" />
  </template>
}

`;
