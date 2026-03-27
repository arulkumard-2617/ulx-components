export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxInput, UlxField, UlxButton, t, validate } from 'ulx-components';

const TEXT_PATTERN_ALT = /^[a-zA-Z0-9\\s\\-_'.,]+$/;
const EMAIL_PATTERN = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

const validations = {
  newContactName: {
    required: t('msg.error.name.required'),

    format: {
      with: TEXT_PATTERN_ALT,
      allowBlank: false,
      msg: t('msg.error.enter.valid.contact.name'),
    },

    maxLength: {
      value: 120,
      allowBlank: true,
      msg: t('msg.validation.max.length', { max: 120 }),
    },
  },

  newContactEmail: {
    required: t('msg.email.list.empty'),

    format: {
      with: EMAIL_PATTERN,
      allowBlank: false,
      msg: t('msg.enter.valid.email'),
    },
  },
};

export default class Demo extends Component {
  validations = validations;

  @tracked newContactName = '';
  @tracked newContactEmail = '';
  @tracked errors = {};

  @action
  updateNewContactName(event) {
    this.newContactName = event.target.value;
    this.clearErrorFor('newContactName');
  }

  @action
  updateNewContactEmail(event) {
    this.newContactEmail = event.target.value;
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
    <form
      novalidate
      class="ulx-form m-size ulx-grid mb-14"
      {{on "submit" this.suppressNativeSubmit}}
    >

      <UlxField
        @label={{t "lbl.name"}}
        @tooltipMessage="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        @helpText={{t "msg.input.help"}}
        @rules={{this.validations.newContactName}}
        @error={{this.errors.newContactName}}
        @fieldId="newContactName"
        @fieldClass="col-6"
        as |field|
      >
        <UlxInput
          @field={{field}}
          @value={{this.newContactName}}
          @onInput={{this.updateNewContactName}}
          placeholder={{t "lbl.enter.name"}}
          aria-label={{t "lbl.name"}}
        />
      </UlxField>

      <UlxField
        @label={{t "lbl.email"}}
        @helpText={{t "msg.input.help"}}
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
          placeholder={{t "lbl.enter.email"}}
          aria-label={{t "lbl.email"}}
        />
      </UlxField>

      <div class="col-12">
        <UlxButton
          @type="button"
          @label={{t "lbl.submit"}}
          @variant="primary"
          @onClick={{this.handleSubmit}}
        />
      </div>

    </form>
  </template>
}

`;
