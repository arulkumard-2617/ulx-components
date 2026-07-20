import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class ExtendedPaletteTagDemo extends Component {
  get variants() {
    return [
      { label: 'primary', class: 'color-primary' },
      { label: 'red', class: 'color-red' },
      { label: 'orange', class: 'color-orange' },
      { label: 'green', class: 'color-green' },
      { label: 'blue', class: 'color-blue' },
      { label: 'purple', class: 'color-purple' },
      { label: 'gold', class: 'color-gold' },
      { label: 'black', class: 'color-black' },
      { label: 'salmon-red', class: 'color-salmon-red' },
      { label: 'nebula-blue', class: 'color-nebula-blue' },
      { label: 'jungle-green', class: 'color-jungle-green' },
      { label: 'cyber-yellow', class: 'color-cyber-yellow' },
      { label: 'cerise-pink', class: 'color-cerise-pink' },
      { label: 'royal-violet', class: 'color-royal-violet' },
      { label: 'turquoise-green', class: 'color-turquoise-green' },
      { label: 'medium-orchid', class: 'color-medium-orchid' },
      { label: 'apricot-orange', class: 'color-apricot-orange' },
      { label: 'not-blue', class: 'color-not-blue' },
      { label: 'just-grey', class: 'color-just-grey' },
      { label: 'bs-grey', class: 'color-bs-grey' },
      { label: 'grass-green', class: 'color-grass-green' },
      { label: 'sandal-yellow', class: 'color-sandal-yellow' },
      { label: 'lomo-blue', class: 'color-lomo-blue' },
      { label: 'candy-orange', class: 'color-candy-orange' },
      { label: 'dairy-violet', class: 'color-dairy-violet' },
      { label: 'radical-red', class: 'color-radical-red' }
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
