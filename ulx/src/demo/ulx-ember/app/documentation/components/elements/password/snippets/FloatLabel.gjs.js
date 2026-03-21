export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { UlxPassword, UlxField, UlxFloatLabel, t } from 'ulx-components';

export default class DemoPasswordFloatLabel extends Component {
  @tracked value = '';

  @action
  handleInput(event) {
    this.value = event.target.value;
  }

  <template>
    <div class="ulx-form m-size ulx-grid gap-12 mb-14">

      <UlxField @fieldClass="col-6">
        <:control as |field|>

          <UlxFloatLabel @label={{t "lbl.password"}} @value={{this.value}}>
            <:default as |float|>

              <UlxPassword
                @value={{this.value}}
                @onInput={{this.handleInput}}
                @feedback={{false}}
                {{! 🔑 connect field accessibility }}
                @id={{field.inputId}}
                @ariaDescribedBy={{field.describedBy}}
                @ariaErrorMessage={{field.errorId}}
                {{! 🔑 connect float label behavior }}
                @onFocus={{float.onFocus}}
                @onBlur={{float.onBlur}}
                placeholder=" "
              />

            </:default>
          </UlxFloatLabel>

        </:control>
      </UlxField>

    </div>
  </template>
}

`;
