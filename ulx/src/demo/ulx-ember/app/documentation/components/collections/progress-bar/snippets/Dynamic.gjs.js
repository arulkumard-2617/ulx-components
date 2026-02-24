export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import didInsert from '@ember/render-modifiers/modifiers/did-insert';
import willDestroy from '@ember/render-modifiers/modifiers/will-destroy';
import { UlxProgressBar, UlxToast, t } from 'ulx-components';

const INTERVAL_MS = 2000;

export default class DynamicProgressBarDemo extends Component {
  didInsert = didInsert;
  willDestroy = willDestroy;

  @tracked value = 0;
  @tracked messages = [];

  _interval = null;

  @action
  startInterval() {
    this._interval = setInterval(() => this.tick(), INTERVAL_MS);
  }

  @action
  clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  tick() {
    this.value += Math.floor(Math.random() * 20) + 1;
    if (this.value >= 100) {
      this.value = 100;
      this.messages = [
        ...this.messages,
        {
          id: \`msg-\${Date.now()}\`,
          severity: 'info',
          summary: t('lbl.success'),
          detail: t('lbl.process.completed'),
        },
      ];
      this.clearInterval();
    }
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div
      class="pda4 flex flex-col gap-8"
      {{this.didInsert this.startInterval}}
      {{this.willDestroy this.clearInterval}}
    >
      <UlxProgressBar @value={{this.value}} @size="m-size" />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
