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
  openDeleteConfirm() {
    this.modalManager.openModal({
      title: 'Delete item?',
      message: 'This action cannot be undone.',
      confirmLabel: 'Delete',
      confirmVariant: 'danger',
      onConfirm: () => this.deleteItem(),
      onCancel: () => {},
    });
  }

  <template>
    <UlxButton
      @label="Delete"
      @variant="danger"
      {{on "click" this.openDeleteConfirm}}
    />
  </template>
}
`;
