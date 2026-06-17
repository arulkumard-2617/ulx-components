export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxToast } from 'ulx-components';

export default class DemoSplitButtonOutlined extends Component {
  @tracked messages = [];

  get items() {
    return [
      {
        label: 'Update',
        icon: 'bs-icons1 session-settings-icon',
        command: () => this.addMessage("Updated"),
      },
      {
        label: 'Delete',
        icon: 'bs-icons1 close-icon-01',
        command: () => this.addMessage("Deleted"),
      },
    ];
  }

  @action
  addMessage(detail) {
    this.messages = [
      ...this.messages,
      { id: \`msg-\${Date.now()}\`, severity: 'success', summary: detail, detail },
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
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
      <div class="flex items-center gap-5 flex-wrap">
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @outlined={{true}}
        />
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @variant="secondary"
          @outlined={{true}}
        />
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @variant="success"
          @outlined={{true}}
        />
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @variant="danger"
          @outlined={{true}}
        />
      </div>
    </div>
  </template>
}

`;
