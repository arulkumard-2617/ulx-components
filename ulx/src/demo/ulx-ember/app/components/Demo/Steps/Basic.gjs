import Component from '@glimmer/component';
import { UlxSteps } from 'ulx-components';

export default class BasicStepsDemo extends Component {
  get items() {
    return [
      { label: 'Personal Info' },
      { label: 'Reservation' },
      { label: 'Review' },
    ];
  }

  <template>
    <div class="">
      <UlxSteps @items={{this.items}} />
    </div>
  </template>
}
