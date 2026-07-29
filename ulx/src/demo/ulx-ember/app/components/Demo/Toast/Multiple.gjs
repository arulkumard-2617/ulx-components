import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

export default class MultipleToastDemo extends Component {
  @tracked messages = [];

  @action
  showMultiple() {
    const now = Date.now();
    const newMessages = [
      {
        id: `msg-${now}-1`,
        variant: 'info',
        summary: 'Info',
        detail: 'Info message.',
      },
      {
        id: `msg-${now}-2`,
        variant: 'success',
        summary: 'Success',
        detail: 'Success message.',
      },
      {
        id: `msg-${now}-3`,
        variant: 'warn',
        summary: 'Warn',
        detail: 'Warn message.',
      },
      {
        id: `msg-${now}-4`,
        variant: 'error',
        summary: 'Error',
        detail: 'Error message.',
      },
    ];
    this.messages = [...this.messages, ...newMessages];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <UlxButton
        @label="Multiple"
        @variant="warning"
        {{on "click" this.showMultiple}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
