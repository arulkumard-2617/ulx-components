export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxBannerMessage } from 'ulx-components';
import { t } from 'ulx-components';

export default class AccessibilityMessagesDemo extends Component {
  @tracked messages = [
    { id: '1', variant: 'info', detail: t('lbl.info.message'), closable: true },
  ];

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxBannerMessage @messages={{this.messages}} @onRemove={{this.removeMessage}} />
  </template>
}

`;
