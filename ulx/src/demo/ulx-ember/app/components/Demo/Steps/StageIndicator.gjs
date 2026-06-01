import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { UlxSteps } from 'ulx-components';

export default class StageIndicatorStepsDemo extends Component {
  @tracked activeIndex = 0;

  get items() {
    const stages = [
      { label: 'Review' },
      { label: 'Approval' },
      { label: 'Completed' }
    ];

    return stages.map((stage, index) => ({
      ...stage,
      icon: index === this.activeIndex ? 'success-icon' : 'success-stroke-icon'
    }));
  }

  <template>
    <UlxSteps
      @items={{this.items}}
      @activeIndex={{this.activeIndex}}
      @customClass="stage-indicator"
    />
  </template>
}
