export default `
import Component from '@glimmer/component';
import { UlxToast } from 'ulx-components';

export default class TypesToastDemo extends Component {
  get messages() {
    return [
      { id: '1', type: 'info', summary: 'Info', detail: 'Info message.' },
      { id: '2', type: 'success', summary: 'Success', detail: 'Success message.' },
      { id: '3', type: 'warn', summary: 'Warn', detail: 'Warning message.' },
      { id: '4', type: 'error', summary: 'Error', detail: 'Error message.' },
      { id: '5', type: 'secondary', summary: 'Secondary', detail: 'Secondary message.' },
      { id: '6', type: 'contrast', summary: 'Contrast', detail: 'Contrast message.' },
    ];
  }

  <template>
    <UlxToast @messages={{this.messages}} />
  </template>
}

`;
