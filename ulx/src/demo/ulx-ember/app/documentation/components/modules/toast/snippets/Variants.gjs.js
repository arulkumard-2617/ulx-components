export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton, t } from 'ulx-components';

export default class VariantsToastDemo extends Component {
  get messages() {
    return [
      { id: '1', type: 'info', summary: t('lbl.elevated'), detail: t('lbl.variant.elevated'), variant: 'elevated' },
      { id: '2', type: 'success', summary: t('lbl.flat'), detail: t('lbl.variant.flat'), variant: 'flat' },
      { id: '3', type: 'warn', summary: t('lbl.outlined'), detail: t('lbl.variant.outlined'), variant: 'outlined' },
      { id: '4', type: 'info', summary: t('lbl.no.icon'), detail: 'showIcon: false', showIcon: false },
      { id: '5', type: 'info', summary: t('lbl.sticky'), detail: t('msg.does.not.auto.close'), sticky: true },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
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
