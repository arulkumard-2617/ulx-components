export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxOptionSegment } from 'ulx-components';

const COLOR_SWATCHES = Object.freeze([
  { value: 'indigo', colorCode: '#15136f' },
  { value: 'blue', colorCode: '#4757f2' },
  { value: 'emerald', colorCode: '#21b382' },
  { value: 'amber', colorCode: '#f2a100' },
  { value: 'red', colorCode: '#ef4444' },
]);

export default class ColorswatchDemoComponent extends Component {
  @tracked activeValue = 'indigo';

  get items() {
    return COLOR_SWATCHES.map(({ value, colorCode }) => ({
      value,
      colorCode,
      selected: this.activeValue === value,
    }));
  }

  @action
  handleSelect(_selected, value) {
    this.activeValue = value;
  }

  <template>
    <div class="w-full">
      <UlxOptionSegment
        @type="color-swatch"
        @customClass="flex flex-row"
        @itemClass="w-28 h-28 "
        @items={{this.items}}
        @onSelect={{this.handleSelect}}
        @ariaLabel="Color options"
      />
    </div>
  </template>
}

`;
