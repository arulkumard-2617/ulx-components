export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToggle, t } from 'ulx-components';

export default class ColorsToggleDemo extends Component {
  @tracked checkedPrimary = false;
  @tracked checkedGreen = false;

  @action
  handlePrimaryChange(checked) {
    this.checkedPrimary = checked;
  }

  @action
  handleGreenChange(checked) {
    this.checkedGreen = checked;
  }

  <template>
    <div class="flex gap-5 align-items-center flex-wrap flex-col">
      <div class="flex align-items-center gap-2">
        <UlxToggle
          aria-label="Primary variant toggle"
          @variant="primary"
          @checked={{this.checkedPrimary}}
          @onCheckedChange={{this.handlePrimaryChange}}
        />
        <span>{{"Primary"}}</span>
      </div>
      <div class="flex align-items-center gap-2">
        <UlxToggle
          aria-label="Green variant toggle"
          @variant="green"
          @checked={{this.checkedGreen}}
          @onCheckedChange={{this.handleGreenChange}}
        />
        <span>Green</span>
      </div>
    </div>
  </template>
}

`;
