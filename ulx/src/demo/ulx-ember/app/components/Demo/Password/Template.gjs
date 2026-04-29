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

      <UlxField @fieldClass="col-4" @label="Password" as |field|>
        <UlxPassword
          @field={{field}}
          @value={{this.value}}
          @onInput={{this.handleInput}}
          @toggleMask={{true}}
          @placeholder="Enter password"
        >
          <:panel-header>
            <div class="bold-font">
              {{"Pick a password"}}
            </div>
          </:panel-header>
          <:panel-footer>
            <p class="bold-font mb-2">
              {{"Suggestions"}}
            </p>
            <ul class="pl-4 mt-0 text-12 line-height-3">
              <li>{{"At least one lowercase"}}</li>
              <li>{{"At least one uppercase"}}</li>
              <li>{{"At least one numeric"}}</li>
              <li>{{"Minimum 8 characters"}}</li>
            </ul>
          </:panel-footer>
        </UlxPassword>
      </UlxField>

    </form>
  </template>
}
