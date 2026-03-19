export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { UlxInput, UlxField, UlxFloatLabel, t } from 'ulx-components';

export default class DemoFloatLabel extends Component {
  @tracked username = '';

  @action
  updateUsername(event) {
    this.username = event.target.value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-12 mb-14">

      <UlxField
        @error={{this.usernameError}}
        @inputId="username"
        @fieldClass="col-6"
      >
        <:control as |field|>

          <UlxFloatLabel @label={{t "lbl.username"}} @value={{this.username}}>
            <:default as |float|>
              <UlxInput
                @inputId={{field.inputId}}
                @ariaDescribedBy={{field.describedBy}}
                @ariaErrorMessage={{field.errorId}}
                @value={{this.username}}
                @onInput={{this.updateUsername}}
                @onFocus={{float.onFocus}}
                @onBlur={{float.onBlur}}
                placeholder=" "
                aria-label={{t "lbl.username"}}
              />
            </:default>
          </UlxFloatLabel>

        </:control>
      </UlxField>

    </div>
  </template>
}

`;
