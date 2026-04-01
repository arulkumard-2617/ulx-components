import Component from '@glimmer/component';
import { UlxIcon } from 'ulx-components';

const LAYER_VARIATIONS = ['primary', 'success', 'warning', 'danger', 'info'];
const SAMPLE_ICONS = ['ls-tick-icon', 'close-icon-01', 'comment-icon'];

export default class DemoIconLayer extends Component {
  layerVariations = LAYER_VARIATIONS;
  sampleIcons = SAMPLE_ICONS;

  layerClass(color) {
    return `${color}-layer rounded`;
  }

  <template>
    <div class="ulx-flex-col col-3 gap-8 fhc">
      {{#each this.layerVariations as |color|}}
        <div class="flex flex-col items-center gap-2 col-3">
          <div class="text-sm">bg-{{color}}</div>
          <div class="flex gap-4">
            {{#each this.sampleIcons as |iconName|}}
              <UlxIcon
                @componentClass="bs-icons1"
                @type="font"
                @iconName={{iconName}}
                @size="l"
                @ariaLabel=""
                @customClass={{this.layerClass color}}
              />
            {{/each}}
          </div>
        </div>
      {{/each}}
    </div>
  </template>
}
