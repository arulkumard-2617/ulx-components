import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { UlxProgressBar, UlxToast, t } from 'ulx-components';

const INTERVAL_MS = 2000;

export default class DynamicProgressBarDemo extends Component {
  @tracked value = 0;
  @tracked messages = [];

  _interval = null;

  intervalLifecycle = modifier((_element, [onStart, onStop]) => {
    onStart?.();
    return () => onStop?.();
  });

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
          id: `msg-${Date.now()}`,
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
      class="flex flex-col gap-8"
      {{this.intervalLifecycle this.startInterval this.clearInterval}}
    >
      <UlxProgressBar @value={{this.value}} @size="xxxs-size" />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
