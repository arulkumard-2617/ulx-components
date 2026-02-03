export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'ulx-components';

export default class TemplateToastDemo extends Component {
  @tracked messages = [];

  @action
  showTemplateToast() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-template\`,
        severity: 'success',
        summary: 'Can you send me the report?',
        sticky: true,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxButton @label="Confirm" @severity="primary" {{on "click" this.showTemplateToast}} />
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}}>
      <:content as |message|>
        <div class="fxb column gp4">
          <span class="fw-semibold">Amy Elsner</span>
          <div class="fw-medium">{{message.summary}}</div>
          <UlxButton
            @label="Reply"
            @severity="success"
            @size="s-size"
            {{on "click" (fn this.removeMessage message)}}
          />
        </div>
      </:content>
    </UlxToast>
  </template>
}

`;
