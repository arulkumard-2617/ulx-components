export default `
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
        id: \`msg-\${Date.now()}-elevated\`,
        variant: 'info',
        summary: t('lbl.elevated'),
        detail: t('lbl.variant.elevated'),
        type: 'elevated',
      },
    ];
  }

  @action
  showFlat() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-flat\`,
        variant: 'success',
        summary: t('lbl.flat'),
        detail: t('lbl.variant.flat'),
        type: 'flat',
      },
    ];
  }

  @action
  showOutlined() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-outlined\`,
        variant: 'warn',
        summary: t('lbl.outlined'),
        detail: t('lbl.variant.outlined'),
        type: 'outlined',
        sticky: true,
      },
    ];
  }

  @action
  showWithIcon() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-withicon\`,
        variant: 'info',
        summary: t('lbl.with.icon'),
        detail: 'showIcon: true',
        showIcon: true,
      },
    ];
  }

  @action
  showSticky() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-sticky\`,
        variant: 'info',
        summary: t('lbl.sticky'),
        detail: t('msg.does.not.auto.close'),
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
      <div class="fx gap8 flxw">
        <UlxButton
          @label={{t "lbl.elevated"}}
          @variant="primary"
          {{on "click" this.showElevated}}
        />
        <UlxButton
          @label={{t "lbl.flat"}}
          @variant="success"
          {{on "click" this.showFlat}}
        />
        <UlxButton
          @label={{t "lbl.outlined"}}
          @variant="warning"
          {{on "click" this.showOutlined}}
        />
        <UlxButton
          @label={{t "lbl.with.icon"}}
          @variant="secondary"
          {{on "click" this.showWithIcon}}
        />
        <UlxButton @label={{t "lbl.sticky"}} {{on "click" this.showSticky}} />
      </div>
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
