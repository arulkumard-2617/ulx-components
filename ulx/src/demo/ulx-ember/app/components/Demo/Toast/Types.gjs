import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

/** Color-context surface classes applied via message.variant. */
const VARIANT_SURFACES = {
  info: 'color-info-layer info-border-start bordered fg-text',
  success: 'color-success-layer success-border-start bordered fg-text',
  warn: 'color-warning-layer warning-border-start bordered fg-text',
  error: 'color-danger-layer danger-border-start bordered fg-text',
  secondary: 'color-secondary-layer secondary-border-start bordered fg-text',
  contrast: 'color-black-layer4 black-border-start bordered fg-text'
};

export default class TypesToastDemo extends Component {
  @tracked messages = [];

  @action
  addMessage(variant) {
    const labels = {
      info: 'Info',
      success: 'Success',
      warn: 'Warning',
      error: 'Error',
      secondary: 'Secondary',
      contrast: 'Contrast'
    };
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-${variant}`,
        variant: VARIANT_SURFACES[variant],
        summary: labels[variant] ?? variant,
        detail: t('msg.type.message', { type: labels[variant] ?? variant })
      }
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <div class="flex gap-8">
        <UlxButton
          @label="Info"
          @variant="color-info"
          {{on "click" (fn this.addMessage "info")}}
        />
        <UlxButton
          @label="Success"
          @variant="color-success"
          {{on "click" (fn this.addMessage "success")}}
        />
        <UlxButton
          @label="Warn"
          @variant="color-warning"
          {{on "click" (fn this.addMessage "warn")}}
        />
        <UlxButton
          @label="Error"
          @variant="color-danger"
          {{on "click" (fn this.addMessage "error")}}
        />
        <UlxButton
          @label="Secondary"
          @variant="color-secondary"
          {{on "click" (fn this.addMessage "secondary")}}
        />
        <UlxButton
          @label="Contrast"
          {{on "click" (fn this.addMessage "contrast")}}
        />
      </div>
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
