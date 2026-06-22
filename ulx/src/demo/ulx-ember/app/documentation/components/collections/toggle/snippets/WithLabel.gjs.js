export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToggle } from 'ulx-components';

export default class WithLabelToggleDemo extends Component {
  @tracked termsEnabled = false;
  @tracked notificationsEnabled = true;

  @action
  handleTermsChange(checked) {
    this.termsEnabled = checked;
  }

  @action
  handleNotificationsChange(checked) {
    this.notificationsEnabled = checked;
  }

  <template>
    <div class="flex flex-col gap-12 w-full">
      <UlxToggle
        @inputId="terms-toggle"
        @label="Terms and Policies"
        @description="Link the Terms and Policies for events created in this portal."
        @togglePosition="end"
        @customClass="w-full"
        @variant="green"
        @checked={{this.termsEnabled}}
        @onCheckedChange={{this.handleTermsChange}}
      />

      <UlxToggle
        @inputId="notifications-toggle"
        @label="Email Notifications"
        @description="Send updates when attendees register or event details change."
        @togglePosition="start"
        @customClass="w-full"
        @variant="primary"
        @checked={{this.notificationsEnabled}}
        @onCheckedChange={{this.handleNotificationsChange}}
      />
    </div>
  </template>
}

`;
