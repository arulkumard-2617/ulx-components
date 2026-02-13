import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxTieredmenu, UlxToast, t } from 'ulx-components';
import { UlxTieredmenu, UlxToast, t } from 'ulx-components';

export default class CommandDemoComponent extends Component {
  @tracked activeItem = null;
  @tracked messages = [];

  get items() {
    return [
      {
        label: t('lbl.show.toast.1'),
        items: [
          { label: t('lbl.info.toast'), value: 'show1-info', toastVariant: 'info' },
          {
            label: t('lbl.success.toast'),
            value: 'show1-success',
            toastVariant: 'success',
          },
          {
            label: t('lbl.danger.toast'),
            value: 'show1-danger',
            toastVariant: 'error',
          },
        ],
      },
      {
        label: t('lbl.show.toast.2'),
        items: [
          {
            label: t('lbl.info.group'),
            items: [
              {
                label: t('msg.info.toast.a'),
                value: 'show2-info-a',
                toastVariant: 'info',
              },
              {
                label: t('msg.info.toast.b'),
                value: 'show2-info-b',
                toastVariant: 'info',
              },
            ],
          },
          {
            label: t('lbl.success.group'),
            items: [
              {
                label: t('msg.success.toast.a'),
                value: 'show2-success-a',
                toastVariant: 'success',
              },
              {
                label: t('msg.success.toast.b'),
                value: 'show2-success-b',
                toastVariant: 'success',
              },
            ],
          },
          {
            label: t('lbl.danger.group'),
            items: [
              {
                label: t('msg.danger.toast.a'),
                value: 'show2-danger-a',
                toastVariant: 'error',
              },
              {
                label: t('msg.danger.toast.b'),
                value: 'show2-danger-b',
                toastVariant: 'error',
              },
            ],
          },
        ],
      },
      {
        label: t('lbl.without.toast'),
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
    <div class="pda4">
      <UlxTieredmenu
        @model={{this.items}}
        @onItemSelect={{this.handleItemSelect}}
      />

      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}
