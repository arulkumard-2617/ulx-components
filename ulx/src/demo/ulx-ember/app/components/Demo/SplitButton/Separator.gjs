import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxToast } from 'ulx-components';

export default class DemoSplitButtonSeparator extends Component {
  @tracked messages = [];

  get items() {
    return [
      {
        label: 'Update',
        icon: 'bs-icons1 session-settings-icon',
        command: () =>
          this.addMessage('success', 'Updated', 'Data Updated')
      },
      { separator: true },
      {
        label: 'Delete',
        icon: 'bs-icons1 close-icon-01',
        command: () =>
          this.addMessage('warn', 'Deleted', 'Data Deleted')
      }
    ];
  }

  @action
  addMessage(severity, summary, detail) {
    this.messages = [
      ...this.messages,
      { id: `msg-${Date.now()}`, severity, summary, detail }
    ];
  }

  @action
  save() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}`,
        severity: 'success',
        summary: 'Success',
        detail: 'Data Saved'
      }
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <UlxSplitButton
        @label="Save"
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @iconSize="s22"
        @items={{this.items}}
        @onClick={{this.save}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
