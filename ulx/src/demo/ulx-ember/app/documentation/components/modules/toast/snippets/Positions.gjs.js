export default `
import Component from '@glimmer/component';
import { UlxToast } from 'ulx-components';

export default class PositionsToastDemo extends Component {
  get messages() {
    return [
      { id: '1', severity: 'info', summary: 'Position', detail: 'Bottom-right (default).' },
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
