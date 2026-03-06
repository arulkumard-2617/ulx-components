export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPassword, t } from 'ulx-components';

export default class DemoPasswordMeter extends Component {
  @tracked value = '';

  @action
  handleInput(event) {
    this.value = event.target.value;
  }

  <template>
    <UlxPassword
      @value={{this.value}}
      @onInput={{this.handleInput}}
      @label={{t "lbl.password"}}
      placeholder={{t "lbl.enter.password"}}
    />
  </template>
}
`;
