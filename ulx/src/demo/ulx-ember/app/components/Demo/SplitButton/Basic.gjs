import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { modifier } from 'ember-modifier';
import { UlxSplitButton, UlxToast, UlxPopup } from 'ulx-components';

export default class DemoSplitButtonBasic extends Component {
  @tracked messages = [];
  @tracked isPopupVisible = false;
  @tracked triggerElement = null;
  popupRef = null;

  get items() {
    return [
      {
        label: 'Update',
        icon: 'bs-icons1 session-settings-icon',
        command: () => {
          this.messages = [
            ...this.messages,
            {
              id: `msg-${Date.now()}-up`,
              severity: 'success',
              summary: 'Updated',
              detail: 'Data Updated'
            }
          ];
        }
      },
      {
        label: 'Delete',
        icon: 'bs-icons1 close-icon-01',
        command: () => {
          this.messages = [
            ...this.messages,
            {
              id: `msg-${Date.now()}-del`,
              severity: 'warn',
              summary: 'Deleted',
              detail: 'Data Deleted'
            }
          ];
        }
      },
      {
        label: 'Website',
        icon: 'bs-icons1 comment-icon',
        command: () => {
          window.location.href = 'https://emberjs.com/';
        }
      },
      {
        label: 'Submit',
        icon: 'bs-icons1 ls-tick-icon',
        command: () => {}
      }
    ];
  }

  triggerRef = modifier((element) => {
    this.triggerElement = element;
    return () => {
      if (this.triggerElement === element) {
        this.triggerElement = null;
      }
    };
  });

  @action
  setPopupRef(ref) {
    this.popupRef = ref;
  }

  @action
  openPopup(event) {
    if (this.isPopupVisible) {
      this.popupRef?.hide();
      return;
    }
    this.isPopupVisible = true;
  }

  @action
  confirmSave() {
    this.popupRef?.hide();
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}`,
        severity: 'success',
        summary: 'Success',
        detail: 'Data Saved'
      }
    ];
  }

  @action
  handlePopupHide() {
    this.isPopupVisible = false;
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <UlxSplitButton
        @label="Save"
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @iconSize="s22"
        @items={{this.items}}
        @onClick={{this.openPopup}}
        {{this.triggerRef}}
      />

      <UlxPopup
        @visible={{this.isPopupVisible}}
        @target={{this.triggerElement}}
        @context="body"
        @position="position-bottom"
        @size="m-size"
        @variant="elevated"
        @dismissable={{true}}
        @closeOnEscape={{true}}
        @ariaLabel="Confirm Save"
        @title="Confirm Save"
        @onHide={{this.handlePopupHide}}
        @registerRef={{this.setPopupRef}}
        @cancelButtonLabel="Cancel"
        @doneButtonLabel="Save"
        @onCancel={{this.handlePopupHide}}
        @onDone={{this.confirmSave}}
      >
        <:body>
          <p class="mb-0">{{"Are you sure you want to save the data?"}}</p>
        </:body>
      </UlxPopup>

      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
