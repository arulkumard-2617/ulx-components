export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToast, UlxButton } from 'ulx-components';

export default class StickyToastDemo extends Component {
  @tracked messages = [];

  @action
  showSticky() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-sticky\`,
        severity: 'info',
        summary: 'Sticky',
        detail: 'This message stays visible until you close it.',
        sticky: true,
      },
    ];
  }

  @action
  clearAll() {
    this.messages = [];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxButton @label="Sticky" @variant="secondary" {{on "click" this.showSticky}} />
    <UlxButton @label="Clear" @variant="secondary" {{on "click" this.clearAll}} />
    <UlxToast
      @messages={{this.messages}}
      @life={{3000}}
      @onClose={{this.removeMessage}}
    />
  </template>
}

`;
