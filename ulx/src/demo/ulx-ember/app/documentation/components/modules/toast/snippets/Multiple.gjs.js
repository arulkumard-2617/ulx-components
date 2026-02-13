export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

export default class MultipleToastDemo extends Component {
  @tracked messages = [];

  @action
  showMultiple() {
    const now = Date.now();
    const newMessages = [
      {
        id: \`msg-\${now}-1\`,
        variant: 'info',
        summary: t('lbl.info'),
        detail: t('lbl.info.message'),
      },
      {
        id: \`msg-\${now}-2\`,
        variant: 'success',
        summary: t('lbl.success'),
        detail: t('lbl.success.message'),
      },
      {
        id: \`msg-\${now}-3\`,
        variant: 'warn',
        summary: t('lbl.warn'),
        detail: t('lbl.warn.message'),
      },
      {
        id: \`msg-\${now}-4\`,
        variant: 'error',
        summary: t('lbl.error'),
        detail: t('lbl.error.message'),
      },
    ];
    this.messages = [...this.messages, ...newMessages];
    this.messages = [...this.messages, ...newMessages];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxButton
        @label={{t "lbl.multiple"}}
        @variant="warning"
        {{on "click" this.showMultiple}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
