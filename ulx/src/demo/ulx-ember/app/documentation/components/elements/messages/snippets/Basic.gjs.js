export default `
import Component from '@glimmer/component';
import { UlxMessages } from 'ulx-components';
import { t } from 'ulx-components';

export default class BasicMessagesDemo extends Component {
  get messages() {
    return [
      { id: '1', variant: 'info', summary: t('lbl.info'), detail: t('lbl.info.message') },
    ];
  }

  <template>
    <UlxMessages @messages={{this.messages}} />
  </template>
}

`;
