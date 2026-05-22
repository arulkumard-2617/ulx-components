export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import {
  UlxForm,
  UlxInput,
  UlxDropdown,
  UlxField,
  UlxTextarea,
  UlxButton,
  UlxToast,
  UlxCheckbox,
  UlxRadio,
  UlxToggle,
  UlxPassword,
  UlxMultiSelect,
  UlxTristateCheckbox,
  UlxSelectButton,
  UlxSlider,
  UlxRating,
  UlxOptionSegment,
  t
} from 'ulx-components';

const REQUIRED_RULES = { required: true };

const COUNTRIES = [
  { label: 'United States', value: 'US' },
  { label: 'India', value: 'IN' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'Germany', value: 'DE' }
];

const SOCIAL_PLATFORMS = [
  { label: 'X', value: 'x' },
  { label: 'LinkedIn', value: 'linkedin' },
  { label: 'GitHub', value: 'github' },
  { label: 'Website', value: 'website' }
];

const DIAL_CODES = [
  { label: '+1', value: '+1' },
  { label: '+91', value: '+91' },
  { label: '+44', value: '+44' },
  { label: '+49', value: '+49' }
];

const NOTIFICATION_OPTIONS = [
  { label: 'Email', value: 'email' },
  { label: 'SMS', value: 'sms' },
  { label: 'Push', value: 'push' }
];

const CONTACT_METHODS = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'WhatsApp', value: 'whatsapp' }
];

const FREQUENCY_OPTIONS = [
  { title: 'Daily', value: 'daily', description: 'Updates every day' },
  { title: 'Weekly', value: 'weekly', description: 'A weekly summary' },
  { title: 'Monthly', value: 'monthly', description: 'A monthly digest' }
];

const INTEREST_OPTIONS = [
  { title: 'Design', value: 'design', description: 'UI/UX, systems' },
  {
    title: 'Engineering',
    value: 'engineering',
    description: 'Frontend, backend'
  },
  { title: 'Product', value: 'product', description: 'PM, strategy' }
];

const LANGUAGE_OPTIONS = [
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'Python', value: 'python' },
  { label: 'Go', value: 'go' },
  { label: 'Rust', value: 'rust' }
];

const ACCOUNT_TYPE_OPTIONS = [
  { label: 'Individual', value: 'individual' },
  { label: 'Business', value: 'business' },
  { label: 'Enterprise', value: 'enterprise' }
];

export default class DemoFormTemplate extends Component {
  @tracked messages = [];

  @tracked firstName = '';
  @tracked lastName = '';
  @tracked email = '';
  @tracked password = '';
  @tracked confirmPassword = '';
  @tracked country = null;
  @tracked languages = ['js'];
  @tracked designation = '';
  @tracked companyName = '';
  @tracked skills = '';
  @tracked socialPlatform = 'x';
  @tracked socialUrl = 'https://www.x.com/xyz';
  @tracked dialCode = '+1';
  @tracked phone = '';
  @tracked altDialCode = '+1';
  @tracked altPhone = '';
  @tracked address = '';

  @tracked notificationChannels = ['email'];
  @tracked contactMethod = 'email';
  @tracked newsletterOptIn = true;
  @tracked tristateValue = null;
  @tracked accountType = 'individual';
  @tracked profileCompletion = 60;
  @tracked satisfaction = 3;
  @tracked frequency = 'weekly';
  @tracked interests = ['design'];

  get countries() {
    return COUNTRIES;
  }

  get socialPlatforms() {
    return SOCIAL_PLATFORMS;
  }

  get dialCodes() {
    return DIAL_CODES;
  }

  get languageOptions() {
    return LANGUAGE_OPTIONS;
  }

  get accountTypeOptions() {
    return ACCOUNT_TYPE_OPTIONS;
  }

  get notificationItems() {
    return NOTIFICATION_OPTIONS.map((opt) => ({
      label: opt.label,
      value: opt.value,
      checked: this.notificationChannels.includes(opt.value)
    }));
  }

  get contactMethodItems() {
    return CONTACT_METHODS.map((opt) => ({
      label: opt.label,
      value: opt.value,
      checked: this.contactMethod === opt.value
    }));
  }

  get frequencyItems() {
    return FREQUENCY_OPTIONS.map((opt) => ({
      title: opt.title,
      value: opt.value,
      description: opt.description,
      selected: this.frequency === opt.value
    }));
  }

  get interestItems() {
    return INTEREST_OPTIONS.map((opt) => ({
      title: opt.title,
      value: opt.value,
      description: opt.description,
      selected: this.interests.includes(opt.value)
    }));
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
  handlePasswordInput(event) {
    this.password = event.target.value;
  }

  @action
  handleConfirmPasswordInput(event) {
    this.confirmPassword = event.target.value;
  }

  @action
  handleDesignationInput(value) {
    this.designation = value;
  }

  @action
  handleCompanyNameInput(value) {
    this.companyName = value;
  }

  @action
  handleSkillsInput(value) {
    this.skills = value;
  }

  @action
  setCountry(value) {
    this.country = value;
  }

  @action
  setLanguages(value) {
    this.languages = value ?? [];
  }

  @action
  setSocialPlatform(value) {
    this.socialPlatform = value;
  }

  @action
  handleSocialUrlInput(value) {
    this.socialUrl = value;
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
  setAltDialCode(value) {
    this.altDialCode = value;
  }

  @action
  handleAltPhoneInput(value) {
    this.altPhone = value;
  }

  @action
  handleAddressInput(value) {
    this.address = value;
  }

  @action
  handleNotificationItemChange(item, checked) {
    const value = item?.value;
    if (!value) return;
    const next = new Set(this.notificationChannels);
    checked ? next.add(value) : next.delete(value);
    this.notificationChannels = [...next];
  }

  @action
  handleContactMethodChange(item, checked) {
    if (!checked) return;
    const value = item?.value;
    if (!value) return;
    this.contactMethod = value;
  }

  @action
  setNewsletterOptIn(checked) {
    this.newsletterOptIn = Boolean(checked);
  }

  @action
  handleTristateChange(nextValue) {
    this.tristateValue = nextValue;
  }

  @action
  setAccountType(value) {
    this.accountType = value;
  }

  @action
  handleProfileCompletionChange(nextValue) {
    const value = Number(nextValue);
    this.profileCompletion = Number.isFinite(value) ? value : 0;
  }

  @action
  handleSatisfactionChange(nextValue) {
    const value = Number(nextValue);
    this.satisfaction = Number.isFinite(value) ? value : 0;
  }

  @action
  handleFrequencySelect(_selected, value) {
    if (!value) return;
    this.frequency = value;
  }

  @action
  handleInterestsSelect(selected, value) {
    if (!value) return;
    const next = new Set(this.interests);
    selected ? next.add(value) : next.delete(value);
    this.interests = [...next];
  }

  @action
  addSocial() {
    this.messages = [
      ...this.messages,
      {
        id: \`social-added-\${Date.now()}\`,
        variant: 'success',
        summary: "Success",
        detail: 'Social handle added.',
        life: 3000
      }
    ];
  }

  @action
  handleSubmit(event) {
    event.preventDefault();
    this.messages = [
      ...this.messages,
      {
        id: \`form-template-submit-\${Date.now()}\`,
        variant: 'success',
        summary: 'Saved.',
        life: 3000
      }
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <div class="">
      <UlxForm
        @size="m-size"
        @customClass="ulx-grid gap-18"
        aria-label="Template form"
        {{on "submit" this.handleSubmit}}
      >
        <UlxField
          @label="First Name"
          @fieldId="form-first-name"
          @fieldClass="col-6"
        >
          <:default as |field|>
            <UlxInput
              id={{field.inputId}}
              @rules={{REQUIRED_RULES}}
              @value={{this.firstName}}
              @onInput={{this.handleFirstNameInput}}
              @size="m-size"
              @ariaDescribedBy={{field.ariaDescribedBy}}
              placeholder=" "
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Last Name"
          @fieldId="form-last-name"
          @fieldClass="col-6"
        >
          <:default as |field|>
            <UlxInput
              id={{field.inputId}}
              @value={{this.lastName}}
              @onInput={{this.handleLastNameInput}}
              @size="m-size"
              @ariaDescribedBy={{field.ariaDescribedBy}}
              placeholder=" "
            />
          </:default>
        </UlxField>

        <UlxField @label="Email" @fieldId="form-email" @fieldClass="col-12">
          <:default as |field|>
            <UlxInput
              id={{field.inputId}}
              @value={{this.email}}
              @onInput={{this.handleEmailInput}}
              @size="m-size"
              @ariaDescribedBy={{field.ariaDescribedBy}}
              type="email"
              placeholder=" "
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Password"
          @fieldId="form-password"
          @fieldClass="col-6"
        >
          <:default as |field|>
            <UlxPassword
              @id={{field.inputId}}
              @ariaDescribedBy={{field.ariaDescribedBy}}
              @value={{this.password}}
              @onInput={{this.handlePasswordInput}}
              @feedback={{false}}
              @toggleMask={{true}}
              @placeholder="Enter password"
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Confirm Password"
          @fieldId="form-confirm-password"
          @fieldClass="col-6"
        >
          <:default as |field|>
            <UlxPassword
              @id={{field.inputId}}
              @ariaDescribedBy={{field.ariaDescribedBy}}
              @value={{this.confirmPassword}}
              @onInput={{this.handleConfirmPasswordInput}}
              @feedback={{false}}
              @toggleMask={{true}}
              @placeholder="Confirm password"
            />
          </:default>
        </UlxField>

        <UlxField @label="Country" @fieldId="form-country" @fieldClass="col-12">
          <:default as |field|>
            <UlxDropdown
              @key={{field.key}}
              @ariaDescribedBy={{field.describedBy}}
              @ariaErrorMessage={{field.errorId}}
              @options={{this.countries}}
              @value={{this.country}}
              @onChange={{this.setCountry}}
              @placeholder="Select"
              @size="m-size"
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Preferred Languages"
          @fieldId="form-languages"
          @fieldClass="col-12"
        >
          <:default as |field|>
            <UlxMultiSelect
              @key={{field.key}}
              @ariaDescribedBy={{field.describedBy}}
              @ariaErrorMessage={{field.errorId}}
              @options={{this.languageOptions}}
              @value={{this.languages}}
              @onChange={{this.setLanguages}}
              @selectAll={{true}}
              @filter={{true}}
              @showClear={{true}}
              @placeholder="Select languages"
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Designation"
          @fieldId="form-designation"
          @fieldClass="col-12"
        >
          <:default as |field|>
            <UlxInput
              id={{field.inputId}}
              @value={{this.designation}}
              @onInput={{this.handleDesignationInput}}
              @size="m-size"
              @ariaDescribedBy={{field.ariaDescribedBy}}
              placeholder=" "
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Company Name"
          @fieldId="form-company-name"
          @fieldClass="col-12"
        >
          <:default as |field|>
            <UlxInput
              id={{field.inputId}}
              @value={{this.companyName}}
              @onInput={{this.handleCompanyNameInput}}
              @size="m-size"
              @ariaDescribedBy={{field.ariaDescribedBy}}
              placeholder=" "
            />
          </:default>
        </UlxField>

        <UlxField @label="Skills" @fieldId="form-skills" @fieldClass="col-12">
          <:default as |field|>
            <UlxInput
              id={{field.inputId}}
              @value={{this.skills}}
              @onInput={{this.handleSkillsInput}}
              @size="m-size"
              @ariaDescribedBy={{field.ariaDescribedBy}}
              @helpText="Use a comma (,) to separate multiple skills"
              placeholder=" "
            />
          </:default>
        </UlxField>

        <UlxCheckbox
          @label="Notification Channels"
          @items={{this.notificationItems}}
          @onItemChange={{this.handleNotificationItemChange}}
          @fieldClass="col-12"
        />

        <UlxRadio
          @label="Preferred Contact Method"
          @items={{this.contactMethodItems}}
          @onItemChange={{this.handleContactMethodChange}}
          @fieldClass="col-12"
        />

        <UlxField
          @label="Account Type"
          @fieldId="form-account-type"
          @fieldClass="col-12"
        >
          <:default>
            <UlxSelectButton
              @options={{this.accountTypeOptions}}
              @value={{this.accountType}}
              @onChange={{this.setAccountType}}
              @ariaLabel="Account type"
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Subscribe to Newsletter"
          @fieldId="newsletter-optin"
          @fieldClass="col-6"
        >
          <:default>
            <UlxToggle
              @inputId="newsletter-optin"
              @checked={{this.newsletterOptIn}}
              @onCheckedChange={{this.setNewsletterOptIn}}
              aria-label="Subscribe to Newsletter"
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Terms Approval"
          @fieldId="terms-approval"
          @fieldClass="col-6"
        >
          <:default>
            <UlxTristateCheckbox
              @id="terms-approval"
              @value={{this.tristateValue}}
              @onValueChange={{this.handleTristateChange}}
              @hideLabel={{true}}
              aria-label="Terms approval"
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Frequency"
          @fieldId="form-frequency"
          @fieldClass="col-6"
        >
          <:default>
            <UlxOptionSegment
              @type="radio"
              @items={{this.frequencyItems}}
              @onSelect={{this.handleFrequencySelect}}
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Interests"
          @fieldId="form-interests"
          @fieldClass="col-12"
        >
          <:default>
            <UlxOptionSegment
              @type="checkbox"
              @items={{this.interestItems}}
              @onSelect={{this.handleInterestsSelect}}
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Profile Completion"
          @fieldId="profile-completion"
          @fieldClass="col-6"
        >
          <:default>
            <div class="flex items-center gap-8">
              <UlxSlider
                @value={{this.profileCompletion}}
                @onChange={{this.handleProfileCompletionChange}}
                @min={{0}}
                @max={{100}}
                @size="w-252 s-size"
              />
              <span>{{this.profileCompletion}}%</span>
            </div>
          </:default>
        </UlxField>

        <UlxField
          @label="Satisfaction"
          @fieldId="satisfaction-rating"
          @fieldClass="col-6"
        >
          <:default>
            <UlxRating
              @value={{this.satisfaction}}
              @onChange={{this.handleSatisfactionChange}}
              aria-label="Satisfaction rating"
            />
          </:default>
        </UlxField>

        <UlxField
          @label="Social Pages/Handles"
          @fieldId="form-social-pages-handles"
          @fieldClass="col-12"
        >
          <:default as |field|>
            <UlxInput
              id={{field.inputId}}
              @inputGroup={{true}}
              @size="m-size"
              @value={{this.socialUrl}}
              @onInput={{this.handleSocialUrlInput}}
              @ariaDescribedBy={{field.ariaDescribedBy}}
              placeholder="https://www.x.com/xyz"
              aria-label="Social URL"
            >
              <:start>
                <UlxDropdown
                  id="social-platform"
                  @options={{this.socialPlatforms}}
                  @value={{this.socialPlatform}}
                  @onChange={{this.setSocialPlatform}}
                  @placeholder="X"
                  @size="m-size"
                  @customClass="inputgroup-addon left w-140"
                  aria-label="Social platform"
                />
              </:start>
              <:end>
                <UlxButton
                  @label="Add"
                  @customClass="inputgroup-addon right"
                  @variant="primary"
                  @size="m-size"
                  @onClick={{this.addSocial}}
                />
              </:end>
            </UlxInput>
          </:default>
        </UlxField>

        <UlxField
          @label="Phone Number"
          @fieldId="form-phone-number"
          @fieldClass="col-6"
        >
          <:default as |field|>
            <UlxInput
              id={{field.inputId}}
              @inputGroup={{true}}
              @size="m-size"
              @value={{this.phone}}
              @onInput={{this.handlePhoneInput}}
              @ariaDescribedBy={{field.ariaDescribedBy}}
              placeholder="(201) 555-0123"
              aria-label="Phone number"
            >
              <:start>
                <UlxDropdown
                  id="dial-code"
                  @options={{this.dialCodes}}
                  @value={{this.dialCode}}
                  @onChange={{this.setDialCode}}
                  @size="m-size"
                  @customClass="inputgroup-addon left w-100"
                  aria-label="Dial code"
                />
              </:start>
            </UlxInput>
          </:default>
        </UlxField>

        <UlxField
          @label="Alternative Phone Number"
          @fieldId="form-alt-phone-number"
          @fieldClass="col-6"
        >
          <:default as |field|>
            <UlxInput
              id={{field.inputId}}
              @inputGroup={{true}}
              @size="m-size"
              @value={{this.altPhone}}
              @onInput={{this.handleAltPhoneInput}}
              @ariaDescribedBy={{field.ariaDescribedBy}}
              placeholder="(201) 555-0123"
              aria-label="Alternative phone number"
            >
              <:start>
                <UlxDropdown
                  id="alt-dial-code"
                  @options={{this.dialCodes}}
                  @value={{this.altDialCode}}
                  @onChange={{this.setAltDialCode}}
                  @size="m-size"
                  @customClass="inputgroup-addon left w-100"
                  aria-label="Alternative dial code"
                />
              </:start>
            </UlxInput>
          </:default>
        </UlxField>

        <UlxField @label="Address" @fieldId="form-address" @fieldClass="col-12">
          <:default as |field|>
            <UlxTextarea
              id={{field.inputId}}
              @value={{this.address}}
              @onInput={{this.handleAddressInput}}
              @size="m-size"
              @ariaDescribedBy={{field.ariaDescribedBy}}
              placeholder=" "
              @customClass="w-full"
            />
          </:default>
        </UlxField>

        <div class="field col-12">
          <UlxButton @type="submit" @label="Save" @variant="primary" />
        </div>
      </UlxForm>

      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
