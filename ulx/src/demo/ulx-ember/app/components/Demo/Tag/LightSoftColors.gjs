import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class LightSoftColorsTagDemo extends Component {
  get variants() {
    return [
      // Palette layer surfaces (color-{family}-layer{n})
      { label: 'Green layer2', class: 'color-green-layer2' },
      { label: 'Gold layer2', class: 'color-gold-layer2' },
      { label: 'Purple layer1', class: 'color-purple-layer1' },
      { label: 'Blue layer1', class: 'color-blue-layer1' },
      { label: 'Red layer1', class: 'color-red-layer1' },
      { label: 'Primary layer3', class: 'color-primary-layer3' },

      // Other light surfaces (color-light-{name})
      { label: 'Light nebula blue', class: 'color-light-nebula-blue' },
      { label: 'Light salmon red', class: 'color-light-salmon-red' },
      { label: 'Light jungle green', class: 'color-light-jungle-green' },
      { label: 'Light cyber yellow', class: 'color-light-cyber-yellow' },
      { label: 'Light cerise pink', class: 'color-light-cerise-pink' },
      { label: 'Light royal violet', class: 'color-light-royal-violet' },
      { label: 'Light medium orchid', class: 'color-light-medium-orchid' },
      { label: 'Light turquoise green', class: 'color-light-turquoise-green' },
      { label: 'Light not blue', class: 'color-light-not-blue' },
      { label: 'Light bs grey', class: 'color-light-bs-grey' },
      { label: 'Light grass green', class: 'color-light-grass-green' },
      { label: 'Light sandal yellow', class: 'color-light-sandal-yellow' },
      { label: 'Light lomo blue', class: 'color-light-lomo-blue' },
      { label: 'Light candy orange', class: 'color-light-candy-orange' },
      { label: 'Light dairy violet', class: 'color-light-dairy-violet' },
      { label: 'Just grey', class: 'color-just-grey' },
    ];
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.variants key="class" as |item|}}
        <UlxTag @value={{item.label}} @size="s-size" @variant={{item.class}} />
      {{/each}}
    </div>
  </template>
}
