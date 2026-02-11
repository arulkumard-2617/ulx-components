import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxToast } from 'ulx-components';

export default class DemoSplitButtonLoading extends Component {
  @tracked messages = [];
  @tracked loading = false;

  get items() {
    return [
      {
        label: 'Update',
        icon: 'bs-icons1 session-settings-icon',
        command: () => this.addMessage('Updated'),
      },
      {
        label: 'Delete',
        icon: 'bs-icons1 close-icon-01',
        command: () => this.addMessage('Deleted'),
      },
    ];
  }

  @action
  addMessage(detail) {
    this.messages = [
      ...this.messages,
      { id: `msg-${Date.now()}`, severity: 'success', summary: detail, detail },
    ];
  }

  @action
  save() {
    this.loading = true;
    setTimeout(() => {
      this.messages = [
        ...this.messages,
        {
          id: `msg-${Date.now()}`,
          severity: 'success',
          summary: 'Success',
          detail: 'Data Saved',
        },
      ];
      this.loading = false;
    }, 2000);
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxSplitButton
        @label="Save"
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @iconSize="s22"
        @size="s-size"
        @model={{this.items}}
        @loading={{this.loading}}
        @onClick={{this.save}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
