export default `
import Component from '@glimmer/component';
import { UlxToast } from 'uls-components';

export default class SeveritiesToastDemo extends Component {
  get messages() {
    return [
      { id: '1', severity: 'info', summary: 'Info', detail: 'Info message.' },
      { id: '2', severity: 'success', summary: 'Success', detail: 'Success message.' },
      { id: '3', severity: 'warn', summary: 'Warn', detail: 'Warning message.' },
      { id: '4', severity: 'error', summary: 'Error', detail: 'Error message.' },
      { id: '5', severity: 'secondary', summary: 'Secondary', detail: 'Secondary message.' },
      { id: '6', severity: 'contrast', summary: 'Contrast', detail: 'Contrast message.' },
    ];
  }

  <template>
    <UlxToast @messages={{this.messages}} />
  </template>
}

`;
