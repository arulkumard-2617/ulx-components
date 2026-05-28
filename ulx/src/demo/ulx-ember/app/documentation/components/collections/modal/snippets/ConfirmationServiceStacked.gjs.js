export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { inject as service } from '@ember/service';
import { UlxButton } from 'ulx-components';

export default class ConfirmationServiceStackedDemo extends Component {
  @service modalManager;

  @action
  startChainedConfirm() {
    this.modalManager.openModal({
      title: 'Step 1',
      message:
        'Click Done to open the next confirmation. This dialog stays open underneath.',
      closeOnConfirm: false,
      onConfirm: () => {
        this.modalManager.openModal({
          title: 'Step 2',
          message:
            'Both confirmations are visible. Close Step 2 first (ESC or Done), then Step 1.',
          onConfirm: () => true,
          size: 'l-size'
        });
      }
    });
  }

  <template>
    <div class="flex flex-col gap-4">
      <p class="text-13 fg-secondary mb-0">
        Click Done on the first dialog to open a second on top. Use
        <code>closeOnConfirm: false</code>
        so the first stays visible while the next opens.
      </p>
      <UlxButton
        @label="Start chained confirm"
        @variant="primary"
        {{on "click" this.startChainedConfirm}}
      />
    </div>
  </template>
}

`;
