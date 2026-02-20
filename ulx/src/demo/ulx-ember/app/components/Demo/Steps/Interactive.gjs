import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSteps, UlxToast } from 'ulx-components';

export default class InteractiveStepsDemo extends Component {
  @tracked activeIndex = 0;
  @tracked messages = [];

  get items() {
    return [
      { label: 'Personal' },
      { label: 'Seat' },
      { label: 'Payment' },
      { label: 'Confirmation' }
    ];
  }

  @action
  handleSelect(event) {
    this.activeIndex = event.index;
    const item = this.items[event.index];
    const label = item?.label ?? `Step ${event.index + 1}`;
    this.messages = [
      ...this.messages,
      {
        id: `step-${Date.now()}`,
        variant: 'info',
        summary: 'Selected',
        detail: label
      }
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxSteps
        @model={{this.items}}
        @activeIndex={{this.activeIndex}}
        @onSelect={{this.handleSelect}}
        @readOnly={{false}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
