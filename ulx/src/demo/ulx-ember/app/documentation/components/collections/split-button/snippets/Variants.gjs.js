export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxToast, t } from 'ulx-components';

export default class DemoSplitButtonVariants extends Component {
  @tracked messages = [];

  get items() {
    return [
      {
        label: t('lbl.update'),
        icon: 'bs-icons1 session-settings-icon',
        command: () => this.addMessage(t('lbl.updated')),
      },
      {
        label: t('lbl.delete'),
        icon: 'bs-icons1 close-icon-01',
        command: () => this.addMessage(t('lbl.deleted')),
      },
    ];
  }

  @action
  addMessage(detail) {
    this.messages = [
      ...this.messages,
      { id: \`msg-\${Date.now()}\`, severity: 'success', summary: detail, detail },
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
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
      <div class="fxb fvc gp5 fhc wrap">
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="secondary"
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="success"
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="info"
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="warning"
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="help"
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @variant="danger"
        />
      </div>
    </div>
  </template>
}

`;
