import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxPassword, t } from 'ulx-components';

export default class DemoPasswordFloatLabel extends Component {
  @tracked value = '';

  @action
  handleInput(event) {
    this.value = event.target.value;
  }

  <template>
    <form class="ulx-form m-size ulx-grid gap-12 mb-14">
      <UlxPassword
        @value={{this.value}}
        @onInput={{this.handleInput}}
        @floatLabel={{true}}
        @label={{t "lbl.password"}}
        @feedback={{false}}
        @fieldClass="col-12"
      />
    </form>
  </template>
}
