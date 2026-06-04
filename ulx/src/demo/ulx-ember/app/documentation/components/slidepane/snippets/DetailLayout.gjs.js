export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import {
  UlxSlidePane,
  UlxButton,
  UlxIconButton,
  UlxTabmenu,
  UlxForm,
  UlxField,
  UlxInput,
  UlxDropdown,
  UlxDivider
} from 'ulx-components';

const REQUIRED_RULES = { required: true };

const DIAL_CODES = [
  { label: '+91', value: '+91' },
  { label: '+1', value: '+1' },
  { label: '+44', value: '+44' }
];

export default class DetailLayoutSlidepaneDemo extends Component {
  @tracked isVisible = false;
  @tracked activeNavIndex = 2;
  @tracked firstName = 'John';
  @tracked lastName = 'Wick';
  @tracked email = 'johnwick@zylker.com';
  @tracked companyName = 'Zylker Corp';
  @tracked designation = 'Marketing Head';
  @tracked dialCode = '+91';
  @tracked phone = '89395 44629';

  get navItems() {
    return [
      { label: 'Order Details' },
      { label: 'Invoice' },
      { label: 'Attendees' },
      { label: 'Sessions' },
      { label: 'Payment History' },
      { label: 'Cancellation' },
      { label: 'Activity' }
    ];
  }

  get activeSectionLabel() {
    return this.navItems[this.activeNavIndex]?.label ?? 'Attendees';
  }

  get dialCodes() {
    return DIAL_CODES;
  }

  get requiredRules() {
    return REQUIRED_RULES;
  }

  get showAssignAttendeeForm() {
    return this.activeNavIndex === 2;
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
  handleNavChange(event) {
    this.activeNavIndex = event.index;
  }

  @action
  handleFirstNameInput(value) {
    this.firstName = value;
  }

  @action
  handleLastNameInput(value) {
    this.lastName = value;
  }

  @action
  handleEmailInput(value) {
    this.email = value;
  }

  @action
  handleCompanyNameInput(value) {
    this.companyName = value;
  }

  @action
  handleDesignationInput(value) {
    this.designation = value;
  }

  @action
  setDialCode(value) {
    this.dialCode = value;
  }

  @action
  handlePhoneInput(value) {
    this.phone = value;
  }

  @action
  handleSave() {
    void new Promise((resolve) => {
      setTimeout(resolve, 800);
    });
  }

  <template>
    <UlxButton
      @label="Open Order Details"
      @variant="primary"
      {{on "click" this.openPane}}
    />

    <UlxSlidePane
      class="detail-layout"
      @visible={{this.isVisible}}
      @position="right"
      @size="xxl-size"
      @scrollable={{false}}
      @onHide={{this.closePane}}
      @hideFooter={{true}}
      @contentClassName="no-padding"
    >
      <:head>
        <h5 class="slidepane-title" id="order-details-slidepane-title">
          Order Details
        </h5>
        <div class="slidepane-header-icons flex items-center gap-3">
          <UlxIconButton
            @label="Action"
            @iconRight="down-stroke-icon-new"
            @iconComponentClass="bs-icons1"
            @variant="basic"
            @size="s-size"
            aria-label="Order actions"
            aria-haspopup="menu"
          />
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
        <div class="slidepane-detail-columns">
          <nav class="slidepane-nav" aria-label="Order sections">
            <UlxTabmenu
              @items={{this.navItems}}
              @activeIndex={{this.activeNavIndex}}
              @onTabChange={{this.handleNavChange}}
              @variant="vertical"
              @tabId="order-details-slidepane-nav"
              @customClass="w-full"
            />
          </nav>

          <div class="slidepane-detail">
            <header class="slidepane-detail-header">
              <UlxIconButton
                @label="Back to Attendees"
                @variant="link on-hover"
                @iconLeft="left-arrow-icon"
                @iconComponentClass="bs-icons1"
                @iconSize="s14"
                @size="s-size"
                @customClass="p-0"
              />
              <h3 class="text-h5 semibold-font m-0 mt-2">
                Assign Attendee - Ticket #1
              </h3>
            </header>

            <div class="slidepane-detail-body">
              {{#if this.showAssignAttendeeForm}}
                <UlxDivider @type="dashed" class="mb-6" />
                <UlxForm @size="m-size" @customClass="ulx-grid col-2 gap-6">
                  <UlxField
                    @label="First Name"
                    @fieldId="order-detail-first-name"
                    @fieldClass="field"
                    @rules={{this.requiredRules}}
                    as |field|
                  >
                    <UlxInput
                      @field={{field}}
                      @value={{this.firstName}}
                      @onInput={{this.handleFirstNameInput}}
                      @size="m-size"
                      autocomplete="given-name"
                    />
                  </UlxField>
                  <UlxField
                    @label="Last Name"
                    @fieldId="order-detail-last-name"
                    @fieldClass="field"
                    as |field|
                  >
                    <UlxInput
                      @field={{field}}
                      @value={{this.lastName}}
                      @onInput={{this.handleLastNameInput}}
                      @size="m-size"
                      autocomplete="family-name"
                    />
                  </UlxField>
                  <UlxField
                    @label="Email"
                    @fieldId="order-detail-email"
                    @fieldClass="field"
                    @rules={{this.requiredRules}}
                    as |field|
                  >
                    <UlxInput
                      @field={{field}}
                      @value={{this.email}}
                      @onInput={{this.handleEmailInput}}
                      @size="m-size"
                      type="email"
                      autocomplete="email"
                    />
                  </UlxField>
                  <UlxField
                    @label="Company Name"
                    @fieldId="order-detail-company"
                    @fieldClass="field"
                    as |field|
                  >
                    <UlxInput
                      @field={{field}}
                      @value={{this.companyName}}
                      @onInput={{this.handleCompanyNameInput}}
                      @size="m-size"
                      autocomplete="organization"
                    />
                  </UlxField>
                  <UlxField
                    @label="Designation"
                    @fieldId="order-detail-designation"
                    @fieldClass="field"
                    as |field|
                  >
                    <UlxInput
                      @field={{field}}
                      @value={{this.designation}}
                      @onInput={{this.handleDesignationInput}}
                      @size="m-size"
                      autocomplete="organization-title"
                    />
                  </UlxField>
                  <UlxField
                    @label="Phone number"
                    @fieldId="order-detail-phone"
                    @fieldClass="field"
                  >
                    <:default as |field|>
                      <UlxInput
                        id={{field.inputId}}
                        @inputGroup={{true}}
                        @size="m-size"
                        @value={{this.phone}}
                        @onInput={{this.handlePhoneInput}}
                        @ariaDescribedBy={{field.ariaDescribedBy}}
                        inputmode="tel"
                        autocomplete="tel-national"
                        aria-label="Phone number"
                      >
                        <:start>
                          <UlxDropdown
                            id="order-detail-dial-code"
                            @options={{this.dialCodes}}
                            @value={{this.dialCode}}
                            @onChange={{this.setDialCode}}
                            @size="m-size"
                            @customClass="inputgroup-addon left w-100"
                            aria-label="Country dial code"
                          />
                        </:start>
                      </UlxInput>
                    </:default>
                  </UlxField>
                </UlxForm>
              {{else}}
                <p class="text-15 fg-secondary m-0">
                  {{this.activeSectionLabel}}
                  section content.
                </p>
              {{/if}}
            </div>

            <footer class="slidepane-detail-footer">
              <div class="footer-right-actions">
                <UlxButton
                  @label="Cancel"
                  @variant="basic"
                  @outlined={{true}}
                  {{on "click" this.closePane}}
                />
                <UlxButton
                  @label="Save"
                  @variant="primary"
                  {{on "click" this.handleSave}}
                />
              </div>
            </footer>
          </div>
        </div>
      </:body>
    </UlxSlidePane>
  </template>
}

`;
