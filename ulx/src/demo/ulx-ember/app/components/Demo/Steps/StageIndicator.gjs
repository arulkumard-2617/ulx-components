import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { UlxSteps } from 'ulx-components';

export default class StageIndicatorStepsDemo extends Component {
  @tracked activeIndex = 0;

  get items() {
    return [{ label: 'Review' }, { label: 'Approval' }, { label: 'Completed' }];
  }

  <template>
    <UlxSteps
      @items={{this.items}}
      @activeIndex={{this.activeIndex}}
      @variant="stage-indicator"
    />
  </template>
}
