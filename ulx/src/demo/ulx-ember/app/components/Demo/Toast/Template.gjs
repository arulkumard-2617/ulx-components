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
        id: `msg-${Date.now()}-template`,
        variant: 'color-success-layer success-border-start bordered fg-text',
        summary: "Can you send me the report?",
        sticky: true,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <UlxButton
        @label={{t "lbl.confirm"}}
        @variant="primary"
        {{on "click" this.showTemplateToast}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}}>
        <:content as |message|>
          <div class="flex flex-col gap-4">
            <span class="fw-semibold">{{"Amy Elsner"}}</span>
            <div class="fw-medium">{{message.summary}}</div>
            <UlxButton
              @label="Reply"
              @variant="success"
              @size="s-size"
              {{on "click" (fn this.removeMessage message)}}
            />
          </div>
        </:content>
      </UlxToast>
    </div>
  </template>
}
