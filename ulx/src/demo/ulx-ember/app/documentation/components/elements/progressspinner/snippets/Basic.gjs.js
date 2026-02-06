export default `
import Component from '@glimmer/component';
import { UlxProgressSpinner } from 'ulx-components';

export default class DemoProgressSpinnerBasic extends Component {
  <template>
    <UlxProgressSpinner @size="xl-size" @ariaLabel="Loading" />
  </template>
}

`;
