export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxForm, UlxInput, UlxField, UlxButton } from 'ulx-components';

const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

export default class Demo extends Component {
  @tracked name = '';
  @tracked email = '';
  @tracked nameError = '';
  @tracked emailError = '';
  @tracked submitted = false;

  validateName(value) {
    const trimmed = value?.trim() ?? '';

    if (!trimmed) {
      return 'This field is required.';
    }

    if (trimmed.length < 3 || trimmed.length > 20) {
      return 'Use 3–20 characters. Letters and numbers only.';
    }

    return '';
  }

  validateEmail(value) {
    const trimmed = value?.trim() ?? '';

    if (!trimmed) {
      return 'Email is required.';
    }

    if (!EMAIL_REGEX.test(trimmed)) {
      return 'Enter a valid email address.';
    }

    return '';
  }

  @action
  handleNameInput(value) {
    this.name = value;

    if (this.submitted) {
      this.nameError = this.validateName(value);
    }
  }

  @action
  handleEmailInput(value) {
    this.email = value;

    if (this.submitted) {
      this.emailError = this.validateEmail(value);
    }
  }

  @action
  suppressNativeSubmit(event) {
    event.preventDefault();
  }

  @action
  handleSubmit() {
    this.submitted = true;
    this.nameError = this.validateName(this.name);
    this.emailError = this.validateEmail(this.email);
  }

  <template>
    <UlxForm
      @tag="form"
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
          @fieldId="input-basic-name"
          @fieldClass="col-6"
          @error={{this.nameError}}
          as |field|
        >
          <UlxInput
            @field={{field}}
            @value={{this.name}}
            @onInput={{this.handleNameInput}}
            autocomplete="name"
            placeholder="Enter name"
            aria-label="Name"
          />
        </UlxField>

        <UlxField
          @label="Email"
          @helpText="Use 3–20 characters. Letters and numbers only."
          @fieldId="input-basic-email"
          @fieldClass="col-6"
          @error={{this.emailError}}
          as |field|
        >
          <UlxInput
            @field={{field}}
            @value={{this.email}}
            @onInput={{this.handleEmailInput}}
            type="email"
            autocomplete="email"
            placeholder="Enter email address"
            aria-label="Email"
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
