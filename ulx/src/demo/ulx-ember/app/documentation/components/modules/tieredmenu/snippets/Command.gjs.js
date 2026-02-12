export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTieredmenu, UlxToast, t } from 'ulx-components';

export default class CommandDemoComponent extends Component {
  @tracked activeItem = null;
  @tracked messages = [];

  constructor() {
    super(...arguments);
    // Initialize with first item active
    if (this.items && this.items.length > 0) {
      this.activeItem = this.items[0];
    }
  }

  get items() {
    return [
      { label: t('lbl.item.1'), value: 'item1' },
      { label: t('lbl.item.2'), value: 'item2' },
      { label: t('lbl.item.3'), value: 'item3' }
    ];
  }

  @action
  handleItemSelect(item) {
    this.activeItem = item;

    // Items without toastVariant are static: no toast should be shown
    if (!item.toastVariant) {
      return;
    }

    const variant = item.toastVariant;

    this.messages = [
      ...this.messages,
      {
        id: \`tieredmenu-msg-\${Date.now()}-\${item.value}\`,
        variant,
        summary: item.label,
        detail: \`Variant: \${variant}\`,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxTieredmenu
        @model={{this.items}}
        @onItemSelect={{this.handleItemSelect}}
      />

      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
