export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxModal, UlxButton } from 'ulx-components';

export default class ResponsiveDemoComponent extends Component {
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
        @label="Show Responsive Modal"
        @variant="primary"
        {{on "click" this.openModal}}
      />

      <UlxModal
        @visible={{this.isVisible}}
        @title="Responsive Modal"
        @onHide={{this.closeModal}}
        @size="xl-size"
        @scrollable={{true}}
        @cancelButtonLabel="Cancel"
        @doneButtonLabel="Close"
        @onDone={{this.handleConfirm}}
        @onCancel={{this.closeModal}}
      >
        <p>This modal uses the built-in responsive behavior from
          <code>dialog.less</code>.</p>
        <p>Resize the browser to mobile (≤767px) to see it adapt: fixed width on
          desktop, full width with padding on mobile.</p>
      </UlxModal>
    </div>
  </template>
}

`;
