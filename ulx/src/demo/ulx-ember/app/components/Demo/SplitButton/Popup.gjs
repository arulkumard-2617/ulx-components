import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxSplitButton, UlxPopup } from 'ulx-components';

export default class DemoSplitButtonPopup extends Component {
  splitButtonRef = null;

  @action
  save() {}

  @action
  setSplitButtonRef(ref) {
    this.splitButtonRef = ref;
  }

  @action
  closePopup() {
    this.splitButtonRef?.close();
  }

  @action
  confirmSave() {
    this.closePopup();
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
        @title="Confirm"
        @size="m-size"
        @cancelButtonLabel="Cancel"
        @doneButtonLabel="Save"
        @onCancel={{this.closePopup}}
        @onDone={{this.confirmSave}}
      >
        <p class="mb-0">Are you sure you want to save the data?</p>
      </UlxPopup>
    </UlxSplitButton>
  </template>
}
