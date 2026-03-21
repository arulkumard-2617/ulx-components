export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPassword, UlxField, t } from 'ulx-components';

export default class DemoPasswordLocale extends Component {
  @tracked value = '';

  @action
  handleInput(event) {
    this.value = event.target.value;
  }

  <template>
    <form class="ulx-form m-size ulx-grid gap-12 mb-14">

      <UlxField @fieldClass="col-4" @label={{t "lbl.password"}}>

        <:control>
          <UlxPassword
            @value={{this.value}}
            @onInput={{this.handleInput}}
            @promptLabel="Choose a password"
            @weakLabel="Too simple"
            @mediumLabel="Average complexity"
            @strongLabel="Complex password"
            @toggleMask={{true}}
            @placeholder={{t "lbl.enter.password"}}
          />
        </:control>

      </UlxField>

    </form>
  </template>
}

`;
