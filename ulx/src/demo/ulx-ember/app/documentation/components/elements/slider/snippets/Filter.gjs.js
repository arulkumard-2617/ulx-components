export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import { UlxSlider, UlxSelectButton } from 'ulx-components';

const FILTER_OPTIONS = [
  { label: 'Brightness', value: 'brightness' },
  { label: 'Contrast', value: 'contrast' },
  { label: 'Saturation', value: 'saturation' },
];

export default class FilterSliderDemo extends Component {
  @tracked filter = 'brightness';

  @tracked filterValues = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
  };

  get filterOptions() {
    return FILTER_OPTIONS;
  }

  get currentValue() {
    return this.filterValues?.[this.filter] ?? 100;
  }

  get filterStyle() {
    const {
      brightness = 100,
      contrast = 100,
      saturation = 100,
    } = this.filterValues ?? {};

    const safeBrightness = Number.isFinite(Number(brightness))
      ? brightness
      : 100;
    const safeContrast = Number.isFinite(Number(contrast)) ? contrast : 100;
    const safeSaturation = Number.isFinite(Number(saturation))
      ? saturation
      : 100;

    return htmlSafe(
      \`filter: brightness(\${safeBrightness}%) contrast(\${safeContrast}%) saturate(\${safeSaturation}%);\`,
    );
  }

  @action
  handleFilterChange(nextFilter) {
    this.filter = nextFilter ?? 'brightness';
  }

  @action
  handleSliderChange(nextValue) {
    const numeric = Number(nextValue);
    const safeValue = Number.isFinite(numeric) ? numeric : this.currentValue;
    const key = this.filter;

    this.filterValues = {
      ...this.filterValues,
      [key]: safeValue,
    };
  }

  <template>
    <div class="ulx-flex ulx-flex-col gap-3 ulx-items-start">
      <img
        alt="user header"
        class="w-300 border-round"
        src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
        style={{this.filterStyle}}
      />

      <UlxSelectButton
        @options={{this.filterOptions}}
        @value={{this.filter}}
        @onChange={{this.handleFilterChange}}
        @stretch={{true}}
      />

      <UlxSlider
        @value={{this.currentValue}}
        @onChange={{this.handleSliderChange}}
        @size="w-300 s-size"
        @min={{0}}
        @max={{200}}
      />
    </div>
  </template>
}
`;

