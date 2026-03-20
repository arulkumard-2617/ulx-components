export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPassword, UlxField, t } from 'ulx-components';

export default class DemoPasswordBasic extends Component {
  @tracked value = '';

  @action
  handleInput(event) {
    this.value = event.target.value;
  }

  <template>
    <form class="ulx-form m-size ulx-grid gap-12 mb-14">

      <UlxField @fieldClass="col-6" @label={{t "lbl.password"}}>
        <:control as |field|>
          <UlxPassword
            @id={{field.inputId}}
            @ariaDescribedBy={{field.ariaDescribedBy}}
            @value={{this.value}}
            @onInput={{this.handleInput}}
            @feedback={{false}}
            @toggleMask={{false}}
            @placeholder={{t "lbl.enter.password"}}
          />
        </:control>
      </UlxField>

    </form>
  </template>
}

`;
