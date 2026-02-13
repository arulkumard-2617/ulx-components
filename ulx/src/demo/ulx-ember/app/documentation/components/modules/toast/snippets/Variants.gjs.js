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
  showNoIcon() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-noicon\`,
        variant: 'info',
        summary: t('lbl.no.icon'),
        detail: 'showIcon: false',
        showIcon: false,
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
    <div class="pda4">
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
          @label={{t "lbl.no.icon"}}
          @variant="secondary"
          {{on "click" this.showNoIcon}}
        />
        <UlxButton @label={{t "lbl.sticky"}} {{on "click" this.showSticky}} />
      </div>
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
    <div class="pda4">
      <div class="fx gap8 flxw">
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
          @label="No icon"
          @variant="secondary"
          {{on "click" this.showNoIcon}}
        />
        <UlxButton @label="Sticky" {{on "click" this.showSticky}} />
      </div>
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
