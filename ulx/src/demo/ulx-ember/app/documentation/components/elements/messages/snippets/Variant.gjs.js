export default `
import Component from '@glimmer/component';
import { UlxBannerMessage } from 'ulx-components';
import { t } from 'ulx-components';

export default class VariantMessagesDemo extends Component {
  get messages() {
    return [
      {
        id: '1',
        variant: 'info',
        detail: t('lbl.info.message'),
        summary: t('lbl.info'),
      },
      {
        id: '2',
        variant: 'success',
        detail: t('lbl.success.message'),
        summary: t('lbl.success'),
      },
      {
        id: '3',
        variant: 'warn',
        detail: t('lbl.warn.message'),
        summary: t('lbl.warn'),
      },
      {
        id: '4',
        variant: 'error',
        detail: t('lbl.error.message'),
        summary: t('lbl.error'),
      },
    ];
  }

  <template><UlxBannerMessage @messages={{this.messages}} /></template>
}

`;
