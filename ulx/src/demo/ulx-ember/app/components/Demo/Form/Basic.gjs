import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import {
  UlxForm,
  UlxField,
  UlxInput,
  UlxButton,
  UlxToast,
} from 'ulx-components';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default class DemoFormBasic extends Component {
  @tracked messages = [];
  @tracked name = '';
  @tracked email = '';
  @tracked nameError = null;
  @tracked emailError = null;

  @action
  handleNameInput(value) {
    this.name = value;
    this.nameError = null;
  }

  @action
  handleEmailInput(value) {
    this.email = value;
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

  <template>
    <UlxForm
      @size="m-size"
      @customClass="ulx-grid gap-6"
      aria-label="Form"
      {{on "submit" this.handleSubmit}}
    >
      <UlxField
        @label="Name"
        @fieldId="form-basic-name"
        @fieldClass="col-4"
        @error={{this.nameError}}
        as |field|
      >
        <UlxInput
          @field={{field}}
          @value={{this.name}}
          @onInput={{this.handleNameInput}}
          @size="m-size"
          placeholder="Enter name"
          aria-label="Name"
        />
      </UlxField>
      <UlxField
        @label="Email"
        @fieldId="form-basic-email"
        @fieldClass="col-4"
        @error={{this.emailError}}
        as |field|
      >
        <UlxInput
          @field={{field}}
          @value={{this.email}}
          @onInput={{this.handleEmailInput}}
          @size="m-size"
          type="email"
          placeholder="Enter email"
          aria-label="Email"
        />
      </UlxField>
      <div class="col-12">
        <div>
          <UlxButton @type="submit" @label="Submit" @variant="primary" />
        </div>
      </div>
    </UlxForm>
    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </template>
}
