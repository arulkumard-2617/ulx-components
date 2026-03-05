import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { UlxButton, t } from 'ulx-components';

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
    <div class="flex items-center wrap gap-md">
      <UlxButton
        @label={{t "lbl.submit"}}
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @loading={{this.loading}}
        {{on "click" this.startLoading}}
      />
    </div>
  </template>
}
