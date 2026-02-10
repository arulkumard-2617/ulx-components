export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxButton } from 'ulx-components';

export default class DemoButtonStates extends Component {
  @tracked loading = false;

  @action
  startLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 20000);
  }

  <template>
    <div class="fxb fvc wrap gap-md">
      <UlxButton
        @label="Submit"
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @iconSize="s20"
        @loading={{this.loading}}
        {{on "click" this.startLoading}}
      />
    </div>
  </template>
}

`;
