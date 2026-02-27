export default `
import Component from '@glimmer/component';
import { UlxMessages } from 'ulx-components';
import { t } from 'ulx-components';

export default class VariantMessagesDemo extends Component {
  get messages() {
    return [
      { id: '1', variant: 'info', detail: t('lbl.info.message') },
      { id: '2', variant: 'success', detail: t('lbl.success.message') },
      { id: '3', variant: 'warn', detail: t('lbl.warn.message') },
      { id: '4', variant: 'error', detail: t('lbl.error.message') },
    ];
  }

  <template>
    <UlxMessages @messages={{this.messages}} />
  </template>
}

`;
