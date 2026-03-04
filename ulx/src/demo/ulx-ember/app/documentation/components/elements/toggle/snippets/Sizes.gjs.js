export default `
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
        <span>{{t "lbl.toggle.size.xs"}}</span>
      </div>
      <div class="flex align-items-center gap-2">
        <UlxToggle
          @size="s-size"
          @checked={{this.checkedS}}
          @onCheckedChange={{this.handleSChange}}
        />
        <span>{{t "lbl.toggle.size.s"}}</span>
      </div>
      <div class="flex align-items-center gap-2">
        <UlxToggle
          @size="m-size"
          @checked={{this.checkedM}}
          @onCheckedChange={{this.handleMChange}}
        />
        <span>{{t "lbl.toggle.size.m"}}</span>
      </div>
      <div class="flex align-items-center gap-2">
        <UlxToggle
          @size="l-size"
          @checked={{this.checkedL}}
          @onCheckedChange={{this.handleLChange}}
        />
        <span>{{t "lbl.toggle.size.l"}}</span>
      </div>
      <div class="flex align-items-center gap-2">
        <UlxToggle
          @size="xl-size"
          @checked={{this.checkedXl}}
          @onCheckedChange={{this.handleXlChange}}
        />
        <span>{{t "lbl.toggle.size.xl"}}</span>
      </div>
    </div>
  </template>
}

`;
