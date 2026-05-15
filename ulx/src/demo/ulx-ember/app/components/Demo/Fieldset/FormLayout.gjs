import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxForm,
  UlxFieldSet,
  UlxField,
  UlxInput,
  UlxTextarea,
  UlxDropdown,
  UlxButton,
  UlxToast,
} from 'ulx-components';

const PHONE_DIGITS_REGEX = /^\d{10}$/;

const MSG_REQUIRED = 'This field is required.';
const MSG_MIN_LEN = (min) => `Minimum ${min} characters required.`;
const MSG_MAX_LEN = (max) => `Maximum ${max} characters allowed.`;

const APP_NAME_MIN_LEN = 3;
const APP_NAME_MAX_LEN = 30;
const APP_DESC_MIN_LEN = 10;
const APP_DESC_MAX_LEN = 500;

const MSG_PHONE_INVALID = 'Enter exactly 10 digits.';
const MSG_FORM_ERRORS = 'Please fix the errors below.';
const MSG_FORM_SUCCESS = 'Form submitted successfully.';

const COUNTRY_OPTIONS = [
  { label: 'United States', value: 'US' },
  { label: 'India', value: 'IN' },
  { label: 'United Kingdom', value: 'GB' },
];

const STATES_BY_COUNTRY = {
  US: [
    { label: 'California', value: 'CA' },
    { label: 'New York', value: 'NY' },
    { label: 'Texas', value: 'TX' },
    { label: 'Washington', value: 'WA' },
  ],
  IN: [
    { label: 'Karnataka', value: 'KA' },
    { label: 'Maharashtra', value: 'MH' },
    { label: 'Tamil Nadu', value: 'TN' },
    { label: 'Telangana', value: 'TS' },
  ],
  GB: [
    { label: 'England', value: 'ENG' },
    { label: 'Scotland', value: 'SCT' },
    { label: 'Wales', value: 'WLS' },
  ],
};

export default class DemoFieldsetFormLayout extends Component {
  countryOptions = COUNTRY_OPTIONS;

  phoneKeyfilter = /^\d{0,10}$/;

  @tracked messages = [];
  @tracked appName = 'Zylker Developer Summit';
  @tracked appDescription =
    'Join us for the annual developer summit featuring the latest in technology and innovation.';
  @tracked country = null;
  @tracked state = null;
  @tracked phone = '';
  @tracked appNameError = null;
  @tracked appDescriptionError = null;
  @tracked countryError = null;
  @tracked stateError = null;
  @tracked phoneError = null;

  get appNameRules() {
    return {
      required: MSG_REQUIRED,
      minLength: {
        value: APP_NAME_MIN_LEN,
        msg: MSG_MIN_LEN(APP_NAME_MIN_LEN),
      },
      maxLength: {
        value: APP_NAME_MAX_LEN,
        msg: MSG_MAX_LEN(APP_NAME_MAX_LEN),
      },
    };
  }

  get appDescriptionRules() {
    return {
      required: MSG_REQUIRED,
      minLength: {
        value: APP_DESC_MIN_LEN,
        msg: MSG_MIN_LEN(APP_DESC_MIN_LEN),
      },
      maxLength: {
        value: APP_DESC_MAX_LEN,
        msg: MSG_MAX_LEN(APP_DESC_MAX_LEN),
      },
    };
  }

  get countryFieldRules() {
    return { required: MSG_REQUIRED };
  }

  get stateFieldRules() {
    return { required: MSG_REQUIRED };
  }

  get phoneFieldRules() {
    return {
      required: MSG_REQUIRED,
      maxLength: {
        value: 10,
        msg: MSG_PHONE_INVALID,
      },
    };
  }

  get stateOptions() {
    const list = this.country ? STATES_BY_COUNTRY[this.country] : null;
    return Array.isArray(list) ? list : [];
  }

  @action
  handleAppNameInput(value) {
    this.appName = value;
    this.appNameError = null;
  }

  @action
  handleAppDescriptionInput(value) {
    this.appDescription = value;
    this.appDescriptionError = null;
  }

  @action
  handleCountryChange(value) {
    this.country = value;
    this.state = null;
    this.countryError = null;
    this.stateError = null;
  }

  @action
  handleStateChange(value) {
    this.state = value;
    this.stateError = null;
  }

  @action
  handlePhoneInput(value) {
    const raw = value ?? '';
    this.phone = raw.replace(/\D/g, '').slice(0, 10);
    this.phoneError = null;
  }

  @action
  handleSubmit() {
    let valid = true;

    const nameTrimmed = this.appName?.trim() ?? '';
    if (!nameTrimmed) {
      this.appNameError = MSG_REQUIRED;
      valid = false;
    } else if (nameTrimmed.length < APP_NAME_MIN_LEN) {
      this.appNameError = MSG_MIN_LEN(APP_NAME_MIN_LEN);
      valid = false;
    } else if (nameTrimmed.length > APP_NAME_MAX_LEN) {
      this.appNameError = MSG_MAX_LEN(APP_NAME_MAX_LEN);
      valid = false;
    } else {
      this.appNameError = null;
    }

    const descTrimmed = this.appDescription?.trim() ?? '';
    if (!descTrimmed) {
      this.appDescriptionError = MSG_REQUIRED;
      valid = false;
    } else if (descTrimmed.length < APP_DESC_MIN_LEN) {
      this.appDescriptionError = MSG_MIN_LEN(APP_DESC_MIN_LEN);
      valid = false;
    } else if (descTrimmed.length > APP_DESC_MAX_LEN) {
      this.appDescriptionError = MSG_MAX_LEN(APP_DESC_MAX_LEN);
      valid = false;
    } else {
      this.appDescriptionError = null;
    }

    if (!this.country) {
      this.countryError = MSG_REQUIRED;
      valid = false;
    } else {
      this.countryError = null;
    }

    if (this.stateOptions.length > 0 && !this.state) {
      this.stateError = MSG_REQUIRED;
      valid = false;
    } else {
      this.stateError = null;
    }

    if (!this.phone?.length) {
      this.phoneError = MSG_REQUIRED;
      valid = false;
    } else if (!PHONE_DIGITS_REGEX.test(this.phone)) {
      this.phoneError = MSG_PHONE_INVALID;
      valid = false;
    } else {
      this.phoneError = null;
    }

    if (!valid) {
      this.messages = [
        ...this.messages,
        {
          id: `fieldset-form-error-${Date.now()}`,
          variant: 'error',
          summary: MSG_FORM_ERRORS,
        },
      ];
      return;
    }

    this.messages = [
      ...this.messages,
      {
        id: `fieldset-form-ok-${Date.now()}`,
        variant: 'success',
        summary: MSG_FORM_SUCCESS,
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  <template>
    <UlxForm
      @size="m-size"
      @onSubmit={{this.handleSubmit}}
      @customClass="flex flex-col gap-8"
      aria-label="Sample registration form"
      novalidate
    >
      <:default>
        <UlxFieldSet
          class="col-12 w-full"
          @legend="Basic information"
          @customClass="flex flex-col gap-6"
        >
          <UlxField
            @fieldId="demo-fieldset-form-app-name"
            @fieldClass="w-full"
            @rules={{this.appNameRules}}
            @error={{this.appNameError}}
            @tooltipMessage="The public name shown to users when they install or open your app."
          >
            <:label>
              <span class="flex justify-between items-center gap-4 w-full">
                <span>App name</span>
              </span>
            </:label>
            <:default as |field|>
              <UlxInput
                @field={{field}}
                @value={{this.appName}}
                @onInput={{this.handleAppNameInput}}
                @size="m-size"
                autocomplete="off"
              />
            </:default>
          </UlxField>

          <UlxField
            @fieldId="demo-fieldset-form-app-description"
            @fieldClass="w-full"
            @rules={{this.appDescriptionRules}}
            @error={{this.appDescriptionError}}
          >
            <:label>
              <span>App description</span>
            </:label>
            <:default as |field|>
              <UlxTextarea
                @field={{field}}
                @value={{this.appDescription}}
                @onInput={{this.handleAppDescriptionInput}}
                @size="m-size"
                rows="4"
                class="w-full"
              />
            </:default>
          </UlxField>
        </UlxFieldSet>

        <UlxFieldSet
          class="col-12 w-full"
          @legend="Location & contact"
          @customClass="flex flex-col gap-6"
        >
          <UlxField
            @label="Country"
            @fieldId="demo-fieldset-form-country"
            @fieldClass="w-full"
            @rules={{this.countryFieldRules}}
            @error={{this.countryError}}
            as |field|
          >
            <UlxDropdown
              @field={{field}}
              @options={{this.countryOptions}}
              @value={{this.country}}
              @onChange={{this.handleCountryChange}}
              @placeholder="Select a Country"
              @size="m-size"
            />
          </UlxField>

          <UlxField
            @label="State / Province"
            @fieldId="demo-fieldset-form-state"
            @fieldClass="w-full"
            @rules={{this.stateFieldRules}}
            @error={{this.stateError}}
            as |field|
          >
            <UlxDropdown
              @field={{field}}
              @options={{this.stateOptions}}
              @value={{this.state}}
              @onChange={{this.handleStateChange}}
              @placeholder="Select state or province"
              @disabled={{if this.country false true}}
              @size="m-size"
            />
          </UlxField>

          <UlxField
            @label="Phone"
            @fieldId="demo-fieldset-form-phone"
            @fieldClass="w-full"
            @rules={{this.phoneFieldRules}}
            @error={{this.phoneError}}
            as |field|
          >
            <UlxInput
              @field={{field}}
              @error={{this.phoneError}}
              @value={{this.phone}}
              @onInput={{this.handlePhoneInput}}
              @keyfilter={{this.phoneKeyfilter}}
              @size="m-size"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              @placeholder="5551234567"
            />
          </UlxField>
        </UlxFieldSet>
      </:default>

      <:actions>
        <div class="flex flex-wrap gap-4">
          <UlxButton @type="submit" @label="Submit" @variant="primary" />
          <UlxButton @type="reset" @label="Reset" @variant="secondary" />
        </div>
      </:actions>
    </UlxForm>

    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </template>
}
