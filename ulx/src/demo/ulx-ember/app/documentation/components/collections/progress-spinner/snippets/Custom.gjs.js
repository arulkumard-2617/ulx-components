export default `
import Component from '@glimmer/component';
import { UlxProgressSpinner } from 'uls-components';

export default class DemoProgressSpinnerCustom extends Component {
  get size() {
    return this.args.size ?? 'm';
  }

  get customClass() {
    return this.args.customClass;
  }

  <template>
    <UlxProgressSpinner
      @size={{this.size}}
      @customClass={{this.customClass}}
      @ariaLabel="Loading"
    />
  </template>
}

`;
