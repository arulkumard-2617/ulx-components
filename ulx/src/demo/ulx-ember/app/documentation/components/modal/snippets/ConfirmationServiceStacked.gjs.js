export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { inject as service } from '@ember/service';
import { UlxButton } from 'ulx-components';

// Mount once in application.hbs:
// <UlxConfirmationModal />

export default class MyComponent extends Component {
  @service modalManager;

  @action
  startChainedConfirm() {
    this.modalManager.openModal({
      title: 'Step 1',
      message: 'Click Done to open the next confirmation. This dialog stays open.',
      closeOnConfirm: false,
      onConfirm: () => {
        this.modalManager.openModal({
          title: 'Step 2',
          message: 'Both confirmations are visible.',
          onConfirm: () => true,
        });
      },
    });
  }

  <template>
    <UlxButton
      @label="Start chained confirm"
      @variant="primary"
      {{on "click" this.startChainedConfirm}}
    />
  </template>
}
`;
