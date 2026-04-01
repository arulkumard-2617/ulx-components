import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxToggle, t } from 'ulx-components';

export default class AccessibilityToggleDemo extends Component {
  @tracked checked1 = false;
  @tracked checked2 = false;
  @tracked checked3 = false;

  @action
  handleChange1(checked) {
    this.checked1 = checked;
  }

  @action
  handleChange2(checked) {
    this.checked2 = checked;
  }

  @action
  handleChange3(checked) {
    this.checked3 = checked;
  }

  <template>
    <div class="flex flex-col gap-4">
      <div class="flex align-items-center gap-2">
        <label for="toggle-switch-1">{{t "lbl.toggle.remember.me"}}</label>
        <UlxToggle
          @inputId="toggle-switch-1"
          @checked={{this.checked1}}
          @onCheckedChange={{this.handleChange1}}
        />
      </div>
      <div class="flex align-items-center gap-2">
        <span id="toggle-switch-2-label">{{t "lbl.toggle.remember.me"}}</span>
        <UlxToggle
          aria-labelledby="toggle-switch-2-label"
          @checked={{this.checked2}}
          @onCheckedChange={{this.handleChange2}}
        />
      </div>
      <div>
        <UlxToggle
          aria-label={{t "lbl.toggle.remember.me"}}
          @checked={{this.checked3}}
          @onCheckedChange={{this.handleChange3}}
        />
      </div>
    </div>
  </template>
}
