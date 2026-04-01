import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { UlxSteps, UlxButton } from 'ulx-components';

export default class ControlledStepsDemo extends Component {
  @tracked activeIndex = 0;

  get items() {
    return [
      { label: 'Personal Info' },
      { label: 'Reservation' },
      { label: 'Review' },
    ];
  }

  @action
  setActiveIndex(index) {
    this.activeIndex = index;
  }

  @action
  isNavActive(index) {
    return index === this.activeIndex;
  }

  @action
  navStepNumber(index) {
    return index + 1;
  }

  <template>
    <div class="">
      <div
        class="flex items-center fje gap-2 mb-4"
        role="group"
        aria-label="Demo step control"
      >
        {{#each this.items as |_ index|}}
          <UlxButton
            @label={{this.navStepNumber index}}
            @variant={{if (this.isNavActive index) "primary" "secondary"}}
            @size="s-size"
            aria-label="Go to step {{this.navStepNumber index}}"
            aria-pressed={{this.isNavActive index}}
            {{on "click" (fn this.setActiveIndex index)}}
          />
        {{/each}}
      </div>
      <UlxSteps @items={{this.items}} @activeIndex={{this.activeIndex}} />
    </div>
  </template>
}
