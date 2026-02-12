export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxToast } from 'ulx-components';

export default class DemoSplitButtonVariants extends Component {
  @tracked messages = [];

  get items() {
    return [
      {
        label: 'Update',
        icon: 'bs-icons1 session-settings-icon',
        command: () => this.addMessage('Updated'),
      },
      {
        label: 'Delete',
        icon: 'bs-icons1 close-icon-01',
        command: () => this.addMessage('Deleted'),
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
        summary: 'Success',
        detail: 'Data Saved',
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
      <div class="fxb fvc gp5 fhc wrap">
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
        />
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="secondary"
        />
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="success"
        />
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="info"
        />
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="warning"
        />
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="help"
        />
        <UlxSplitButton
          @label="Save"
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="danger"
        />
      </div>
    </div>
  </template>
}

`;
