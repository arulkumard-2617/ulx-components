export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxBannerMessage, UlxButton } from 'ulx-components';
import { t } from 'ulx-components';

export default class DynamicMessagesDemo extends Component {
  @tracked messages = [];

  @action
  showAllMessages() {
    const variants = [
      { variant: 'success', type: 'Success' },
      { variant: 'info', type: 'Info' },
      { variant: 'warn', type: 'Warning' },
      { variant: 'error', type: 'Error' },
    ];
    this.messages = variants.map(({ variant, type }, index) => ({
      id: \`msg-\${variant}-\${Date.now()}-\${index}\`,
      variant,
      detail: t('msg.type.message', { type }),
      closable: true,
    }));
  }

  @action
  clearMessages() {
    this.messages = [];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="flex flex-column gap-2">
      <div class="flex gap-2">
        <UlxButton @label={{t "lbl.show"}} @onClick={{this.showAllMessages}} />
        <UlxButton
          @label={{t "lbl.clear"}}
          @variant="secondary"
          @onClick={{this.clearMessages}}
        />
      </div>
    </div>
    <UlxBannerMessage @messages={{this.messages}} @onRemove={{this.removeMessage}} />
  </template>
}

`;
