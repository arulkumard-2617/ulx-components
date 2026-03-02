import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxBannerMessage, UlxIcon, UlxAvatar } from 'ulx-components';
import { t } from 'ulx-components';

export default class CustomIconMessagesDemo extends Component {
  @tracked messages = [
    {
      id: '1',
      variant: 'info',
      detail: t('lbl.info.message'),
      icon: 'send-icon',
      sticky: true,
      closable: true,
    },
    {
      id: '2',
      variant: 'success',
      sticky: true,
      closable: true,
      customContent: true,
      img: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
    },
  ];

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxBannerMessage @messages={{this.messages}} @onRemove={{this.removeMessage}}>
      <:content as |message|>
        {{#if message.customContent}}
          <UlxAvatar
            @type="image"
            @image={{message.img}}
            @ariaLabel={{t "lbl.image"}}
          />
          <div>{{t "msg.messages.custom.icon.help"}}</div>
        {{else}}
          <span class="ulx-messages-icon" aria-hidden="true">
            <UlxIcon
              @componentClass="bs-icons1"
              @type="font"
              @iconName={{message.icon}}
              @size="s18"
            />
          </span>
          {{#if message.detail}}
            <span class="ulx-messages-detail">{{message.detail}}</span>
          {{/if}}
        {{/if}}
      </:content>
    </UlxBannerMessage>
  </template>
}
