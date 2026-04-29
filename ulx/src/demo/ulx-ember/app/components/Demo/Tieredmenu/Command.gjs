import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTieredmenu, UlxToast, t } from 'ulx-components';

export default class CommandDemoComponent extends Component {
  @tracked activeItem = null;
  @tracked messages = [];

  get items() {
    return [
      {
        label: "Show toast 1",
        items: [
          {
            label: "Info toast",
            value: 'show1-info',
            toastVariant: 'info',
          },
          {
            label: "Success toast",
            value: 'show1-success',
            toastVariant: 'success',
          },
          {
            label: "Danger toast",
            value: 'show1-danger',
            toastVariant: 'error',
          },
        ],
      },
      {
        label: "Show toast 2",
        items: [
          {
            label: "Info group",
            items: [
              {
                label: "Info toast A",
                value: 'show2-info-a',
                toastVariant: 'info',
              },
              {
                label: "Info toast B",
                value: 'show2-info-b',
                toastVariant: 'info',
              },
            ],
          },
          {
            label: "Success group",
            items: [
              {
                label: "Success toast A",
                value: 'show2-success-a',
                toastVariant: 'success',
              },
              {
                label: "Success toast B",
                value: 'show2-success-b',
                toastVariant: 'success',
              },
            ],
          },
          {
            label: "Danger group",
            items: [
              {
                label: "Danger toast A",
                value: 'show2-danger-a',
                toastVariant: 'error',
              },
              {
                label: "Danger toast B",
                value: 'show2-danger-b',
                toastVariant: 'error',
              },
            ],
          },
        ],
      },
      {
        label: "Without toast",
      },
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
        id: `tieredmenu-msg-${Date.now()}-${item.value}`,
        variant,
        summary: item.label,
        detail: t('msg.variant.label', { variant }),
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <UlxTieredmenu
        @items={{this.items}}
        @onItemSelect={{this.handleItemSelect}}
      />

      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
