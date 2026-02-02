export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxToast, UlxButton } from 'uls-components';

export default class VariantsToastDemo extends Component {
  @tracked messages = [];

  @action
  showElevated() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-elevated\`,
        severity: 'info',
        summary: 'Elevated',
        detail: 'Variant: elevated',
        variant: 'elevated',
      },
    ];
  }

  @action
  showFlat() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-flat\`,
        severity: 'success',
        summary: 'Flat',
        detail: 'Variant: flat',
        variant: 'flat',
      },
    ];
  }

  @action
  showOutlined() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-outlined\`,
        severity: 'warn',
        summary: 'Outlined',
        detail: 'Variant: outlined',
        variant: 'outlined',
      },
    ];
  }

  @action
  showNoIcon() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}-noicon\`,
        severity: 'info',
        summary: 'No icon',
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
        severity: 'info',
        summary: 'Sticky',
        detail: 'Does not auto-close',
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
        <UlxButton @label="Elevated" @severity="primary" {{on "click" this.showElevated}} />
        <UlxButton @label="Flat" @severity="success" {{on "click" this.showFlat}} />
        <UlxButton @label="Outlined" @severity="warning" {{on "click" this.showOutlined}} />
        <UlxButton @label="No icon" @severity="secondary" {{on "click" this.showNoIcon}} />
        <UlxButton @label="Sticky" {{on "click" this.showSticky}} />
      </div>
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
