export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxBannerMessage, UlxButton } from 'ulx-components';
import { t } from 'ulx-components';

export default class DynamicMessagesDemo extends Component {
  @tracked message = null;

  @action
  showMessage() {
    this.message = {
      id: \`msg-\${Date.now()}\`,
      variant: 'info',
      detail: t('msg.type.message', { type: 'Info' }),
      closable: true,
    };
  }

  @action
  clearMessage() {
    this.message = null;
  }

  @action
  removeMessage(_message) {
    this.message = null;
  }

  <template>
    <div class="flex flex-column gap-2">
      <div class="flex gap-2">
        <UlxButton @label={{t "lbl.show"}} @onClick={{this.showMessage}} />
        <UlxButton
          @label={{t "lbl.clear"}}
          @variant="secondary"
          @onClick={{this.clearMessage}}
        />
      </div>
    </div>
    <UlxBannerMessage @message={{this.message}} @onRemove={{this.removeMessage}} />
  </template>
}

`;
