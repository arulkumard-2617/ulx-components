export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxBannerMessage } from 'ulx-components';

export default class ClosableMessagesDemo extends Component {
  @tracked message = {
    id: '1',
    variant: 'primary',
    summary: 'Complimentary Spaces Expiring Soon!',
    detail:
      "To continue using your complimentary Spaces beyond April 15, 2025 , you'll need to purchase and apply the necessary Space add-ons.",
    icon: 'space-notification-icon',
    closable: true,
  };

  @action
  removeMessage(_message) {
    this.message = null;
  }

  <template>
    <UlxBannerMessage @message={{this.message}} @onRemove={{this.removeMessage}} />
  </template>
}

`;
