export default `
import Component from '@glimmer/component';
import { UlxToast } from 'uls-components';

export default class VariantsToastDemo extends Component {
  get messages() {
    return [
      { id: '1', severity: 'info', summary: 'Elevated', detail: 'Variant: elevated', variant: 'elevated' },
      { id: '2', severity: 'success', summary: 'Flat', detail: 'Variant: flat', variant: 'flat' },
      { id: '3', severity: 'warn', summary: 'Outlined', detail: 'Variant: outlined', variant: 'outlined' },
      { id: '4', severity: 'info', summary: 'No icon', detail: 'showIcon: false', showIcon: false },
      { id: '5', severity: 'info', summary: 'Sticky', detail: 'Does not auto-close', sticky: true },
    ];
  }

  <template>
    <UlxToast @messages={{this.messages}} />
  </template>
}

`;
