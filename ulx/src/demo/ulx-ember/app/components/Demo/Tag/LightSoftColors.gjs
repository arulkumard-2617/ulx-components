import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class LightSoftColorsTagDemo extends Component {
  get variants() {
    return [
      // Light tone variants (lt-*)
      { label: 'lt-green', class: 'lt-green' },
      { label: 'lt-gold', class: 'lt-gold' },
      { label: 'lt-purple', class: 'lt-purple' },
      { label: 'lt-blue', class: 'lt-blue' },
      { label: 'lt-red', class: 'lt-red' },
      { label: 'lt-primary', class: 'lt-primary' },

      // Light palette variants (light-*)
      { label: 'light-nebula-blue', class: 'light-nebula-blue' },
      { label: 'light-salmon-red', class: 'light-salmon-red' },
      { label: 'light-jungle-green', class: 'light-jungle-green' },
      { label: 'light-cyber-yellow', class: 'light-cyber-yellow' },
      { label: 'light-cerise-pink', class: 'light-cerise-pink' },
      { label: 'light-royal-violet', class: 'light-royal-violet' },
      { label: 'light-medium-orchid', class: 'light-medium-orchid' },
      { label: 'light-turquoise-green', class: 'light-turquoise-green' },
      { label: 'light-not-blue', class: 'light-not-blue' },
      { label: 'light-bs-grey', class: 'light-bs-grey' },
      { label: 'light-grass-green', class: 'light-grass-green' },
      { label: 'light-sandal-yellow', class: 'light-sandal-yellow' },
      { label: 'light-lomo-blue', class: 'light-lomo-blue' },
      { label: 'light-candy-orange', class: 'light-candy-orange' },
      { label: 'light-dairy-violet', class: 'light-dairy-violet' },
      { label: 'just-grey', class: 'just-grey' },
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
