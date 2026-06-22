export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxToggle,
  UlxRadio,
  UlxInput,
  UlxInputGroup,
  UlxField,
  UlxDropdown,
  UlxIcon,
  UlxCard,
  UlxTag,
  UlxIconButton,
  UlxDivider,
  UlxDatePicker,
  UlxCheckbox
} from 'ulx-components';

const TICKET_TRANSFER_TILL_OPTIONS = [
  { label: 'Event End Date', value: 'event-end' },
  { label: 'Event Start Date', value: 'event-start' },
  { label: 'Custom Date', value: 'custom' }
];

export default class SettingsListTemplate extends Component {
  @tracked registrationLimitType = 'limited';
  @tracked registrationMinutes = '11';

  @tracked ticketIssueItems = [
    { label: 'On payment confirmation', value: 'payment', checked: true },
    { label: 'On registration', value: 'registration', checked: false }
  ];

  @tracked allowTicketTransferEnabled = true;
  @tracked ticketTransferScopeItems = [
    { label: 'For all ticket classes', value: 'all', checked: true },
    { label: 'For selected ticket classes', value: 'selected', checked: false }
  ];

  @tracked ticketTransferTill = 'event-end';

  @tracked restrictDuplicateEnabled = true;
  @tracked duplicateScopeValue = 'ticket-classes';

  @tracked exhibitorRequestsEnabled = true;

  @tracked exhibitorMeetingStartDate = new Date(2026, 1, 1);
  @tracked exhibitorMeetingStartNow = false;

  get ticketTransferTillOptions() {
    return TICKET_TRANSFER_TILL_OPTIONS;
  }

  get isRegistrationLimited() {
    return this.registrationLimitType === 'limited';
  }

  get isRegistrationNoLimit() {
    return this.registrationLimitType === 'no-limit';
  }

  get isDuplicateEventScope() {
    return this.duplicateScopeValue === 'event';
  }

  get isDuplicateTicketClassesScope() {
    return this.duplicateScopeValue === 'ticket-classes';
  }

  get isTicketTransferScopeDisabled() {
    return !this.allowTicketTransferEnabled;
  }

  get isDuplicateScopeDisabled() {
    return !this.restrictDuplicateEnabled;
  }

  @action
  handleRegistrationMinutesChange(value) {
    this.registrationMinutes = value;
  }

  @action
  handleLimitedRadioChange(checked) {
    checked && (this.registrationLimitType = 'limited');
  }

  @action
  handleNoLimitRadioChange(checked) {
    checked && (this.registrationLimitType = 'no-limit');
  }

  @action
  handleTicketIssueChange(item, checked) {
    if (!checked) return;
    this.ticketIssueItems = this.ticketIssueItems.map((entry) => ({
      ...entry,
      checked: entry === item
    }));
  }

  @action
  handleAllowTicketTransferChange(checked) {
    this.allowTicketTransferEnabled = checked;
  }

  @action
  handleTicketTransferScopeChange(item, checked) {
    if (!checked) return;
    this.ticketTransferScopeItems = this.ticketTransferScopeItems.map(
      (entry) => ({
        ...entry,
        checked: entry === item
      })
    );
  }

  @action
  handleTicketTransferTillChange(value) {
    this.ticketTransferTill = value;
  }

  @action
  handleRestrictDuplicateChange(checked) {
    this.restrictDuplicateEnabled = checked;
  }

  @action
  handleExhibitorRequestsChange(checked) {
    this.exhibitorRequestsEnabled = checked;
  }

  @action
  handleExhibitorMeetingDateChange(dates) {
    this.exhibitorMeetingStartDate = dates?.[0] ?? null;
  }

  @action
  handleExhibitorMeetingStartNowChange(checked) {
    this.exhibitorMeetingStartNow = checked;
  }

  @action
  handleDuplicateEventScopeChange(checked) {
    checked && (this.duplicateScopeValue = 'event');
  }

  @action
  handleDuplicateTicketClassesScopeChange(checked) {
    checked && (this.duplicateScopeValue = 'ticket-classes');
  }

  <template>
    <div class="ulx-settings">
      <div class="settings-item">
        <div class="settings-content flex flex-col gap-4">
          <h6 id="primary-contact-title" class="settings-title">
            Primary Contact
          </h6>

          <UlxCard @appearance="outlined" @size="s-size">
            <:content>
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between gap-4 flex-wrap">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span
                      id="primary-contact-email-title"
                      class="text-15 semibold-font"
                    >
                      Email Address of Zoho Backstage
                    </span>
                    <UlxTag
                      @value="Default"
                      @variant="completed-color"
                      @size="xs-size"
                      @type="pill"
                    />
                  </div>
                  <UlxIconButton
                    @label="Change Primary Contact"
                    @variant="link on-hover"
                    @iconRight="link-external-icon"
                    @size="s-size"
                    aria-describedby="primary-contact-email-title"
                  />
                </div>

                <p class="text-13 medium-font m-0">Zoho Backstage</p>

                <UlxDivider @type="dotted" @customClass="m-0" />

                <div class="flex flex-wrap gap-8">
                  <p class="text-13 m-0">
                    <div class="fg-secondary">Sender Email:</div>
                    <div class="bold-font">noreply@zohobackstage.in</div>
                  </p>
                  <p class="text-13 m-0">
                    <div class="fg-secondary">Reply-to Email:</div>
                    <div class="bold-font">Event Owner (terence.m@zohocorp.com)</div>
                  </p>
                </div>
              </div>
            </:content>
          </UlxCard>
        </div>
      </div>

      <div class="settings-item">
        <div class="settings-content">
          <h6 id="automated-emails-title" class="settings-title">
            Automated Emails
          </h6>
          <p id="automated-emails-description" class="settings-description">
            Send automated emails for exhibitor requests, approvals, denials,
            booth member updates, rehearsals, and lead sharing.
          </p>
        </div>

        <div class="settings-actions">
          <UlxIconButton
            @label="Edit"
            @variant="link on-hover"
            @iconRight="edit-icon"
            @size="s-size"
            aria-labelledby="automated-emails-title"
            aria-describedby="automated-emails-description"
          />
        </div>
      </div>

      <div class="settings-item">
        <div class="settings-content">
          <h6 id="exhibitor-requests-title" class="settings-title">
            Exhibitor Requests
          </h6>
          <p id="exhibitor-requests-description" class="settings-description">
            You will receive exhibitor requests and the Apply to Exhibit form
            will be displayed on your website.
          </p>
        </div>

        <div class="settings-actions">
          <UlxToggle
            @inputId="exhibitor-requests-toggle"
            @variant="green"
            @checked={{this.exhibitorRequestsEnabled}}
            @onCheckedChange={{this.handleExhibitorRequestsChange}}
            aria-labelledby="exhibitor-requests-title"
            aria-describedby="exhibitor-requests-description"
          />
        </div>
      </div>

      <div class="settings-item">
        <div class="settings-content">
          <h6 id="exhibitor-meetings-title" class="settings-title">
            Exhibitor Meetings
          </h6>
          <p id="exhibitor-meetings-description" class="settings-description">
            Select the start date from which event participants can schedule
            meetings with exhibitors
          </p>
        </div>

        <div class="settings-actions flex flex-col items-end gap-2">
          <div class="w-252">
            <UlxDatePicker
              @value={{this.exhibitorMeetingStartDate}}
              @onChange={{this.handleExhibitorMeetingDateChange}}
              @showIcon={{true}}
              @triggerIcon="calendar-icon02"
              @disabled={{this.exhibitorMeetingStartNow}}
              aria-labelledby="exhibitor-meetings-title"
              aria-describedby="exhibitor-meetings-description"
            />
          </div>

          <UlxCheckbox
            @id="exhibitor-meeting-start-now"
            @itemLabel="Now"
            @checked={{this.exhibitorMeetingStartNow}}
            @onCheckedChange={{this.handleExhibitorMeetingStartNowChange}}
            aria-describedby="exhibitor-meetings-description"
          />
        </div>
      </div>

      <div class="settings-item">
        <div class="settings-content flex flex-col gap-4">
          <h6 id="registration-time-limit-title" class="settings-title">
            Registration Time Limit
          </h6>

          <div
            class="flex items-center gap-4 flex-wrap"
            role="radiogroup"
            aria-labelledby="registration-time-limit-title"
          >
            <UlxRadio
              @id="registration-limit-limited"
              @checked={{this.isRegistrationLimited}}
              @onCheckedChange={{this.handleLimitedRadioChange}}
              aria-label="Registration time limit"
            />

            <UlxField @fieldId="registration-minutes" as |field|>
              <UlxInputGroup @endAddonClass="text-addon" @customClass="w-152">
                <:input>
                  <UlxInput
                    @field={{field}}
                    @type="number"
                    @value={{this.registrationMinutes}}
                    @disabled={{this.isRegistrationNoLimit}}
                    @onInput={{this.handleRegistrationMinutesChange}}
                    aria-label="Registration time limit in minutes"
                  />
                </:input>
                <:end>
                  <span aria-hidden="true">Min</span>
                </:end>
              </UlxInputGroup>
            </UlxField>

            <UlxRadio
              @id="registration-limit-none"
              @itemLabel="No limit"
              @checked={{this.isRegistrationNoLimit}}
              @onCheckedChange={{this.handleNoLimitRadioChange}}
            />
          </div>
        </div>
      </div>

      <div class="settings-item">
        <div class="settings-content flex flex-col gap-4">
          <div>
            <h6 id="ticket-issue-time-title" class="settings-title">Ticket issue
              time</h6>
            <p id="ticket-issue-time-description" class="settings-description">
              Decide when to issue tickets to your attendees. This setting will
              be applied only for orders bought using offline payment options.
            </p>
          </div>

          <UlxRadio
            @id="ticket-issue-time"
            @items={{this.ticketIssueItems}}
            @groupClass="horizontal"
            @onItemChange={{this.handleTicketIssueChange}}
            aria-labelledby="ticket-issue-time-title"
            aria-describedby="ticket-issue-time-description"
          />
        </div>
      </div>

      <div class="settings-item">
        <div class="settings-main flex flex-col gap-4">
          <div class="settings-content">
            <div class="flex items-center gap-2">
              <h6 id="allow-ticket-transfer-title" class="settings-title">
                Allow Ticket Transfer
              </h6>
              <UlxIcon
                @type="svg"
                @iconName="info-icon-01"
                @size="s16"
                aria-label="More information about ticket transfer"
              />
            </div>
            <p
              id="allow-ticket-transfer-description"
              class="settings-description"
            >
              Allow ticket purchasers and attendees to easily transfer their
              tickets to someone else if they can no longer attend.
            </p>
          </div>

          <div class="settings-body flex flex-col gap-4">
            <UlxRadio
              @id="ticket-transfer-scope"
              @items={{this.ticketTransferScopeItems}}
              @groupClass="horizontal"
              @disabled={{this.isTicketTransferScopeDisabled}}
              @onItemChange={{this.handleTicketTransferScopeChange}}
              aria-labelledby="allow-ticket-transfer-title"
            />

            <div class="flex flex-col gap-2">
              <h6 id="ticket-transfer-till-title" class="settings-title">Ticket
                transfer till</h6>
              <UlxField
                @fieldId="ticket-transfer-till"
                @labelFor={{false}}
                as |field|
              >
                <UlxDropdown
                  @field={{field}}
                  @options={{this.ticketTransferTillOptions}}
                  @value={{this.ticketTransferTill}}
                  @disabled={{this.isTicketTransferScopeDisabled}}
                  @onChange={{this.handleTicketTransferTillChange}}
                  aria-labelledby="ticket-transfer-till-title"
                />
              </UlxField>
            </div>
          </div>
        </div>

        <div class="settings-actions">
          <UlxToggle
            @inputId="allow-ticket-transfer-toggle"
            @variant="green"
            @checked={{this.allowTicketTransferEnabled}}
            @onCheckedChange={{this.handleAllowTicketTransferChange}}
            aria-labelledby="allow-ticket-transfer-title"
            aria-describedby="allow-ticket-transfer-description"
          />
        </div>
      </div>

      <div class="settings-item">
        <div class="settings-main flex flex-col gap-4">
          <div class="settings-content">
            <div class="flex items-center gap-2">
              <h6 id="restrict-duplicate-title" class="settings-title">
                Restrict Duplicate Attendees
              </h6>
              <UlxIcon
                @type="svg"
                @iconName="info-icon-01"
                @size="s16"
                aria-label="More information about restricting duplicate attendees"
              />
            </div>
            <p id="restrict-duplicate-description" class="settings-description">
              Manage repeated email addresses in the attendee list for your event.
            </p>
          </div>

          <div class="settings-body flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <UlxRadio
                @id="duplicate-scope-event"
                @itemLabel="In the event"
                @checked={{this.isDuplicateEventScope}}
                @disabled={{this.isDuplicateScopeDisabled}}
                @onCheckedChange={{this.handleDuplicateEventScopeChange}}
                aria-describedby="duplicate-scope-event-description"
              />
              <p
                id="duplicate-scope-event-description"
                class="settings-description ms-5"
              >
                Restrict repeated email addresses in the event's attendee list
              </p>
            </div>

            <div class="flex flex-col gap-2">
              <UlxRadio
                @id="duplicate-scope-ticket-classes"
                @itemLabel="In ticket classes"
                @checked={{this.isDuplicateTicketClassesScope}}
                @disabled={{this.isDuplicateScopeDisabled}}
                @onCheckedChange={{this.handleDuplicateTicketClassesScopeChange}}
                aria-describedby="duplicate-scope-ticket-classes-description"
              />
              <p
                id="duplicate-scope-ticket-classes-description"
                class="settings-description ms-5"
              >
                Restrict repeated email addresses in a ticket class
              </p>
            </div>
          </div>
        </div>

        <div class="settings-actions">
          <UlxToggle
            @inputId="restrict-duplicate-toggle"
            @variant="green"
            @checked={{this.restrictDuplicateEnabled}}
            @onCheckedChange={{this.handleRestrictDuplicateChange}}
            aria-labelledby="restrict-duplicate-title"
            aria-describedby="restrict-duplicate-description"
          />
        </div>
      </div>
    </div>
  </template>
}

`;
