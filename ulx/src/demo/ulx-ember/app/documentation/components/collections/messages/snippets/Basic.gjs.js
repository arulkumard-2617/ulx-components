export default `
import Component from '@glimmer/component';
import { UlxBannerMessage, UlxButton } from 'ulx-components';
import { t } from 'ulx-components';

export default class BasicMessagesDemo extends Component {
  get message() {
    return {
      id: '1',
      variant: 'primary',
      summary: 'Complimentary Spaces Expiring Soon!',
      detail:
        "To continue using your complimentary Spaces beyond April 15, 2025 , you'll need to purchase and apply the necessary Space add-ons.",
      icon: 'space-notification-icon'
    };
  }

  <template>
    <UlxBannerMessage @message={{this.message}}>
      <:action>
        <UlxButton
          @variant="primary"
          @outlined={{true}}
          @label="View More Details"
        />
      </:action>
    </UlxBannerMessage>
  </template>
}

`;
