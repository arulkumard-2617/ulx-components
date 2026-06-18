import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToggle } from 'ulx-components';

export default class BasicToggleDemo extends Component {
  @tracked checked = false;

  @action
  handleCheckedChange(checked) {
    this.checked = checked;
  }

  <template>
    <UlxToggle
      aria-label="Toggle"
      @checked={{this.checked}}
      @onCheckedChange={{this.handleCheckedChange}}
    />
  </template>
}
