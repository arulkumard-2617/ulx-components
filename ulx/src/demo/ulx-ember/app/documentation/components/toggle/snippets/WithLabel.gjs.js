export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToggle } from 'ulx-components';

export default class WithLabelToggleDemo extends Component {
  @tracked checked = false;

  @action
  handleCheckedChange(checked) {
    this.checked = checked;
  }

  <template>
    <div class="ulx-toggle-status">
      <UlxToggle
        @checked={{this.checked}}
        @onCheckedChange={{this.handleCheckedChange}}
      />
    </div>
  </template>
}

`;
