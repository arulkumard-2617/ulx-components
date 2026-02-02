export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxToast } from 'uls-components';

export default class BasicToastDemo extends Component {
  get messages() {
    return [
      {
        id: '1',
        severity: 'info',
        summary: 'Info',
        detail: 'This is a basic toast message.',
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
