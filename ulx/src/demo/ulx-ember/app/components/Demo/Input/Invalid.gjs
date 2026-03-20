import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';

import { UlxInput, UlxField, UlxButton } from 'ulx-components';

export default class DemoInputInvalid extends Component {
  @tracked value = '';
  @tracked error = '';
  @tracked submitted = false;

  // --------------------------
  // Validation
  // --------------------------

  validate(value) {
    if (!value) {
      return 'This field is required';
    }

    if (value.length < 3) {
      return 'Minimum 3 characters required';
    }

    return '';
  }

  // --------------------------
  // Actions
  // --------------------------

  @action
  handleInput(event) {
    this.value = event.target.value;

    // Live validation AFTER submit
    if (this.submitted) {
      this.error = this.validate(this.value);
    }
  }

  @action
  handleSubmit(event) {
    event.preventDefault();

    this.submitted = true;
    this.error = this.validate(this.value);

    if (!this.error) {
      console.log('Form Submitted ✅', this.value);
    }
  }

  <template>
    <form
      class="ulx-form m-size ulx-grid mb-14"
      {{on "submit" this.handleSubmit}}
    >

      <UlxField
        @label="Username"
        @fieldId="error-input"
        @fieldClass="col-4"
        @error={{this.error}}
      >

        <:control as |field|>
          <UlxInput
            @key={{field.key}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @value={{this.value}}
            @onInput={{this.handleInput}}
            @invalid={{this.error}}
            placeholder="Enter username"
            aria-label="Username"
          />
        </:control>

      </UlxField>

      <div class="col-12">
        <UlxButton type="submit" @label="Submit" />
      </div>

    </form>
  </template>
}
