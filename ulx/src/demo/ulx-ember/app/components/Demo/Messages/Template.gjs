import Component from '@glimmer/component';
import { UlxBannerMessage } from 'ulx-components';
import { t } from 'ulx-components';

export default class TemplateMessagesDemo extends Component {
  get messages() {
    return [
      { id: '1', variant: 'info', summary: t('lbl.message'), detail: t('msg.messages.template.desc') },
    ];
  }

  <template>
    <UlxBannerMessage @messages={{this.messages}}>
      <:content as |message|>
        <strong>{{message.summary}}</strong> {{message.detail}}
      </:content>
    </UlxBannerMessage>
  </template>
}
