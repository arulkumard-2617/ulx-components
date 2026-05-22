export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { fn } from '@ember/helper';
import {
  UlxForm,
  UlxInput,
  UlxField,
  UlxButton,
  t,
  validate
} from 'ulx-components';

const TEXT_PATTERN_ALT = /^[a-zA-Z0-9\\s\\-_'.,]+$/;
const EMAIL_PATTERN = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

const validations = {
  newContactName: {
    required: 'This field is required.',

    format: {
      with: TEXT_PATTERN_ALT,
      allowEmpty: false,
      msg: 'Enter a valid contact name.'
    },

    maxLength: {
      value: 120,
      msg: t('msg.validation.max.length', { max: 120 })
    }
  },

  newContactEmail: {
    required: 'Email is required.',

    format: {
      with: EMAIL_PATTERN,
      allowEmpty: false,
      msg: 'Enter a valid email address.'
    }
  }
};

export default class Demo extends Component {
  validations = validations;

  @tracked newContactName = '';
  @tracked newContactEmail = '';
  @tracked errors = {};

  @action
  updateContactValue(fieldKey, value) {
    this[fieldKey] = value;
    this.clearErrorFor(fieldKey);
  }

  @action
  updateNewContactEmail(value) {
    this.newContactEmail = value;
    this.clearErrorFor('newContactEmail');
  }

  @action
  clearErrorFor(fieldKey) {
    if (!this.errors[fieldKey]) return;
    const next = { ...this.errors };
    delete next[fieldKey];
    this.errors = next;
  }

  @action
  suppressNativeSubmit(event) {
    event.preventDefault();
  }

  @action
  handleSubmit() {
    const { isValid, errors } = validate(this, this.validations);

    if (isValid) {
      this.errors = {};
    } else {
      this.errors = errors;
    }
  }

  <template>
    <UlxForm
      @size="m-size"
      @customClass="ulx-grid mb-14"
      novalidate
      @onSubmit={{this.suppressNativeSubmit}}
    >
      <:default>
        <UlxField
          @label="Name"
          @tooltipMessage="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
          @helpText="Use 3–20 characters. Letters and numbers only."
          @rules={{this.validations.newContactName}}
          @error={{this.errors.newContactName}}
          @fieldId="newContactName"
          @fieldClass="col-6"
          as |field|
        >
          <UlxInput
            @field={{field}}
            @value={{this.newContactName}}
            @onChange={{fn this.updateContactValue field.key}}
            placeholder={{"Enter name"}}
            aria-label={{"Name"}}
          />
        </UlxField>

        <UlxField
          @label="Email"
          @helpText="Use 3–20 characters. Letters and numbers only."
          @rules={{this.validations.newContactEmail}}
          @error={{this.errors.newContactEmail}}
          @fieldId="newContactEmail"
          @fieldClass="col-6"
          as |field|
        >
          <UlxInput
            @field={{field}}
            @value={{this.newContactEmail}}
            @onInput={{this.updateNewContactEmail}}
            placeholder={{"Enter email address"}}
            aria-label={{"Email"}}
          />
        </UlxField>
      </:default>

      <:actions>
        <UlxButton
          @type="button"
          @label="Submit"
          @variant="primary"
          @onClick={{this.handleSubmit}}
        />
      </:actions>
    </UlxForm>
  </template>
}

`;
