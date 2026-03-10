export default `
import Component from '@glimmer/component';
import { UlxBannerMessage, UlxButton } from 'ulx-components';
import { t } from 'ulx-components';

export default class VariantMessagesDemo extends Component {
  get messages() {
    return [
      {
        id: '1',
        variant: 'info',
        summary: t('lbl.info'),
        detail: t('lbl.info.message'),
        icon: 'enhance-icon',
      },
      {
        id: '2',
        variant: 'success',
        summary: t('lbl.success'),
        detail: t('lbl.success.message'),
        icon: 'documents-filled-icon',
      },
      {
        id: '3',
        variant: 'warn',
        summary: t('lbl.warn'),
        detail: t('lbl.warn.message'),
        icon: 'enhance-icon',
      },
      {
        id: '4',
        variant: 'error',
        summary: t('lbl.error'),
        detail: t('lbl.error.message'),
        icon: 'documents-filled-icon',
      },
    ];
  }

  <template>
    <UlxBannerMessage @messages={{this.messages}} @iconType="font" @customClass="my-5">
      <:action>
        <UlxButton
          @variant="primary"
          @outlined={{true}}
          @label={{t "lbl.view.more.details"}}
        />
      </:action>
    </UlxBannerMessage>
  </template>
}

`;
