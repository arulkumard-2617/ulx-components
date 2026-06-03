export default `
/* eslint-disable no-console */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { UlxForm, UlxInput, UlxField, UlxButton } from 'ulx-components';

export default class DemoInputInvalid extends Component {
  @tracked value = '';
  @tracked error = '';
  @tracked submitted = false;

  validate(value) {
    if (!value) {
      return 'This field is required';
    }

    if (value.length < 3) {
      return 'Minimum 3 characters required';
    }

    return '';
  }

  @action
  handleInput(value) {
    this.value = value;

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
    <UlxForm
      @tag="form"
      @size="m-size"
      @customClass="ulx-grid mb-14"
      novalidate
      @onSubmit={{this.handleSubmit}}
      @actionsClass="col-12"
    >
      <:default>
        <UlxField
          @label="Username"
          @fieldId="error-input"
          @fieldClass="col-4"
          @error={{this.error}}
          as |field|
        >
          <UlxInput
            @field={{field}}
            @value={{this.value}}
            @onInput={{this.handleInput}}
            placeholder="Enter username"
            aria-label="Username"
          />
        </UlxField>
      </:default>

      <:actions>
        <UlxButton @type="submit" @label="Submit" @customClass="col-12" />
      </:actions>
    </UlxForm>
  </template>
}

`;
