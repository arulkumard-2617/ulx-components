export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxProgressBar, UlxToast, t } from 'ulx-components';

const INTERVAL_MS = 2000;

export default class DynamicProgressBarDemo extends Component {
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
    this.value += Math.floor(Math.random() * 10) + 1;
    if (this.value >= 100) {
      this.value = 100;
      this.messages = [
        ...this.messages,
        {
          id: \`msg-\${Date.now()}\`,
          severity: 'info',
          summary: "Success",
          detail: "Process Completed",
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
    <div {{did-insert this.startInterval}} {{will-destroy this.clearInterval}}>
      <UlxProgressBar @value={{this.value}} @size="m-size" />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
