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
    <div class="ulx-column col-3 gp8 fhc">
      {{#each this.layerVariations as |color|}}
        <div class="fxb column fvc gp2 col-3">
          <div class="text-sm">bg-{{color}}</div>
          <div class="fxb gp4">
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
