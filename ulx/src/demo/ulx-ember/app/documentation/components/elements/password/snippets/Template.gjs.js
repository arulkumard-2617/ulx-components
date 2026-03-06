export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPassword, UlxDivider, t } from 'ulx-components';

export default class DemoPasswordTemplate extends Component {
  @tracked value = '';

  @action
  handleInput(event) {
    this.value = event.target.value;
  }

  <template>
    <UlxPassword
      @value={{this.value}}
      @onInput={{this.handleInput}}
      @toggleMask={{true}}
      @label={{t "lbl.password"}}
      placeholder={{t "lbl.enter.password"}}
    >
      <:header>
        <div class="font-bold">{{t "lbl.password.pick"}}</div>
      </:header>
      <:footer>
        <UlxDivider />
        <p class="font-bold mt-8 mb-4">{{t "lbl.password.suggestions"}}</p>
        <ul class="pl-8 mt-0 text-12 line-height-3">
          <li>{{t "msg.password.suggestion.lowercase"}}</li>
          <li>{{t "msg.password.suggestion.uppercase"}}</li>
          <li>{{t "msg.password.suggestion.numeric"}}</li>
          <li>{{t "msg.password.suggestion.length"}}</li>
        </ul>
      </:footer>
    </UlxPassword>
  </template>
}
`;
