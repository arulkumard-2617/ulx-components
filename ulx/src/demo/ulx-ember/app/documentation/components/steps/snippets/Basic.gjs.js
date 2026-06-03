export default `
import Component from '@glimmer/component';
import { UlxSteps } from 'ulx-components';

export default class BasicStepsDemo extends Component {
  get items() {
    return [{ label: 'Review' }, { label: 'Approval' }, { label: 'Completed' }];
  }

  <template>
    <div class="">
      <UlxSteps @items={{this.items}} @activeIndex={{0}} />
    </div>
  </template>
}

`;
