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
    <div class="flex gap-4 align-items-center flex-wrap">
      <div class="flex align-items-center gap-2">
        <UlxToggle
          @variant="primary"
          @checked={{this.checkedPrimary}}
          @onCheckedChange={{this.handlePrimaryChange}}
        />
        <span>{{t "lbl.primary"}}</span>
      </div>
      <div class="flex align-items-center gap-2">
        <UlxToggle
          @variant="green"
          @checked={{this.checkedGreen}}
          @onCheckedChange={{this.handleGreenChange}}
        />
        <span>{{t "lbl.green"}}</span>
      </div>
    </div>
  </template>
}

`;

