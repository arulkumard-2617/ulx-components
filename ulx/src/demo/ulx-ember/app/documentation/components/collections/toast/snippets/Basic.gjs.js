export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

export default class BasicToastDemo extends Component {
  @tracked messages = [];

  @action
  showToast() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}\`,
        variant: 'info',
        summary:
          'It is a long established fact that a reader will be distracted.',
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <UlxButton
        @label="Show toast"
        @variant="primary"
        {{on "click" this.showToast}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
