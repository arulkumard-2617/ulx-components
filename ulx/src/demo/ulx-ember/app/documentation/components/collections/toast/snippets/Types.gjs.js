export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

export default class TypesToastDemo extends Component {
  @tracked messages = [];

  @action
  addMessage(type) {
    const labels = {
      info: t('lbl.info'),
      success: t('lbl.success'),
      warn: t('lbl.warning'),
      error: t('lbl.error'),
      secondary: t('lbl.secondary'),
      contrast: t('lbl.contrast'),
    };
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-\${type}\`,
        type,
        summary: labels[type] ?? type,
        detail: t('msg.type.message', { type: labels[type] ?? type }),
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <div class="fx gap8 flxw">
        <UlxButton
          @label={{t "lbl.info"}}
          @variant="info"
          {{on "click" (fn this.addMessage "info")}}
        />
        <UlxButton
          @label={{t "lbl.success"}}
          @variant="success"
          {{on "click" (fn this.addMessage "success")}}
        />
        <UlxButton
          @label={{t "lbl.warn"}}
          @variant="warning"
          {{on "click" (fn this.addMessage "warn")}}
        />
        <UlxButton
          @label={{t "lbl.error"}}
          @variant="danger"
          {{on "click" (fn this.addMessage "error")}}
        />
        <UlxButton
          @label={{t "lbl.secondary"}}
          @variant="secondary"
          {{on "click" (fn this.addMessage "secondary")}}
        />
        <UlxButton
          @label={{t "lbl.contrast"}}
          {{on "click" (fn this.addMessage "contrast")}}
        />
      </div>
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
