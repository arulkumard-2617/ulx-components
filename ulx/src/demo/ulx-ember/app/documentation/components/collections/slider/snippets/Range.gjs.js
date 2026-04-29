export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxSlider, t } from 'ulx-components';

export default class RangeSliderDemo extends Component {
  @tracked value = [20, 80];

  @action
  handleChange(nextValue) {
    if (Array.isArray(nextValue) && nextValue.length === 2) {
      this.value = [Number(nextValue[0]), Number(nextValue[1])];
    }
  }

  get valueText() {
    return \`\${this.value[0]} - \${this.value[1]}\`;
  }

  <template>
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2">
        <span class="text-12 fg-secondary">{{t "lbl.range"}}:</span>
        <span class="text-12 font-semibold">{{this.valueText}}</span>
      </div>
      <UlxSlider
        @range={{true}}
        @value={{this.value}}
        @onChange={{this.handleChange}}
        @size="w-300 s-size"
      />
    </div>
  </template>
}

`;
