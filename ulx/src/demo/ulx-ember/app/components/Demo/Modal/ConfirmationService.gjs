import Component from '@glimmer/component';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { inject as service } from '@ember/service';
import { UlxButton } from 'ulx-components';
import ConfirmationBodyTemplate from './ConfirmationServiceBodyTemplate';

export default class ConfirmationServiceDemo extends Component {
  @service modalManager;

  @action
  openSimpleConfirm() {
    this.modalManager.openModal({
      title: 'Confirm action',
      message: 'Are you sure you want to continue?',
      onConfirm: () => true,
      size: 'l-size'
    });
  }

  @action
  openDeleteConfirm() {
    this.modalManager.openModal({
      hideHeader: true,
      template: ConfirmationBodyTemplate,
      confirmLabel: 'Delete',
      confirmVariant: 'danger',
      onConfirm: () => {
        return new Promise((resolve) => {
          setTimeout(resolve, 1500);
        });
      }
    });
  }

  <template>
    <div class="flex items-center gap-4">
      <UlxButton
        @label="Simple confirm"
        @variant="primary"
        {{on "click" this.openSimpleConfirm}}
      />
      <UlxButton
        @label="Delete Modal"
        @variant="danger"
        {{on "click" this.openDeleteConfirm}}
      />
    </div>
  </template>
}
