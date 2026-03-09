export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

export default class TemplateToastDemo extends Component {
  @tracked messages = [];

  @action
  showTemplateToast() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-template\`,
        variant: 'success',
        summary: t('msg.send.report'),
        sticky: true,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxButton @label={{t "lbl.confirm"}} @variant="primary" {{on "click" this.showTemplateToast}} />
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}}>
      <:content as |message|>
        <div class="fxb column gp4">
          <span class="fw-semibold">{{t "lbl.amy.elsner"}}</span>
          <div class="fw-medium">{{message.summary}}</div>
          <UlxButton
            @label={{t "lbl.reply"}}
            @variant="success"
            @size="s-size"
            {{on "click" (fn this.removeMessage message)}}
          />
        </div>
      </:content>
    </UlxToast>
  </template>
}

`;
