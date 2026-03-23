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
  UlxOptionSegment,
  t,
} from 'ulx-components';

const REQUIRED_RULES = { required: true };

const COUNTRIES = [
  { label: 'United States', value: 'US' },
  { label: 'India', value: 'IN' },
  { label: 'United Kingdom', value: 'GB' },
  { label: 'Germany', value: 'DE' },
];

const SOCIAL_PLATFORMS = [
  { label: 'X', value: 'x' },
  { label: 'LinkedIn', value: 'linkedin' },
  { label: 'GitHub', value: 'github' },
  { label: 'Website', value: 'website' },
];

const DIAL_CODES = [
  { label: '+1', value: '+1' },
  { label: '+91', value: '+91' },
  { label: '+44', value: '+44' },
  { label: '+49', value: '+49' },
];

const NOTIFICATION_OPTIONS = [
  { label: 'Email', value: 'email' },
  { label: 'SMS', value: 'sms' },
  { label: 'Push', value: 'push' },
];

const CONTACT_METHODS = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'WhatsApp', value: 'whatsapp' },
];

const FREQUENCY_OPTIONS = [
  { title: 'Daily', value: 'daily', description: 'Updates every day' },
  { title: 'Weekly', value: 'weekly', description: 'A weekly summary' },
  { title: 'Monthly', value: 'monthly', description: 'A monthly digest' },
];

const INTEREST_OPTIONS = [
  { title: 'Design', value: 'design', description: 'UI/UX, systems' },
  {
    title: 'Engineering',
    value: 'engineering',
    description: 'Frontend, backend',
  },
  { title: 'Product', value: 'product', description: 'PM, strategy' },
];

export default class DemoFormTemplate extends Component {
  @tracked messages = [];

  @tracked firstName = '';
  @tracked lastName = '';
  @tracked email = '';
  @tracked country = null;
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

  get notificationItems() {
    return NOTIFICATION_OPTIONS.map((opt) => ({
      label: opt.label,
      value: opt.value,
      checked: this.notificationChannels.includes(opt.value),
    }));
  }

  get contactMethodItems() {
    return CONTACT_METHODS.map((opt) => ({
      label: opt.label,
      value: opt.value,
      checked: this.contactMethod === opt.value,
    }));
  }

  get frequencyItems() {
    return FREQUENCY_OPTIONS.map((opt) => ({
      title: opt.title,
      value: opt.value,
      description: opt.description,
      selected: this.frequency === opt.value,
    }));
  }

  get interestItems() {
    return INTEREST_OPTIONS.map((opt) => ({
      title: opt.title,
      value: opt.value,
      description: opt.description,
      selected: this.interests.includes(opt.value),
    }));
  }

  @action
  handleFirstNameInput(event) {
    this.firstName = event.target.value;
  }

  @action
  handleLastNameInput(event) {
    this.lastName = event.target.value;
  }

  @action
  handleEmailInput(event) {
    this.email = event.target.value;
  }

  @action
  handleDesignationInput(event) {
    this.designation = event.target.value;
  }

  @action
  handleCompanyNameInput(event) {
    this.companyName = event.target.value;
  }

  @action
  handleSkillsInput(event) {
    this.skills = event.target.value;
  }

  @action
  setCountry(value) {
    this.country = value;
  }

  @action
  setSocialPlatform(value) {
    this.socialPlatform = value;
  }

  @action
  handleSocialUrlInput(event) {
    this.socialUrl = event.target.value;
  }

  @action
  setDialCode(value) {
    this.dialCode = value;
  }

  @action
  handlePhoneInput(event) {
    this.phone = event.target.value;
  }

  @action
  setAltDialCode(value) {
    this.altDialCode = value;
  }

  @action
  handleAltPhoneInput(event) {
    this.altPhone = event.target.value;
  }

  @action
  handleAddressInput(event) {
    this.address = event.target.value;
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
        summary: t('lbl.success'),
        detail: 'Social handle added.',
        life: 3000,
      },
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
        life: 3000,
      },
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
        <UlxInput
          @label="First Name"
          @rules={{REQUIRED_RULES}}
          @value={{this.firstName}}
          @onInput={{this.handleFirstNameInput}}
          @size="m-size"
          @fieldClass="col-6"
          placeholder=" "
        />

        <UlxInput
          @label="Last Name"
          @value={{this.lastName}}
          @onInput={{this.handleLastNameInput}}
          @size="m-size"
          @fieldClass="col-6"
          placeholder=" "
        />

        <UlxInput
          @label="Email"
          @value={{this.email}}
          @onInput={{this.handleEmailInput}}
          @size="m-size"
          @fieldClass="col-12"
          type="email"
          placeholder=" "
        />

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

        <UlxInput
          @label="Designation"
          @value={{this.designation}}
          @onInput={{this.handleDesignationInput}}
          @size="m-size"
          @fieldClass="col-6"
          placeholder=" "
        />

        <UlxInput
          @label="Company Name"
          @value={{this.companyName}}
          @onInput={{this.handleCompanyNameInput}}
          @size="m-size"
          @fieldClass="col-6"
          placeholder=" "
        />

        <UlxInput
          @label="Skills"
          @value={{this.skills}}
          @onInput={{this.handleSkillsInput}}
          @size="m-size"
          @fieldClass="col-12"
          @helpText="Use a comma (,) to separate multiple skills"
          placeholder=" "
        />

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

        <div class="field col-6 m-size">
          <label for="newsletter-optin">
            <span class="label-text">Subscribe to Newsletter</span>
          </label>
          <UlxToggle
            @inputId="newsletter-optin"
            @checked={{this.newsletterOptIn}}
            @onCheckedChange={{this.setNewsletterOptIn}}
            aria-label="Subscribe to Newsletter"
          />
        </div>

        <div class="field col-6 m-size">
          <label>
            <span class="label-text">Frequency</span>
          </label>
          <UlxOptionSegment
            @type="radio"
            @items={{this.frequencyItems}}
            @onSelect={{this.handleFrequencySelect}}
          />
        </div>

        <div class="field col-12 m-size">
          <label>
            <span class="label-text">Interests</span>
          </label>
          <UlxOptionSegment
            @type="checkbox"
            @items={{this.interestItems}}
            @onSelect={{this.handleInterestsSelect}}
          />
        </div>

        <UlxInput
          @label="Social Pages/Handles"
          @inputGroup={{true}}
          @size="m-size"
          @fieldClass="col-12"
          @value={{this.socialUrl}}
          @onInput={{this.handleSocialUrlInput}}
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

        <UlxInput
          @label="Phone Number"
          @inputGroup={{true}}
          @size="m-size"
          @fieldClass="col-6"
          @value={{this.phone}}
          @onInput={{this.handlePhoneInput}}
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

        <UlxInput
          @label="Alternative Phone Number"
          @inputGroup={{true}}
          @size="m-size"
          @fieldClass="col-6"
          @value={{this.altPhone}}
          @onInput={{this.handleAltPhoneInput}}
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

        <UlxTextarea
          @label="Address"
          @value={{this.address}}
          @onInput={{this.handleAddressInput}}
          @size="m-size"
          @fieldClass="col-12"
          placeholder=" "
        />
      </UlxForm>

      <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
    </div>
  </template>
}

`;
