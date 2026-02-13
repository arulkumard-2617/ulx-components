export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxToast, t } from 'ulx-components';

export default class DemoSplitButtonBasic extends Component {
  @tracked messages = [];

  get items() {
    return [
      {
        label: t('lbl.update'),
        icon: 'bs-icons1 session-settings-icon',
        command: () => {
          this.messages = [
            ...this.messages,
            {
              id: \`msg-\${Date.now()}-up\`,
              severity: 'success',
              summary: t('lbl.updated'),
              detail: t('lbl.data.updated'),
            },
          ];
        },
      },
      {
        label: t('lbl.delete'),
        icon: 'bs-icons1 close-icon-01',
        command: () => {
          this.messages = [
            ...this.messages,
            {
              id: \`msg-\${Date.now()}-del\`,
              severity: 'warn',
              summary: t('lbl.deleted'),
              detail: t('lbl.data.deleted'),
            },
          ];
        },
      },
      {
        label: t('lbl.website'),
        icon: 'bs-icons1 comment-icon',
        command: () => {
          window.location.href = 'https://emberjs.com/';
        },
      },
      {
        label: t('lbl.submit'),
        icon: 'bs-icons1 ls-tick-icon',
        command: () => {},
      },
    ];
  }

  @action
  save() {
    this.messages = [
      ...this.messages,
      {
        id: \`msg-\${Date.now()}\`,
        severity: 'success',
        summary: t('lbl.success'),
        detail: t('lbl.data.saved'),
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="pda4">
      <UlxSplitButton
        @label={{t "lbl.save"}}
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @iconSize="s22"
        @size="s-size"
        @model={{this.items}}
        @onClick={{this.save}}
      />
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
