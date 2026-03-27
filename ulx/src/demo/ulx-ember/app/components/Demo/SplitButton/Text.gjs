import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxToast, t } from 'ulx-components';

export default class DemoSplitButtonText extends Component {
  @tracked messages = [];

  get items() {
    return [
      {
        label: 'Update',
        icon: 'bs-icons1 session-settings-icon',
        command: () => this.addMessage(t('lbl.updated')),
      },
      {
        label: 'Delete',
        icon: 'bs-icons1 close-icon-01',
        command: () => this.addMessage(t('lbl.deleted')),
      },
    ];
  }

  @action
  addMessage(detail) {
    this.messages = [
      ...this.messages,
      { id: `msg-${Date.now()}`, severity: 'success', summary: detail, detail },
    ];
  }

  @action
  save() {
    this.messages = [
      ...this.messages,
      {
        id: `msg-${Date.now()}`,
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
    <div class="">
      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
      <div class="flex items-center gap-5 flex-wrap">
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @text={{true}}
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @variant="secondary"
          @text={{true}}
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @variant="success"
          @text={{true}}
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @variant="info"
          @text={{true}}
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @variant="warning"
          @text={{true}}
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @variant="help"
          @text={{true}}
        />
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @items={{this.items}}
          @onClick={{this.save}}
          @variant="danger"
          @text={{true}}
        />
      </div>
    </div>
  </template>
}
