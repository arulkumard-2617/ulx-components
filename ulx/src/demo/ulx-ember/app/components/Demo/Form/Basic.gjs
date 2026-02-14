import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxForm, UlxInput, UlxButton, UlxToast } from 'ulx-components';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default class DemoFormBasic extends Component {
  @tracked messages = [];
  @tracked name = '';
  @tracked email = '';
  @tracked nameError = null;
  @tracked emailError = null;

  @action
  handleNameInput(event) {
    this.name = event.target.value;
    this.nameError = null;
  }

  @action
  handleEmailInput(event) {
    this.email = event.target.value;
    this.emailError = null;
  }

  @action
  handleSubmit(event) {
    event.preventDefault();
    let valid = true;

    if (!this.name?.trim()) {
      this.nameError = 'This field is required.';
      valid = false;
    } else {
      this.nameError = null;
    }

    if (!this.email?.trim()) {
      this.emailError = 'This field is required.';
      valid = false;
    } else if (!EMAIL_REGEX.test(this.email.trim())) {
      this.emailError = 'Please enter a valid email address.';
      valid = false;
    } else {
      this.emailError = null;
    }

    if (!valid) {
      this.messages = [
        ...this.messages,
        {
          id: `form-error-${Date.now()}`,
          variant: 'error',
          summary: 'Please fix the errors below.',
        },
      ];
      return;
    }

    this.messages = [
      ...this.messages,
      {
        id: `form-submitted-${Date.now()}`,
        variant: 'success',
        summary: 'Form submitted successfully.',
      },
    ];
  }

  @action
  removeMessage(message) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  get nameInvalid() {
    return Boolean(this.nameError);
  }

  get emailInvalid() {
    return Boolean(this.emailError);
  }

  <template>
    <UlxForm
      @size="m-size"
      @customClass="ulx-grid gp6"
      aria-label="Form"
      {{on "submit" this.handleSubmit}}
    >
      <UlxInput
        @label="Name"
        @value={{this.name}}
        @onInput={{this.handleNameInput}}
        @size="m-size"
        @fieldClass="col-12"
        @error={{this.nameError}}
        @invalid={{this.nameInvalid}}
        placeholder="Enter name"
        aria-label="Name"
      />
      <UlxInput
        @label="Email"
        @value={{this.email}}
        @onInput={{this.handleEmailInput}}
        @size="m-size"
        @fieldClass="col-12"
        type="email"
        @error={{this.emailError}}
        @invalid={{this.emailInvalid}}
        placeholder="Enter email"
        aria-label="Email"
      />
      <div class="field col-12">
        <UlxButton @type="submit" @label="Submit" @variant="primary" />
      </div>
    </UlxForm>
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </template>
}
