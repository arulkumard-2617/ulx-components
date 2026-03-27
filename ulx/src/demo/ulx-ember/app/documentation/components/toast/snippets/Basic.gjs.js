export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, t, UlxButton } from 'ulx-components';
import { UlxToast, t } from 'ulx-components';

export default class BasicToastDemo extends Component {
  @tracked messages = [];

  @action
  showToast() {
    this.messages = [
      ...this.messages,
      {
        id: '1',
        variant: 'info',
        summary: t('lbl.info'),
        detail: t('msg.basic.toast'),
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxButton
        @label={{t "lbl.show.toast"}}
        @variant="primary"
        {{on "click" this.showToast}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
