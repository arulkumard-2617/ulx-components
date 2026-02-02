export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToast, UlxButton } from 'uls-components';

export default class MultipleToastDemo extends Component {
  @tracked messages = [];

  @action
  showMultiple() {
    const now = Date.now();
    this.messages = [
      ...this.messages,
      { id: \`msg-\${now}-1\`, severity: 'info', summary: 'Info', detail: 'Info message.' },
      { id: \`msg-\${now}-2\`, severity: 'success', summary: 'Success', detail: 'Success message.' },
      { id: \`msg-\${now}-3\`, severity: 'warn', summary: 'Warn', detail: 'Warn message.' },
      { id: \`msg-\${now}-4\`, severity: 'error', summary: 'Error', detail: 'Error message.' },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxButton @label="Multiple" @severity="warning" {{on "click" this.showMultiple}} />
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </template>
}

`;
