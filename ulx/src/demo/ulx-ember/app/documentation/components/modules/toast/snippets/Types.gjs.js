export default `
import Component from '@glimmer/component';
import { UlxToast, t } from 'ulx-components';

export default class TypesToastDemo extends Component {
  get messages() {
    return [
      { id: '1', type: 'info', summary: t('lbl.info'), detail: t('lbl.info.message') },
      { id: '2', type: 'success', summary: t('lbl.success'), detail: t('lbl.success.message') },
      { id: '3', type: 'warn', summary: t('lbl.warn'), detail: t('lbl.warn.message') },
      { id: '4', type: 'error', summary: t('lbl.error'), detail: t('lbl.error.message') },
      { id: '5', type: 'secondary', summary: t('lbl.secondary'), detail: t('lbl.secondary.message') },
      { id: '6', type: 'contrast', summary: t('lbl.contrast'), detail: t('lbl.contrast.message') },
    ];
  }

  <template>
    <UlxToast @messages={{this.messages}} />
  </template>
}

`;
