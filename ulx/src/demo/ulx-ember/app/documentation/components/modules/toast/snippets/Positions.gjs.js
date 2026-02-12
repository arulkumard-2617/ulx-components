export default `
import Component from '@glimmer/component';
import { UlxToast, t } from 'ulx-components';

export default class PositionsToastDemo extends Component {
  get messages() {
    return [
      { id: '1', type: 'info', summary: t('lbl.position'), detail: t('msg.bottom.right.default') },
    ];
  }

  <template>
    <UlxToast
      @messages={{this.messages}}
      @position="bottom-right"
    />
  </template>
}

`;
