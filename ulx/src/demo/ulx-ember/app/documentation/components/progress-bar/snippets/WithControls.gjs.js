export default `
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { UlxProgressBar, t } from 'ulx-components';

const MIN = 1;
const MAX = 100;

export default class WithControlsProgressBarDemo extends Component {
  @tracked value = 50;

  get displayPercent() {
    const range = MAX - MIN;
    if (range <= 0) return 0;
    const p = ((this.value - MIN) / range) * 100;
    return Math.round(Math.max(0, Math.min(100, p)));
  }

  @action
  updateValue(newVal) {
    this.value = newVal;
  }

  <template>
    <div class="pda4 flex flex-col gap-4">
      <p class="fg-text-secondary">{{"Adjust the value based on your preference."}}</p>
      <div class="flex gap-4 align-items-center">
        <div class="w-300">
          <UlxProgressBar
            @iconSize="s12"
            @showControls={{true}}
            @showValue={{false}}
            @value={{this.value}}
            @onChange={{this.updateValue}}
            @min={{MIN}}
            @max={{MAX}}
            @size="h-14"
          />
        </div>
        <span class="fg-text-secondary">{{this.value}} </span>
      </div>
    </div>
  </template>
}

`;
