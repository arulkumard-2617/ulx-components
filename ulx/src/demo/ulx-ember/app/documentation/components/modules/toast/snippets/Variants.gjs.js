export default `
import Component from '@glimmer/component';
import { UlxToast, t } from 'ulx-components';

export default class VariantsToastDemo extends Component {
  get messages() {
    return [
      { id: '1', type: 'info', summary: t('lbl.elevated'), detail: t('lbl.variant.elevated'), variant: 'elevated' },
      { id: '2', type: 'success', summary: t('lbl.flat'), detail: t('lbl.variant.flat'), variant: 'flat' },
      { id: '3', type: 'warn', summary: t('lbl.outlined'), detail: t('lbl.variant.outlined'), variant: 'outlined' },
      { id: '4', type: 'info', summary: t('lbl.no.icon'), detail: 'showIcon: false', showIcon: false },
      { id: '5', type: 'info', summary: t('lbl.sticky'), detail: t('msg.does.not.auto.close'), sticky: true },
    ];
  }

  <template>
    <UlxToast @messages={{this.messages}} />
  </template>
}

`;
