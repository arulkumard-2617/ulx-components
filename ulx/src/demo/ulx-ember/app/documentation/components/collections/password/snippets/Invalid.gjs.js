export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';

import { UlxPassword, UlxField, UlxButton, t } from 'ulx-components';

export default class DemoPasswordInvalid extends Component {
  @tracked value = '';
  @tracked error = '';
  @tracked submitted = false;

  validate(value) {
    if (!value) return t('msg.password.required');
    if (value.length < 6) return t('msg.password.minlength');
    return '';
  }

  @action
  handleInput(event) {
    this.value = event.target.value;

    if (this.submitted) {
      this.error = this.validate(this.value);
    }
  }

  @action
  handleSubmit(e) {
    e.preventDefault();
    this.submitted = true;
    this.error = this.validate(this.value);
  }

  <template>
    <form
      class="ulx-form m-size flex mb-14 flex-col"
      {{on "submit" this.handleSubmit}}
    >

      <UlxField
        @label="Password"
        @fieldClass="w-300"
        @fieldId="password"
        @error={{this.error}}
        as |field|
      >
        <UlxPassword
          @field={{field}}
          @value={{this.value}}
          @onInput={{this.handleInput}}
          @feedback={{false}}
          @placeholder="Enter password"
        />

      </UlxField>

      <div class="col-12">
        <UlxButton type="submit" @label="Submit" />
      </div>

    </form>
  </template>
}

`;
