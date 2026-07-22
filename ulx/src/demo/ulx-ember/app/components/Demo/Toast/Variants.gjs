import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

export default class VariantsToastDemo extends Component {
  @tracked messages = [];

  @action
  showInfo() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-info`,
        variant: 'color-info-layer info-border-start bordered fg-text',
        summary: 'Info',
        detail: 'color-info-layer info-border-start bordered fg-text'
      }
    ];
  }

  @action
  showSuccess() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-success`,
        variant: 'color-success-layer success-border-start bordered fg-text',
        summary: 'Success',
        detail: 'color-success-layer success-border-start bordered fg-text'
      }
    ];
  }

  @action
  showWarn() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-warn`,
        variant: 'color-warning-layer warning-border-start bordered fg-text',
        summary: 'Warning',
        detail: 'color-warning-layer warning-border-start bordered fg-text',
        sticky: true
      }
    ];
  }

  @action
  showWithIcon() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-withicon`,
        variant: 'color-info-layer info-border-start bordered fg-text',
        summary: 'With icon',
        detail: 'showIcon: true',
        showIcon: true
      }
    ];
  }

  @action
  showSticky() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-sticky`,
        variant: 'color-info-layer info-border-start bordered fg-text',
        summary: 'Sticky',
        detail: 'Does not auto-close',
        sticky: true
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
          {{on "click" this.showInfo}}
        />
        <UlxButton
          @label="Success"
          @variant="color-success"
          {{on "click" this.showSuccess}}
        />
        <UlxButton
          @label="Warn"
          @variant="color-warning"
          {{on "click" this.showWarn}}
        />
        <UlxButton
          @label="With icon"
          @variant="secondary"
          {{on "click" this.showWithIcon}}
        />
        <UlxButton @label="Sticky" {{on "click" this.showSticky}} />
      </div>
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
