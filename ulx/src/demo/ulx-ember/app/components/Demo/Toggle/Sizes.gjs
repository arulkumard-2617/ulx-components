import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToggle, t } from 'ulx-components';

export default class SizesToggleDemo extends Component {
  @tracked checkedXs = false;
  @tracked checkedS = false;
  @tracked checkedM = false;
  @tracked checkedL = false;
  @tracked checkedXl = false;

  @action
  handleXsChange(checked) {
    this.checkedXs = checked;
  }

  @action
  handleSChange(checked) {
    this.checkedS = checked;
  }

  @action
  handleMChange(checked) {
    this.checkedM = checked;
  }

  @action
  handleLChange(checked) {
    this.checkedL = checked;
  }

  @action
  handleXlChange(checked) {
    this.checkedXl = checked;
  }

  <template>
    <div class="flex gap-5 align-items-center flex-wrap flex-col">
      <div class="flex align-items-center gap-2">
        <UlxToggle
          @size="xs-size"
          @checked={{this.checkedXs}}
          @onCheckedChange={{this.handleXsChange}}
        />
        <span>xs-size</span>
      </div>
      <div class="flex align-items-center gap-2">
        <UlxToggle
          @size="s-size"
          @checked={{this.checkedS}}
          @onCheckedChange={{this.handleSChange}}
        />
        <span>s-size</span>
      </div>
      <div class="flex align-items-center gap-2">
        <UlxToggle
          @size="m-size"
          @checked={{this.checkedM}}
          @onCheckedChange={{this.handleMChange}}
        />
        <span>m-size</span>
      </div>
    </div>
  </template>
}
