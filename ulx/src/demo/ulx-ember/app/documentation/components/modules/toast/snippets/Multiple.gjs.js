export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToast, UlxButton } from 'ulx-components';

export default class MultipleToastDemo extends Component {
  @tracked messages = [];

  @action
  showMultiple() {
    const now = Date.now();
    this.messages = [
      ...this.messages,
      { id: \`msg-\${now}-1\`, type: 'info', summary: 'Info', detail: 'Info message.' },
      { id: \`msg-\${now}-2\`, type: 'success', summary: 'Success', detail: 'Success message.' },
      { id: \`msg-\${now}-3\`, type: 'warn', summary: 'Warn', detail: 'Warn message.' },
      { id: \`msg-\${now}-4\`, type: 'error', summary: 'Error', detail: 'Error message.' },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxButton @label="Multiple" @variant="warning" {{on "click" this.showMultiple}} />
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </template>
}

`;
