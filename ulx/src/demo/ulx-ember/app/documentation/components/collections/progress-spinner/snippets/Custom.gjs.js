export default `
import Component from '@glimmer/component';
import { UlxProgressSpinner, t } from 'ulx-components';

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
      @ariaLabel={{t "lbl.loading"}}
    />
  </template>
}

`;
