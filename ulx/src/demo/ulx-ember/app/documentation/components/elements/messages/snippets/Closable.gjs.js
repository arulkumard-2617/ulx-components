export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxMessages } from 'ulx-components';
import { t } from 'ulx-components';

export default class ClosableMessagesDemo extends Component {
  @tracked messages = [
    { id: '1', variant: 'info', detail: t('lbl.info.message'), closable: true },
    { id: '2', variant: 'success', detail: t('lbl.success.message'), closable: true },
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
