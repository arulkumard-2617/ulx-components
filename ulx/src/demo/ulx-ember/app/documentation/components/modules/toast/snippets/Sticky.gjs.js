export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

export default class StickyToastDemo extends Component {
  @tracked messages = [];

  @action
  showSticky() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-sticky\`,
        type: 'info',
        summary: t('lbl.sticky'),
        detail: t('msg.sticky.toast'),
        sticky: true,
      },
    ];
  }

  @action
  showWithLife() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-life\`,
        variant: 'info',
        summary: 'Auto-close',
        detail: 'This message disappears after 3000ms.',
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
    <UlxButton @label={{t "lbl.sticky"}} @variant="secondary" {{on "click" this.showSticky}} />
    <UlxButton @label={{t "lbl.clear"}} @variant="secondary" {{on "click" this.clearAll}} />
    <UlxToast
      @messages={{this.messages}}
      @life={{3000}}
      @onClose={{this.removeMessage}}
    />
  </template>
}

`;
