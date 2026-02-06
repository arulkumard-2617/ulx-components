import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

export default class StickyToastDemo extends Component {
  @tracked messages = [];

  @action
  showSticky() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-sticky`,
        severity: 'info',
        summary: 'Sticky',
        detail: 'This message stays visible until you close it.',
        sticky: true,
      },
    ];
  }

  @action
  showWithLife() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-life`,
        severity: 'info',
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
    <div class="pda4">
      <div class="fx gap8 flxw">
        <UlxButton
          @label="Sticky"
          @variant="secondary"
          {{on "click" this.showSticky}}
        />
        <UlxButton
          @label="Auto-close (3s)"
          @variant="secondary"
          {{on "click" this.showWithLife}}
        />
        <UlxButton
          @label="Clear"
          @variant="secondary"
          {{on "click" this.clearAll}}
        />
      </div>
      <UlxToast
        @messages={{this.messages}}
        @life={{3000}}
        @onClose={{this.removeMessage}}
      />
    </div>
  </template>
}
