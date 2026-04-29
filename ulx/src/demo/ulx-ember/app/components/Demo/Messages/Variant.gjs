import Component from '@glimmer/component';
import { UlxBannerMessage, UlxButton } from 'ulx-components';
import { t } from 'ulx-components';

export default class VariantMessagesDemo extends Component {
  get infoMessage() {
    return {
      id: '1',
      variant: 'info',
      summary: "Info",
      detail: "Info message.",
    };
  }

  get successMessage() {
    return {
      id: '2',
      variant: 'success',
      summary: "Success",
      detail: "Success message.",
      icon: 'documents-filled-icon',
    };
  }

  get warnMessage() {
    return {
      id: '3',
      variant: 'warn',
      summary: "Warn",
      detail: "Warn message.",
      icon: 'enhance-icon',
    };
  }

  get errorMessage() {
    return {
      id: '4',
      variant: 'error',
      summary: "Error",
      detail: "Error message.",
      icon: 'documents-filled-icon',
    };
  }

  <template>
    <div>
      <UlxBannerMessage
        @message={{this.infoMessage}}
        @iconType="font"
        @customClass="my-5"
      >
        <:action>
          <UlxButton
            @variant="primary"
            @outlined={{true}}
            @label="View More Details"
          />
        </:action>
      </UlxBannerMessage>
      <UlxBannerMessage
        @message={{this.successMessage}}
        @iconType="font"
        @customClass="my-5"
      >
        <:action>
          <UlxButton
            @variant="primary"
            @outlined={{true}}
            @label="View More Details"
          />
        </:action>
      </UlxBannerMessage>
      <UlxBannerMessage
        @message={{this.warnMessage}}
        @iconType="font"
        @customClass="my-5"
      >
        <:action>
          <UlxButton
            @variant="primary"
            @outlined={{true}}
            @label="View More Details"
          />
        </:action>
      </UlxBannerMessage>
      <UlxBannerMessage
        @message={{this.errorMessage}}
        @iconType="font"
        @customClass="my-5"
      >
        <:action>
          <UlxButton
            @variant="primary"
            @outlined={{true}}
            @label="View More Details"
          />
        </:action>
      </UlxBannerMessage>
    </div>
  </template>
}
