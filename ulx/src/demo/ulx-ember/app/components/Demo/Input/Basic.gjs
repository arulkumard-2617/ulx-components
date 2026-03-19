import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { UlxInput, UlxField, t } from 'ulx-components';

const rules = {
  required: true,
  minLength: { value: 0 },
  maxLength: { value: 10 },
};

export default class Demo extends Component {
  @tracked username = '';

  rules = rules;

  updateUsername = (event) => {
    this.username = event.target.value;
  };

  get usernameError() {
    const value = this.username;

    if (
      this.rules.minLength?.value &&
      value.length < this.rules.minLength.value
    ) {
      return `Minimum ${this.rules.minLength.value} characters required`;
    }

    if (
      this.rules.maxLength?.value &&
      value.length > this.rules.maxLength.value
    ) {
      return `Maximum ${this.rules.maxLength.value} characters allowed`;
    }

    return null;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-12 mb-14">

      <UlxField
        @label={{t "lbl.input"}}
        @tooltipMessage="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        @helpText={{t "msg.input.help"}}
        @rules={{this.rules}}
        @error={{this.usernameError}}
        @inputId="username"
        @fieldClass="col-6"
      >
        <:control as |field|>
          <UlxInput
            @inputId={{field.inputId}}
            @ariaDescribedBy={{field.describedBy}}
            @ariaErrorMessage={{field.errorId}}
            @value={{this.username}}
            @onInput={{this.updateUsername}}
            minlength={{this.rules.minLength.value}}
            maxlength={{this.rules.maxLength.value}}
            required={{this.rules.required}}
            placeholder={{t "lbl.enter.username"}}
            aria-label={{t "lbl.username"}}
          />
        </:control>
      </UlxField>

    </div>
  </template>
}
