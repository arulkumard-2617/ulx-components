export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMessages } from 'ulx-components';
import { t } from 'ulx-components';

export default class StickyMessagesDemo extends Component {
  @tracked messages = [
    { id: '1', variant: 'success', detail: t('lbl.success.message'), sticky: true, closable: true },
    { id: '2', variant: 'info', detail: t('lbl.info.message'), sticky: true, closable: true },
    { id: '3', variant: 'warn', detail: t('lbl.warn.message'), sticky: true, closable: true },
    { id: '4', variant: 'error', detail: t('lbl.error.message'), sticky: true, closable: true },
  ];

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxMessages @messages={{this.messages}} @onRemove={{this.removeMessage}} />
  </template>
}

`;
