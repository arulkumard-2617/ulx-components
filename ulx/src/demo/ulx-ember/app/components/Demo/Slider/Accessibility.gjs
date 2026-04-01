import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSlider, t } from 'ulx-components';

export default class AccessibilitySliderDemo extends Component {
  @tracked value = 35;

  @action
  handleChange(nextValue) {
    this.value = Number(nextValue);
  }

  <template>
    <div class="ulx-flex ulx-flex-col gap-2">
      <div class="ulx-flex ulx-items-center gap-2">
        <label class="text-12 font-semibold" for="slider-a11y-1">
          {{t 'lbl.slider'}}
        </label>
        <span class="text-12 fg-secondary">{{t 'lbl.value'}}: {{this.value}}</span>
      </div>

      <UlxSlider
        @id="slider-a11y-1"
        @value={{this.value}}
        @onChange={{this.handleChange}}
        @ariaLabel={{t 'lbl.slider'}}
        @size="w-300 s-size"
      />

      <div class="text-12 fg-secondary">
        {{t 'msg.slider.keyboard.hint'}}
      </div>
    </div>
  </template>
}

