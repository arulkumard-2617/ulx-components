import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSteps, UlxIcon } from 'ulx-components';

export default class TemplateStepsDemo extends Component {
  @tracked activeIndex = 0;

  get items() {
    return [
      { label: 'Personal', icon: 'user-info-icon-01' },
      { label: 'Reservation', icon: 'calendar-icon' },
      { label: 'Review', icon: 'success-stroke-icon' }
    ];
  }

  @action
  handleSelect(event) {
    this.activeIndex = event.index;
  }

  <template>
    <div class="pda4">
      <UlxSteps
        @model={{this.items}}
        @activeIndex={{this.activeIndex}}
        @onSelect={{this.handleSelect}}
        @readOnly={{false}}
      >
        <:item as |item index meta|>
          <UlxIcon
            @type="font"
            @iconName={{item.icon}}
            @componentClass="bs-icons1"
            aria-hidden="true"
          />
        </:item>
      </UlxSteps>
    </div>
  </template>
}
