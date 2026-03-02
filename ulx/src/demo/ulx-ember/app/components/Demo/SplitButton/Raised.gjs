import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSplitButton, UlxToast, t } from 'ulx-components';

export default class DemoSplitButtonRaised extends Component {
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
      <div class="flex items-center gap-5 fhc wrap">
        <UlxSplitButton
          @label={{t "lbl.save"}}
          @icon="ls-tick-icon"
          @iconComponentClass="bs-icons1"
          @iconSize="s22"
          @size="s-size"
          @model={{this.items}}
          @onClick={{this.save}}
          @raised={{true}}
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
          @raised={{true}}
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
          @raised={{true}}
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
          @raised={{true}}
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
          @raised={{true}}
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
          @raised={{true}}
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
          @raised={{true}}
        />
      </div>
    </div>
  </template>
}
