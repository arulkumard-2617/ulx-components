export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxPopup, UlxToast } from 'ulx-components';

export default class DemoSplitButtonPopupDefaultFooter extends Component {
  @tracked messages = [];
  splitButtonRef = null;

  @action
  save() {}

  @action
  setSplitButtonRef(ref) {
    this.splitButtonRef = ref;
  }

  @action
  handleConfirm() {
    this.splitButtonRef?.close();
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}\`,
        severity: 'success',
        summary: 'Saved',
        detail: 'Changes were saved from the popup footer.'
      }
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxSplitButton
      @label="Save"
      @popup={{true}}
      @onClick={{this.save}}
      @registerRef={{this.setSplitButtonRef}}
      as |popup|
    >
      <UlxPopup
        @visible={{popup.visible}}
        @target={{popup.target}}
        @onHide={{popup.onHide}}
        @id={{popup.overlayId}}
        @dataQa={{popup.dataQa}}
        @title="Confirm Save"
        @size="m-size"
        @cancelButtonLabel="Cancel"
        @doneButtonLabel="Save"
        @onCancel={{popup.onHide}}
        @onDone={{this.handleConfirm}}
      >
        <p class="mb-0">Default Cancel and Save footer actions close the popup
          automatically.</p>
      </UlxPopup>
    </UlxSplitButton>

    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </template>
}

`;
