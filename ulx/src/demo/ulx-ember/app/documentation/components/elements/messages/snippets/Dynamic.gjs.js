export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { UlxMessages, UlxButton } from 'ulx-components';
import { t } from 'ulx-components';

export default class DynamicMessagesDemo extends Component {
  @tracked messages = [];

  @action
  addMessage(variant) {
    const id = String(Date.now());
    this.messages = [
      ...this.messages,
      { id, variant, detail: t('msg.type.message', { type: variant }), closable: true },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="flex flex-column gap-2">
      <div class="flex gap-2">
        <UlxButton @label="Info" @onClick={{fn this.addMessage "info"}} />
        <UlxButton @label="Success" @variant="success" @onClick={{fn this.addMessage "success"}} />
        <UlxButton @label="Warn" @variant="warning" @onClick={{fn this.addMessage "warn"}} />
        <UlxButton @label="Error" @variant="danger" @onClick={{fn this.addMessage "error"}} />
      </div>
      <UlxMessages @messages={{this.messages}} @onRemove={{this.removeMessage}} />
    </div>
  </template>
}

`;
