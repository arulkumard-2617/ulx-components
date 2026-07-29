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
        id: `msg-${Date.now()}-sticky`,
        variant: 'success',
        summary: 'Speakers added',
        sticky: true
      }
    ];
  }

  @action
  showWithLife() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-life`,
        variant: 'success',
        summary: 'Speakers added'
      }
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
    <div class="">
      <div class="flex gap-8">
        <UlxButton
          @label="Sticky"
          @variant="success"
          {{on "click" this.showSticky}}
        />
        <UlxButton
          @label="Auto-close (3s)"
          @variant="success"
          {{on "click" this.showWithLife}}
        />
        <UlxButton
          @label={{t "lbl.clear"}}
          @variant="success"
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
