import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

export default class SeveritiesToastDemo extends Component {
  @tracked messages = [];

  @action
  addMessage(severity) {
    const labels = {
      info: 'Info',
      success: 'Success',
      warn: 'Warning',
      error: 'Error',
      secondary: 'Secondary',
      contrast: 'Contrast',
    };
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-${severity}`,
        severity,
        summary: labels[severity] ?? severity,
        detail: `${labels[severity] ?? severity} message.`,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <div class="fx gap8 flxw">
        <UlxButton @label="Info" @severity="info" {{on "click" (fn this.addMessage "info")}} />
        <UlxButton @label="Success" @severity="success" {{on "click" (fn this.addMessage "success")}} />
        <UlxButton @label="Warn" @severity="warning" {{on "click" (fn this.addMessage "warn")}} />
        <UlxButton @label="Error" @severity="danger" {{on "click" (fn this.addMessage "error")}} />
        <UlxButton @label="Secondary" @severity="secondary" {{on "click" (fn this.addMessage "secondary")}} />
        <UlxButton @label="Contrast" {{on "click" (fn this.addMessage "contrast")}} />
      </div>
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
