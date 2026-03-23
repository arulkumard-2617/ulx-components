import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPassword, UlxField, UlxDivider, t } from 'ulx-components';

export default class DemoPasswordTemplate extends Component {
  @tracked value = '';

  @action
  handleInput(event) {
    this.value = event.target.value;
  }

  <template>
    <form class="ulx-form m-size ulx-grid gap-12 mb-14">

      <UlxField @fieldClass="col-4" @label={{t "lbl.password"}}>

        <:default>
          <UlxPassword
            @value={{this.value}}
            @onInput={{this.handleInput}}
            @toggleMask={{true}}
            @placeholder={{t "lbl.enter.password"}}
          >
            <:panel-header>
              <div class="bold-font">
                {{t "lbl.password.pick"}}
              </div>
            </:panel-header>
            <:panel-footer>
              <p class="bold-font mb-2">
                {{t "lbl.password.suggestions"}}
              </p>
              <ul class="pl-4 mt-0 text-12 line-height-3">
                <li>{{t "msg.password.suggestion.lowercase"}}</li>
                <li>{{t "msg.password.suggestion.uppercase"}}</li>
                <li>{{t "msg.password.suggestion.numeric"}}</li>
                <li>{{t "msg.password.suggestion.length"}}</li>
              </ul>
            </:panel-footer>
          </UlxPassword>
        </:default>

      </UlxField>

    </form>
  </template>
}
