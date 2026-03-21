export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPassword, UlxField, t } from 'ulx-components';

export default class DemoPasswordMeter extends Component {
  @tracked value = '';

  @action
  handleInput(event) {
    this.value = event.target.value;
  }

  <template>
    <form class="ulx-form m-size ulx-grid gap-12 mb-14">

      <UlxField @fieldClass="col-4" @label={{t "lbl.password"}}>
        <:control as |field|>
          <UlxPassword
            @id={{field.inputId}}
            @ariaDescribedBy={{field.ariaDescribedBy}}
            @value={{this.value}}
            @onInput={{this.handleInput}}
            @toggleMask={{true}}
            @feedback={{true}}
            {{! 🔥 meter enabled }}
            @placeholder={{t "lbl.enter.password"}}
          />
        </:control>
      </UlxField>

    </form>
  </template>
}

`;
