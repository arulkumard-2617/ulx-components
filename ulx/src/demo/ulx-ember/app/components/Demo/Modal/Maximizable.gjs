import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxModal, UlxButton } from 'ulx-components';

export default class MaximizableDemoComponent extends Component {
  @tracked isVisible = false;

  @action
  openModal() {
    this.isVisible = true;
  }

  @action
  closeModal() {
    this.isVisible = false;
  }

  @action
  handleConfirm() {
    this.isVisible = false;
  }

  <template>
    <div class="flex items-center gap-4">
      <UlxButton
        @label="Show Maximizable Modal"
        @variant="primary"
        {{on "click" this.openModal}}
      />

      <UlxModal
        @visible={{this.isVisible}}
        @title="Maximizable Modal"
        @onHide={{this.closeModal}}
        @maximizable={{true}}
        @size="l-size"
        @scrollable={{true}}
        @cancelButtonLabel="Cancel"
        @doneButtonLabel="Close"
        @onDone={{this.handleConfirm}}
        @onCancel={{this.closeModal}}
      >
        <p>This modal can be maximized to full screen.</p>
        <p>Click the maximize button in the header to expand it.</p>
      </UlxModal>
    </div>
  </template>
}
