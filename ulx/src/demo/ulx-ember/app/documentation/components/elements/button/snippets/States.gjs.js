export default `
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { UlxButton, t } from 'ulx-components';

export default class DemoButtonStates extends Component {
  @action
  startLoading() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  <template>
    <div class="flex items-center wrap gap-md">
      <UlxButton
        @label={{t "lbl.submit"}}
        @icon="ls-tick-icon"
        @iconComponentClass="bs-icons1"
        @iconSize="s20"
        @onClick={{this.startLoading}}
      />
    </div>
  </template>
}

`;
