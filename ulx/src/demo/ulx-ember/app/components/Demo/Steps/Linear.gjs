import Component from '@glimmer/component';
import { UlxSteps } from 'ulx-components';

export default class LinearStepsDemo extends Component {
  get items() {
    return [
      { label: 'Personal Info' },
      { label: 'Reservation' },
      { label: 'Review' },
    ];
  }

  <template>
    <div class="">
      <UlxSteps @items={{this.items}} @readOnly={{true}} />
    </div>
  </template>
}
