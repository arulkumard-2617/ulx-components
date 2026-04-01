export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxModal, UlxButton, tooltip, UlxIcon } from 'ulx-components';

export default class BasicModalDemo extends Component {
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
        @label="Open Modal"
        @variant="primary"
        {{on "click" this.openModal}}
      />

      <UlxModal
        @visible={{this.isVisible}}
        @title="Basic Modal"
        @onHide={{this.closeModal}}
        @cancelButtonLabel="Cancel"
        @doneButtonLabel="Confirm"
        @onDone={{this.handleConfirm}}
        @onCancel={{this.closeModal}}
      >
        <p>This is the default body content. You can pass any content as the
          default block.</p>
        <UlxIcon
          {{tooltip "Icon Tooltip" position="top"}}
          @componentClass="bs-icons1"
          @type="font"
          @iconName="info-icon-01"
        />
      </UlxModal>
    </div>
  </template>
}

`;
