import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToggle } from 'ulx-components';

export default class PreselectionToggleDemo extends Component {
  @tracked checked = true;

  @action
  handleCheckedChange(checked) {
    this.checked = checked;
  }

  <template>
    <UlxToggle
      aria-label="Preselected toggle"
      @checked={{this.checked}}
      @onCheckedChange={{this.handleCheckedChange}}
    />
  </template>
}
