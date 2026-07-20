import Component from '@glimmer/component';
import { UlxTag } from 'ulx-components';

export default class VariationsDemoComponent extends Component {
  get variations() {
    return [
      { label: 'primary', class: 'color-primary' },
      { label: 'secondary', class: 'color-black-layer2' },
      { label: 'success', class: 'color-green' },
      { label: 'info', class: 'color-blue' },
      { label: 'warning', class: 'color-gold' },
      { label: 'danger', class: 'color-red' },
      { label: 'contrast', class: 'color-black' },
      { label: 'white', class: 'color-black-layer1' },
      { label: 'black', class: 'color-black' },
    ];
  }

  <template>
    <div class="flex flex-wrap gap-4">
      {{#each this.variations key="class" as |item|}}
        <UlxTag @value={{item.label}} @size="s-size" @variant={{item.class}} />
      {{/each}}
    </div>
  </template>
}
