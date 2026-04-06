export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {
  UlxForm,
  UlxFieldSet,
  UlxField,
  UlxInput,
  UlxCheckbox,
  UlxButton,
  UlxToast,
  t,
} from 'ulx-components';

const EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

export default class DemoFieldsetFormLayout extends Component {
  @tracked messages = [];
  @tracked name = '';
  @tracked email = '';
  @tracked emailOptIn = false;
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
  handleEmailOptIn(checked) {
    this.emailOptIn = checked;
  }

  @action
  handleSubmit() {
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
          id: \`fieldset-form-error-\${Date.now()}\`,
          variant: 'error',
          summary: 'Please fix the errors below.',
        },
      ];
      return;
    }

    this.messages = [
      ...this.messages,
      {
        id: \`fieldset-form-ok-\${Date.now()}\`,
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
      @onSubmit={{this.handleSubmit}}
      @customClass="flex flex-col gap-8"
      aria-label={{t "lbl.doc.fieldset.form.aria"}}
    >
      <:default>
        <UlxFieldSet
          class="col-12"
          @layout="grid"
          @legend={{t "lbl.doc.fieldset.legend.contact"}}
          @description={{t "msg.doc.fieldset.desc.contact"}}
          @customClass="col-2 gap-6"
        >
          <UlxField
            @label={{t "lbl.doc.fieldset.name"}}
            @fieldId="demo-fieldset-form-name"
            @fieldClass="field"
            @error={{this.nameError}}
            as |field|
          >
            <UlxInput
              @field={{field}}
              @value={{this.name}}
              @onInput={{this.handleNameInput}}
              @size="m-size"
              autocomplete="name"
            />
          </UlxField>
          <UlxField
            @label={{t "lbl.doc.fieldset.email"}}
            @fieldId="demo-fieldset-form-email"
            @fieldClass="field"
            @error={{this.emailError}}
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
        </UlxFieldSet>

        <UlxFieldSet
          class="col-12"
          @legend={{t "lbl.doc.fieldset.legend.delivery"}}
          @description={{t "msg.doc.fieldset.desc.delivery"}}
          @layout="stack"
          @customClass="gap-4"
        >
          <div class="field">
            <UlxCheckbox
              @itemLabel={{t "lbl.doc.fieldset.notify.email"}}
              @checked={{this.emailOptIn}}
              @onCheckedChange={{this.handleEmailOptIn}}
            />
          </div>
        </UlxFieldSet>
      </:default>

      <:actions>
        <div class="flex flex-wrap gap-4">
          <UlxButton
            @type="submit"
            @label={{t "lbl.submit"}}
            @variant="primary"
          />
          <UlxButton
            @type="reset"
            @label={{t "lbl.reset"}}
            @variant="secondary"
          />
        </div>
      </:actions>
    </UlxForm>

    <UlxToast @messages={{this.messages}} @onClose={{this.removeMessage}} />
  </template>
}

`;
