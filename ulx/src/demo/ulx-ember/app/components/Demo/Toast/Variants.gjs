import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

export default class VariantsToastDemo extends Component {
  @tracked messages = [];

  @action
  showElevated() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-elevated`,
        variant: 'info',
        summary: 'Elevated',
        detail: 'Variant: elevated',
        type: 'elevated'
      }
    ];
  }

  @action
  showFlat() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-flat`,
        variant: 'success',
        summary: 'Flat',
        detail: 'Variant: flat',
        type: 'flat'
      }
    ];
  }

  @action
  showOutlined() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}-outlined`,
        variant: 'warn',
        summary: 'Outlined',
        detail: 'Variant: outlined',
        type: 'outlined',
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
        variant: 'info',
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
        variant: 'info',
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
          @label="Elevated"
          @variant="primary"
          {{on "click" this.showElevated}}
        />
        <UlxButton
          @label="Flat"
          @variant="success"
          {{on "click" this.showFlat}}
        />
        <UlxButton
          @label="Outlined"
          @variant="warning"
          {{on "click" this.showOutlined}}
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
