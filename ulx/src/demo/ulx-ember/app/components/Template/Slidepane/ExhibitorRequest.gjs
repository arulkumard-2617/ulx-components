import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { concat } from '@ember/helper';
import { eq } from 'ember-truth-helpers';
import { scrollToTopOn } from 'ulx-components';
import {
  UlxSlidePane,
  UlxButton,
  UlxIconButton,
  UlxSteps,
  UlxTabmenu,
  UlxSegment,
  UlxTable,
  UlxField,
  UlxTextarea,
  UlxTimeline,
  UlxTag,
  UlxAvatar,
  UlxIcon,
  UlxImage
} from 'ulx-components';

const NOTE_RULES = {
  maxLength: { value: 500 }
};

const LinkCell = <template>
  {{#if @value}}
    <a
      href={{@value}}
      class="fg-primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{@value}}
    </a>
  {{else}}
    <span></span>
  {{/if}}
</template>;

const LogoCell = <template>
  <div class="flex items-center gap-2 min-w-0">
    {{#if @row.logoSrc}}
      <UlxImage @src={{@row.logoSrc}} @alt="" @size="s-size" @shape="rounded" />
    {{/if}}
    <span class="line-clamp-1">{{@row.logoName}}</span>
  </div>
</template>;

const EmailCell = <template>
  <div class="flex items-center gap-2 min-w-0">
    <a href={{concat "mailto:" @value}} class="fg-primary line-clamp-1">
      {{@value}}
    </a>
    <UlxIconButton
      @iconLeft="copy-icon"
      @variant="link on-hover"
      @size="compact"
      @iconSize="s16"
      aria-label="Copy email"
    />
  </div>
</template>;

const TextCell = <template>
  <span>{{@value}}</span>
</template>;

export default class ExhibitorRequestSlidepaneTemplate extends Component {
  @tracked isVisible = false;
  @tracked activeStepIndex = 0;
  @tracked activeTabIndex = 0;
  @tracked noteValue = '';

  noteRules = NOTE_RULES;

  stepItems = [
    { label: 'Review' },
    { label: 'Approval' },
    { label: 'Completed' }
  ];

  tabItems = [
    { label: 'Request Details' },
    { label: 'Notes' },
    { label: 'Activities' }
  ];

  request = {
    companyName: 'Expo5',
    companyWebsite: 'https://www.cfsdf.com',
    contactName: 'bhuvanesh.d+4',
    contactEmail: 'bhuvanesh.d+4@zohotest.com',
    boothType: 'New BoothType 2',
    boothPrice: 'Free',
    boothNo: 'Yet to be assigned',
    logoSrc: '/images/faces/face5.jpg',
    logoName: 'Abstract State Bann...',
    managedByName: 'bhuvanesh d',
    managedByEmail: 'bhuvanesh.d@zohocorp.com',
    managedByInitials: 'BD'
  };

  get detailRows() {
    return [
      {
        id: 1,
        requestedBoothType: this.request.boothType,
        requestedBooth: '-',
        companyName: this.request.companyName,
        websiteUrl: this.request.companyWebsite,
        companyOverview: '',
        companyShortDescription: '',
        logoSrc: this.request.logoSrc,
        logoName: this.request.logoName,
        firstName: this.request.contactName,
        lastName: '',
        email: this.request.contactEmail,
        contactCompanyName: '',
        designation: '',
        phone: ''
      }
    ];
  }

  get detailColumns() {
    return [
      {
        field: 'requestedBoothType',
        header: 'Requested Booth Type',
        body: TextCell
      },
      { field: 'requestedBooth', header: 'Requested Booth', body: TextCell },
      { field: 'companyName', header: 'Company Name', body: TextCell },
      { field: 'websiteUrl', header: 'Website URL', body: LinkCell },
      {
        field: 'companyOverview',
        header: 'Company Overview',
        body: TextCell
      },
      {
        field: 'companyShortDescription',
        header: 'Company Short Description',
        body: TextCell
      },
      { field: 'logoName', header: 'Company Logo', body: LogoCell },
      { field: 'firstName', header: 'First Name', body: TextCell },
      { field: 'lastName', header: 'Last Name', body: TextCell },
      { field: 'email', header: 'Email', body: EmailCell },
      {
        field: 'contactCompanyName',
        header: 'Company Name',
        body: TextCell
      },
      { field: 'designation', header: 'Designation', body: TextCell },
      { field: 'phone', header: 'Phone', body: TextCell }
    ];
  }

  get timelineItems() {
    return [
      {
        id: 'received',
        label: 'Request Received',
        tagVariant: 'lt-gold',
        timestamp: 'Aug 17, 2026 • 12:15 AM',
        state: 'completed'
      },
      {
        id: 'in-review',
        label: 'In Review',
        tagVariant: 'lt-primary',
        timestamp: 'Aug 17, 2026 • 12:15 AM',
        state: 'active'
      }
    ];
  }

  get primaryActionLabel() {
    return this.activeStepIndex === 0 ? 'Review Request' : 'Approve';
  }

  get isSaveDisabled() {
    return !this.noteValue.trim();
  }

  get contactMailto() {
    return `mailto:${this.request.contactEmail}`;
  }

  @action
  openPane() {
    this.isVisible = true;
  }

  @action
  closePane() {
    this.isVisible = false;
  }

  @action
  handleTabChange(event) {
    this.activeTabIndex = event.index;
  }

  @action
  updateNote(value) {
    this.noteValue = value;
  }

  @action
  clearNote() {
    this.noteValue = '';
  }

  @action
  saveNote() {
    if (this.isSaveDisabled) {
      return;
    }
    this.noteValue = '';
  }

  @action
  handlePrimaryAction() {
    if (this.activeStepIndex === 0) {
      this.activeStepIndex = 1;
      this.activeTabIndex = 0;
      return;
    }

    if (this.activeStepIndex === 1) {
      this.activeStepIndex = 2;
    }
  }

  <template>
    <UlxButton
      @label="Open Exhibitor Request"
      @variant="primary"
      {{on "click" this.openPane}}
    />

    <UlxSlidePane
      @visible={{this.isVisible}}
      @position="right"
      @size="xl-size"
      @scrollBodyKey={{this.activeStepIndex}}
      @onHide={{this.closePane}}
      data-qa="exhibitor-request-slidepane"
    >
      <:head>
        <h5 class="slidepane-title" id="exhibitor-request-title">
          Exhibitor Request
        </h5>
        <div class="slidepane-header-icons">
          <UlxIconButton
            @iconLeft="close-icon-01"
            @iconComponentClass="bs-icons1"
            @variant="text"
            @text={{true}}
            @iconSize="s18"
            @customClass="slidepane-close-button"
            aria-label="Close"
            {{on "click" this.closePane}}
          />
        </div>
      </:head>

      <:body>
        <div class="flex flex-col gap-6">
          <UlxSteps
            @items={{this.stepItems}}
            @activeIndex={{this.activeStepIndex}}
            @readOnly={{true}}
            @completedStepIcon="success-icon"
            @activeStepIcon="success-icon"
            @pendingStepIcon="success-stroke-icon"
            @ariaLabel="Exhibitor request stages"
            @align="space-between"
          />

          <UlxSegment @customClass="bordered p-0 overflow-hidden">
            <div class="flex border-b">
              <div class="flex flex-col gap-2 p-4 min-w-0 flex1 border-e">
                <span class="text-13 fg-secondary">Company</span>
                <div class="flex items-center gap-2 min-w-0">
                  <UlxImage
                    @src={{this.request.logoSrc}}
                    @alt=""
                    @size="s-size"
                    @shape="rounded"
                  />
                  <span
                    class="text-15 semibold-font"
                  >{{this.request.companyName}}</span>
                </div>
                <a
                  href={{this.request.companyWebsite}}
                  class="text-13 fg-primary flex items-center gap-1 w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Company Website
                  <UlxIcon
                    @iconName="bs-icons1 link-external-icon"
                    @type="font"
                    @size="s14"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div class="flex flex-col gap-2 p-4 min-w-0 flex1">
                <span class="text-13 fg-secondary">Contact</span>
                <span
                  class="text-15 semibold-font"
                >{{this.request.contactName}}</span>
                <a
                  href={{this.contactMailto}}
                  class="text-13 fg-primary flex items-center gap-1 w-fit"
                >
                  <UlxIcon
                    @iconName="bs-icons1 email-icon"
                    @type="font"
                    @size="s14"
                    aria-hidden="true"
                  />
                  {{this.request.contactEmail}}
                </a>
              </div>
            </div>

            <div class="flex">
              <div class="flex flex-col gap-2 p-4 min-w-0 flex1 border-e">
                <div class="flex items-center gap-1 text-13 fg-secondary">
                  <span>Booth Type</span>
                  <UlxIcon
                    @iconName="bs-icons1 info-icon"
                    @type="font"
                    @size="s14"
                    aria-hidden="true"
                  />
                </div>
                <span
                  class="text-15 semibold-font"
                >{{this.request.boothType}}</span>
                <span class="text-13">{{this.request.boothPrice}}</span>
              </div>

              <div class="flex flex-col gap-2 p-4 min-w-0 flex1">
                <span class="text-13 fg-secondary">Booth No</span>
                <span
                  class="text-15 semibold-font"
                >{{this.request.boothNo}}</span>
              </div>
            </div>
          </UlxSegment>

          <UlxTabmenu
            @items={{this.tabItems}}
            @activeIndex={{this.activeTabIndex}}
            @onTabChange={{this.handleTabChange}}
            @variant="labeled"
            @tabId="exhibitor-request-tabs"
            @ariaLabel="Exhibitor request sections"
          />
          <div
            class="h-200 overflow-auto"
            {{scrollToTopOn this.activeTabIndex}}
          >
            {{#if (eq this.activeTabIndex 0)}}
              <UlxTable
                @value={{this.detailRows}}
                @columns={{this.detailColumns}}
                @dataKey="id"
                @layout="vertical"
                @showGridlines={{true}}
              />
            {{else if (eq this.activeTabIndex 1)}}
              <div class="ulx-form m-size">
                <UlxField
                  @label="Add Note"
                  @showCharacterCount={{true}}
                  @rules={{this.noteRules}}
                  @value={{this.noteValue}}
                  @fieldId="exhibitor-request-note"
                  as |field|
                >
                  <UlxTextarea
                    @field={{field}}
                    @value={{this.noteValue}}
                    @onInput={{this.updateNote}}
                    @size="l-size"
                    placeholder="Type Your Note here..."
                    aria-label="Add note"
                  />
                </UlxField>
              </div>
            {{else}}
              <UlxSegment @customClass="bordered p-0 overflow-hidden">
                <div class="ulx-grid col-2 divided">
                  <div class="flex flex-col min-w-0">
                    <div
                      class="px-4 py-3 bg-primaryLayer1 text-13 semibold-font"
                    >
                      Approval Timeline
                    </div>
                    <div class="p-4">
                      <UlxTimeline
                        @items={{this.timelineItems}}
                        @dataKey="id"
                        @layout="vertical"
                        @customClass="state-tracker"
                      >
                        <:content as |item|>
                          <div class="flex flex-col gap-2">
                            <UlxTag
                              @value={{item.label}}
                              @variant={{item.tagVariant}}
                              @type="pill"
                              @size="xs-size"
                            />
                            <span class="text-13">{{item.timestamp}}</span>
                          </div>
                        </:content>
                      </UlxTimeline>
                    </div>
                  </div>

                  <div class="flex flex-col min-w-0">
                    <div
                      class="px-4 py-3 bg-primaryLayer1 text-13 semibold-font"
                    >
                      Managed By
                    </div>
                    <div class="flex items-center gap-3 p-4 min-w-0">
                      <UlxAvatar
                        @type="text"
                        @label={{this.request.managedByInitials}}
                        @variant="purple"
                        @shape="circle"
                        @size="m-size"
                        @ariaLabel={{this.request.managedByName}}
                      />
                      <div class="flex flex-col gap-1 min-w-0">
                        <span class="text-15 semibold-font">
                          {{this.request.managedByName}}
                        </span>
                        <span class="text-13 fg-secondary">
                          {{this.request.managedByEmail}}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </UlxSegment>
            {{/if}}
          </div>
        </div>
      </:body>

      <:footer>
        {{#if (eq this.activeTabIndex 1)}}
          <div class="footer-left-actions">
            <UlxButton
              @label="Cancel"
              @variant="basic"
              {{on "click" this.clearNote}}
            />
            <UlxButton
              @label="Save"
              @disabled={{this.isSaveDisabled}}
              {{on "click" this.saveNote}}
            />
          </div>
        {{else}}
          <div class="footer-left-actions">
            <UlxButton
              @label="Close"
              @variant="basic"
              {{on "click" this.closePane}}
            />
          </div>
          <div class="footer-right-actions">
            <UlxButton @label="Deny Request" @variant="basic" />
            <UlxButton
              @label={{this.primaryActionLabel}}
              @variant="primary"
              {{on "click" this.handlePrimaryAction}}
            />
          </div>
        {{/if}}
      </:footer>
    </UlxSlidePane>
  </template>
}
