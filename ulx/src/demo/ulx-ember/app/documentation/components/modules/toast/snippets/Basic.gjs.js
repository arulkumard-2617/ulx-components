export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxToast, t } from 'ulx-components';

export default class BasicToastDemo extends Component {
  get messages() {
    return [
      {
        id: '1',
        type: 'info',
        summary: t('lbl.info'),
        detail: t('msg.basic.toast'),
      },
    ];
  }

  @action
  removeMessage(message) {
    // Parent removes message from state (e.g. filter by id)
  }

  <template>
    <UlxToast
      @messages={{this.messages}}
      @onClose={{this.removeMessage}}
    />
  </template>
}

`;
