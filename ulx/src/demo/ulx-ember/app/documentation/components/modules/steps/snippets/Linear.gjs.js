export default `
import Component from '@glimmer/component';
import { Steps } from 'ulx-components';

export default class LinearStepsDemo extends Component {
  get items() {
    return [
      { label: 'Personal Info' },
      { label: 'Reservation' },
      { label: 'Review' }
    ];
  }

  <template>
    <div class="pda4">
      <Steps @model={{this.items}} @readOnly={{true}} />
    </div>
  </template>
}
`;
