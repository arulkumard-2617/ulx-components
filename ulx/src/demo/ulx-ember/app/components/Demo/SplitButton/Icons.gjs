import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxToast, t } from 'ulx-components';

export default class DemoSplitButtonIcons extends Component {
  @tracked messages = [];

  get items() {
    return [
      {
        label: 'Update',
        icon: 'bs-icons1 session-settings-icon',
        command: () => this.addMessage('success', t('lbl.updated'), t('lbl.data.updated')),
      },
      {
        label: 'Delete',
        icon: 'bs-icons1 close-icon-01',
        command: () => this.addMessage('warn', t('lbl.deleted'), t('lbl.data.deleted')),
      },
    ];
  }

  @action
  addMessage(severity, summary, detail) {
    this.messages = [
      ...this.messages,
      { id: `msg-${Date.now()}`, severity, summary, detail },
    ];
  }

  @action
  save() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}`,
        severity: 'success',
        summary: t('lbl.success'),
        detail: t('lbl.data.saved'),
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxSplitButton
        @label={{t "lbl.save"}}
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @iconSize="s22"
        @size="s-size"
        @dropdownIcon="comment-icon"
        @model={{this.items}}
        @onClick={{this.save}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
