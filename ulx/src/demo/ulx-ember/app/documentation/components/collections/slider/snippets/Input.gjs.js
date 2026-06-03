export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSlider, UlxInput, t } from 'ulx-components';

const toNumberOrFallback = (value, fallback) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
};

export default class InputSliderDemo extends Component {
  @tracked value = 25;

  @action
  handleSliderChange(nextValue) {
    this.value = toNumberOrFallback(nextValue, this.value);
  }

  @action
  handleInputChange(value) {
    const next = toNumberOrFallback(value, this.value);
    this.value = next;
  }

  <template>
    <div class="card flex justify-content-center">
      <div class="w-300">
        <UlxInput
          @value={{this.value}}
          @label="Value"
          @type="number"
          @keyfilter="int"
          @onInput={{this.handleInputChange}}
          @size="w-full s-size"
          @fieldClass="col-12"
        />
        <UlxSlider
          @value={{this.value}}
          @onChange={{this.handleSliderChange}}
          @size="w-full s-size"
        />
      </div>

    </div>
  </template>
}

`;
