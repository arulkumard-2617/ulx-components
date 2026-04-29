export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxToast, t } from 'ulx-components';

export default class DemoSplitButtonBasic extends Component {
  @tracked messages = [];

  get items() {
    return [
      {
        label: 'Update',
        icon: 'bs-icons1 session-settings-icon',
        command: () => {
          this.messages = [
            ...this.messages,
            {
              id: \`msg-\${Date.now()}-up\`,
              severity: 'success',
              summary: "Updated",
              detail: "Data Updated",
            },
          ];
        },
      },
      {
        label: 'Delete',
        icon: 'bs-icons1 close-icon-01',
        command: () => {
          this.messages = [
            ...this.messages,
            {
              id: \`msg-\${Date.now()}-del\`,
              severity: 'warn',
              summary: "Deleted",
              detail: "Data Deleted",
            },
          ];
        },
      },
      {
        label: 'Website',
        icon: 'bs-icons1 comment-icon',
        command: () => {
          window.location.href = 'https://emberjs.com/';
        },
      },
      {
        label: 'Submit',
        icon: 'bs-icons1 ls-tick-icon',
        command: () => {},
      },
    ];
  }

  @action
  save() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}\`,
        severity: 'success',
        summary: "Success",
        detail: "Data Saved",
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <UlxSplitButton
        @label={{t "lbl.save"}}
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @iconSize="s22"
        @items={{this.items}}
        @onClick={{this.save}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
